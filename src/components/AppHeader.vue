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
window.addEventListener('scroll', function() {
  let navbar = document.querySelector('header');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
</script>

<style lang="scss" scoped>
$primary-color: #00ccbc; // blu
$secondary-color: #6c757d; // grigio scuro
$font-color: #fff; // bianco

header {
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    background-color: opacify($color: #000000, $amount: 1);
  }
    &.scrolled {     background-color: #2E3333;   }    
}

img {
  max-width: 150px;
  object-fit: contain;
}
button {
  margin-right:10px;
  background-color: $primary-color;
  color: $font-color;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &:active {
    background-color: darken($primary-color, 20%);
  }
  a{
    color: white;
    text-decoration: none;
    
  }
}



</style>
