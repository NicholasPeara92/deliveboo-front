<template>
  <section class="hero">
    <router-link :to="{ name: 'restaurants' }">
      <button>VAI AI RISTORANTI</button>
    </router-link>
    <img src="../../assets/Fast-food-hamburger-cola_5120x2880.jpg" alt="" />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    bottom: 150px;
    left: 48%;
    border-radius: 20px;
    padding: 10px 20px;
    border: 1px solid #1eeabd;
    background-color: #1eeabd;
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
  }
}
</style>
