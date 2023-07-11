<template>
  <div class="sticky top-0 backdrop-blur border-b-2">
    <div class="container mx-auto py-5 flex justify-between">
      <h1 class="text-amber-700">Hello </h1>
      <div class="flex justify-between items-center gap-10">
        <h1>Home</h1>
        <h1>Menu</h1>
        <router-link to="/favlist">
          <div class="relative">Fav <span class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-black  border-white rounded-full -top-2 -right-2 "> {{FavList.length}}</span></div>
        </router-link>
        <div class="relative"><Cart/>  <span class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-black  border-white rounded-full -top-2 -right-2 dark:border-gray-900">{{AddToCartList.length}}</span> </div>
      </div>

    </div>
  </div>

</template>
<script setup lang="ts">
import router from "@/router";
import Cart from "vue-material-design-icons/Cart.vue"
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
const mealStore = useMealStore();
const {FavList,AddToCartList} = storeToRefs(mealStore)
</script>