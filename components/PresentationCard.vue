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
  <div :class="props.variant==='secondary'? 'flex-row-reverse': ''" class="block md:flex m-0">
    <img
        alt="Profile image"
        class="img-full mx-auto card-image"
        src="~/assets/images/portfolio/desktop/image-portfolio-bookmark.jpg"
    />
    <div class="flex justify-between about mx-24 min-h-full">
      <div class="border-y border-light-gray mt-4 md:mt-0 flex items-center">
        <div>
          <h2 class="title-2 font-serif pt-3 py-sm-4 pb-4 m-0">TITLE {{ presentation.title }}</h2>
          <p>This project required me to build a fully responsive landing page to the designs provided. I used HTML5,
            along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial
            slider.</p>
          <p v-if="presentation.shortDesc ">{{ presentation.shortDesc }}</p>

          <Button variant="secondary" :to="presentation.url" class="my-4">
            VIEW PROJECT
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>