<script>
</script>

<template>
    <div class="container">
        <h1>Grazie per l'acquisto!</h1>
        <h3>Il tuo ordine è stato preso in carico</h3>
        <router-link :to="{ name: 'homepage' }"><button class="red my-3 ms-3" type="button">Torna alla HomePage</button></router-link>
        <div class="gif">
            <img src="../assets/deliveroo.gif" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
.container{
    background-image:url();
    padding-top: 200px;
    display: flex;
    text-align: center;
    flex-direction: column;
    button{
        margin-right: 10px;
        background-color: $primary-color;
        color: $font-color;
        border: none;
        border-radius: 50px;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        &:hover {
        background-color: darken($primary-color, 10%);
      }

      &:active {
        background-color: darken($primary-color, 20%);
      }
    }
}
</style>