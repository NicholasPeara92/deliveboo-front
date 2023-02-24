<template>
  <header class="d-flex justify-content-between py-3 px-4">
    <router-link :to="{ name: 'homepage' }">
      <img src="../assets/deliverboo.png" alt="" />
    </router-link>
    <HeaderNav />
    <div class="header-buttons">
      <button class="ms-btn-primary">
        <a href="http://127.0.0.1:8000/register">Registrati</a>
      </button>
      <button class="ms-btn-primary">
        <a href="http://127.0.0.1:8000/login">Log in</a>
      </button>
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
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: transparent;
  align-items: center;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: opacify($color: #000000, $amount: 1);
  }
  &.scrolled {
    background-color: #2e3333;
    opacity: 0.7;
  }
}

img {
  max-width: 150px;
  object-fit: contain;
}
</style>
