<template>

  <div class="flex container mx-auto justify-center my-10  gap-5 flex-wrap">
    <div v-for="(c,index) in Category" :key="index" >
      <div class="p-3  w-36 flex justify-center rounded-3xl text-white bg-CC2 cursor-pointer" :class="{selected:c.strCategory===SelectedCategory}"    @click="mealStore.getMealsByCategory(c.strCategory)" >
          <h1>{{c.strCategory}} </h1>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts" >
import {onMounted} from "vue";
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
const mealStore = useMealStore()
const {SelectedCategory, Category} = storeToRefs(mealStore)
onMounted(()=>{
  mealStore.getCategory()
})

</script>

<style scoped>
.selected{
  background-color:#ef4444 ;
}

</style>