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

      <!-- CARD -->
      <div class="card mb-3 px-1 py-1" style="max-width: 540px;"
      v-for="(restaurant, index) in restaurantList"
      :key="index"
      >
        <div class="row g-0">
          <div class="col-md-4 d-flex justify-content-center">
            <img :src="restaurant.image_url" class="img-fluid rounded-start my-class" alt="...">
          </div>
          <div class="col-md-8 position-relative">
            <div class="card-body">
              <h5 class="card-title">{{ restaurant.name }}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <!-- Bottone guarda il menu -->
              <router-link :to="{ name: 'menu', params: { slug: restaurant.slug } }"
              class="btn btn-primary"
              >Guarda il menu</router-link
              >
              <!-- Fine bottone -->
            </div>
            <!-- Badge categorie -->
            <div class="d-flex position-absolute top-0 end-0">
              <span
              v-for="category in restaurant.categories"
              class="badge bg-warning text-dark me-1">{{ category.name }}
              </span>
            </div>
            <!-- Fine badge categorie -->
          </div>
        </div>
      </div>
      <!-- FINE CARD -->

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

.my-class{
  object-fit: contain;
}
</style>
