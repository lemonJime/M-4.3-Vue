<script setup lang="ts">
import { ref } from 'vue'
import { useMealStore } from '@/stores/meals'
import type { DayOfWeek, MealType } from '@/types/meals'

const mealStore = useMealStore()

// Estado del formulario
const mealName = ref('')
const selectedDay = ref<DayOfWeek>('Monday')
const selectedType = ref<MealType>('Lunch')

const daysOfWeek: DayOfWeek[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const mealTypes: MealType[] = ['Breakfast', 'Lunch', 'Dinner']

const handleSubmit = () => {
    if (!mealName.value.trim()) return // Validación simple

    mealStore.createMeal({
        name: mealName.value.trim(),
        dayOfWeek: selectedDay.value,
        mealType: selectedType.value
    })

    // Limpiar formulario
    mealName.value = ''
    selectedDay.value = 'Monday'
    selectedType.value = 'Lunch'
}
</script>

<template>
    <div class="bg-white p-6 rounded-xl shadow-sm border border-charcoal/10 mb-8">
        <h2 class="text-2xl font-black tracking-tighter text-charcoal mb-4">Add New Meal</h2>

        <form @submit.prevent="handleSubmit" class="flex flex-col md:flex-row gap-4">
            <!-- Input nombre -->
            <div class="flex-1">
                <label class="block text-xs font-bold text-charcoal/60 mb-2 uppercase tracking-wide">
                    Meal Name
                </label>
                <input v-model="mealName" type="text" placeholder="e.g., Grilled Chicken Salad"
                    class="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required />
            </div>

            <!-- Select día -->
            <div class="flex-1">
                <label class="block text-xs font-bold text-charcoal/60 mb-2 uppercase tracking-wide">
                    Day
                </label>
                <select v-model="selectedDay"
                    class="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option v-for="day in daysOfWeek" :key="day" :value="day">
                        {{ day }}
                    </option>
                </select>
            </div>

            <!-- Select tipo -->
            <div class="flex-1">
                <label class="block text-xs font-bold text-charcoal/60 mb-2 uppercase tracking-wide">
                    Meal Type
                </label>
                <select v-model="selectedType"
                    class="w-full px-4 py-2 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option v-for="type in mealTypes" :key="type" :value="type">
                        {{ type }}
                    </option>
                </select>
            </div>

            <!-- Botón -->
            <div class="flex items-end">
                <button type="submit"
                    class="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-wide text-sm">
                    Add Meal
                </button>
            </div>
        </form>
    </div>
</template>