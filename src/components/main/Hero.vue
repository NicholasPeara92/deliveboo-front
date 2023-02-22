<template>
  <section class="hero">
    <div class="hero-content">
      <h1>I piatti dei ristoranti che ami, a domicilio</h1>
      <router-link :to="{ name: 'restaurants' }">
        <button>VAI AI RISTORANTI</button>
      </router-link>
    </div>
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
  .hero-content {
    text-align: center;
    position: absolute;
    bottom: 300px;
    left: 33%;
    color: white;

    button {
      margin-top: 50px;
      border-radius: 20px;
      padding: 10px 20px;
      border: 1px solid #1eeabd;
      background-color: #1eeabd;
      color: white;
      font-weight: bold;
    }
  }
}
</style>
