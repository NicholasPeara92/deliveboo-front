<template>
  <section class="partner">
    <div class="section">
      <h3>Diventa nostro partner!</h3>
      <p>
        Raggiungi più clienti con DeliveBoo! Gestiamo noi la consegna <br />
        così tu puoi dedicarti a offrire i migliori piatti e prodotti
      </p>
      <button><a href="http://127.0.0.1:8000/register">inizia ora!</a></button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.partner {
    padding: 100px;
    display: flex;
    justify-content: center;
    background-color: white;
    position: relative;
    height: 1000px;


  .section {
    background-image: url(../../assets/partner.PNG);
    text-align: center;
    position: absolute;
    top: 100px;
    width: 1600px;
    height: 800px;
    border-radius: 25px;
    box-shadow: 0px 0px 20px rgba(1, 1, 1, 0.75);

    h3 {
      margin-top: 100px;
      font-size: 48px;
    }
    p {
      font-size: 30px;
      font-weight: bold;
    }

    button {
      margin-top: 50px;
      border-radius: 20px;
      padding: 10px 20px;
      border: 1px solid #00ccbc;
      background-color: #00ccbc;
      font-weight: bold;
      a {
        font-size: 28px;
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
