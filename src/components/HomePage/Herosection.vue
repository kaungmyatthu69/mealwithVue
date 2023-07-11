<template>
  <h1>Herosection</h1>
<Curousel :CurouselData="getSomeMeals" />
  <div class="flex flex-col justify-center items-center mt-10">
    <h1 class="text-3xl font-bold">Categories</h1>
    <CategorySlide/>
  </div>


</template>

<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import {Carousel, Navigation, Pagination, Slide} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import CategorySlide from "@/components/HomePage/CategorySlide.vue";
import Curousel from "@/components/Curousel.vue";
const mealStore = useMealStore();
const {getSomeMeals} = storeToRefs(mealStore)


</script>