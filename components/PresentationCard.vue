<script setup lang="ts">

import {defineProps} from "vue";

interface Project {
  id: string
  title: string
  hero: string
  preview: string[]
  background: string
  description: string
  skills: string[]
  url: string
  imageUrl: string
}


const props = defineProps({
  variant: {type: String, default: 'primary'},
  presentation: {type:  Object as PropType<Project>, required: true, default: {imageUrl: ''}}
})
</script>

<template>
  <div :class="props.variant==='secondary'? 'flex-row-reverse': ''" class="block md:flex m-0 sm:gap-16">
    <div class=" w-full">
      <NuxtImg
          alt="Profile image"
          class="img-full w-full mx-auto card-image"
          :src="presentation.imageUrl"></NuxtImg>
    </div>
    <div class="flex justify-between about m-0 lg:mx-24 min-h-full md:max-w-[280px] lg:max-w-[350px]">
      <div class="border-y border-light-gray mt-8 md:mt-0 flex items-center">
        <div>
          <h2 class="title-2 font-serif py-8">{{ presentation.title }}</h2>
          <p v-if="presentation.description ">{{ presentation.description }}</p>

          <Button variant="secondary" :to="presentation.url" class="my-8">
            VIEW PROJECT
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>