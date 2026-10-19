<script setup lang="ts">
interface Project {
  id: number
  title: string
  summary: string
  role: string
  status: string
  imageUrl: string
}

defineProps<{ project: Project }>()
</script>

<template>
  <article class="project-card">
    <NuxtLink :to="`/portfolio/${project.id}`" class="project-image-link" :aria-label="`Read about ${project.title}`">
      <img :src="project.imageUrl" :alt="`${project.title} product preview`" loading="lazy" width="600" height="380">
    </NuxtLink>
    <div class="project-card-body">
      <p class="project-meta">{{ project.status }}</p>
      <h3><NuxtLink :to="`/portfolio/${project.id}`">{{ project.title }}</NuxtLink></h3>
      <p>{{ project.summary }}</p>
      <p class="project-role">{{ project.role }}</p>
      <NuxtLink :to="`/portfolio/${project.id}`" class="text-link">Read the case study</NuxtLink>
    </div>
  </article>
</template>
