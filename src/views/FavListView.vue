<template>
  <h1 class="text-3xl font-bold ">Favalist Lists</h1>
  <RouterLink to="/">
    <Button bg-clr="bg-green-400 my-10 ml-14 " @click="router.push('/')" >Back</Button>
  </RouterLink>

  <div class="flex flex-wrap justify-center md:justify-evenly items-center gap-5">
    <div v-for="meal in FavList" :key="meal.idMeal">
      <MealCart :meal="meal"/>
    </div>
  </div>


</template>

<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import Button from "@/components/Button.vue";
const mealStore = useMealStore();
import MealCart from "@/components/HomePage/MealCart.vue";
import router from "@/router";

const {FavList} = storeToRefs(mealStore)
</script>