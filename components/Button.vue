<script setup lang="ts">
import {defineProps} from 'vue'

const props = defineProps({
  variant: {type: String, default: 'primary'},
  disabled: {type: Boolean, default: false}
})

</script>

<template>
  <NuxtLink class="inline-flex  font-bold"
       :class="disabled ? (variant==='secondary' ? 'border border-light-gray' : 'bg-light-gray') : (variant==='secondary' ? 'cursor-pointer border hover:bg-grayish-dark-blue hover:text-white' : 'cursor-pointer bg-dark-blue text-white hover:bg-cyan ')"
  >
    <slot name="icon">
    </slot>
    <span class="px-12 py-4 w-max" style="font-size: 0.75rem; letter-spacing: 0.125rem">
       <slot></slot>
    </span>
  </NuxtLink>
</template>