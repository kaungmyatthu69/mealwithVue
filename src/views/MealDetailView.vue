<template>
  <MainLayout>
<h1 class="text-3xl font-bold text-center mt-10">Meals Details </h1>

    <RouterLink :to="{name:'home'}">
      <Button bg-clr="bg-red-400 my-10 ml-10 " >Back</Button>
    </RouterLink>

    <div v-for="(meal,index) in detailsMeal" :key="meal.idMeal" :data-index="index" class="md:grid md:grid-cols-3 flex flex-col ">
<transition name="imgFade"  appear>
  <div class="w-full md:p-2 p-5 rounded " >
    <img :src="meal.strMealThumb" class="w-[400px] h-[400px] rounded shadow" :alt="meal.strMeal"/>
  </div>
</transition>
   <transition  appear name="content">
     <div class="md:col-span-2  px-7">
       <div class="w-full">
         <h1 class="font-bold text-3xl">Title - {{ meal.strMeal }}</h1>
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
   </transition>



    </div>

  </MainLayout>




</template>

<script setup lang="ts">
import {onUnmounted, ref} from "vue";
import {useRoute} from "vue-router";
import {useMealStore} from "@/stores/meal";
import {onMounted} from "vue";
import {storeToRefs} from "pinia";
import Button from "@/components/Button.vue";
import gsap from "gsap"
import MainLayout from "@/layout/MainLayout.vue";
const mealStore = useMealStore();
const route = useRoute();
const id = ref(route.params.id)
const {detailsMeal, Ingredient} = storeToRefs(mealStore)
const beforeEnter =(el:any)=>{
  el.style.opacit=0
  el.style.transform = 'translateX(-60px)'
}
const enter=(el:any,done:any)=>{
  gsap.to(el,{
    duration:0.8,
    opacity:1,
    onComplete : done,
    x:0,
    delay:el.dataset.index * 0.2
  })
}

onMounted(() => {
  mealStore.getDetailsMealById(id.value)
})

</script>

<style scoped>
.imgFade-enter-from{
  opacity: 0;
  transform: translateX(-100px);
}
.imgFade-enter-active{
  transition: all 1s ease;
}

.content-enter-from{
  opacity: 0;
  transform: translateX(200px);
}
.content-enter-active{
  transition: all 1s ease;
}

</style>