<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      links: [
        {
          name: "HOME",
          link: "#top",
        },
        {
          name: "RISTORANTI",
          link: "#restaurants",
        },
        {
          name: "ABOUT",
          link: "#about-us",
        },
        {
          name: "CONTATTI",
          link: "#contact-us",
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
        <a :href="link.link">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.main-nav {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 101;
  align-items: center;
  height: 75px;
  @media only screen and (max-width: 768px) {
    display: none;
  }

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
