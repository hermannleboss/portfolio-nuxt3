<script setup lang="ts">

</script>

<template>
  <div class="container-fluid">
    <div class="py-8 flex justify-between">

      <NuxtLink to="/">
        <svg
            class="nav-logo"
            fill="none"
            viewBox="0 0 61 32"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              clip-rule="evenodd"
              d="M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z"
              fill="#33323D"
              fill-rule="evenodd"
          />
        </svg></NuxtLink>
      <div>
        <div class="flex gap-12">
          <NuxtLink to="/" :class="$route.path === '/' ? 'text-cyan': ''">HOME</NuxtLink>
          <NuxtLink to="/portfolio" :class="$route.path === '/portfolio' ? 'text-cyan': ''">PORTFOLIO</NuxtLink>
          <NuxtLink to="/contact" :class="$route.path === '/contact' ? 'text-cyan': ''">CONTACT</NuxtLink>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

a{
  font-size: 12px;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nav-logo {
  width: 61px;
  height: 32px;
}
</style>