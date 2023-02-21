import { reactive } from "vue";

export const store = reactive({
  restaurants: [],
  products: [],
  api_url: import.meta.env.VITE_BACKEND_URL,
});
