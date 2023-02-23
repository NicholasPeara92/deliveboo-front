<template>
  <div class="background">
    <header class="hero">
      <div class="contact">
        <div class="back"></div>
      </div>
      <div class="headerhero">
        <div class="title">
          <h2>Contattaci</h2>
        </div>
      </div>
    </header>
    <div class="table">
      <div class="answer">
        <div>
          <h3><strong>Domande Per Il Customer Service</strong></h3>
          <h6>Domande sul tuo ordine?</h6>
          <p>
            Siamo qui per aiutarti! Mandaci una email a
            <a href="mailto:press@deliveboo.it">support@deliveboo.it</a>.
          </p>
          <h3><strong>Contatti Media</strong></h3>
          <p>
            Per le interviste o altre richieste media, per favore scrivi una
            mail a <a href="mailto:press@deliveboo.it">press@deliveboo.it</a> .
            <br />Purtroppo l'ufficio stampa non ha accesso alle informazioni
            sugli account, quindi non può essere d'aiuto con le richieste dei
            clienti. <br />
            Si prega di contattare il servizio clienti.
          </p>
          <p>
            <em
              >Sede legale: Deliveboo Italy S.R.L. Via Fabio Filzi 83
              Castellaneta (TA) 74011</em
            >
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
    margin-top: 50px;
    .title {
      padding: 0 65px;
      margin-bottom: 20px;
      text-align: center;
      h2 {
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
      padding: 30px;
      justify-content: center;
      margin-bottom: 35px;
      color: black;
      width: 70%;
      background-color: #f9fafa;
      border-radius: 7px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
      a {
        text-decoration: none;
        color: #00a396;
      }
      a:hover {
        text-decoration: underline;
        opacity: 55%;
      }
    }
  }
}
</style>
