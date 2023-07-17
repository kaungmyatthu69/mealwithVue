<template>
  <div class="flex justify-between items-center px-2 md:hidden py-2">
    <div class=" " @click="mealStore.toggleDrawer()">
      <i class="fa-solid fa-bars text-xl" v-if="!isOpenDrawer"></i>
      <i class="fa-solid fa-xmark text-xl" v-if="isOpenDrawer"></i>
    </div>
    <router-link to="/favlist">
      <div ref="fav" class="relative">Fav <span
          class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-black  border-white rounded-full -top-2 -right-2 "> {{
          FavList.length
        }}</span>
      </div>
    </router-link>
  </div>
</template>
<script setup lang="ts">
import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import {ref, watch} from "vue";
import gsap from "gsap";

const mealStore = useMealStore()
const {isOpenDrawer, FavList} = storeToRefs(mealStore)
const fav = ref(null)
watch(() => FavList.value.length, () => {
  gsap.fromTo(fav.value, {
        duration: .2,
        yoyo: true,
        rotate: -20
      }, {
        duration: .2,
        repeat: 2,
        yoyo: true,
        rotate: 20,
        scale: 1.125,
        onComplete: () => {
          gsap.to(fav.value, {
            rotate: 0,
            duration: .2,
            scale: 1
          })
        }
      }
  )
})
</script>

<!--{/* third hover effect */}<p className="m-16 relative group"><span>Hover over me</span> <span-->
<!--    className="absolute -bottom-1 left-1/2 w-0 h-2 bg-blue-600 group-hover:w-1/2 group-hover:transition-all"></span>-->
<!--<span className="absolute -bottom-1 right-1/2 w-0 h-2 bg-red-400 group-hover:w-1/2 group-hover:transition-all"></span>-->
<!--</p>-->