<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import MealCart from "@/components/HomePage/MealCart.vue";
import Herosection from "@/components/HomePage/Herosection.vue";
import search from  "vue-material-design-icons/Magnify.vue"
const mealStore = useMealStore()
const {meals} = storeToRefs(mealStore)
const searchbyName =ref('')
onMounted(()=>{
  mealStore.getMeals()
})
</script>

<template>
  <Herosection/>
  <h1 class="text-3xl font-bold text-center my-10" > Meals</h1>
  <div class="flex justify-center p-2 ">
    <div class="flex  justify-between w-[400px]  border-2 rounded-2xl px-2 py-1">
      <input placeholder="search by ... "  v-model="searchbyName" class=" border-none focus:outline-0 focus:ring-0 px-2" @keydown.enter="mealStore.searchByName(searchbyName)" />
      <search @click="mealStore.searchByName(searchbyName)" />
    </div>
  </div>

  <div class="flex flex-wrap justify-center gap-5">
    <div  v-for="(meal,index) in meals" :key="index" >
      <MealCart :meal="meal" />
    </div>
  </div>


</template>
