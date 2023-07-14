<template>
  <div class="flex  justify-between md:w-[400px]  items-center border-2 rounded-2xl px-2 py-1">
    <input placeholder="search by ... " v-model="searchbyName" class=" border-none focus:outline-0 focus:ring-0 px-2"
           @keydown.enter="mealStore.searchByName(searchbyName)"/>

    <i class="fa-solid fa-magnifying-glass  text-gray-500 text-lg cursor-pointer" @click="mealStore.searchByName(searchbyName)"  ></i>
  </div>
</template>


<script setup lang="ts" >
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
const mealStore = useMealStore()
const {searchbyName} = storeToRefs(mealStore)

</script>