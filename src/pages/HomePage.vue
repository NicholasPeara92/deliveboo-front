<template>
  <div class="container-fluid px-0">
    <Hero />
    <AboutUs />
  </div>
</template>

<script>
import Hero from "../components/main/Hero.vue";
import AboutUs from "../components/main/AboutUs.vue";
export default {
  name: "HomePage",
  components: {
    Hero,
    AboutUs,
  },
};
</script>

<style lang="scss" scoped></style>
