<template>
  <div class="container-fluid">
    <div class="header">
      <div class="error-toast" v-if="store.showError">
        <p>{{ store.messageError }}</p>
      </div>
      <h1 style="text-transform: uppercase" class="pt-3 text-center">
        {{ store.restaurant.name }}
      </h1>
      <div class="input d-flex justify-content-center mt-4">
        <input
          type="text"
          placeholder="Inserisci il nome"
          v-model="searchProductName"
          class="me-2"
        />
        <select v-model="searchProductType" name="type" id="type">
          <option value="">Nessuna Tipologia</option>
          <option v-for="type in typeList">{{ type }}</option>
        </select>
      </div>
    </div>

    <div class="menu-container justify-content-center">
      <div
        v-for="(product, index) in productList"
        :key="product.id"
        class="product-card d-flex flex-column align-items-center"
      >
        <h5 class="py-2" style="text-transform: uppercase">
          {{ product.name }}
        </h5>
        <div class="product-image-box">
          <img :src="product.image_url" alt="{{ product.name }}" />
        </div>
        <div class="body">
          <h6 class="pt-3" style="text-transform: uppercase">
            {{ product.type }}
          </h6>
        </div>
        <strong class="d-block">{{ product.price }}€</strong>
        <div>
          <button
            @click="store.addToCart(product)"
            class="mt-3 style-button"
            v-if="product.quantity === 0"
            style="color: #00ccbc"
          >
            Aggiungi al carrello
          </button>
          <div v-else>
            <button
              @click="store.addToCart(product)"
              class="mt-3 style-button unit"
            >
              <i class="fa-solid fa-plus"></i>
            </button>
            <span
              ><b>{{ product.quantity }}</b></span
            >
            <button
              @click="store.dropToCart(product)"
              class="unit mt-3 my-3 ms-2 style-button"
            >
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "Menu",
  data() {
    return {
      store,
      searchProductName: "",
      searchProductType: "",
    };
  },

  watch: {
    products(newProducts) {
      localStorage.products = JSON.stringify(newProducts);
    },
  },

  created() {
    store.getProducts(this.$route.params.slug);
  },

  computed: {
    typeList() {
      this.types = [];
      this.store.products.forEach((element) => {
        if (!this.types.includes(element.type)) {
          this.types.push(element.type);
        }
      });
      return this.types;
    },
    productList() {
      if (
        this.searchProductName.length > 0 ||
        this.searchProductType.length > 0
      ) {
        this.filteredProducts = this.store.products.filter((product) =>
          product.name.toLowerCase().includes(this.searchProductName)
        );
        this.filteredProducts = this.filteredProducts.filter((product) =>
          product.type
            .toLowerCase()
            .includes(this.searchProductType.toLowerCase())
        );
        console.log(this.filteredProducts);
        return this.filteredProducts;
      } else {
        return this.store.products;
      }
    },
  },
};
</script>

<style scoped lang="scss">
$ruler: 16px;
$color-red: #ae1100;
$color-bg: #ebecf0;
$color-shadow: #babecc;
$color-white: #fff;

.container-fluid {
  background-color: $color-bg;
}
.error-toast {
  background-color: transparent;
  width: 500px;
  text-align: center;
  padding: 20px 10px 40px 10px;
  color: $color-red;
  margin: auto;
  border-radius: 10px;
  font-weight: bold;
  p {
    margin-bottom: 0;
  }
}
input,
select {
  letter-spacing: -0.2px;
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler * 20;
  padding: $ruler;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
  margin-right: 8px;
  box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
  width: 350px;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  &:focus {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }
}

.input {
  padding-bottom: 5px;
}

.header {
  padding-top: 100px;
}

.menu-container {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding: 70px;
}

.product-card {
  border: 1px solid;
  padding: 10px;
  margin: 0 1.25rem 0.625rem 0;
  border-radius: 5%;
  border: 0;
  outline: 0;
  padding: 14px;
  box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
  transition: all 0.3s;
  @media only screen and (max-width: 576px) {
    margin-right: 0;
  }
}
.product-card:hover {
  box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;
  position: relative;
  // scale: (1.02);
  z-index: 3;
}
.product-image-box {
  width: 250px;
}
.product-image-box img {
  width: 100%;
  height: 200px;
  display: block;
  border-radius: 20px;
  object-fit: cover;
}

h1,
h5,
input,
select,
.product-card,
i {
  color: $primary_color;
}

.style-button {
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler * 20;
  padding: $ruler;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px $color-white, 5px 5px 20px $color-shadow;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;
  }

  &:active {
    box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px;
  }
  &.unit {
    border-radius: 8px;
    line-height: 0;
    width: $ruler * 3;
    height: $ruler * 3;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    font-size: $ruler * 1.2;
  }
}
</style>
