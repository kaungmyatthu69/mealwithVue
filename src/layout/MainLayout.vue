<template>
  <main>
    <Navbar/>
    <MainContainer>
      <slot/>
    </MainContainer>
  </main>
</template>

<script setup lang="ts" >
import Navbar from "@/components/NavBar/index.vue"
import MainContainer from "@/layout/MainContainer.vue";

</script>