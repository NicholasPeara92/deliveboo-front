<template>
  <section class="partner">
    <div class="section">
      <h1>Diventa nostro partner!</h1>
      <h3>
        Raggiungi più clienti con DeliveBoo! Gestiamo noi la consegna <br> così tu
        puoi dedicarti a offrire i migliori piatti e prodotti
      </h3>
      <button><a href="http://127.0.0.1:8000/register">inizia ora!</a></button>
    </div>
    <img src="../../assets/partner.PNG" alt="" />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.partner {
  position: relative;
  height: 600px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
.section {
    text-align: center;
    position: absolute;
    margin-top: 10%;
    margin-left: 30%;

    button {
        margin-top: 50px;
        border-radius: 20px;
        padding: 10px 20px;
        border: 1px solid #00ccbc;
        background-color: #00ccbc;
        font-weight: bold;
        a{
            color: white;
            text-decoration: none;
        }
        }
    }
}
</style>
