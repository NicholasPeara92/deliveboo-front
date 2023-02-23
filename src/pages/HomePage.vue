<template>
  <div class="container-fluid px-0">
    <Hero />
    <Partner />
    <FollowUs />
    <AboutUs />
    <ContactUs />
  </div>
</template>

<script>
import Hero from "../components/main/Hero.vue";
import Partner from "../components/main/Partner.vue";
import FollowUs from "../components/main/FollowUs.vue";
import AboutUs from "../components/main/AboutUs.vue";
import ContactUs from "../components/main/ContactUs.vue";
export default {
  name: "HomePage",
  components: {
    Hero,
    Partner,
    FollowUs,
    AboutUs,
    ContactUs,
  },
};
</script>

<style lang="scss" scoped></style>
