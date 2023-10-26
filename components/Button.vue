<script setup lang="ts">
// recive props
import {defineProps} from 'vue'
// Can be 'primary', 'secondary', or 'tertiary' (default = 'primary')
const props = defineProps({
  variant: {type: String, default: 'primary'},
})

</script>

<template>
  <div class="inline-flex cursor-pointer  font-bold"
       :class="variant==='secondary' ? 'border hover:bg-grayish-dark-blue hover:text-white' : ' bg-dark-blue text-white hover:bg-cyan '">
    <slot name="icon">
    <span class="flex items-center justify-center opacity-10 bg-black  p-4">
      <svg
          fill="none"
          height="14"
          viewBox="0 0 18 14"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 9L9 13L17 9" stroke="#FFF"/>
        <path d="M1 5L9 9L17 5" opacity="0.5" stroke="#FFF"/>
        <path d="M1 1L9 5L17 1" opacity="0.25" stroke="#FFF"/>
      </svg></span></slot>
    <span class="px-12 py-4" style="font-size: 0.75rem; letter-spacing: 0.125rem">
       <slot>About Me</slot>
    </span>
  </div>
</template>

<style scoped>

</style>