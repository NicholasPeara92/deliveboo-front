<template>
  <section class="partner">
    <div class="left">
      <h3>Diventa Nostro Partner!</h3>
      <p>
        Raggiungi più clienti con DeliveBoo! Gestiamo noi la consegna <br />
        così tu puoi dedicarti a offrire i migliori piatti e prodotti
      </p>
      <button>
        <a href="http://127.0.0.1:8000/register"
          >inizia ora! <i class="fa-solid fa-arrow-right"></i
        ></a>
      </button>
    </div>
    <div class="right">
      <div class="angular"></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$primary-color: #00ccbc; // blu
$secondary-color: #6c757d; // grigio scuro
$font-color: #fff; // bianco
.partner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: relative;
  height: 850px;
  width: 100%;
  .left {
    width: 45%;
    height: 550px;
    background-color: $primary-color;
    padding: 40px;
    text-align: center;
    padding-left: 100px;
    @media only screen and (max-width: 576px) {
      height: 550px;
      width: 100%;
      padding: 0px;
      text-align: center;
    }
    h3 {
      margin-top: 100px;
      font-size: 48px;
      font-weight: bold;
    }
    p {
      font-size: 19px;
      font-weight: bold;
      color: $font-color;
      margin-top: 40px;
      line-height: 35px;
      @media only screen and (max-width: 576px) {
        font-size: 15px;
        padding-right: 30px;
      }
    }

    button {
      margin-right: 10px;
      margin-top: 40px;
      background-color: #fff;
      color: $primary-color;
      border: none;
      border-radius: 50px;
      padding: 8px 16px;
      font-size: 16px;
      transition: all 0.9s;
      position: relative;
      overflow: hidden;
      z-index: 1;
      cursor: pointer;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $font-color;
        z-index: -2;
      }
      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: darken($primary-color, 30%);
        transition: all 0.3s;
        z-index: -1;
      }
      &:hover {
        color: $font-color;
        &:before {
          width: 100%;
        }
      }
      a {
        font-size: 18px;
        color: $primary-color;
        text-decoration: none;
        font-weight: bold;
        i {
          color: $primary-color;
        }
      }
    }
  }

  .right {
    background-image: url(../../assets/partner.PNG);
    background-size: cover;
    background-repeat: no-repeat;
    width: 55%;
    height: 550px;
    position: relative;
    @media only screen and (max-width: 576px) {
      width: 45%;
      width: 0;
    }
    .angular {
      width: 100px;
      background-color: #00ccbc;
      height: 100%;
      position: absolute;
      top: 0;
      transform: skewX(-8deg);
      left: -50px;
      @media only screen and (max-width: 576px) {
        width: 0;
      }
    }
  }
}
</style>
