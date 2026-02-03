import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { DayOfWeek, Meal, MealType, NewMeal } from '@/types/meals'
import { mockMeals } from '@/data/mockMeals'

// Definimos el store
export const useMealStore = defineStore('meals', () => {
    // const meals = ref<Meal[]>([]);
    const meals = ref<Meal[]>([...mockMeals]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const fetchMeals = async () => {
        loading.value = true;
        error.value = null;

        try {
            // Simulamos una llamada a una API
            await new Promise(resolve => setTimeout(resolve, 1000));
            meals.value = [...mockMeals];
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Fail fetching meals'
        } finally {
            loading.value = false;
        }
    }

    // 4. Funciones CRUD
    const createMeal = (newMeal: NewMeal) => {

        try {
            const meal: Meal = {
                id: crypto.randomUUID(),
                createdAt: Date.now(),
                name: newMeal.name,
                dayOfWeek: newMeal.dayOfWeek,
                mealType: newMeal.mealType
            }
            meals.value.push(meal)

            return meal;


        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Fail creating new meal'
        }
    }

    const deleteMeal = (mealId: string) => {
        try {
            meals.value = meals.value.filter((meal) => meal.id !== mealId)
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Fail deleting the meal'
        }

    }

    const toggleFavorite = (mealId: string) => {
        try {
            const meal = meals.value.find(m => m.id === mealId)
            if (meal) {
                meal.isFavorite = !meal.isFavorite
            }
        } catch (e) {
            error.value = e instanceof Error ? e.message : 'Fail toggling favorite'
        }
    }

    const getMealsByDay = (day: DayOfWeek) => {
        return meals.value.filter((meal) => meal.dayOfWeek === day)
    }

    const getMealsByType = (type: MealType) => {
        return meals.value.filter((meal) => meal.mealType === type)
    }


    return {
        meals,
        createMeal,
        deleteMeal,
        toggleFavorite,
        getMealsByDay,
        getMealsByType,
        fetchMeals,
        loading,
        error
    }
}, {
    persist: true
})

