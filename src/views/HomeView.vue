<template>
  <MainLayout>
    <div>
      <Herosection/>
      <h1 class="text-3xl font-bold text-center my-10"> Meals</h1>
      <div class="flex justify-center p-2 ">
        <SearchBar/>
      </div>
      <div class="flex justify-center flex-wrap gap-5 px-5 md:px-0 ">
        <MealCart v-for="(meal,index) in meals" :key="index" class="w-[450px] md:w-[300px]" :meal="meal"/>
      </div>
    </div>
    <div v-if="notFound" class="h-[50vh] flex items-center justify-center">
      <h1 class="text-red-400 font-bold text-3xl text-center">No Result Found </h1>
    </div>

  </MainLayout>

</template>


<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";
import MealCart from "@/components/HomePage/MealCart.vue";
import Herosection from "@/components/HomePage/Herosection.vue";
import SearchBar from "@/components/HomePage/SearchBar.vue";
import MainLayout from "@/layout/MainLayout.vue";

const mealStore = useMealStore()
const {meals, notFound} = storeToRefs(mealStore)


onMounted(() => {
  mealStore.getMeals()

})


</script>
