<template>
  <h1 class="text-3xl font-bold ">Favalist Lists</h1>
<router-link to="/">
  <Button bg-clr="bg-green-400 my-10 ml-14 ">Back</Button>

</router-link>




    <transition-group tag="div" class="flex flex-wrap justify-center md:justify-evenly items-center gap-5" name="list" appear>
      <div v-for="meal in FavList" :key="meal.idMeal">
        <MealCart :meal="meal"/>
      </div>
    </transition-group>

</template>

<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import Button from "@/components/Button.vue";

const mealStore = useMealStore();
import MealCart from "@/components/HomePage/MealCart.vue";
import router from "@/router";

const {FavList} = storeToRefs(mealStore)
</script>


<style scoped>

.list-leave-to {
  opacity: 0;
  transform: translateX(-400px);
}

.list-leave-active {
 animation: wobble 0.5s  ease;

}
@keyframes wobble {
  0% { transform: translateX(0px); opacity: 1 }
  50% { transform: translateX(15px); opacity: 1 }
  60% { transform: translateX(-15px); opacity: 0.5  }
  70% { transform: translateX(5px); opacity: 0.5 }
  80% { transform: translateX(-5px); opacity: 0.3 }
  90% { transform: scale(0); opacity: 0.3 }
  100% { transform: scale(0); opacity: 0 }
}
</style>