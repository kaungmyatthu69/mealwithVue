<template>
  <div class="container p-5 shadow rounded flex flex-col gap-2">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-60 h-60">
    <h1 >{{meal.strMeal.length>25?meal.strMeal.slice(0,20)+"...":meal.strMeal}}</h1>
    <div class="flex justify-between items-center">
      <div @click="toggleButton(meal)">
        <button v-if="Cart" class="bg-green-400 px-3 py-1 rounded text-white w-28">Add To Cart</button>
        <button   v-if="!Cart" class="bg-red-400 px-3 py-1 rounded text-white ">Remove From Cart</button>
      </div>
      <div @click="favorite(meal)">
        <heart-outline v-if="!fav"  fill-color="red" />
        <heart v-if="fav" fill-color="red" />
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
import {ref} from "vue";
const mealStore = useMealStore()
let fav = ref(false)
let Cart = ref(true)
const props = defineProps({
  meal : Object as PropType<meal>

})
const favorite = (meal:meal)=>{
  fav.value = !fav.value
    mealStore.toggleFav(meal)
}

const toggleButton=(meal:meal)=>{
  Cart.value = !Cart.value
  mealStore.AddToCart(meal)
}


</script>