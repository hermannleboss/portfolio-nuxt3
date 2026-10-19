<script setup lang="ts">
const menuOpen = ref(false)
const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <header class="site-header">
    <div class="shell nav-inner">
      <NuxtLink class="wordmark" to="/" aria-label="Hermann EHO, home">Hermann EHO<span>.</span></NuxtLink>
      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? 'Close menu' : 'Menu' }}
      </button>
      <nav id="primary-navigation" class="nav-links" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <NuxtLink to="/" :aria-current="route.path === '/' ? 'page' : undefined">Home</NuxtLink>
        <NuxtLink to="/portfolio" :aria-current="route.path.startsWith('/portfolio') ? 'page' : undefined">Work</NuxtLink>
        <NuxtLink to="/contact" :aria-current="route.path === '/contact' ? 'page' : undefined">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>
