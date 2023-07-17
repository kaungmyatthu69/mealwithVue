<script setup lang="ts">
import {  RouterView } from 'vue-router'
import 'vue-loading-overlay/dist/css/index.css';
const scrollToTop = ()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
<template>
  <RouterView   />
  <div class="fixed bottom-12 right-12 " >
    <button @click="scrollToTop" ><i class="fa-solid fa-circle-up text-3xl  text-red-400"></i></button>
  </div>
</template>

