<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "Order",
  data() {
    return {
      store,
      totQuantity: 0,
      formData: {
        name: "",
        surname: "",
        address: "",
        telephone: "",
        email: "",
        total: 0,
      },
    };
  },
  mounted() {
    this.formData.total = this.store.getTotalPrice();
    let button = document.querySelector("#submit-button");

    braintree.dropin.create(
      {
        authorization: "sandbox_g42y39zw_348pk9cgf3bgyw2b",
        selector: "#dropin-container",
      },
      function (err, instance) {
        button.addEventListener("click", function () {
          instance.requestPaymentMethod(function (err, payload) {});
          this.showNewButton = true;
        });
      }
    );
  },
  methods: {
    addOrder() {
      axios
        .post(`${this.store.api_url}/orders`, {
          name: this.formData.name,
          surname: this.formData.surname,
          address: this.formData.address,
          telephone: this.formData.telephone,
          email: this.formData.mail,
          total: this.formData.total.toFixed(2),
          products: this.store.cartProducts,
        })
        .then((res) => {
          this.$router.push({ path: "/returnhp" });

          console.log(res);
        });
    },
  },
};
</script>

<template>
  <section class="order">
    <div class="left">
      <div class="gradient-left"></div>
    </div>
    <form @submit.prevent="addOrder()">
      <div class="segment mt-5">
        <h1>Inserisci i Tuoi Dati</h1>
      </div>

      <input
        class="my-2"
        type="email"
        id="email"
        required
        maxlength="30"
        placeholder="Email Address *"
        v-model="formData.mail"
      />
      <input
        class="my-2"
        type="text"
        id="name"
        required
        maxlength="30"
        placeholder="Nome *"
        v-model="formData.name"
      />
      <input
        class="my-2"
        type="text"
        id="surname"
        required
        maxlength="30"
        placeholder="Cognome *"
        v-model="formData.surname"
      />
      <input
        class="my-2"
        type="text"
        id="address"
        required
        maxlength="50"
        placeholder="Indirizzo di consegna *"
        v-model="formData.address"
      />
      <input
        class="my-2"
        type="text"
        id="telephone"
        required
        maxlength="10"
        minlength="10"
        placeholder="Telefono *"
        v-model="formData.telephone"
      />
      <h3 class="my-2">
        Totale:
        {{ formData.total }} €
      </h3>

      <div id="dropin-container"></div>
      <!-- <router-link :to="{ name: 'returnhp' }"> -->
      <button id="submit-button" class="red my-3" type="submit">
        Acquista
      </button>

      <!-- </router-link> -->
      <router-link :to="{ name: 'homepage' }"
        ><button class="red my-3" type="button">
          Torna alla HomePage
        </button></router-link
      >
    </form>
    <div class="right">
      <div class="gradient-right"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
$ruler: 16px;
$color-red: #ae1100;
$color-bg: #ebecf0;
$color-shadow: #babecc;
$color-white: #fff;

.order {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .left {
    background-image: url(../../src/assets/pexels-jonathan-borba-2983099.jpg);
    background-size: cover;
    width: calc(100% / 3);
    .gradient-left {
      background: linear-gradient(275deg, #0a0a0a 0%, rgba(10, 10, 10, 0) 100%);
      width: 100%;
      height: 100%;
    }
    @media only screen and (max-width: 576px) {
      display: none;
    }
  }
  .right {
    background-image: url(../../src/assets/pexels-william-choquette-2641886.jpg);
    background-size: cover;
    width: calc(100% / 3);
    .gradient-right {
      background: linear-gradient(90deg, #0a0a0a 0%, rgba(10, 10, 10, 0) 50%);
      width: 100%;
      height: 100%;
    }

    @media only screen and (max-width: 576px) {
      display: none;
    }
  }
  form {
    width: calc(100% / 3);
    @media only screen and (max-width: 576px) {
      width: 100%;
      padding: 30px 100px;
    }
  }
}

body,
html,
form {
  background-color: $color-bg;
}

body,
p,
input,
select,
textarea,
button {
  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.2px;
  font-size: $ruler;
}

div,
p {
  color: $color-shadow;
  text-shadow: 1px 1px 1px $color-white;
}

form {
  padding: $ruler;
  width: $ruler * 20;
  padding-left: 40px;
  padding-right: 40px;
}

.segment {
  padding-bottom: 20px;
  text-align: center;
  h1 {
    font-weight: bold;
    color: #00ccbc;
  }
  @media only screen and (max-width: 576px) {
    padding: 40px 0;
  }
}

button,
input {
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler * 20;
  padding: $ruler;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
}

label {
  display: block;
  margin-bottom: $ruler * 1.5;
  width: 100%;
}

input {
  margin-right: 8px;
  box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }
}

button {
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px $color-white, 5px 5px 20px $color-shadow;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;
  }

  &:active {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }

  .icon {
    margin-right: 8px;
  }

  &.unit {
    border-radius: 8px;
    line-height: 0;
    width: $ruler * 3;
    height: $ruler * 3;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    font-size: $ruler * 1.2;

    .icon {
      margin-right: 0;
    }
  }

  &.red {
    display: block;
    width: 100%;
    color: $color-red;
  }
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    margin: 0;
    flex: 1;
  }
}

.final-order {
  color: #00ccbc;
  width: 100%;
  font-weight: bold;
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler * 20;
  padding: $ruler;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
}
</style>
