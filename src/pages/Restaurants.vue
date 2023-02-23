<template>
  <div class="container">
    <h1>Ristoranti:</h1>
    <input
      type="text"
      placeholder="Inserisci il nome"
      v-model="searchRestaurantName"
    />
    <div class="restaurants-container">
      <div
        v-for="(restaurant, index) in restaurantList"
        :key="index"
        class="restaurants-card d-flex flex-column justify-content-center align-items-center"
      >
        <h4>{{ restaurant.name }}</h4>
        <div>
          <img width="100" class="my-3" :src="restaurant.image_url" alt="" />
        </div>
        <ul>
          <li>Tel: {{ restaurant.telephone }}</li>
          <li>
            Categorie:
            <ul>
              <li v-for="category in restaurant.categories">
                {{ category.name }}
              </li>
            </ul>
          </li>
        </ul>
        <!-- <router-link :to="{ name: 'menu' }">Guarda il menu</router-link> -->

        <router-link :to="{ name: 'menu', params: { slug: restaurant.slug } }"
          >Guarda il menu</router-link
        >
      </div>
    </div>
  </div>
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
      searchRestaurantName: "",
    };
  },

  created() {
    axios.get(`${this.store.api_url}/restaurants`).then((response) => {
      this.restaurants = response.data;
    });
  },
  computed: {
    restaurantList() {
      if (this.searchRestaurantName.length > 0) {
        console.log(this.restaurants);
        return this.restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(this.searchRestaurantName)
        );
      } else {
        return this.restaurants;
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 120px;
}
.restaurants-container {
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.restaurants-card {
  min-width: 250px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
}
.restaurants_card {
  min-width: 250px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
}
</style>
