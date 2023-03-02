<template>
  <div>
    <div class="container">
      <div class="follow p-4 animate">
        <div class="left">
          <h2>
            <strong
              >Segui Gli Ordini <br />
              Passo Passo</strong
            >
          </h2>
          <p>
            I piatti e i prodotti che ami, consegnati in pochissimo tempo.
            Vedrai quando il rider ha ritirato l'ordine, che potrai seguire
            passo passo, e riceverai una notifica quando sarà quasi da te.
          </p>
          <a
            href="https://apps.apple.com/it/app/deliveroo-food-delivery-app/id1001501844"
            ><img
              class="apple"
              src="../../assets/Apple 300x104.png"
              alt="appstore"
          /></a>
          <a
            href="https://play.google.com/store/apps/details?id=com.deliveroo.orderapp&hl=it&gl=US"
            ><img class="google" src="../../assets/google.png" alt="playstore"
          /></a>
        </div>
        <div class="right">
          <img class="map" src="../../assets/map-min.png" alt="map-min" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inView from "in-view";
export default {
  name: "FollowUs",
  methods: {
    handleInView() {
      inView.threshold(0.5);
      inView(".animate").on("enter", (el) => {
        el.classList.add("visible");
      });
    },
  },
  mounted() {
    this.handleInView();
  },
};
</script>

<style lang="scss" scoped>
.animate {
  opacity: 0;
  transition: opacity 1s ease-out;
}
.visible {
  opacity: 1;
}
.follow {
  background-color: white;
  margin-bottom: 60px;
  box-shadow: 0 6px 20px 0 #00000014;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 60px;
  @media (max-width: 576px) {
    margin-top: 30px;
  }

  .left {
    width: 35%;
    padding: 20px 40px;
    @media (max-width: 576px) {
      margin-bottom: 20px;
    }
    p {
      font-size: 20px;
      margin: 50px 0;
    }
    h2 {
      font-size: 40px;
    }
    .google {
      width: 104px;
      height: 40px;
      margin-left: 10px;
      margin-bottom: 20px;
    }
    .apple {
      width: 104px;
      height: 40px;
      margin-bottom: 20px;
    }
  }
  .right {
    width: 60%;
    .map {
      width: 100%;
    }
  }
}
@media (max-width: 576px) {
  .follow {
    display: flex;
    flex-direction: column;
    .left {
      width: 100%;
    }
    .right {
      width: 100%;
    }
  }
}
</style>
