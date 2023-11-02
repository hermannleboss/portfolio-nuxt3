<script setup lang="ts">

import PresentationCard from "~/components/PresentationCard.vue";
const presentation= {imageUrl: '~/assets/images/homepage/desktop/image-homepage-hero.jpg', url:"/"}
</script>

<template>
  <div class="flex flex-col gap-20">
    <PresentationCard :presentation="presentation"></PresentationCard>
    <PresentationCard :presentation="presentation" variant="secondary"></PresentationCard>
  </div>
  <div class="my-36 flex items-center">
    <h3 class="title-2 max-w-sm pr-6">Interested in doing a project together?</h3>
    <span class="flex-1 border border-light-gray-2 h-0 mx-8"></span>

    <Button variant="secondary" to="/realisation" class="my-4">
      CONTACT ME
    </Button>
  </div>
</template>

<style scoped>

</style>