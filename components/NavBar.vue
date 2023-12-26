<script setup lang="ts">
const activeNav = ref(false)
const onClickNav = () => {
  activeNav.value= !activeNav.value
  console.log('clicked', activeNav.value)
}
</script>

<template>
  <div class="container-fluid relative">
    <div class="py-8 flex justify-between">
      <NuxtLink to="/" class="min-h-[40px] sm:min-h-full">
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
        </svg>
      </NuxtLink>
      <div class="inline-block sm:hidden cursor-pointer p-2" @click="onClickNav()">
        <img src="/images/icons/hamburger.svg" alt="Hamburger" v-if="!activeNav" class="w-[24p] h-[13px]">
        <img src="/images/icons/close.svg" alt="Close icon"  class="w-[24p] h-[13px]" v-else>
      </div>

      <div  v-if="activeNav" class="sm:hidden w-48 p-10 absolute z-10  mt-10 right-0 origin-top-right  bg-black text-white" aria-orientation="vertical" >
        <div class="flex flex-col gap-8">
          <NuxtLink to="/">HOME</NuxtLink>
          <NuxtLink to="/portfolio">PORTFOLIO</NuxtLink>
          <NuxtLink to="/contact">CONTACT</NuxtLink>
        </div>
      </div>
      <div class="gap-12 hidden sm:flex">
        <NuxtLink to="/" :class="$route.path === '/' ? 'text-cyan': ''">HOME</NuxtLink>
        <NuxtLink to="/portfolio" :class="$route.path === '/portfolio' ? 'text-cyan': ''">PORTFOLIO</NuxtLink>
        <NuxtLink to="/contact" :class="$route.path === '/contact' ? 'text-cyan': ''">CONTACT</NuxtLink>
      </div>
    </div>
  </div>

</template>

<style scoped>

a {
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