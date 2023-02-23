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
$primary-color: #00ccbc; // blu
$secondary-color: #6c757d; // grigio scuro
$font-color: #fff; // bianco
.hero {
  display: flex;
  justify-content: center;
  position: relative;
  height: 600px;
  h1 {
    font-size: 42px;
    font-weight: bold;
    color: $primary-color;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hero-content {
    text-align: center;
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 250px;
    flex-direction: column;
    color: white;

    button {
      margin-right: 10px;
      background-color: $primary-color;
      color: $font-color;
      border: none;
      border-radius: 50px;
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
      a {
        font-size: 28px;
        color: white;
        text-decoration: none;
      }
      &:hover {
        background-color: darken($primary-color, 10%);
      }

      &:active {
        background-color: darken($primary-color, 20%);
      }
    }
  }
}
</style>
