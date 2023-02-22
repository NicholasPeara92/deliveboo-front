<template>
  <header class="d-flex justify-content-between py-3 px-4">
    <a href="">
      <img src="../assets/deliverboo.png" alt="" />
    </a>
    <HeaderNav />
    <div class="header-buttons">
      <AppButton />
      <button>bottone</button>
    </div>
  </header>
</template>

<script>
import HeaderNav from "./header/HeaderNav.vue";
export default {
  name: "AppHeader",
  components: {
    HeaderNav,
  },
};
</script>

<style lang="scss" scoped>
header img {
  max-width: 150px;
  object-fit: contain;
}
</style>
