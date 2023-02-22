<template>
  <div class="background">
    <header class="hero">
      <div class="contact">
        <div class="back"></div>
      </div>
      <div class="headerhero">
        <div class="title">
          <h1>Contatti</h1>
        </div>
      </div>
    </header>
    <div class="table">
      <div class="answer">
        <div>
          <h2>Domande per il costumer service</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>

<style lang="scss" scoped>
.background {
  background-color: #f9fafa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .hero {
    position: relative;
    color: #fff;
    .contact {
      bottom: -150px;
      position: absolute;
      width: 100%;
      .back {
        background-color: #00ccbc;
        width: 100%;
        height: 500px;
        transform: skewY(-6deg);
        transform-origin: 50%;
      }
    }
  }
  .headerhero {
    position: relative;
    margin-top: 100px;
    .title {
      padding: 0 65px;
      text-align: center;
      h1 {
        color: #fff;
        font-size: 40px;
        line-height: 48px;
      }
    }
  }
  .table {
    width: 50%;
    padding: 0 65px;
    position: relative;
    .answer {
      display: flex;
      justify-content: center;
      margin-bottom: 35px;
      color: black;
    }
  }
}
</style>
