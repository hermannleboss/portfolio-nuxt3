<script setup lang="ts">
import projects from '~/assets/projects.json'
const route = useRoute()
const project = projects.find(item => String(item.id) === route.params.id)
if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' })
}

useSeoMeta({
  title: `${project.title} | Hermann EHO`,
  description: project.summary,
  ogTitle: `${project.title} | Hermann EHO`,
  ogDescription: project.summary,
  ogImage: `https://hermanneho.com${project.imageUrl}`,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <article class="case-study">
    <NuxtLink class="text-link back-link" to="/portfolio">← Back to all work</NuxtLink>
    <header class="case-header">
      <div>
        <p class="eyebrow">{{ project.status }} · {{ project.period }}</p>
        <h1>{{ project.title }}</h1>
        <p class="case-summary">{{ project.summary }}</p>
      </div>
      <p class="case-role"><strong>My role</strong><br>{{ project.role }}</p>
    </header>
    <img class="case-image" :src="project.imageUrl" :alt="`${project.title} product preview`" width="1110" height="650">
    <div class="case-content">
      <div>
        <p class="eyebrow">Contribution</p>
        <h2>What I worked on</h2>
      </div>
      <div>
        <ul class="contribution-list">
          <li v-for="contribution in project.contributions" :key="contribution">{{ contribution }}</li>
        </ul>
        <p class="case-stack"><strong>Tools and technologies:</strong> {{ project.stack.join(', ') }}</p>
        <a v-if="project.externalUrl" class="button button-primary" :href="project.externalUrl">{{ project.externalLabel }}</a>
      </div>
    </div>
  </article>
  <CallToAction />
</template>
