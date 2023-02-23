<template>
  <div class="container mt-5">
    <h3 class="pt-5">Menu</h3>
    <div class="menu-container">
      <div v-for="product in products" class="product-card">
        <div class="product-image-box">
          <img :src="product.image_url" alt="{{ product.name }}" />
        </div>
        <h5>{{ product.name }}</h5>
        <h6>{{ product.type }}</h6>
        <strong>{{ product.price }}€</strong>
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
      restaurant: [],
      products: [],
    };
  },

  created() {
    axios
      .get(`${this.store.api_url}/restaurant/${this.$route.params.slug}`)
      .then((response) => {
        this.restaurant = response.data;
        this.products = this.restaurant.products.sort((c1, c2) =>
          c1.type > c2.type ? 1 : c1.type < c2.type ? -1 : 0
        );
      });
  },
};
</script>

<style>
.menu-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px;
}
.product-card {
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}
.product-image-box {
  max-width: 300px;
}
.product-image-box img {
  width: 100%;
  height: 100px;
  display: block;
}
</style>
