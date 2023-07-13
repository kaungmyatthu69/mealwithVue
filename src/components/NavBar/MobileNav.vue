<template>
<div>
  <div class="md:hidden py-2 " @click="mealStore.toggleDrawer()" >
    <Menue v-if="!isOpenDrawer" />
    <Close v-if="isOpenDrawer" />
  </div>
</div>
</template>
<script setup>
import Close from "vue-material-design-icons/Close.vue";
import Menue from "vue-material-design-icons/Menu.vue";
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
const mealStore = useMealStore()
const {isOpenDrawer} = storeToRefs(mealStore)
</script>