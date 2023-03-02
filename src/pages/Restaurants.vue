<template>
  <div
    id="restaurants"
    class="container-fluid d-flex flex-column align-items-center"
  >
    <h1 class="text-center py-sm-5"><strong>RISTORANTI</strong></h1>
    <div class="mb-4 d-flex flex-wrap justify-content-around">
      <div v-for="category in store.categories" class="m-2">
        <div class="category-box">
          <input
            class="form-check-input ms-checkbox"
            type="checkbox"
            :value="category.id"
            :id="category.slug"
            @click="restaurantFilter(category.id)"
          />
          <label class="form-check-label" :for="category.slug">
            <b>
              {{ category.name }}
            </b>
          </label>
        </div>
      </div>
    </div>
    <div class="container d-flex justify-content-around flex-wrap my-3 col-12">
      <!-- CARD -->
      <div
        class="col-12 col-md-6"
        v-for="(restaurant, index) in store.filteredArray"
        :key="index"
      >
        <div class="card mb-4 mx-auto my-5" v-if="restaurant.selected">
          <div class="d-flex g-0">
            <div class="col-md-4 d-flex left">
              <img
                :src="restaurant.image_url"
                class="img-fluid rounded-start ms-img"
                alt="..."
              />
            </div>
            <div class="position-relative col-md-8">
              <div class="card-body pt-4">
                <h5 class="ms-card-title card-title">{{ restaurant.name }}</h5>
                <p class="card-text mb-0">
                  <b><i class="fa-solid fa-phone"></i></b>
                  {{ restaurant.telephone }}
                </p>
                <p class="card-text">
                  <b><i class="fa-solid fa-location-dot"></i></b>
                  {{ restaurant.address }}
                </p>
                <!-- Bottone guarda il menu -->
                <router-link
                  :to="{ name: 'menu', params: { slug: restaurant.slug } }"
                >
                  <button class="ms-btn-primary">Guarda il menu</button>
                </router-link>
                <!-- Fine bottone -->
              </div>
              <!-- Badge categorie -->
              <div class="ms-badge d-flex position-absolute m-2">
                <span
                  v-for="category in restaurant.categories"
                  class="badge bg-warning text-dark me-1 mb-2"
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
    <!-- <button
      class="ms-btn-primary"
      @click="totRestaurants += 4"
      v-if="totRestaurants < restaurants.length"
    >
      Mostra altri
    </button> -->
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
      searchRestaurantName: "",
      searchRestaurantCategory: "",
      checkedCategories: [],
      totRestaurants: 4,
      checkedIdCategories: [],
    };
  },
  methods: {
    restaurantFilter(id) {
      if (!this.checkedIdCategories.includes(id)) {
        this.checkedIdCategories.push(id);
      } else {
        this.index = this.checkedIdCategories.indexOf(id);
        this.checkedIdCategories.splice(this.index, 1);
      }

      if (this.checkedIdCategories.length === 0) {
        this.store.filteredArray = this.store.restaurants;
        this.store.filteredArray.forEach((element) => {
          element.selected = true;
        });
      } else {
        this.store.filteredArray = [];

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

        this.store.restaurants.forEach((element) => {
          element.rightCategories = 0;
          element.categories.forEach((subElement) => {
            if (this.checkedIdCategories.includes(subElement.id)) {
              element.rightCategories++;
            }
          });
          if (element.rightCategories === this.selectedCategoriesLenght) {
            element.selected = true;
          } else {
            element.selected = false;
          }
        });

        if (this.selectedCategoriesLenght !== 0) {
          this.store.restaurants.forEach((element, index) => {
            if (element.selected) {
              this.store.filteredArray.push(element);
            }
          });
        }
        console.log(this.filteredArray);
      }
    },
  },
  created() {
    this.store.getRestaurantsAndCategories();
  },
};
</script>

<style scoped lang="scss">
$ruler: 16px;
$color-red: #ae1100;
$color-bg: #ebecf0;
$color-shadow: #babecc;
$color-white: #fff;

#restaurants {
  background-color: $color-bg;
  width: 100%;
  color: darken($color: #00ccbc, $amount: 30%);
}
.category-box {
  position: relative;
  label {
    position: absolute;
    top: 10px;
    text-align: center;
    z-index: 3;
    display: block;
    width: 100px;
    height: 40px;
    b {
      color: #00ccbc;
    }
  }
}
.ms-checkbox {
  cursor: pointer;
  width: 100px;
  height: 40px;
  text-align: center;
  color: #00ccbc;
  transition: all 0.5s;
  background-color: darken($color: #00ccbc, $amount: 20%);
}

.form-check-input:checked {
  background-color: white;
  border-radius: 5px;
}
.card {
  max-width: 480px;
  background-color: aliceblue;
  box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
  border-radius: 5%;
  border: 0;
  outline: 0;
  transition: all 0.3s;
  .card-title {
    color: #00ccbc;
  }
  button {
    border: 0;
    outline: 0;
    font-size: $ruler;
    border-radius: $ruler * 20;
    padding: 12px;
    background-color: $color-bg;
    text-shadow: 1px 1px 0 $color-white;
    color: #00ccbc;
    font-weight: bold;
    box-shadow: -5px -5px 20px $color-white, 5px 5px 20px $color-shadow;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;
    }

    &:active {
      box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px;
    }
    &.unit {
      border-radius: 8px;
      line-height: 0;
      width: $ruler * 3;
      height: $ruler * 3;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 8px;
      font-size: $ruler * 1.2;
    }
  }

  @media only screen and (max-width: 576px) {
    width: 100%;
    height: 200px;
    padding-top: 20px;
    .ms-badge {
      flex-wrap: nowrap;
      left: 0;
      top: -13px;
    }
    .left {
      width: 50%;
      justify-content: center;
    }
  }
}
.card:hover {
  box-shadow: inset 1px 1px 2px $color-shadow, inset -1px -1px 2px $color-white;
  position: relative;
  z-index: 3;
}
h1 {
  @media only screen and (max-width: 768px) {
    margin-top: 150px;
  }
  @media only screen and (max-width: 576px) {
    margin-top: 30px;
  }
}

.ms-img {
  object-fit: contain;
  padding: 20px;
  height: 150px;
  width: 200px;
}

.ms-card-title {
  text-transform: uppercase;
  font-weight: bold;
}

.ms-badge {
  max-width: 75px;
  flex-wrap: wrap;
  top: 0;
  right: 0;
}
</style>
