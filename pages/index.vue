<template>
  Index page
    {{story}}
</template>

<script setup lang="ts">

const story = await useStoryblok('home', {
      version: useRoute().query._storyblok ? 'draft' : "published",
      //resolve_relations: 'featuredProjects.projects'
    }
//, {resolveRelations: 'featuredProjects.projects'}
)
</script>

<style scoped>

</style>