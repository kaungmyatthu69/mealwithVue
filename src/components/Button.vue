<template>
  <button :class="bgClr" class=" px-3 py-1 rounded text-white" >
    <slot ></slot>
  </button>
</template>

<script setup lang="ts" >
const props=defineProps({
  bgClr:{
    require:true,
    type: String
  }
})

</script>