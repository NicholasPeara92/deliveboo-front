<template>
  <div class="container-fluid px-0">
    <Hero />
    <Partner />
  </div>
</template>

<script>
import Hero from "../components/main/Hero.vue";
import Partner from "../components/main/Partner.vue";
export default {
  name: "HomePage",
  components: {
    Hero,
    Partner,
  },
};
</script>

<style lang="scss" scoped></style>
