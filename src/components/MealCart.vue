<template>
  <div class="container p-5 shadow rounded flex flex-col gap-2">
    <div class="group  relative">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-60 h-60" >
      <div
          class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
<RouterLink :to="{name:'mealDetails',params:{id:meal.idMeal}}">
  <a class="mt-5 px-8 py-3 rounded-full bg-black text-white text-xl  duration-300" >See Details</a>

</RouterLink>
      </div>
    </div>
  <h1 >{{meal.strMeal}}</h1>
  <div class="flex justify-between items-center">
<div>
  <button v-if=" !AddToCartList.find((item)=>item.idMeal === meal.idMeal)" @click="mealStore.AddToCart(meal)" class="bg-green-400 px-3 py-1 rounded text-white w-28">Add To Cart</button>
  <button   v-if="AddToCartList.find((item)=>item.idMeal === meal.idMeal)" @click="mealStore.RemoveFromCart(meal)" class="bg-red-400 px-3 py-1 rounded text-white ">Remove From Cart</button>
</div>

    <div>
      <heart-outline v-if="!FavList.find((item)=>item.idMeal === meal.idMeal)"  @click="mealStore.AddToFav(meal)" fill-color="red" />
      <heart v-if="FavList.find((item)=>item.idMeal === meal.idMeal)" @click="mealStore.RemoveFromFav(meal)" fill-color="red" />
    </div>



  </div>
</div>
</template>

<script setup lang="ts">
import type {meal} from "@/types/Meal";
import type {PropType} from "vue";
import heartOutline from "vue-material-design-icons/HeartOutline.vue"
import heart from "vue-material-design-icons/Heart.vue"
import {useMealStore} from "@/stores/meal";

import {storeToRefs} from "pinia";
const mealStore = useMealStore()
const {AddToCartList,FavList,} = storeToRefs(mealStore)

const props = defineProps({
  meal : Object as PropType<meal>

})

</script>