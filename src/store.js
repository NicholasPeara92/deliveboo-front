import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  api_url: import.meta.env.VITE_BACKEND_URL,
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
          if (localStorage.cartProducts) {
            this.cartArray = JSON.parse(localStorage.cartProducts);
            console.log(this.cartArray);
          }

          this.cartArray.find((arrayElement) => {
            if (arrayElement.id === element.id) {
              arrayElement.quantity = element.quantity;
              arrayElement.totalPrice = element.totalPrice;
            }
          });

          localStorage.cartProducts = JSON.stringify(this.cartArray);
          this.cartProducts = this.cartArray;
        } else {
          this.cartProducts.push(product);
          localStorage.cartProducts = JSON.stringify(this.cartProducts);
        }
      }
      console.log(this.cartProducts);
    });
  },

  dropToCart(product) {
    if (localStorage.cartProducts) {
      this.products.find((element) => {
        if (element.id === product.id) {
          element.quantity--;
          if (element.quantity <= 0) {
            element.quantity = 0;
            element.totalPrice = 0;
          } else {
            element.totalPrice -= parseFloat(element.price);
          }
        }
      });

      this.result = this.cartProducts.find((cartElement, index) => {
        if (cartElement.id === product.id) {
          cartElement.quantity--;
          if (cartElement.quantity <= 0) {
            cartElement.quantity = 0;
            cartElement.totalPrice = 0;
            this.cartProducts.splice(index, 1);
          } else {
            cartElement.totalPrice -= parseFloat(cartElement.price);
          }
          return this.cartProducts;
        } else {
          return undefined;
        }
      });

      if (this.result !== undefined) {
        localStorage.cartProducts = JSON.stringify(this.cartProducts);
        console.log(this.cartProducts);
      }

      if (this.cartProducts.length === 0) {
        localStorage.clear();
      }
    }
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
  getTotalQuantity() {
    if (localStorage.cartProducts) {
      this.cartProducts = JSON.parse(localStorage.cartProducts);
      this.totQuantity = 0;

      this.cartProducts.forEach((element) => {
        this.totQuantity += element.quantity;
      });

      return this.totQuantity;
    } else {
      return 0;
    }
  },
  getTotalPrice() {
    if (localStorage.cartProducts) {
      this.cartProducts = JSON.parse(localStorage.cartProducts);
      this.totPrice = 0;

      this.cartProducts.forEach((element) => {
        this.totPrice += element.totalPrice;
      });

      return this.totQuantity;
    } else {
      return 0;
    }
  },
});
