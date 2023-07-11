<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import MealCart from "@/components/MealCart.vue";
const loading  =ref()
const mealStore = useMealStore()
const {meals} = storeToRefs(mealStore)
onMounted(()=>{
  loading.value = true
  mealStore.getMeals()
  loading.value =false
})
console.log(meals.value)
</script>

<template>
  <h1 v-if="loading">loading ......</h1>
  <div class="flex flex-wrap justify-center gap-5">
    <div v-if="!loading" v-for="(meal,index) in meals" :key="index" >
      <MealCart :meal="meal" />
    </div>
  </div>


</template>
