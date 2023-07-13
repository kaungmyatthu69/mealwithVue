<template>

    <div class="  p-5 shadow rounded flex flex-col gap-2 w-full">
      <div class="group  relative">
        <img :src="meal?.strMealThumb" :alt="meal?.strMeal" class="w-full h-60">
        <div
            class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black opacity-0 group-hover:h-full group-hover:opacity-50 duration-500">
          <RouterLink :to="{name:'mealDetails',params:{id:meal?.idMeal}}">
            <a class="mt-5 px-8 py-3 rounded-full bg-black text-white text-xl  duration-300">See Details</a>
          </RouterLink>
        </div>
      </div>
      <h1>{{shortString(meal.strMeal) }}</h1>
      <div class="flex justify-between items-center">
        <div>
          <Button v-if="!isIncludeAddToCart(meal.idMeal) " @click="mealStore.AddToCart(meal)"
                  bg-clr="bg-green-400">Add To Cart
          </Button>

          <Button v-if="isIncludeAddToCart(meal.idMeal)" @click="mealStore.RemoveFromCart(meal)"
                 bg-clr="bg-red-400">Remove From Cart
          </Button>
        </div>

        <div>
          <heart-outline v-if="!isIncludeInFavList(meal.idMeal)" @click="mealStore.AddToFav(meal)"
                         fill-color="red"/>
          <heart v-if="isIncludeInFavList(meal.idMeal)" @click="mealStore.RemoveFromFav(meal)"
                 fill-color="red"/>
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
import Button from "@/components/Button.vue";
import {storeToRefs} from "pinia";
import {shortString} from "@/composables/shortString";

const mealStore = useMealStore()
const {AddToCartList, FavList,} = storeToRefs(mealStore)

const props = defineProps({
  meal: Object as PropType<meal>

})

const isIncludeAddToCart = (id: string) => {
  return AddToCartList.value.find(item => item.idMeal === id)

}

const isIncludeInFavList = (id: string) => {
  return FavList.value.find(item => item.idMeal === id)
}

</script>