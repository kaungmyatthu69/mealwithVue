<template>
  <div class="flex">
    <div v-for="meal in FavList" :key="meal.idMeal">
      <MealCart :meal="meal"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";

const mealStore = useMealStore();
import MealCart from "@/components/HomePage/MealCart.vue";

const {FavList} = storeToRefs(mealStore)
</script>