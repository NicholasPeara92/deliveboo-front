<template>
  <div class="container-fluid px-0">
    <Hero />
    <MainCarousel />
    <Restaurants />
    <Experience />
    <Partner />
    <FollowUs />
    <AboutUs />
    <ContactUs />
  </div>
</template>

<script>
import Hero from "../components/main/Hero.vue";
import MainCarousel from "../components/main/MainCarousel.vue";
import Partner from "../components/main/Partner.vue";
import FollowUs from "../components/main/FollowUs.vue";
import AboutUs from "../components/main/AboutUs.vue";
import ContactUs from "../components/main/ContactUs.vue";
import Restaurants from "./Restaurants.vue";
import Experience from "../components/main/Experience.vue";

export default {
  name: "HomePage",
  components: {
    Hero,
    MainCarousel,
    Partner,
    FollowUs,
    AboutUs,
    ContactUs,
    Restaurants,
    Experience,
  },
};
</script>

<style lang="scss" scoped></style>
