<script setup lang="ts">

import IconComponent from "~/components/IconComponent.vue";
</script>

<template>
  <div class="relative">
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

    <div class="hero-text sm:absolute border border-very-light-gray bg-very-light-gray bottom-0 left-0">
      <h1 class="title-1 font-serif text-black font-bold mb-12">
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
  <div class="justify-start block md:flex mt-40">
    <div class="w-full">
      <img
          alt="Profile image"
          class="w-full"
          src="~/assets/images/homepage/desktop/hermann-eho.jpg"
      />
    </div>
    <div class="flex justify-between items-start about mx-24 min-h-full">
      <div class="flex-col border-y border-light-gray mt-4 md:mt-0 flex  min-h-full">
        <div class="min-h-max flex-col  flex-1">
          <h2 class="title-2 pt-3 py-sm-4 pb-4 m-0">About Me</h2>
          <p class="text-justify flex-1">
            I’m a Frontend developer with about 4 year of experience,
            looking for a new role in an exciting company. I focus on writing
            accessible HTML, using modern CSS practices and writing clean
            JavaScript. When writing JavaScript code, I mostly use React, but I
            can adapt to whatever tools are required. I have experience in
            different language and frameworks such as react, vue js, symfony, laravel and all this can be useful. When
            I’m not coding, you’ll find me
            watching manga, or on my roof, tending to my plants. I’d love you to check out my work.
          </p>
        </div>
        <Button variant="secondary" to="/realisation" class="my-4">
          GO TO PORTFOLIO
        </Button>
      </div>
    </div>
  </div>
  <div class="my-40 flex items-center">
    <h3 class="title-2 max-w-sm pr-6">Interested in doing a project together?</h3>
    <span class="flex-1 border border-light-gray-2 h-0 mx-8"></span>

    <Button variant="secondary" to="/realisation" class="my-4">
      CONTACT ME
    </Button>
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

.about {
  @media (min-width: 768px) {
    max-width: 350px;
  }
}
</style>