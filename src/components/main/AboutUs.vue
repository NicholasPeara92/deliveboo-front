<template>
  <section id="about-us" class="about py-4">
    <div class="container-titleCards">
      <h3 class="text-center">Il Nostro Team</h3>
    </div>
    <div class="container-cards">
      <div class="card">
        <img
          src="https://media.licdn.com/dms/image/C5603AQECVKK6WWkyWQ/profile-displayphoto-shrink_800_800/0/1637349939483?e=1683158400&v=beta&t=K5F22VWzFNeCgy0n08RKOutcwCtrxV_E3xoiMCXm5ek"
          alt=""
        />
        <h5>Nicolò</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> Oggi Deliveboo è presente in 11
          mercati in tutto il mondo, collabora con migliaia di ristoranti e
          rider e arriva nelle case di milioni di clienti.
          <i class="fa-solid fa-quote-right"></i>
        </p>
      </div>
      <div class="card">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQGhoZYG3EoBZA/profile-displayphoto-shrink_800_800/0/1675231921326?e=1683158400&v=beta&t=saDubWqsVO_9wSnjrxc4WLsIv0jOyhOwU3FFl7VNJ4Y"
          alt=""
        />
        <h5>Nicholas</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> Da anni lavoriamo sodo per
          capire cosa vogliono i clienti e per offrire una proposta adatta a
          loro sia a livello geografico, sia individuale.
          <i class="fa-solid fa-quote-right"></i>
        </p>
      </div>
      <div class="card">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQHspQdojDpKtQ/profile-displayphoto-shrink_800_800/0/1676309100546?e=1683158400&v=beta&t=c95bzmKczHwQrWZRPorbFOdUFRjkYqpHAU7gfIfcWJo"
          alt=""
        />
        <h5>Angelo</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> Il nostro modello ha fatto
          aumentare esponenzialmente il numero di ristoranti che offrono le
          consegne a domicilio. <i class="fa-solid fa-quote-right"></i>
        </p>
      </div>
      <div class="card">
        <img
          src="https://media.licdn.com/dms/image/D5603AQHbjq8DM1CX9Q/profile-displayphoto-shrink_800_800/0/1675283544185?e=1683158400&v=beta&t=BVGRz2mi1PGWUGMQdz3T0ysb5clmf6L7XD6CXh6kfr8"
          alt=""
        />
        <h5>Alessandro</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> La tecnologia sviluppata da
          Deliveboo permette di portare a termine contemporaneamente migliaia di
          ordini in tutto il mondo. <i class="fa-solid fa-quote-right"></i>
        </p>
      </div>
      <div class="card">
        <img src="../../assets/person 5.png" alt="" />
        <h5>Francesco</h5>
        <p>
          <i class="fa-solid fa-quote-left"></i> La passione di Deliveboo è il
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
    font-size: 40px;
    font-weight: bold;
    color: #00ccbc;
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
