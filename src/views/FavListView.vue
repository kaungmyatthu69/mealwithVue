<template>
  <MainLayout>
    <h1 class="text-3xl font-bold  text-center mt-10">Your Favorite  Lists</h1>
    <router-link :to="{name:'home'}">
      <Button bg-clr="bg-red-400 my-10 ml-14 ">Back</Button>
    </router-link>
    <transition name="switch" mode="out-in" >
      <div v-if="FavList.length">
        <transition-group tag="div"  class="flex  px-5 flex-wrap justify-center md:justify-start items-center gap-5" name="list" appear>
          <div v-for="meal in FavList" :key="meal.idMeal"  class="w-[450px] md:w-[300px]">
            <MealCart :meal="meal"/>
          </div>
        </transition-group>
      </div>

      <div v-else class="text-center text-3xl font-bold text-red-400">
        Please Go Back Home and Let Select Your Favorite Dishes !!!!
      </div>
    </transition>
  </MainLayout>




</template>

<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import Button from "@/components/Button.vue";
import MainLayout from "@/layout/MainLayout.vue";
const mealStore = useMealStore();
import MealCart from "@/components/HomePage/MealCart.vue";



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

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.switch-enter-active{
  transition: all 0.7s ease;
}
.switch-leave-active {
  transition: all 0.5s ease;
  position: absolute;
  width: 100%;
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