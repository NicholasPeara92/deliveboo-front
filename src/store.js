import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  api_url: import.meta.env.VITE_BACKEND_URL,
  restaurant: [],
  products: [],
  cartProducts: [],
  getProducts: function (param) {
    if (!localStorage.products) {
      axios.get(`${this.api_url}/restaurant/` + "" + param).then((response) => {
        this.restaurant = response.data;
        this.products = this.restaurant.products.sort((c1, c2) =>
          c1.type > c2.type ? 1 : c1.type < c2.type ? -1 : 0
        );
        this.products.forEach((element) => {
          element.quantity = 0;
          element.totalPrice = 0;
        });
        console.log(this.products);
      });
      localStorage.products = JSON.stringify(this.products);
    } else {
      axios.get(`${this.api_url}/restaurant/` + "" + param).then((response) => {
        this.restaurant = response.data;
        this.products = this.restaurant.products.sort((c1, c2) =>
          c1.type > c2.type ? 1 : c1.type < c2.type ? -1 : 0
        );
        this.products.forEach((element) => {
          element.quantity = 0;
          element.totalPrice = 0;
        });
        console.log(this.products);
      });
      localStorage.products = JSON.stringify(this.products);
    }
  },
  addToCart(id) {
    this.found = false;
    this.products.find((element) => {
      if (element.id === id) {
        element.quantity++;
        element.totalPrice += parseFloat(element.price);
      }
      localStorage.products = JSON.stringify(this.products);
    });

    console.log(this.products);
  },

  dropToCart(id) {
    this.products.find((element) => {
      if (element.id === id) {
        if (element.quantity === 0) {
          element.quantity = 0;
        } else {
          element.quantity--;
          element.totalPrice -= parseFloat(element.price);
        }
      }
    });
    console.log(this.products);
    localStorage.products = JSON.stringify(this.products);
    console.log(JSON.parse(localStorage.products));
  },
  getRestaurantsAndCategories() {
    axios.get(`${this.api_url}/restaurants`).then((response) => {
      this.restaurants = response.data;
      this.restaurants.forEach((element) => (element.selected = true));
      console.log(this.restaurants);
    });
    axios.get(`${this.api_url}/categories`).then((response) => {
      this.categories = response.data;
      this.checkedCategories = response.data;
      this.checkedCategories.forEach((element) => {
        element.checked = false;
      });
    });
  },
});
