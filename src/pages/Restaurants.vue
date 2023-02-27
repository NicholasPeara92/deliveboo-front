<template>
  <div id="restaurants" class="container d-flex flex-column align-items-center">
    <h1 class="text-center py-sm-5"><strong>RISTORANTI</strong></h1>
    <div class="mb-4">
      <div v-for="category in categories" class="form-check form-check-inline">
        <input
          class="form-check-input"
          :value="category.id"
          :id="category.slug"
          type="checkbox"
          @click="restaurantFilter(category.id)"
        />
        <label class="form-check-label" :for="category.slug">{{
          category.name
        }}</label>
      </div>
    </div>
    <div class="d-flex row justify-content-around flex-wrap m-3">
      <!-- CARD -->
<<<<<<< HEAD
      <div v-for="(restaurant, index) in filteredArray" :key="index">
=======
      <div
        class="col-6 d-flex justify-content-center"
        v-for="(restaurant, index) in getRestaurants"
        :key="index"
      >
>>>>>>> d582f743836163840f73e585b19bd13dc1ddf713
        <div class="card mb-4 mx-1 py-1 my-5" v-if="restaurant.selected">
          <div class="row g-0">
            <div class="col-md-4 d-flex justify-content-center">
              <img
                :src="restaurant.image_url"
                class="img-fluid rounded-start ms-img"
                alt="..."
              />
            </div>
            <div class="col-md-8 position-relative">
              <div class="card-body">
                <h5 class="ms-card-title card-title">{{ restaurant.name }}</h5>
                <p class="card-text mb-0">
                  <b>Telefono:</b> {{ restaurant.telephone }}
                </p>
                <p class="card-text">
                  <b>Indirizzo: </b> {{ restaurant.address }}
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
              <div class="d-flex position-absolute top-0 end-0 m-2">
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
    <button
      class="ms-btn-primary"
      @click="totRestaurants += 4"
      v-if="totRestaurants < restaurants.length"
    >
      Mostra altri
    </button>
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
      checkedCategories: [],
      totRestaurants: 4,
      checkedIdCategories: [],
      filteredArray: [],
    };
  },
  methods: {
    restaurantFilter(id) {
      this.filteredArray = [];

      if (!this.checkedIdCategories.includes(id)) {
        this.checkedIdCategories.push(id);
      } else {
        this.index = this.checkedIdCategories.indexOf(id);
        this.checkedIdCategories.splice(this.index, 1);
      }

      this.checkedCategories.forEach((element) => {
        if (element.id === id) {
          if (element.checked) {
            element.checked = false;
          } else {
            element.checked = true;
          }
        }
      });

      this.selectedCategoriesLenght = this.checkedIdCategories.length;

      this.restaurants.forEach((element) => {
        element.rightCategories = 0;
        element.categories.forEach((subElement) => {
          if (this.checkedIdCategories.includes(subElement.id)) {
            element.rightCategories++;
          }
        });
        if (element.rightCategories === this.selectedCategoriesLenght) {
          element.selected = true;
          console.log(this.restaurants);
        } else {
          element.selected = false;
        }
      });

      if (this.checkedIdCategories.length !== 0) {
        this.restaurants.forEach((element, index) => {
          if (element.selected) {
            this.filteredArray.push(element);
          }
        });
        this.filteredArray = this.filteredArray.filter(
          (elm, index) => index < this.totRestaurants
        );
      }
    },
  },

  created() {
    axios.get(`${this.store.api_url}/restaurants`).then((response) => {
      this.restaurants = response.data;
      this.restaurants.forEach((element) => (element.selected = true));
      console.log(this.restaurants);
    });
    axios.get(`${this.store.api_url}/categories`).then((response) => {
      this.categories = response.data;
      this.checkedCategories = response.data;
      this.checkedCategories.forEach((element) => {
        element.checked = false;
      });
    });
  },
  computed: {
    getRestaurants() {},
  },
};
</script>

<style scoped lang="scss">
.card {
  max-width: 480px;
  background-color: aliceblue;
  border-radius: 20px;
  transition: all 0.3s;
  @media only screen and (max-width: 576px) {
    max-width: 400px;
  }
}
.card:hover {
  scale: 1.2;
  z-index: 3;
}
h1 {
  @media only screen and (max-width: 768px) {
    margin-top: 150px;
  }
  @media only screen and (max-width: 576px) {
    margin-top: 200px;
  }
}

.ms-img {
  object-fit: contain;
  padding: 20px;
}

.ms-card-title {
  text-transform: uppercase;
  font-weight: bold;
}
</style>
