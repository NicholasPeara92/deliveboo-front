import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  api_url: import.meta.env.VITE_BACKEND_URL,
  restaurants: [],
  categories: [],
  restaurant: [],
  products: [],
  cartProducts: [],
  filteredArray: [],
  getProducts: function (param) {
    axios.get(`${this.api_url}/restaurant/` + "" + param).then((response) => {
      this.restaurant = response.data;
      this.products = this.restaurant.products.sort((c1, c2) =>
        c1.type > c2.type ? 1 : c1.type < c2.type ? -1 : 0
      );
      if (
        localStorage.cartProducts &&
        this.restaurant.id === JSON.parse(localStorage.activeRestaurant)
      ) {
        this.arrayProduct = JSON.parse(localStorage.cartProducts);

        this.products.forEach((element) => {
          this.searchResult = this.arrayProduct.find((subelement) => {
            if (element.id === subelement.id) {
              return true;
            } else {
              return false;
            }
          });

          if (this.searchResult !== undefined) {
            element.quantity = this.searchResult.quantity;
            element.totalPrice = this.searchResult.totalPrice;
          } else {
            element.quantity = 0;
            element.totalPrice = 0;
          }
        });

        console.log(this.products);
      } else {
        this.products.forEach((element) => {
          element.quantity = 0;
          element.totalPrice = 0;
        });
      }
    });
  },
  addToCart(product) {
    if (!localStorage.activeRestaurant) {
      localStorage.activeRestaurant = JSON.stringify(product.restaurant_id);
      this.searchObject(product);
    } else {
      if (product.restaurant_id === JSON.parse(localStorage.activeRestaurant)) {
        this.searchObject(product);
      } else {
        console.log("non puoi aggiungere elementi di un altro ristorante");
      }
    }
  },
  searchObject(product) {
    this.products.find((element) => {
      if (element.id === product.id) {
        element.quantity++;
        element.totalPrice += parseFloat(element.price);

        this.result = this.cartProducts.find((resultElement) => {
          if (resultElement.id === product.id) {
            return true;
          }
          return false;
        });

        if (this.result !== undefined) {
          this.cartArray = JSON.parse(localStorage.cartProducts);

          this.cartArray.find((arrayElement) => {
            if (arrayElement.id === product.id) {
              arrayElement.quantity = element.quantity;
              arrayElement.totalPrice = element.totalPrice;
            }
          });
          localStorage.cartProducts = JSON.stringify(this.cartArray);
        } else {
          this.cartProducts.push(product);
          localStorage.cartProducts = JSON.stringify(this.cartProducts);
        }
      }
      console.log(this.cartProducts);
    });
  },

  dropToCart(product) {
    this.products.find((element) => {
      if (element.id === product.id) {
        if (element.quantity <= 1) {
          element.quantity = 0;
          element.totalPrice = 0;
        } else {
          element.quantity--;
          element.totalPrice -= parseFloat(element.price);
        }

        this.result = this.cartProducts.find((resultElement) => {
          if (resultElement.id === product.id) {
            return true;
          }
          return false;
        });

        if (this.result !== undefined) {
          if (localStorage.cartProducts) {
            this.cartArray = JSON.parse(localStorage.cartProducts);
          }

          this.cartArray.find((arrayElement, index) => {
            if (arrayElement.id === product.id) {
              if (element.quantity === 0) {
                this.productIndex = index;
              } else {
                arrayElement.quantity = element.quantity;
                arrayElement.totalPrice = element.totalPrice;
              }
            }
          });
          localStorage.cartProducts = JSON.stringify(this.cartArray);
        } else {
          this.cartProducts.push(product);
          localStorage.cartProducts = JSON.stringify(this.cartProducts);
        }
      }
    });

    // this.products.find((element) => {
    //   if (element.id === id) {
    //     if (element.quantity === 0) {
    //       element.quantity = 0;
    //     } else {
    //       element.quantity--;
    //       element.totalPrice -= parseFloat(element.price);
    //     }
    //   }
    // });
  },

  getRestaurantsAndCategories() {
    axios.get(`${this.api_url}/restaurants`).then((response) => {
      this.restaurants = response.data;
      this.restaurants.forEach((element) => (element.selected = true));
      this.filteredArray = this.restaurants;
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
