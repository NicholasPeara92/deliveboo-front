<template>
  <header class="d-flex justify-content-between py-3 px-4">
    <div style="width: 250px">
      <router-link :to="{ name: 'homepage' }">
        <!-- da inserire logo per mobile -->
        <img src="../assets/deliverboo.png" alt="" />
      </router-link>
    </div>
    <div class="header-buttons">
      <button class="ms-btn-primary">
        <a href="http://127.0.0.1:8000/register">Registrati</a>
      </button>
      <button class="ms-btn-primary">
        <a href="http://127.0.0.1:8000/login">Log in</a>
      </button>
      <!-- Bottone carrello -->
      <button
        class="ms-btn-primary position-relative"
        type="button"
        @click="show_cart"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i class="fa-solid fa-cart-shopping"></i>

        <div
          v-if="store.getTotalQuantity() > 0"
          class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2"
        >
          {{ store.getTotalQuantity() }}
        </div>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasRightLabel">Carrello</h3>
          <button
            type="button"
            @click="hide_cart"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div
            v-for="product in this.store.cartProducts"
            v-if="this.store.cartProducts.length > 0"
          >
            <div class="d-flex align-items-center" v-if="product.quantity > 0">
              <div class="x">{{ product.name }}: {{ product.quantity }}</div>
              <div class="btn ms-3">
                <button
                  @click="store.addToCart(product)"
                  class="ms-btn-primary mt-3"
                >
                  +
                </button>
                <button
                  @click="store.dropToCart(product)"
                  class="ms-btn-primary bg-danger mt-3 my-3"
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div>
            <span
              ><strong>Quantità totale dei prodotti:</strong>
              {{ store.getTotalQuantity() }}</span
            >
          </div>
          <div>
            <span><strong>Totale:</strong> {{ store.getTotalPrice() }} €</span>
          </div>
          <button class="paga" @click="store.clear_cart()">SVUOTA</button>
        </div>
        <div v-if="store.getTotalQuantity() > 0">
          <router-link :to="{ name: 'order' }"
            ><button class="paga">Paga ora</button></router-link
          >
        </div>
      </div>
    </div>
  </header>
  <!-- Carrello -->
  <!-- Fine carrello -->
</template>

<script>
import { store } from "../store";

export default {
  name: "AppHeader",

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
$color-bg: #ebecf0;

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
    // flex-direction: column;
    justify-content: flex-end;
    background-color: opacify($color: $color-bg, $amount: 1);
  }
  &.scrolled {
    background-color: $color-bg;
  }
}

img {
  max-width: 150px;
  object-fit: contain;
}
.x {
  width: 55%;
}
.paga {
  margin-top: 20px;
  margin-right: 10px;
  background-color: $primary-color;
  color: $font-color;
  border: none;
  border-radius: 50px;
  width: 90%;
  height: 40px;
  font-size: 24px;
  margin-bottom: 5px;
  margin-left: 25px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &:active {
    background-color: darken($primary-color, 20%);
  }
}
</style>
