<template>
  <div class="container-fluid px-0">
    <Hero />
    <Partner />
    <AboutUs />
  </div>
</template>

<script>
import Hero from "../components/main/Hero.vue";
import Partner from "../components/main/Partner.vue";
import AboutUs from "../components/main/AboutUs.vue";
export default {
  name: "HomePage",
  components: {
    Hero,
    Partner,
    AboutUs,
  },
};
</script>

<style lang="scss" scoped></style>
