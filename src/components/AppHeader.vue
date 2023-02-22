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
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
    &.scrolled {     background-color: #2E3333;   }    
}

img {
  max-width: 150px;
  object-fit: contain;
}
button {
  margin-top: 10px;
  border-radius: 10px;
  padding: 10px 20px;
  border: 1px solid gray;
  background-color: white;
  font-weight: bold;
  margin-left: 5px;
  a{
    color: black;
    text-decoration: none;
    
  }
}



</style>
