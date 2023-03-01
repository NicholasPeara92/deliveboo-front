<script>
import { store } from "../store";
export default {
  name: "Order",
  data() {
    return {
      store,
      name: "",
      email: "",
      telephone: "",
      address: "",
    };
  },
  mounted() {
    let button = document.querySelector("#submit-button");

    braintree.dropin.create(
      {
        authorization: "sandbox_g42y39zw_348pk9cgf3bgyw2b",
        selector: "#dropin-container",
      },
      function (err, instance) {
        button.addEventListener("click", function () {
          instance.requestPaymentMethod(function (err, payload) {
            // Submit payload.nonce to your server
          });
        });
      }
    );
  },
};
</script>

<template>
  <form>
    <div class="segment mt-5">
      <h1>Inserisci i tuoi dati</h1>
    </div>
    <form @submit.prevent>
      <label for="name" class="form-label my-2 ms-3">Inserisci il nome*</label>
      <input type="text" id="name" required placeholder="Nome" />
      <label for="Email" class="form-label my-2 ms-3">Inserisci l'email*</label>
      <input type="text" id="Email" required placeholder="Email Address" />
      <label for="address" class="form-label my-2 ms-3"
        >Inserisci l'indirizzo*</label
      >
      <input
        type="text"
        id="address"
        required
        placeholder="Indirizzo di consegna"
      />
      <label for="telephone" class="form-label my-2 ms-3"
        >Inserisci il numero di telefono*</label
      >
      <input type="text" id="telephone" required placeholder="Telefono" />
      <h3 class="my-2">Totale: {{ store.getTotalPrice() }} €</h3>

      <div id="dropin-container"></div>
      <button id="submit-button" class="red my-3" type="submit">
        <a href=""></a>Acquista
      </button>
    </form>
    <router-link :to="{ name: 'homepage' }"
      ><button class="red my-3 ms-3" type="button">
        Torna alla HomePage
      </button></router-link
    >
  </form>
</template>

<style scoped lang="scss">
$ruler: 16px;
$color-red: #ae1100;
$color-bg: #ebecf0;
$color-shadow: #babecc;
$color-white: #fff;

body,
html {
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
  margin: 0 auto;
}

.segment {
  padding: $ruler * 2 0;
  text-align: center;
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
</style>
