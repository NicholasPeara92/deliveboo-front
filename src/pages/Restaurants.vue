<template>
  <div class="container">
    <h1 class="text-center py-sm-5"><strong>RISTORANTI</strong></h1>
    <div class="d-flex justify-content-center my-5">
      <input
        type="text"
        placeholder="Inserisci il nome"
        v-model="searchRestaurantName"
      />
      <select
        class="ms-2"
        v-model="searchRestaurantCategory"
        name="type"
        id="type"
      >
        <option value="">Nessuna Tipologia</option>
        <option v-for="category in categories">{{ category.name }}</option>
      </select>
    </div>
    <div class="d-flex justify-content-around flex-wrap m-3">
      <!-- CARD -->
      <div
        class="card mb-3 mx-1 py-1"
        style="max-width: 540px"
        v-for="(restaurant, index) in restaurantList"
        :key="index"
      >
        <div class="row g-0">
          <div class="col-md-4 d-flex justify-content-center">
            <img
              :src="restaurant.image_url"
              class="img-fluid rounded-start my-class"
              alt="..."
            />
          </div>
          <div class="col-md-8 position-relative">
            <div class="card-body">
              <h5 class="ms-card-title card-title">{{ restaurant.name }}</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <!-- Bottone guarda il menu -->
              <button class="ms-btn-primary">
                <router-link
                  :to="{ name: 'menu', params: { slug: restaurant.slug } }"
                  >Guarda il menu</router-link
                >
              </button>
              <!-- Fine bottone -->
            </div>
            <!-- Badge categorie -->
            <div class="d-flex position-absolute top-0 end-0">
              <span
                v-for="category in restaurant.categories"
                class="badge bg-warning text-dark me-1"
                >{{ category.name }}
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
      this.finalArray = [];

      if (this.searchRestaurantCategory.length > 0) {
        this.restaurants.forEach((element) => {
          element.categories.forEach((element) => {
            if (element.name === this.searchRestaurantCategory) {
              this.restaurantsId.push(element.pivot.restaurant_id);
            }
          });
        });
      }

      this.restaurantsId.forEach((element) => {
        this.finalArray.push(
          this.restaurants.find((restaurant) => restaurant.id === element)
        );
      });

      if (this.finalArray.length === 0) {
        this.finalArray = this.restaurants.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(this.searchRestaurantName)
        );

        return this.finalArray;
      } else {
        this.finalArray = this.finalArray.filter((restaurant) =>
          restaurant.name.toLowerCase().includes(this.searchRestaurantName)
        );
        return this.finalArray;
      }
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  @media only screen and (max-width: 768px) {
    margin-top: 150px;
  }
  @media only screen and (max-width: 576px) {
    margin-top: 200px;
  }
}
.container {
  margin-top: 120px;
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

.my-class {
  object-fit: contain;
}

.ms-card-title {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
