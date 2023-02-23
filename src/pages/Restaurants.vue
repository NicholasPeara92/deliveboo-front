<template>
  <div class="container">
    <h1>Ristoranti:</h1>
    <input
      type="text"
      placeholder="Inserisci il nome"
      v-model="searchRestaurantName"
    />
    <select v-model="searchRestaurantCategory" name="type" id="type">
      <option value="">Nessuna Tipologia</option>
      <option v-for="category in categories">{{ category.name }}</option>
    </select>
    <div class="restaurants-container">
      <div
        v-for="(restaurant, index) in restaurantList"
        :key="index"
        class="restaurants-card d-flex flex-column justify-content-center align-items-center"
      >
        <h4>{{ restaurant.type }}</h4>
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
      categories: [],
      searchRestaurantName: "",
      searchRestaurantCategory: "",
    };
  },

  created() {
    axios.get(`${this.store.api_url}/restaurants`).then((response) => {
      this.restaurants = response.data;
    });
    axios.get(`${this.store.api_url}/categories`).then((response) => {
      this.categories = response.data;
    });
  },
  computed: {
    restaurantList() {
      this.restaurantsId = [];
      if (
        this.searchRestaurantName.length > 0 ||
        this.searchRestaurantCategory.length > 0
      ) {
        this.filteredRestaurants = this.restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(this.searchRestaurantName)
        );

        this.filteredRestaurants.forEach((element) => {
          element.categories.forEach((element) => {
            if (element.name === this.searchRestaurantCategory) {
              this.restaurantsId.push(element.pivot.restaurant_id);
            }
          });
        });

        console.log(this.restaurantsId);
        this.finalArray = [];
        this.restaurantsId.forEach((element) => {
          this.finalArray.push(
            this.filteredRestaurants.find(
              (restaurant) => restaurant.id === element
            )
          );
        });

        console.log(this.restaurantsId);
        if (this.restaurantsId.lenght) console.log(this.lenght);
        console.log(this.finalArray);
        console.log(this.filteredRestaurants);
        return this.finalArray;
      } else {
        this.finalArray = this.restaurants;
        console.log(this.finalArray);
        return this.finalArray;
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
