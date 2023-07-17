<template>
  <div class="sticky top-0 backdrop-blur border-b-2 z-20 px-5">
    <div class="container mx-auto py-5 md:flex justify-between hidden ">
      <h1 class="text-amber-700">Hello </h1>
      <div class="flex justify-between items-center gap-10">
        <h1 @click="$router.push(`/${li}`)" v-for="li in NavBarList" class="cursor-pointer" :class="{activeMenu:$route.name=== li}" >{{$t(`${li}`)}} </h1>
        <router-link to="/favlist">
          <div ref="fav" class="relative">Fav <span
              class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-black  border-white rounded-full -top-2 -right-2 "> {{ FavList.length }}</span>
          </div>
        </router-link>
        <div class="relative">
          <i class="fa-solid fa-cart-shopping"></i>
          <span
              class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-black  border-white rounded-full -top-2 -right-2 dark:border-gray-900">{{ AddToCartList.length }}</span>
        </div>
        <div>
          <select v-model="$i18n.locale">
            <option v-for="(locale,index) in $i18n.availableLocales" :key="index"  :value="locale" >{{locale}}</option>
          </select>
        </div>
      </div>

    </div>
    <MobileNav/>
  </div>
<div>
  <test/>
</div>
</template>


<script setup lang="ts">

import gsap from "gsap";
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import test from "@/components/NavBar/drawer.vue"
import MobileNav from "@/components/NavBar/MobileNav.vue";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const mealStore = useMealStore();
const {FavList, AddToCartList,} = storeToRefs(mealStore)
const fav = ref(null)
const NavBarList =ref(['home','menu'])

watch(()=>FavList.value.length,()=>{
  gsap.fromTo(fav.value,{
    duration:.2,
    yoyo:true,
    rotate:-20,

  },{
    duration:.2,
    repeat:2,
    yoyo:true,
    rotate:20,
    scale:1.125,
    onComplete:()=>{
      gsap.to(fav.value,{
        rotate:0,
        duration:.2,
        scale:1
      })
    }
  })
})
</script>

<style scoped >
.activeMenu{
  color: red;

}
</style>