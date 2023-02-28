<template>
  <div class="container-fluid px-0">
    <HeaderNav />
    <Hero />
    <MainCarousel />
    <Restaurants />
    <Partner />
    <FollowUs />
    <AboutUs />
    <ContactUs />
  </div>
</template>

<script>
import HeaderNav from "../components/header/HeaderNav.vue";
import Hero from "../components/main/Hero.vue";
import MainCarousel from "../components/main/MainCarousel.vue";
import Partner from "../components/main/Partner.vue";
import FollowUs from "../components/main/FollowUs.vue";
import AboutUs from "../components/main/AboutUs.vue";
import ContactUs from "../components/main/ContactUs.vue";
import Restaurants from "./Restaurants.vue";

export default {
  name: "HomePage",
  components: {
    HeaderNav,
    Hero,
    MainCarousel,
    Partner,
    FollowUs,
    AboutUs,
    ContactUs,
    Restaurants,
  },
};
</script>

<style lang="scss" scoped></style>
