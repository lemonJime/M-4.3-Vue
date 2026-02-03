<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <header class="sticky top-0 z-50 bg-backgroundLight/80 backdrop-blur-md border-b border-sage px-6 py-4">
        <div class="max-w-[1440px] mx-auto flex items-center justify-between">
            <!-- Logo + Título -->
            <div class="flex items-center gap-3">
                <div class="bg-primary text-white p-2 rounded-lg flex items-center justify-center">
                    <span class="material-symbols-outlined">grocery</span>
                </div>
                <h1 class="text-xl font-extrabold tracking-tight text-charcoal">Meal Planner App</h1>
            </div>

            <!-- Navegación -->
            <nav class="flex items-center gap-8">
                <RouterLink to="/" class="text-sm font-semibold hover:text-primary transition-colors"
                    active-class="text-primary">
                    Weekly Plan
                </RouterLink>
                <RouterLink to="/favorites"
                    class="text-sm font-medium opacity-70 hover:opacity-100 hover:text-primary transition-all"
                    active-class="text-primary opacity-100">
                    Favorites
                </RouterLink>
            </nav>
        </div>
    </header>
</template>