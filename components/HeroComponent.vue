<template>
  <div class="relative">
    <NuxtImg
        alt="image"
        class="hidden xl:block w-full"
        src="/images/homepage/desktop/image-homepage-hero.jpg"
        format="webp"
        loading="lazy"
    />
    <NuxtImg
        alt="image"
        class="hidden md:block xl:hidden w-full"
        src="/images/homepage/tablet/image-homepage-hero.jpg"
        format="webp"
        loading="lazy"
    />
    <NuxtImg
        alt="image"
        class="block md:hidden w-full"
        src="/images/homepage/mobile/image-homepage-hero.jpg"
        format="webp"
        loading="lazy"
    />

    <div class="hero-text sm:absolute border border-very-light-gray bg-very-light-gray bottom-0 left-0">
      <h1 class="title-1 font-serif text-black font-bold mb-12 mt-6 sm:mt-0">
        Hey, I’m Hermann EHO and I love building beautiful websites
      </h1>
      <Button to="#about">
        <template #icon>
          <IconComponent/>
        </template>
        About Me
      </Button>
    </div>
  </div>
</template>
<style scoped  lang="scss">
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
<script setup lang="ts">
</script>