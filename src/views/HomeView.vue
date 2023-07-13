<template>
  <MainLayout>
    <div  v-if="!loading">
      <Herosection/>
      <h1 class="text-3xl font-bold text-center my-10"> Meals</h1>
      <div class="flex justify-center p-2 ">
        <SearchBar/>
      </div>

      <div class="flex justify-center flex-wrap gap-5 px-5 md:px-0 ">
        <div v-for="(meal,index) in meals" :key="index"  class="w-[450px] md:w-[300px]" >
          <MealCart :meal="meal"/>

        </div>
      </div>


    </div>

    <div v-if="loading">Loaidng.... Hlksdflkdsflkjdslkjdslkj</div>
  </MainLayout>

</template>


<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import {onMounted, ref} from "vue";
import MealCart from "@/components/HomePage/MealCart.vue";
import Herosection from "@/components/HomePage/Herosection.vue";
import SearchBar from "@/components/HomePage/SearchBar.vue";
import MainLayout from "@/layout/MainLayout.vue";

const mealStore = useMealStore()
const {meals} = storeToRefs(mealStore)
const loading = ref(true)

onMounted(() => {
  loading.value= true
 mealStore.getMeals()
loading.value=false
})
</script>
