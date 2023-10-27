<script setup lang="ts">
defineProps({
    blok: Object,
})
</script>
<template>
        <div class="container project-page">
            <div class="project-title">
                <h1>{{blok.name || "New Project"}}</h1>
                <NuxtLink :to="{name:'index'}">Go Back</NuxtLink>
            </div>
            <div class="project-description">
                <img :src="blok.image?.filename || 'https://picsum.photos/300/175'" :alt="blok.image?.alt">
                <p>{{ blok.description || `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet quam
                 efficitur, efficitur sem id, facilisis magna. Quisque tristique sapien nec nibh dictum, id tincidunt
                  orci suscipit. Integer eget finibus massa. Cras ac sodales dolor. Vestibulum odio mi, bibendum eu
                  suscipit eget, aliquam vel lacus. Praesent quis tristique sem.`}}</p>
            </div>
        </div>
</template>