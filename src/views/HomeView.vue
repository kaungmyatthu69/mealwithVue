<template>
  <Herosection/>
  <h1 class="text-3xl font-bold text-center my-10"> Meals</h1>
  <div class="flex justify-center p-2 ">
    <SearchBar/>
  </div>
  <div class="flex flex-wrap justify-center gap-5">
    <div v-for="(meal,index) in meals" :key="index">
      <MealCart :meal="meal"/>
    </div>
  </div>
</template>


<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import MealCart from "@/components/HomePage/MealCart.vue";
import Herosection from "@/components/HomePage/Herosection.vue";
import SearchBar from "@/components/HomePage/SearchBar.vue";

const mealStore = useMealStore()
const {meals} = storeToRefs(mealStore)

onMounted(() => {
  mealStore.getMeals()
})
</script>
