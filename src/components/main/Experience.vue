<template>
  <div class="experience">
    <div class="first-section animate">
      <div class="riders">
        <div class="rider-left">
          <div class="image-rider"></div>
        </div>
        <div class="first-description">
          <h3>Supporto di oltre 180.000 ciclisti</h3>
          <div class="content">
            <p>
              Nel team Deliveboo, Incontriamo i riders, ascoltiamo le loro
              storie e lavoriamo a fianco di sistemi complessi per costruire gli
              strumenti che consentono alla nostra rete di consegna di
              funzionare.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="second-section animate">
      <div class="chef">
        <div class="second-description">
          <h3>Collaborazione con migliaia di ristoranti</h3>
          <div class="content">
            <p>
              Nel team del ristorante, stiamo contribuendo attivamente a
              rimodellare l'industria della ristorazione. Stiamo costruendo gli
              strumenti che ottimizzano le operazioni quotidiane dei ristoranti
              e offriamo loro modi per comprendere e raggiungere nuovi clienti.
            </p>
          </div>
        </div>
        <div class="chef-right">
          <div class="image-chef"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import inView from "in-view";
export default {
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
.experience {
  position: relative;
  z-index: 1;
  padding: 50px 0;
  .first-section,
  .second-section {
    max-width: 1120px;
    padding: 20px 16px;
    margin: 0 auto;
    .riders,
    .chef {
      margin: 0 0 48px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      @media only screen and (max-width: 576px) {
        flex-direction: column;
        padding: 0 17px;
        margin: 0 17px;
      }
      .rider-left,
      .chef-right {
        border-radius: 3px;
        width: 560px;
        padding-bottom: 35%;
        display: flex;
        position: relative;
        flex-shrink: 0;
        overflow: hidden;
        @media only screen and (max-width: 576px) {
          width: 450px;
        }
        .image-rider {
          background-image: url(../../assets/rider.jpg);
          background-size: cover;
          background-position: 50%;
          opacity: 1;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
        .image-chef {
          background-image: url(../../assets/chef.jpg);
          background-size: cover;
          background-position: 50%;
          opacity: 1;
          position: absolute;
          left: 0px;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
      .first-description {
        box-sizing: border-box;
        background-color: #fff;
        position: relative;
        z-index: 1;
        margin: 0 0 0 -80px;
        padding: 50px;
        border-radius: 10px;
        box-shadow: 0 7px 4px rgb(0 0 0 / 8%), 0 0 1px rgb(0 0 0 / 8%);
        @media only screen and (max-width: 576px) {
          width: 450px;
          margin: 0;
          padding: 0;
          margin-top: 20px;
        }
        .content p {
          margin: 0;
        }
      }
    }
  }
  .second-description {
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
    z-index: 1;
    margin: 0 0 0 -80px;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 7px 4px rgb(0 0 0 / 8%), 0 0 1px rgb(0 0 0 / 8%);
    left: 70px;
    @media only screen and (max-width: 576px) {
      left: 0;
      margin: 0;
      padding: 0;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .content p {
      margin-top: 15px;
    }
  }
}
</style>
