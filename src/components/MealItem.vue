<script setup lang="ts">
import type { Meal } from '@/types/meals'

const props = defineProps<{
    meal: Meal
    borderColor: string
}>()

const emit = defineEmits<{
    delete: [mealId: string]
}>()

const handleDelete = () => {
    emit('delete', props.meal.id)
}
</script>

<template>
    <div :class="[
        'dish-item relative bg-white p-4 rounded-lg shadow-sm border',
        'flex items-center justify-between transition-all hover:translate-x-1',
        borderColor
    ]">
        <span class="text-sm font-semibold text-charcoal">
            {{ meal.name }}
        </span>

        <button class="delete-btn opacity-0 text-primary hover:bg-primary/10 p-1 rounded transition-all"
            @click="handleDelete">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>
    </div>
</template>