
import WeeklyList from '@/views/WeeklyList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: () => WeeklyList,
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('@/views/FavoritesRecipes.vue')  // ← Mejor en views/
  }],
})

export default router
