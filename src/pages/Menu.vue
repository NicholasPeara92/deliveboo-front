<template>
  <h3>Menu</h3>
  <div v-for="product in restaurant.products">
    <h6>{{ product.name }}</h6>
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

<style></style>
