<script setup lang="ts">

import CallToAction from "~/components/CallToAction.vue";
import HeroComponent from "~/components/HeroComponent.vue";
import AboutComponent from "~/components/AboutComponent.vue";
</script>

<template>
  <HeroComponent/>
  <AboutComponent/>
  <CallToAction/>
</template>

<style scoped lang="scss">
* {
  border: solid 1px red;
}
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