<template>
  <h3>Menu</h3>
  <div class="menu-container">
    
    <div v-for="product in restaurant.products" class="product-card">
        <div class="product-image-box">
            <img :src="product.image_url" alt="{{ product.name }}">
        </div>
        <h5>{{ product.name }}</h5>
        <h6>{{ product.type }}</h6>
        <strong>{{ product.price }}€</strong>
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
    };
  },

  created() {
    axios
      .get(`${this.store.api_url}/restaurant/${this.$route.params.slug}`)
      .then((response) => {
        this.restaurant = response.data;
      });
  },
};
</script>

<style>
.menu-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
}
.product-card{
    border: 1px solid black;
    padding: 10px;
    margin-bottom: 10px;
}
.product-image-box{
    max-width: 300px;
}
.product-image-box img{
    width: 100%;
    height: 100px;
    display: block;
}
</style>
