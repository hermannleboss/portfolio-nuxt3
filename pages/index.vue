<script setup lang="ts">

import IconComponent from "~/components/IconComponent.vue";
</script>

<template>
  <div class="bg-black relative">
    <img
        alt="image"
        class="hidden xl:block w-full"
        src="~/assets/images/homepage/desktop/image-homepage-hero.jpg"
    />
    <img
        alt="image"
        class="hidden md:block xl:hidden w-full"
        src="~/assets/images/homepage/tablet/image-homepage-hero.jpg"
    />
    <img
        alt="image"
        class="block md:hidden w-full"
        src="~/assets/images/homepage/mobile/image-homepage-hero.jpg"
    />

    <div class="hero-text sm:absolute border border-white bg-white bottom-0 left-0">
      <h1 class="pb-4 title-1 font-serif text-black font-bold">
        Hey, I’m Hermann EHO and I love building beautiful websites
      </h1>
      <Button>
        <template #icon>
          <IconComponent/>
        </template>
        About Me
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  &-text {
    @media (min-width: 640px) {
      padding-top: 55px;
      padding-right: 55px;
      width: 514px;
    }

    @media (min-width: 1280px) {
      width: 445px;
    }
  }
}
</style>