<template>
  <div class="justify-start block md:flex mt-40 gap-24" id="about">
    <div class="max-w-[540px] w-full md:min-w-[280px] ">
      <!-- <img
          alt="Profile image"
          class="w-full min-h-max object-cover h-full"
<<<<<<< Updated upstream
          src="../assets/images/homepage/desktop/hermann-eho.jpg"
=======
          src="/images/homepage/desktop/hermann-eho.jpg"
      /> -->
      <img
          alt="Profile image"
          class="w-full min-h-max object-cover h-full"
          src="/images/homepage/desktop/hermann.jpg"
>>>>>>> Stashed changes
      />
    </div>
    <div class="flex justify-between items-start min-h-full md:max-w-[350px]">
      <div class="flex-col border-y border-light-gray mt-4 md:mt-0 flex  min-h-full items-start">
        <div class="min-h-max flex-col  flex-1">
          <h2 class="title-2 font-serif pt-8 pb-7 sm:pt-12 m-0">About Me</h2>
          <p class="text-justify flex-1">
            Hi, I’m Hermann EHO, a passionate Web3 Developer, Team Lead, and Freelance Consultant from Togo. With years of experience building scalable and user-centric web solutions, I specialize in creating robust blockchain-based applications and dynamic web platforms that empower businesses to thrive in the digital space. When
            I’m not coding, you’ll find me
            watching manga, or on my roof, tending to my plants. I’d love you to check out my work.
          </p>
        </div>
        <Button variant="secondary" to="/portfolio" class="my-4 sm:mb-12">
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

.about {
  @media (min-width: 768px) {
    max-width: 350px;
  }
}
</style>