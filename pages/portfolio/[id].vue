<script setup lang="ts">

const presentation = {imageUrl: '~/assets/images/homepage/desktop/image-homepage-hero.jpg', url: "/"}
</script>

<template>
  <img
      alt="image"
      class="w-full"
      src="~/assets/images/detail/desktop/image-bookmark-hero.jpg"
  />
  <div class="flex flex-col gap-6 py-6 mt-10 border-y border-light-gray">
    <h2 class="title-2 font-serif">Manage</h2>
    <p>
      This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along
      with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.
    </p>
    <p>Interaction Design / Front End Development
      <br>HTML / CSS / JS</p>
    <Button variant="secondary" :to="presentation.url">
      VIEW WEBSITE
      VIEW WEBSITE
    </Button>
  </div>
  <CallToAction/>
</template>

<style scoped>

</style>