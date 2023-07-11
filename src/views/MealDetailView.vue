<template>
  <h1>Details</h1>
  <div>
    <div  v-for="meal in detailsMeal" :key="meal.idMeal">
      <div class="grid grid-cols-3 ">
        <div class="p-10 w-full grid-cols-1">
          <img :src="meal.strMealThumb"  class="w-[400px] h-[400px] rounded shadow" :alt="meal.strMeal"/>
        </div>
        <div class="col-span-2">
          <div class="w-full">
            <h1 class="font-bold text-2xl">Title - {{meal.strMeal}}</h1>
            <h1 class ="font-semibold text-xl my-2">Category -#{{meal.strCategory}}</h1>
            <h1 class="font-semibold text-xl ">Ingredients</h1>
            <div class="flex flex-wrap gap-3 my-3 w-[500px]">
              <p v-for="(item,index) in Ingredient" :key="index" class="border rounded-lg py-1 px-2 shadow" > #{{item}} </p>
            </div>
            <h1 class="font-semibold text-xl">Instructions</h1>
<p>{{meal.strInstructions}}</p>
          </div>
        </div>
      </div>

     >
    </div>

  </div>


</template>

<script setup lang="ts" >
import {ref} from "vue";
import {useRoute} from "vue-router";
import {useMealStore} from "@/stores/meal";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
const mealStore = useMealStore();
const route = useRoute();
const id = ref( route.params.id)
const {detailsMeal,Ingredient} = storeToRefs(mealStore)
console.log(Ingredient)
onMounted(()=>{
  mealStore.getDetailsMealById(id.value)
})

</script>