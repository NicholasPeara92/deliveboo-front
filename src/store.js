import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  api_url: import.meta.env.VITE_BACKEND_URL,
  restaurant: [],
  products: [],
  getProducts: function (param) {
    axios.get(`${this.api_url}/restaurant/` + "" + param).then((response) => {
      this.restaurant = response.data;
      this.products = this.restaurant.products.sort((c1, c2) =>
        c1.type > c2.type ? 1 : c1.type < c2.type ? -1 : 0
      );
      this.products.forEach((element) => {
        element.quantity = 0;
      });
      console.log(this.products);
    });
  },
});
