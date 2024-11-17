<script setup lang="ts">

import CallToAction from "~/components/CallToAction.vue";
import HeroComponent from "~/components/HeroComponent.vue";
import AboutComponent from "~/components/AboutComponent.vue";
useHead({
  title: "Hermann EHO - Frontend Developer",
  meta: [
    {
      name: "description",
      content: "Hermann EHO - Frontend Developer",
    },
  ],
})
useSeoMeta({
  title: "Hermann EHO - Frontend Developer",
  ogTitle: "Hermann EHO - Frontend Developer",
  description: "Hermann EHO - Frontend Developer",
  ogDescription: "Hermann EHO - Frontend Developer",
  ogImage: 'https://example.com/desktop/image-homepage-hero.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <HeroComponent/>
  <AboutComponent/>
  <CallToAction/>
</template>
