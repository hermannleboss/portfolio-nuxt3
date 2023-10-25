<script setup lang="ts">
defineProps({
    blok: Object,
})
</script>
<template>
<!--      <pre>{{blok}}</pre>-->
    <StoryblokComponent v-for="blok in blok.body"
                        :key="blok._uid"
                        :blok="blok"></StoryblokComponent>
</template>
