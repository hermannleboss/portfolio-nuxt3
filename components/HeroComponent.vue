<template>
  <div class="relative">
    <img
        alt="image"
        class="hidden xl:block w-full"
        src="../assets/images/homepage/desktop/image-homepage-hero.jpg"
    />
    <img
        alt="image"
        class="hidden md:block xl:hidden w-full"
        src="../assets/images/homepage/tablet/image-homepage-hero.jpg"
    />
    <img
        alt="image"
        class="block md:hidden w-full"
        src="../assets/images/homepage/mobile/image-homepage-hero.jpg"
    />

    <div class="hero-text sm:absolute border border-very-light-gray bg-very-light-gray bottom-0 left-0">
      <h1 class="title-1 font-serif text-black font-bold mb-12 mt-6 sm:mt-0">
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
<script>
export default {
  name: 'HeroComponent'
}
</script>
<style scoped lang="scss">
* {
  border: solid 1px red;
}

</style>