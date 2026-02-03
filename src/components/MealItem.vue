<script setup lang="ts">
import type { Meal } from '@/types/meals'

const props = defineProps<{
    meal: Meal
    borderColor: string
}>()

const emit = defineEmits<{
    delete: [mealId: string]
    toggleFavorite: [mealId: string]
}>()

const handleDelete = () => {
    emit('delete', props.meal.id)
}

const handleToggleFavorite = () => {
    emit('toggleFavorite', props.meal.id)
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

        <div class="flex items-center gap-2">
            <!-- Botón favorito -->
            <button class="text-primary hover:bg-primary/10 p-1 rounded transition-all" @click="handleToggleFavorite"
                :title="meal.isFavorite ? 'Remove from favorites' : 'Add to favorites'">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                    :fill="meal.isFavorite ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
            </button>

            <!-- Botón delete (solo visible en hover) -->
            <button class="delete-btn opacity-0 text-primary hover:bg-primary/10 p-1 rounded transition-all"
                @click="handleDelete">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    </div>
</template>