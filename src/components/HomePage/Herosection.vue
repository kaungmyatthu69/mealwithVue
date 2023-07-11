<template>
  <h1>Herosection</h1>
  <Carousel  :autoplay="3000" :wrap-around="true">
    <Slide v-for="meal in getSomeMeals" :key="meal.idMeal">
      <div class="carousel_item relative h-[300px] ">
          <img :src="meal.strMealThumb"  :alt="meal.strMeal" class="" />
        <div class="absolute top-0 bottom-0 right-0 left-0 bg-black w-full h-full opacity-50 flex text-white  items-center   justify-center text-center">
          <div>
            <h1 class="text-red-400 text-xl font-semibold">Trending Now</h1>
            <h1 class="text-3xl font-bold">
              {{meal.strMeal}}
            </h1>
          </div>

        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
<div class="flex flex-col justify-center items-center mt-10">
  <h1 class="text-3xl font-bold">Categories</h1>
  <CategorySlide/>

</div>


</template>

<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import CategorySlide from "@/components/HomePage/CategorySlide.vue";
const mealStore = useMealStore();
const {getSomeMeals} = storeToRefs(mealStore)


</script>