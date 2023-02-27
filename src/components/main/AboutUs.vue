<template>
  <section id="about-us" class="about py-4">
    <h3 class="text-center">IL NOSTRO TEAM</h3>
    <div class="container-titleCards">
      <h3 class="titleCard mb-4 text-white">Il Nostro Team</h3>
    </div>
    <div class="container-cards">
      <div class="card">
        <img src="../../assets/person 2.png" alt="" />
        <h5>Pino</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> Oggi Deliveboo è presente in 11
          mercati in tutto il mondo, collabora con migliaia di ristoranti e
          rider e arriva nelle case di milioni di clienti.
          <i class="fa-solid fa-quote-right"></i>
        </p>
      </div>
      <div class="card">
        <img src="../../assets/person 1.png" alt="" />
        <h5>Giulia</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> Da anni lavoriamo sodo per
          capire cosa vogliono i clienti e per offrire una proposta adatta a
          loro sia a livello geografico, sia individuale.
          <i class="fa-solid fa-quote-right"></i>
        </p>
      </div>
      <div class="card">
        <img src="../../assets/person 3.png" alt="" />
        <h5>Antonino</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> Il nostro modello ha fatto
          aumentare esponenzialmente il numero di ristoranti che offrono le
          consegne a domicilio. <i class="fa-solid fa-quote-right"></i>
        </p>
      </div>
      <div class="card">
        <img src="../../assets/person 4.png" alt="" />
        <h5>Andrea</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> La tecnologia sviluppata da
          Deliveboo permette di portare a termine contemporaneamente migliaia di
          ordini in tutto il mondo. <i class="fa-solid fa-quote-right"></i>
        </p>
      </div>
      <div class="card">
        <img src="../../assets/person 5.png" alt="" />
        <h5>Camilla</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> La passione di Deliveroo è il
          cibo, con l'obiettivo di fornire alle persone una scelta sempre più
          ampia di ristoranti e di attività legate al cibo.
          <i class="fa-solid fa-quote-right"></i>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  height: 500px;
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  h3 {
    font-size: 32px;
    font-weight: bold;
  }

  @media only screen and (max-width: 576px) {
    height: auto;
    opacity: 100%;
  }
}

.container-cards {
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.card {
  width: calc(100% / 5);
  height: 350px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  transition: all 0.3s;
  @media only screen and (max-width: 576px) {
    width: auto;
  }

  &:hover {
    transform: translateY(-5px);
  }
}

img {
  max-width: 120px;
  border-radius: 50%;
  margin: auto;
}
</style>
