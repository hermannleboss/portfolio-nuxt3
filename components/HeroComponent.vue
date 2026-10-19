<template>
  <section class="hero" aria-labelledby="home-title">
    <div class="hero-copy">
      <p class="eyebrow">Hermann EHO · Lomé, Togo · Remote</p>
      <h1 id="home-title">Senior Vue/Nuxt engineer building products people can trust.</h1>
      <p class="hero-intro">
        I lead frontend delivery for complex products, from education platforms to Web3
        governance and payments. I turn difficult workflows into clear, tested interfaces.
      </p>
      <div class="actions">
        <NuxtLink class="button button-primary" to="/portfolio">Explore my work</NuxtLink>
        <NuxtLink class="text-link" to="/contact">Get in touch</NuxtLink>
      </div>
    </div>
    <div class="hero-portrait">
      <img
        src="/images/homepage/desktop/hermann.jpg"
        alt="Portrait of Hermann EHO"
        width="720"
        height="720"
        fetchpriority="high"
      >
      <p>Vue and Nuxt at the front. Product thinking across the stack.</p>
    </div>
  </section>
</template>
