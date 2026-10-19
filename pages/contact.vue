<script setup lang="ts">
useSeoMeta({
  title: 'Contact | Hermann EHO',
  description: 'Contact Hermann EHO about senior Vue/Nuxt engineering roles and focused remote contracts.',
  ogTitle: 'Contact Hermann EHO',
  ogDescription: 'Get in touch about senior Vue/Nuxt engineering roles and focused remote contracts.'
})
</script>

<template>
  <div class="contact-page">
    <div>
      <p class="eyebrow">Contact</p>
      <h1>Let’s build something clear and dependable.</h1>
    </div>
    <div class="contact-copy">
      <p>
        I am based in Lomé, Togo (UTC+0) and work with remote teams. I am interested in
        senior Vue/Nuxt roles and focused contracts where frontend quality matters.
      </p>
      <a class="contact-email" href="mailto:hermanneho@gmail.com">hermanneho@gmail.com</a>
      <p>You can also review my work and experience:</p>
      <ul class="contact-links">
        <li><a href="https://github.com/hermannleboss">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/hermann-eho/">LinkedIn</a></li>
        <li><NuxtLink to="/portfolio">Selected work</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>
