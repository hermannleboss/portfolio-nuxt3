<script setup lang="ts">
import projects from '~/assets/projects.json'
const featured = projects.filter(project => project.featured)
const earlier = projects.filter(project => !project.featured)

useSeoMeta({
  title: 'Selected work | Hermann EHO',
  description: 'Selected Vue, Nuxt and Web3 product work by Hermann EHO, with project roles and contributions.',
  ogTitle: 'Selected work | Hermann EHO',
  ogDescription: 'Selected Vue, Nuxt and Web3 product work by Hermann EHO.'
})
</script>

<template>
  <div class="page-intro">
    <p class="eyebrow">Work</p>
    <h1>Selected products, clear contributions.</h1>
    <p>Recent work across frontend, full-stack delivery and technical leadership.</p>
  </div>
  <div class="project-grid portfolio-grid">
    <PresentationCard v-for="project in featured" :key="project.id" :project="project" />
  </div>
  <section class="earlier-work section-space" aria-labelledby="earlier-work-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Earlier work</p>
        <h2 id="earlier-work-title">Where I learned and built.</h2>
      </div>
    </div>
    <ul>
      <li v-for="project in earlier" :key="project.id">
        <NuxtLink :to="`/portfolio/${project.id}`">
          <span>{{ project.title }}</span>
          <span>{{ project.summary }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
  <CallToAction />
</template>
