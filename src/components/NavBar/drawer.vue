<template>
  <div class="">

    <div v-if="isOpenDrawer " class="fixed top-0 left-0 md:hidden    h-full bg-black shadow w-72 z-30">

      <div class="flex justify-between items-center">
        <h1 class="text-white">hello</h1>
        <button @click="mealStore.toggleDrawer()" class="p-4 text-white ">
          <Close/>
        </button>
      </div>
      <hr/>

      <!-- Drawer content -->
      <div class="  ">
        <div class="text-white">
          <router-link to="/">
            <h1>Home</h1>
          </router-link>
          <router-link to="/favlist">
            <h1>Fav</h1>

          </router-link>
          <h1>Add To Cart</h1>
        </div>
        <div>
          <h1 class="text-white">Filter By Categories</h1>
          <div class="flex flex-wrap gap-3  p-5 ">
            <div v-for="c in Category " :key="c.idCategory">
              <input type="radio" :value="c.strCategory" v-model="categoryName"/>
              <label class="text-white px-2">{{ c.strCategory }}</label>

            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

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
watch(()=>[categoryName.value,route.path],
    () => {
      mealStore.getMealsByCategory(categoryName.value)
      isOpenDrawer.value = false
    }
)

</script>

<style scoped>

</style>
