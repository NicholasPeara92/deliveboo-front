<template>
  <section class="hero">
    <div class="hero-content">
      <div class="d-flex justify-content-center align-items-center flex-column">
        <h1>
          I Piatti dei Ristoranti che Ami <br />
          a Domicilio
        </h1>
        <b>
          <p id="slogan">
            Ordina i piatti più amati da tutta la famiglia <br />
            e fai una pausa dai fornelli.
          </p>
          <p>
            <a id="login" href="http://127.0.0.1:8000/login">Accedi</a> per
            visualizzare il tuo profilo.
          </p>
        </b>
      </div>
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
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
  #slogan {
    color: white;
    font-size: 32px;
    display: block;
    @media only screen and (max-width: 576px) {
      font-size: 24px;
    }
  }
  #login {
    text-decoration: none;
    color: $primary-color;
    display: inline-block;
  }
  #login:hover {
    color: darken($primary-color, 10%);
  }
  h1 {
    font-size: 70px;
    font-weight: bold;
    color: $primary-color;
    @media only screen and (max-width: 576px) {
      font-size: 32px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hero-content {
    height: 100%;
    width: 100%;
    text-align: center;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: white;
    z-index: 1;
    & a {
      font-size: 20px;
    }
    @media only screen and (max-width: 576px) {
      margin-top: 0;
      top: 120px;
    }

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
        font-size: 45px;
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
