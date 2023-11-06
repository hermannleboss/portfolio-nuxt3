<script setup lang="ts">

import PresentationCard from "~/components/PresentationCard.vue";
import CallToAction from "~/components/CallToAction.vue";
const presentation= {imageUrl: '~/assets/images/homepage/desktop/image-homepage-hero.jpg', url:"/portfolio/1"}
</script>

<template>
  <div class="flex flex-col gap-16">
    <PresentationCard :presentation="presentation"></PresentationCard>
    <PresentationCard :presentation="presentation" variant="secondary"></PresentationCard>
  </div>
  <CallToAction/>
</template>

<style scoped>

</style>