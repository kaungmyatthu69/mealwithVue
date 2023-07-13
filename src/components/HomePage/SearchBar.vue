<template>
  <div class="flex  justify-between md:w-[400px]  border-2 rounded-2xl px-2 py-1">
    <input placeholder="search by ... " v-model="searchbyName" class=" border-none focus:outline-0 focus:ring-0 px-2"
           @keydown.enter="mealStore.searchByName(searchbyName)"/>
    <search @click="mealStore.searchByName(searchbyName)" class="cursor-pointer"/>
  </div>
</template>


<script setup lang="ts" >
import search from "vue-material-design-icons/Magnify.vue"
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
const mealStore = useMealStore()
const {searchbyName} = storeToRefs(mealStore)

</script>