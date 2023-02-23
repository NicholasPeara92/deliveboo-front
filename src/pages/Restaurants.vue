<template>
  <div class="container">
    <h1 class="text-center"><strong>RISTORANTI</strong></h1>
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
    <div class="restaurants-container">
      <!-- <div
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
        
        <router-link :to="{ name: 'menu', params: { slug: restaurant.slug } }"
          >Guarda il menu</router-link
        >
      </div> -->

      <!-- CARD -->
      <div
        class="card mb-3 px-1 py-1"
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
              <h5 class="card-title">{{ restaurant.name }}</h5>
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

<style scoped lang="scss">
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

.my-class {
  object-fit: contain;
}

button {
  margin-right: 10px;
  background-color: $primary-color;
  color: $font-color;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &:active {
    background-color: darken($primary-color, 20%);
  }
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
