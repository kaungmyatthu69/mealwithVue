<template>
  <MainLayout>
      <div v-if="meals.length">
        <Herosection/>
        <h1 class="text-3xl font-bold text-center my-10"> Meals</h1>
        <div class="flex justify-center p-2 ">
          <SearchBar/>
        </div>
        <div class="flex justify-center flex-wrap gap-5 px-5 md:px-0 ">
          <MealCart v-for="(meal,index) in meals" :key="index" class="w-[450px] md:w-[300px]" :meal="meal"/>
        </div>
      </div>
    <div v-else class="h-[70vh] flex items-center justify-center">
        <h1 class="text-red-400 font-bold text-3xl text-center">{{result}} </h1>
    </div>

  </MainLayout>

</template>


<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import {onMounted, onUpdated, ref, watch} from "vue";
import MealCart from "@/components/HomePage/MealCart.vue";
import Herosection from "@/components/HomePage/Herosection.vue";
import SearchBar from "@/components/HomePage/SearchBar.vue";
import MainLayout from "@/layout/MainLayout.vue";

const mealStore = useMealStore()
const {meals} = storeToRefs(mealStore)
const result = ref('')

onMounted(() => {
  mealStore.getMeals()

})

watch(()=>meals.value,()=>{
  result.value = "no result found";
})
</script>
