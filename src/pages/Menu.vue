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
      searchProductName: "",
      searchProductType: "",
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

  computed: {
    typeList() {
      this.types = [];
      this.products.forEach((element) => {
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
        this.filteredProducts = this.products.filter((product) =>
          product.name.toLowerCase().includes(this.searchProductName)
        );
        this.filteredProducts = this.filteredProducts.filter((product) =>
          product.type
            .toLowerCase()
            .includes(this.searchProductType.toLowerCase())
        );
        return this.filteredProducts;
      } else {
        return this.products;
      }
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="header">
      <h1 class="pt-5 text-center">MENU</h1>
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
        :key="index"
        class="product-card"
      >
        <div class="product-image-box">
          <img :src="product.image_url" alt="{{ product.name }}" />
        </div>
        <div class="body">
          <h5>{{ product.name }}</h5>
          <h6>{{ product.type }}</h6>
        </div>
        <strong>{{ product.price }}€</strong>
      </div>
    </div>
  </div>
</template>

<style>
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
  border: 1px solid;
  padding: 10px;
  box-shadow: 5px 10px 8px #888888;
}
.product-image-box {
  width: 250px;
}
.product-image-box img {
  width: 100%;
  height: 200px;
  display: block;
}
</style>
