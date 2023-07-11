<template>
  <Carousel :autoplay="3000" :wrap-around="true">
    <Slide v-for="meal in CurouselData" :key="meal.idMeal">
      <div class="carousel_item relative h-[300px] ">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class=""/>
        <div
            class="absolute top-0 bottom-0 right-0 left-0 bg-black w-full h-full opacity-50 flex text-white  items-center   justify-center text-center">
          <div>
            <h1 class="text-red-400 text-xl font-semibold">Trending Now</h1>
            <h1 class="text-3xl font-bold">
              {{ meal.strMeal }}
            </h1>
          </div>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation/>
      <Pagination/>
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import type {meal} from "@/types/Meal";

const props=defineProps({
  CurouselData:{
    require:true,
    type:[] as meal[]
  }
})


</script>