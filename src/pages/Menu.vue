<template>
<h3>Menu</h3>
<div v-for="product in products">
 <h6>{{ product.name }}</h6>
</div>
</template>

<script>
import axios from "axios";
import { store } from "../store";

export default{
    name: 'Menu',
    data(){
        return {
            store,
            products:[],
        };
    },

    created() {
    axios.get(`${this.store.api_url}/restaurant/${this.$route.params.slug}`).then((response) => {
      this.products = response.data;
    });
  },
}
</script>

<style>
</style>