<template>
  <div class="container-fluid px-0">
    <Hero />
    <Carousel />
    <Restaurants />
    <Partner />
    <FollowUs />
    <AboutUs />
    <ContactUs />
  </div>
</template>

<script>
import Hero from "../components/main/Hero.vue";
import Carousel from "../components/main/Carousel.vue";
import Partner from "../components/main/Partner.vue";
import FollowUs from "../components/main/FollowUs.vue";
import AboutUs from "../components/main/AboutUs.vue";
import ContactUs from "../components/main/ContactUs.vue";
import Restaurants from "./Restaurants.vue";

export default {
  name: "HomePage",
  components: {
    Hero,
    Carousel,
    Partner,
    FollowUs,
    AboutUs,
    ContactUs,
    Restaurants,
  },
};
</script>

<style lang="scss" scoped></style>
