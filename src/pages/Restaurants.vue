<template>
<h1>Qui ci mettiamo i ristoranti</h1>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default {
  name: "Restaurants",
  data(){
    return{
        store,
        restaurants:[],
    };
  },

  created() {
    axios.get(`${this.store.api_url}/restaurants`).then((response) => {
      this.restaurants = response.data;
    });
  },


};
</script>

<style>
</style>