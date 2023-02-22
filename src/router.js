import { createRouter, createWebHistory } from "vue-router";

// Pages
import HomePage from "./pages/HomePage.vue";
import Restaurants from "./pages/Restaurants.vue";
import Menu from "./pages/Menu.vue";;
import Page404 from "./pages/Page404.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/restaurants",
      name: "restaurants",
      component: Restaurants,
    },
    {
      path: "/menu/:slug",
      name: "menu",
      component: Menu,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "page-404",
      component: Page404,
    },
  ],
});

export { router };
