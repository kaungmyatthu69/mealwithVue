<template>
  <transition name="fade">

    <div v-if="isOpenDrawer " class="fixed top-0 left-0 md:hidden    h-full bg-black  shadow w-72 z-30">

      <div class="flex justify-between items-center">
        <h1 class="text-white">hello</h1>
        <button @click="mealStore.toggleDrawer()" class="p-4 text-white ">
          <Close/>
        </button>
      </div>
      <hr/>

      <!-- Drawer content -->
      <div class="  ">
        <div class="text-white flex flex-col justify-center items-center gap-5 my-10">
          <router-link :to="{name:'home'}">
            <h1 class="text-xl font-bold">Home</h1>
          </router-link>
          <router-link :to="{name:'favlist'}">
            <h1 class="text-xl font-bold">Favorite</h1>
          </router-link>
          <h1 class="text-xl font-bold">Carts</h1>
        </div>
        <div>
          <h1 class="text-white text-xl decoration-solid decoration-blue-500">Filter By Categories</h1>
          <div class="flex flex-wrap gap-3  p-5 ">
            <div v-for="c in Category " :key="c.idCategory">
              <input type="radio" :value="c.strCategory" v-model="categoryName"/>
              <label class="text-white px-2">{{ c.strCategory }}</label>

            </div>
          </div>
        </div>

      </div>

    </div>
  </transition>

</template>

<script setup lang="ts">
import Close from "vue-material-design-icons/Close.vue"

import {useMealStore} from "@/stores/meal";
import {storeToRefs} from "pinia";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
const route = useRoute()
const mealStore = useMealStore()
const {isOpenDrawer, Category} = storeToRefs(mealStore)
let categoryName = ref<String>('')
watch(()=>categoryName.value,
    () => {
      console.log('lohello')
      // mealStore.getMealsByCategory(categoryName.value)
      // isOpenDrawer.value = false
    }
)
// watch(()=>route.name,
//     () => {
//       console.log('Hello')
//       mealStore.getMealsByCategory(categoryName.value)
//       isOpenDrawer.value = false
//     }
// )

watch(() => route.name, () => {
  console.debug(`MyCoolComponent - watch route.name changed to ${route.name}`);
  // Do something here...

  // Optionally you can set immediate: true config for the watcher to run on init
  //}, { immediate: true });
});

</script>

<style scoped>
.fade-enter-from
{
  opacity: 0;
  transform: translateX(-400px);
}
.fade-enter-active{
  transition: all 0.5s ease;
}
.fade-leave-to{
  opacity: 0;
  transform: translateX(-400px);
}
.fade-leave-active{

  transition: all 0.5s ease-out;
}



</style>
