<template>
  <header class="d-flex justify-content-between py-3 px-4">
    <router-link :to="{ name: 'homepage' }">
      <img src="../assets/deliverboo.png" alt="" />
    </router-link>
    <HeaderNav />
    <div class="header-buttons">
      <button><a href="http://127.0.0.1:8000/register">Registrati</a></button>
      <button><a href="http://127.0.0.1:8000/login">Log in</a></button>
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
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: transparent;
}
img {
  max-width: 150px;
  object-fit: contain;
}
</style>
