<script setup lang="ts">

import {defineProps} from "vue";

interface Presentation {
  imageUrl: string
}

const props = defineProps({
  variant: {type: String, default: 'primary'},
  presentation: {type: Object, required: true, default: {imageUrl: ''}}
})
</script>

<template>
  <div :class="props.variant==='secondary'? 'flex-row-reverse': ''" class="block md:flex m-0 sm:gap-16">
    <div class=" w-full">
      <img
          alt="Profile image"
          class="img-full mx-auto card-image"
          src="~/assets/images/portfolio/desktop/image-portfolio-bookmark.jpg"
      />
    </div>
    <div class="flex justify-between about m-0 lg:mx-24 min-h-full md:max-w-[280px]">
      <div class="border-y border-light-gray mt-8 md:mt-0 flex items-center">
        <div>
          <h2 class="title-2 font-serif py-8">TITLE {{ presentation.title }}</h2>
          <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5,
            along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial
            slider.</p>
          <p v-if="presentation.shortDesc ">{{ presentation.shortDesc }}</p>

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