<template>
  <div class="header_container">
    <h2>Header</h2>
    <router-link :to="{ name: 'contact-us' }">Contatti</router-link>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header_container{
  border: 2px solid black;
}
</style>
