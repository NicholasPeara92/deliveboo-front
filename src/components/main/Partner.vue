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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    position: relative;
    height: 900px;
    width:100%;


  .section {
    background-image: url(../../assets/partner.PNG);
    width: 1400px;
    height: 700px;
    text-align: center;
    position: absolute;
    border-radius: 25px;
    box-shadow: 0px 0px 20px rgba(1, 1, 1, 0.75);
    background-position:center;

      @media only screen and (max-width: 768px) {
      height: 800px;
      width: auto;
      padding: 50px;

    }
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
