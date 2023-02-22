<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      links: ["HOME", "ABOUT", "CONTACT"],
    };
  },
};
</script>

<template>
  <nav class="main-nav">
    <ul>
      <li v-for="link in links">
        <a href="#">{{ link }}</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.main-nav {
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    margin-bottom: 0;
    padding-left: 0;
    a {
      display: inline-block;
      padding: 20px 10px;
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
    a:hover {
      color: red;
    }
  }
}
</style>
