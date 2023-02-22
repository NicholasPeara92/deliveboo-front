<template>
<h1>Ristoranti:</h1>
<div class="restaurants-container">
    <div v-for="restaurant in restaurants" class="restaurants-card">
        <h4>{{ restaurant.name }}</h4>
        <div>
            <img :src="restaurant.image" alt="">
        </div>
        <ul>   
            <li>Categoria: {{ restaurant.categories }} </li>
            <li>Tel: {{ restaurant.telephone }}</li> 
        </ul>
        <a href="#">Guarda il menu</a>
    </div>
</div>
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

<style scoped>
.restaurants-container{
    padding: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.restaurants-card{
    min-width: 250px;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid black;
}
</style>