<template>
  <header class="d-flex justify-content-between py-3 px-4">
    <div style="width: 250px">
      <router-link :to="{ name: 'homepage' }">
        <img src="../assets/deliverboo.png" alt="" />
      </router-link>
    </div>
    <HeaderNav />
    <div class="header-buttons">
      <button class="ms-btn-primary">
        <a href="http://127.0.0.1:8000/register">Registrati</a>
      </button>
      <button class="ms-btn-primary">
        <a href="http://127.0.0.1:8000/login">Log in</a>
      </button>
      <!-- Bottone carrello -->
      <button
        class="ms-btn-primary"
        type="button"
        @click="show_cart"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i class="fa-solid fa-cart-shopping"></i>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrello</h5>
          <button
            type="button"
            @click="hide_cart"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div v-for="product in this.store.cartProducts">
            <div class="d-flex align-items-center" v-if="product.quantity > 0">
              <div>{{ product.name }}: {{ product.quantity }}</div>
              <div class="ms-3">
                <button
                  @click="store.addToCart(product.id)"
                  class="ms-btn-primary mt-3"
                >
                  +
                </button>
                <button
                  @click="store.dropToCart(product.id)"
                  class="ms-btn-primary bg-danger mt-3 my-3"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <button>
          <a href="../components/payment/Payment.vue"></a>Paga ora
        </button>
      </div>
    </div>
  </header>
  <!-- Carrello -->
  <!-- Fine carrello -->
</template>

<script>
import HeaderNav from "./header/HeaderNav.vue";
import { store } from "../store";

export default {
  name: "AppHeader",
  components: {
    HeaderNav,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    if (localStorage.cartProducts) {
      this.store.cartProducts = JSON.parse(localStorage.cartProducts);
    }
  },

  methods: {
    show_cart() {
      const myOffcanvas = document.getElementById("offcanvasRight");
      myOffcanvas.classList.add("show");
    },
    hide_cart() {
      const myOffcanvas = document.getElementById("offcanvasRight");
      myOffcanvas.classList.remove("show");
    },
  },
};

// show_cart("click", function() {
//   const myOffcanvas = document.getElementById('offcanvasRight')
//   myOffcanvas.classList.add("newClass");
// })

window.addEventListener("scroll", function () {
  let navbar = document.querySelector("header");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
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
