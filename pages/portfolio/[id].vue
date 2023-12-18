<script setup lang="ts">
const appStore = useAppStore()
appStore.setRealisations([])
// Import a projects.json file
import projectsData from "~/assets/projects.json"

// Type the projects
interface Project {
  id: string
  title: string
  hero: string
  preview: string[]
  background: string
  description: string
  skills: string[]
  url: string
}

const projects: Project[] = projectsData
// Vue router

const router = useRouter()

const routeId = parseInt(router.currentRoute.value.params.id as string)
const presentation = computed(() => {
  return projects.find((project, index) => {
    return index === parseInt(router.currentRoute.value.params.id as string)
  })
})
const next = computed(() => {
  if (projects.length === parseInt(router.currentRoute.value.params.id as string) + 1) return projects[0]
  // if (projects.length === parseInt(router.currentRoute.value.params.id as string) + 1) null
  return projects[parseInt(router.currentRoute.value.params.id as string) + 1]
})

const prev = computed(() => {
  if (parseInt(router.currentRoute.value.params.id as string) === 0) return projects[projects.length - 1]
  if (parseInt(router.currentRoute.value.params.id as string) === 0) return null
  return projects[parseInt(router.currentRoute.value.params.id as string) - 1]
})
</script>

<template>
  <NuxtImg
      alt="image"
      class="w-full"
      placeholder
      width="1110px"
      height="500px"
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
                   width="635px"
                   height="400px"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="border-y border-light-gray grid grid-cols-2 divide-x divide-light-gray mt-16 sm:mt-20 md:mt-16">
    <NuxtLink :to="'/portfolio/'+(routeId==0 ? projects.length-1 : routeId-1)"
              class="py-6 sm:flex  sm:gap-8 sm:items-center border-r-1 border-light-gray" v-if="prev">
      <NuxtImg src="/images/icons/arrow-left.svg" alt="Left Arrow" class="w-[8px] h-[16px]"/>
      <span>
        <span class="title-3 mt-4 block">{{ prev.title }}</span>
        <span class="opacity-50 block">Previous Project</span>
      </span>
    </NuxtLink>
    <NuxtLink :to="'/portfolio/'+(routeId==projects.length-1 ? 0 : routeId+1)"
              class="flex flex-col sm:flex-row-reverse text-right  py-6  items-end sm:items-center sm:gap-8"
              v-if="next">
      <NuxtImg src="/images/icons/arrow-right.svg" alt="Left Arrow" class="w-[8px] h-[16px]"/>
      <span>
        <span class="title-3 mt-4 block">{{ next.title }}</span>
        <span class="opacity-50 block">Next Project</span>
      </span>
    </NuxtLink>
  </div>

  <CallToAction/>
</template>

<style scoped>

</style>