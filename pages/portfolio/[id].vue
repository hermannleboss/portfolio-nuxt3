<script setup lang="ts">
const appStore = useAppStore()
appStore.setRealisations([])
const presentation = {
  imageUrl: '~/assets/images/homepage/desktop/image-homepage-hero.jpg',
  hero: "/images/detail/desktop/image-bookmark-hero.jpg",
  preview: ["/images/detail/desktop/image-bookmark-preview-1.jpg", "/images/detail/desktop/image-bookmark-preview-2.jpg"],
  title: "Bookmark",
  background: ` This project was a front-end challenge from Frontend Mentor. It’s a platform that enables you to practice building
          websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website
          should look at different screen sizes. Creating these projects has helped me refine my workflow and solve
          real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my
          style.`,
  description: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along
          with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
  skills: ["Interaction Design", "Front End Development", "HTML", "CSS", "JS"],
  url: "https://celebrityfanalyzer.com/"
}
</script>

<template>
  <NuxtImg
      alt="image"
      class="w-full"
      :src="presentation.hero"
  />
  <div class="lg:flex justify-between lg:gap-8">
    <div class="py-6 mt-10 border-y border-light-gray block md:grid md:grid-cols-2 lg:block lg:max-w-[350px]">
      <div class="flex flex-col gap-6 items-start md:pr-8">
        <h2 class="title-2 font-serif">{{ presentation.title }}</h2>
        <p class="md:hidden lg:block">
          {{ presentation.description }}
        </p>
        <p><span
            v-for="(skill, index) in presentation.skills">{{
            skill
          }} {{ index !== presentation.skills.length - 1 ? ' / ' : '' }} </span>
        </p>
        <Button variant="secondary" :to="presentation.url">
          VIEW WEBSITE
        </Button>
      </div>
      <div class="hidden md:block lg:hidden">
        <p>
          {{ presentation.description }}
        </p>
      </div>
    </div>
    <div class="lg:max-w-[635px]">
      <div class="gap-6 py-6">
        <h2 class="title-2 font-light font-serif mt-12 mb-7">Project Background</h2>
        <p>
          {{ presentation.background }}
        </p>
      </div>
      <div>
        <h2 class="title-2 font-light font-serif my-10">Static Previews</h2>
        <div class="flex flex-col gap-8">
          <NuxtImg v-for="image in presentation.preview"
                   alt="image"
                   class="w-full"
                   :src="image"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="border-y border-light-gray grid grid-cols-2 divide-x divide-light-gray mt-16 sm:mt-20 md:mt-16">
    <div class="py-6 sm:flex  sm:gap-8 sm:items-center ">
      <NuxtImg src="/images/icons/arrow-left.svg" alt="Left Arrow" class="w-[8px] h-[16px]"/>
      <div>
        <p class="title-3 mt-4">Fylo</p>
        <p class="opacity-50">Previous Project</p>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row-reverse text-right  py-6  items-end sm:items-center sm:gap-8">
      <NuxtImg src="/images/icons/arrow-right.svg" alt="Left Arrow" class="w-[8px] h-[16px]"/>
      <div>
        <p class="title-3 mt-4">Bookmark</p>
        <p class="opacity-50">Next Project</p>
      </div>
    </div>
  </div>

  <CallToAction/>
</template>

<style scoped>

</style>