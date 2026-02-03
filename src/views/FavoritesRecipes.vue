<script setup lang="ts">
import { computed } from 'vue'
import { useMealStore } from '@/stores/meals'
import MealItem from '@/components/Mealitem.vue'

const mealStore = useMealStore()

const favoriteMeals = computed(() => {
    return mealStore.meals.filter(meal => meal.isFavorite === true)
})

const handleDeleteMeal = (mealId: string) => {
    mealStore.deleteMeal(mealId)
}

const handleToggleFavorite = (mealId: string) => {
    mealStore.toggleFavorite(mealId)
}
</script>

<template>
    <main class="min-h-screen bg-backgroundLight py-8">
        <div class="max-w-[1440px] mx-auto px-6">
            <div class="mb-8">
                <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-charcoal mb-2">
                    Favorite Recipes
                </h1>
                <p class="text-charcoal/60">
                    Your most loved meals
                </p>
            </div>

            <div v-if="favoriteMeals.length === 0" class="text-center py-12">
                <p class="text-charcoal/40 text-lg italic">No favorite meals yet</p>
                <p class="text-charcoal/30 text-sm mt-2">Mark meals as favorites to see them here</p>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <MealItem v-for="meal in favoriteMeals" :key="meal.id" :meal="meal" border-color="border-primary/20"
                    @delete="handleDeleteMeal" @toggle-favorite="handleToggleFavorite" />
            </div>
        </div>
    </main>
</template>