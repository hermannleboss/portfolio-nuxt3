<template>
  <div class="justify-start block md:flex mt-40">
    <div class="w-full">
      <img
          alt="Profile image"
          class="w-full"
          src="../assets/images/homepage/desktop/hermann-eho.jpg"
      />
    </div>
    <div class="flex justify-between items-start about mx-24 min-h-full">
      <div class="flex-col border-y border-light-gray mt-4 md:mt-0 flex  min-h-full">
        <div class="min-h-max flex-col  flex-1">
          <h2 class="title-2 font-serif pt-3 py-sm-4 pb-4 m-0">About Me</h2>
          <p class="text-justify flex-1">
            I’m a Frontend developer with about 4 year of experience,
            looking for a new role in an exciting company. I focus on writing
            accessible HTML, using modern CSS practices and writing clean
            JavaScript. When writing JavaScript code, I mostly use React, but I
            can adapt to whatever tools are required. I have experience in
            different language and frameworks such as react, vue js, symfony, laravel and all this can be useful. When
            I’m not coding, you’ll find me
            watching manga, or on my roof, tending to my plants. I’d love you to check out my work.
          </p>
        </div>
        <Button variant="secondary" to="/portfolio" class="my-4">
          GO TO PORTFOLIO
        </Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutComponent'
}
</script>
<style scoped lang="scss">
* {
  border: solid 1px red;
}

.about {
  @media (min-width: 768px) {
    max-width: 350px;
  }
}
</style>