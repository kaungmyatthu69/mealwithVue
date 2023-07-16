<template>

  <Card>
    <template #image>

    <div  class="group  relative">
      <img :src="meal?.strMealThumb" :alt="meal?.strMeal" class="w-full ">
      <div
          class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
        <RouterLink :to="{name:'mealDetails',params:{id:meal?.idMeal}}">
          <a class="mt-5 px-8 py-3 rounded-full bg-black text-white text-xl  duration-300">See Details</a>
        </RouterLink>
      </div>
    </div>
    </template>

    <template #title>
      <h1>{{ shortString(meal?.strMeal) }}</h1>

    </template>
    <template #footer>
      <div class="flex justify-between items-center">
        <div>
          <Button v-if="!isIncludeAddToCart(meal?.idMeal) " @click="mealStore.AddToCart(meal)"
                  bg-clr="bg-green-400">Add To Cart
          </Button>
          <Button v-if="isIncludeAddToCart(meal?.idMeal)" @click="mealStore.RemoveFromCart(meal)"
                  bg-clr="bg-red-400">Remove From Cart
          </Button>
        </div>

        <div>
          <i class="fa-regular fa-heart text-xl  text-red-400" v-if="!isIncludeInFavList(meal?.idMeal)"
             @click="mealStore.AddToFav(meal)"></i>

          <i class="fa-solid fa-heart text-xl text-red-400" v-if="isIncludeInFavList(meal?.idMeal)"
             @click="mealStore.RemoveFromFav(meal)"></i>
        </div>

      </div>
    </template>
  </Card>




</template>

<script setup lang="ts">
import type {meal} from "@/types/Meal";
import type {PropType} from "vue";
import {useMealStore} from "@/stores/meal";
import Button from "@/components/Button.vue";
import {storeToRefs} from "pinia";
import {shortString} from "@/composables/shortString";
import Card from "@/components/Card.vue";

const mealStore = useMealStore()
const {AddToCartList, FavList,} = storeToRefs(mealStore)

const props = defineProps({
  meal: Object as PropType<meal>

})
const isIncludeAddToCart = (id: string | undefined) => {
  if (id) {
    return AddToCartList.value.find((item: meal) => item.idMeal === id)

  }

}

const isIncludeInFavList = (id: string | undefined) => {
  if (id) {
    return FavList.value.find((item: meal) => item.idMeal === id)

  }
}

</script>