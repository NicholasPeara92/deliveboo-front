<template>
  <section>
    <h1>Ristoranti:</h1>
    <div class="restaurants_container">
      <div v-for="restaurant in restaurants" class="restaurants_card">
        <h4>{{ restaurant.name }}</h4>
        <ul>
          <li>Tel: {{ restaurant.telephone }}</li>
          <li>Categoria: {{ restaurant.category }}</li>
        </ul>
        <a href="#">Guarda il menu</a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "Restaurants",
  data() {
    return {
      store,
      restaurants: [],
    };
  },

  created() {
    axios.get(`${this.store.api_url}/restaurants`).then((response) => {
      this.restaurants = response.data;
    });
  },
};
</script>

<style scoped>
section {
  padding-top: 100px;
}
.restaurants_container {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.restaurants_card {
  min-width: 250px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
}
</style>
