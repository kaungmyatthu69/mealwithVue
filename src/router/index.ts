import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore

import HomeView from '../views/HomeView.vue'
// @ts-ignore

import FavListView from "@/views/FavListView.vue";
// @ts-ignore
import MealDetailView from "@/views/MealDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/favlist',
      name:'favlist',
      component:FavListView
    },
    {
      path:'/meals/:id',
      name:'mealDetails',
      component:MealDetailView
    }
  ]
})

export default router
