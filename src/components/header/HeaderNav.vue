<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      links: [
        {
          name: "HOME",
          link: "homepage",
        },
        {
          name: "ABOUT",
          link: "about-us",
        },
        {
          name: "CONTATTI",
          link: "contact-us",
        },
        {
          name: "RISTORANTI",
          link: "restaurants",
        },
      ],
    };
  },
};
</script>

<template>
  <nav class="main-nav">
    <ul>
      <li v-for="link in links">
        <router-link style="font-weight: 600" :to="{ name: link.link }">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.main-nav {
  ul {
    display: flex;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    a {
      display: inline-block;
      padding: 20px 10px;
      text-decoration: none;
      color: #00ccbc;
      font-weight: bold;
    }
    a:hover {
      color: darken(#00ccbc, 10%);
    }
  }
}
</style>
