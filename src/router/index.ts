import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore

import HomeView from '../views/HomeView.vue'
// @ts-ignore

import FavListView from "@/views/FavListView.vue";
// @ts-ignore
import MealDetailView from "@/views/MealDetailView.vue";
import Menu from "@/views/Menu.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/home',
      redirect:'/'
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
    },
    {
      path:'/menu',
      name:'menu',
      component:Menu
    },

  ]
})

export default router
