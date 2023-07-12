<template>
  <h1>Details</h1>
  <RouterLink to="/">
    <Button bg-clr="bg-green-400" >Back</Button>
  </RouterLink>
  <div>
    <div v-for="meal in detailsMeal" :key="meal.idMeal">
      <div class="md:grid md:grid-cols-3 flex flex-col ">
        <div class="p-10 w-full   ">
          <img :src="meal.strMealThumb" class="w-[400px] h-[400px] rounded shadow" :alt="meal.strMeal"/>
        </div>
        <div class="md:col-span-2  px-10">
          <div class="w-full">
            <h1 class="font-bold text-2xl">Title - {{ meal.strMeal }}</h1>
            <h1 class="font-semibold text-xl my-2">Category -#{{ meal.strCategory }}</h1>
            <h1 class="font-semibold text-xl ">Ingredients</h1>
            <div class="flex flex-wrap gap-3 my-3 md:w-[500px]">
              <p v-for="(item,index) in Ingredient" :key="index" class="border rounded-lg py-1 px-2 shadow">
                #{{ item }} </p>
            </div>
            <h1 class="font-semibold text-xl">Instructions</h1>
            <p>{{ meal.strInstructions }}</p>
          </div>
        </div>
      </div>


    </div>

  </div>


</template>

<script setup lang="ts">
import {onUnmounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useMealStore} from "@/stores/meal";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
import Button from "@/components/Button.vue";
const mealStore = useMealStore();
const route = useRoute();
const id = ref(route.params.id)
const {detailsMeal, Ingredient} = storeToRefs(mealStore)

onMounted(() => {
  mealStore.getDetailsMealById(id.value)
})

</script>