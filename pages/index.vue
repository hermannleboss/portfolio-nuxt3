<script setup lang="ts">
import projects from '~/assets/projects.json'
const featured = projects.filter(project => project.featured)

useSeoMeta({
  title: 'Hermann EHO | Senior Vue/Nuxt Engineer',
  description: 'Hermann EHO is a senior Vue/Nuxt engineer and Web3 tech lead in Lomé, Togo. Explore selected frontend and product work.',
  ogTitle: 'Hermann EHO | Senior Vue/Nuxt Engineer',
  ogDescription: 'Vue/Nuxt frontend leadership across complex product and Web3 workflows.',
  ogImage: 'https://hermanneho.com/images/cnc-preview.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <HeroComponent />
  <section class="work-section section-space" aria-labelledby="selected-work-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Selected work</p>
        <h2 id="selected-work-title">Products I helped make usable.</h2>
      </div>
      <NuxtLink class="text-link" to="/portfolio">See all work</NuxtLink>
    </div>
    <div class="project-grid">
      <PresentationCard v-for="project in featured" :key="project.id" :project="project" />
    </div>
  </section>
  <AboutComponent />
  <CallToAction />
</template>
