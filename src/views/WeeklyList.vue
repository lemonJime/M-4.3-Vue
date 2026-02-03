<script setup lang="ts">
import { onMounted } from 'vue'
import { useMealStore } from "@/stores/meals"
import DayCard from '@/components/DayCard.vue'
import type { DayOfWeek } from '@/types/meals'
import MealForm from '@/components/MealForm.vue'

const mealStore = useMealStore()

onMounted(async () => {
    await mealStore.fetchMeals()
})

const daysOfWeek: DayOfWeek[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]


const handleDeleteMeal = (mealId: string) => {
    mealStore.deleteMeal(mealId)
}
</script>

<template>
    <main class="min-h-screen bg-backgroundLight py-8">
        <div v-if="mealStore.loading" class="max-w-[1440px] mx-auto px-6 flex items-center justify-center h-64">
            <div class="text-center">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p class="text-charcoal/60 font-semibold">Cargando comidas...</p>
            </div>
        </div>

        <div v-else-if="mealStore.error" class="max-w-[1440px] mx-auto px-6">
            <div class="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <p class="text-red-600 font-semibold">Error: {{ mealStore.error }}</p>
            </div>
        </div>

        <div v-else class="max-w-[1440px] mx-auto px-6">
            <div class="mb-8">
                <h1 class="text-4xl md:text-5xl font-black tracking-tighter text-charcoal mb-2">
                    Weekly Meal Plan
                </h1>
                <p class="text-charcoal/60">
                    Plan your meals for the week ahead
                </p>
            </div>

            <MealForm />

            <div
                class="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-4 snap-x snap-mandatory custom-scrollbar">
                <DayCard v-for="(day, index) in daysOfWeek" :key="day" :day="day" :index="index"
                    :meals="mealStore.getMealsByDay(day)" @delete="handleDeleteMeal" />
            </div>
        </div>
    </main>
</template>
