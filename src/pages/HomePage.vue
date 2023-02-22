<template>
  <div class="container-fluid px-0">
    <Hero />
    <Partner />
    <AboutUs />
    <ContactUs />
  </div>
</template>

<script>
import Hero from "../components/main/Hero.vue";
import Partner from "../components/main/Partner.vue";
import AboutUs from "../components/main/AboutUs.vue";
import ContactUs from "../components/main/ContactUs.vue";
export default {
  name: "HomePage",
  components: {
    Hero,
    Partner,
    AboutUs,
    ContactUs,
  },
};
</script>

<style lang="scss" scoped></style>
