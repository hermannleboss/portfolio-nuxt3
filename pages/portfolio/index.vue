<script setup lang="ts">

import PresentationCard from "~/components/PresentationCard.vue";
import CallToAction from "~/components/CallToAction.vue";

import projectsData from "~/assets/projects.json"

// Type the projects
interface Project {
  id: string
  title: string
  hero: string
  preview: string[]
  background: string
  description: string
  skills: string[]
  url: string
  imageUrl: string
}

const projects: Project[] = projectsData
</script>

<template>
  <div class="flex flex-col gap-16">
    <PresentationCard v-for="(project, index) in projects" :presentation="{...project, url: '/portfolio/'+index}"
                      :variant="index%2==0 ? 'secondary' : ''"></PresentationCard>
  </div>
  <CallToAction/>
</template>

<style scoped>

</style>