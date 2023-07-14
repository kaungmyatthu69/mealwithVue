<template>
<div>
  <div class="md:hidden py-2 " @click="mealStore.toggleDrawer()" >

    <i class="fa-solid fa-bars text-xl" v-if="!isOpenDrawer"></i>
    <i class="fa-solid fa-xmark text-xl" v-if="isOpenDrawer"></i>
  </div>
</div>
</template>
<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
const mealStore = useMealStore()
const {isOpenDrawer} = storeToRefs(mealStore)
</script>