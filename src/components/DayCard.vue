<script setup lang="ts">
import { computed } from 'vue'
import type { DayOfWeek, Meal, MealType } from '@/types/meals'
import MealItem from '@/components/Mealitem.vue'


const props = defineProps<{
  day: DayOfWeek
  meals: Meal[]
  index: number
}>()

const emit = defineEmits<{
  delete: [mealId: string]
}>()

const mealsGroupedByType = computed(() => {
  return props.meals.reduce((acc, meal) => {
    const category = meal.mealType
    if (!acc[category]) {
      acc[category] = []

    }
    acc[category].push(meal)

    return acc

  }, {} as Record<MealType, Meal[]>)
})

const bgColor = computed(() => {
  return props.index % 2 === 0 ? 'bg-sage' : 'bg-peach'
})

const borderColor = computed(() => {
  return props.index % 2 === 0 ? 'border-sage/50' : 'border-peach/50'
})

const dishBorderColor = computed(() => {
  return props.index % 2 === 0 ? 'border-sage/20' : 'border-peach/20'
})

const dayNumber = computed(() => {
  return String(props.index + 1).padStart(2, '0')
})

const mealTypesOrdered: MealType[] = ['Breakfast', 'Lunch', 'Dinner']
</script>

<template>
  <div :class="[
    'day-card snap-start p-6 rounded-xl shadow-sm border flex flex-col gap-6',
    'transition-all duration-300 hover:shadow-lg hover:scale-[1.02]',
    bgColor,
    borderColor
  ]">
    <div class="flex justify-between items-center">
      <h4 class="text-2xl font-black uppercase tracking-tighter text-charcoal">
        {{ day }}
      </h4>
      <span class="text-[10px] font-bold bg-white/50 px-2 py-1 rounded text-charcoal/60 uppercase">
        Day {{ dayNumber }}
      </span>
    </div>

    <div class="space-y-4">
      <div v-for="type in mealTypesOrdered" :key="type" class="group">
        <p class="text-[10px] font-extrabold uppercase tracking-widest text-charcoal/40 mb-3">
          {{ type }}
        </p>

        <div v-if="mealsGroupedByType[type]?.length > 0" class="space-y-2">
          <MealItem v-for="meal in mealsGroupedByType[type]" :key="meal.id" :meal="meal" :border-color="dishBorderColor"
            @delete="emit('delete', $event)" />
        </div>

        <div v-else class="border-2 border-dashed border-charcoal/10 p-4 rounded-lg flex items-center justify-center">
          <span class="text-xs font-bold text-charcoal/30 italic">
            No {{ type.toLowerCase() }} planned
          </span>
        </div>
      </div>
    </div>
  </div>
</template>