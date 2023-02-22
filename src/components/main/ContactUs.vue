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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem
            obcaecati accusamus laudantium voluptates nostrum provident,
            necessitatibus sint ab. Ullam ducimus laboriosam, sequi veritatis
            quas suscipit commodi eligendi sit porro. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officiis, placeat. Cum delectus fuga
            sapiente omnis laudantium similique voluptatem ea totam temporibus
            sit veniam cumque dolorem voluptatum, unde necessitatibus laborum
            quam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis dolor magni amet obcaecati odit? Illo, est, illum nobis
            voluptas itaque similique, inventore in deleniti corrupti at odit
            veritatis atque nulla? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae eius, vitae libero accusantium
            consequatur cupiditate debitis dolore voluptatum suscipit
            exercitationem harum ipsum assumenda eveniet praesentium temporibus
            possimus laboriosam modi ea. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Consectetur dolores earum nostrum non aspernatur
            quam dolore ut quo error. Sint quisquam ut quo voluptates expedita,
            assumenda earum iusto minima illum? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. In voluptatum sit, expedita
            dignissimos laboriosam voluptas provident omnis impedit libero sed
            voluptate, quo neque nostrum excepturi tempora voluptatem commodi
            debitis recusandae!
          </p>
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
        background-color: #007e8a;
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
    width: 100%;
    padding: 0 65px;
    position: relative;
    display: flex;
    justify-content: center;

    .answer {
      display: flex;
      justify-content: center;
      margin-bottom: 35px;
      color: black;
      width: 80%;
      background-color: #f9fafa;
      border-radius: 7px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
