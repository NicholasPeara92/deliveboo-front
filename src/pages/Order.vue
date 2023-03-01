<script>
</script>

<template>    
  <div class="container mt-5">
    <div class="header">
      <h1 class="pt-5 text-center">Resoconto dell'ordine:</h1>
      <div class="input d-flex justify-content-center mt-4">
        <h3>Dettagli dell'ordine:</h3>
        <strong class="d-block">Nome: {{ order.name }}</strong>
        <strong class="d-block">Cognome: {{ order.surname }}</strong>
        <strong class="d-block">Email: {{ order.email }}€</strong>
        <strong class="d-block">Indirizzo di consegna: {{ order.address }}</strong>
        <strong class="d-block">Recapito telefonico: {{ order.number }}€</strong>
        <strong class="d-block">Totale dell'ordine: {{ order.total }}€</strong>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>