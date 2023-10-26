<script setup lang="ts">
import {defineProps} from 'vue'
const props = defineProps({
  variant: {type: String, default: 'primary'},
})

</script>

<template>
  <div class="inline-flex cursor-pointer  font-bold"
       :class="variant==='secondary' ? 'border hover:bg-grayish-dark-blue hover:text-white' : ' bg-dark-blue text-white hover:bg-cyan '">
    <slot name="icon">
    </slot>
    <span class="px-12 py-4" style="font-size: 0.75rem; letter-spacing: 0.125rem">
       <slot></slot>
    </span>
  </div>
</template>