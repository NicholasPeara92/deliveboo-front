<template>
  <div class="container">
    <h1>Ristoranti:</h1>
    <input
      type="text"
      placeholder="Inserisci il nome"
      v-model="searchRestaurantName"
    />
    <select
      v-model="searchRestaurantType"
      name="type"
      id="type"
      @onChange="myChangeEvent()"
    >
      <option v-for="type in restaurantList">{{ type.type }}</option>
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
      searchRestaurantName: "",
      searchRestaurantType: "",
    };
  },
  methods: {
    myChangeEvent(val) {
      console.log(this.newArray);
      this.newArray = this.restaurant.filter(
        (restaurant) => restaurant.type === val
      );
    },
  },

  created() {
    axios.get(`${this.store.api_url}/restaurants`).then((response) => {
      this.restaurants = response.data;
    });
  },
  computed: {
    typeList() {
      this.types = [];
      this.restaurant.forEach((element) => {});
    },
    restaurantList() {
      if (this.searchRestaurantName.length > 0) {
        this.result = this.restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(this.searchRestaurantName)
        );
        // this.result = this.result.filter(
        //   (restaurant) => restaurant.type === this.searchRestaurantType
        // );
        return this.result;
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
