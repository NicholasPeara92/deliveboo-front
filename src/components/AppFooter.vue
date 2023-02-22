
<script setup>
import { ref } from 'vue'
</script>

<!--------------------------------->
<template>
  <div class="body">
    <div class="container">
      <div class="lista">
        <ul>
          <li><h5>Scopri DeliveBoo</h5></li>
          <li><a href="*">Chi siamo</a></li>
          <li><a href="*">Ristoranti</a></li>
          <li><a href="*">Diventa Nostro partner</a></li>
        </ul>
      </div>
      <div class="lista">
        <ul>
          <li><h5>Aiuto</h5></li>
          <li><a href="*">Contatti</a></li>
          <li><a href="*">FAQ</a></li>
        </ul>
      </div>
      <div class="lista">
        <ul>        
          <li><h5>Porta DeliveBoo con te</h5></li>
          <li><a href="*">PlayStore</a></li>
          <li><a href="*">AppStore</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<!--------------------------------->
<style lang="scss" scoped>
.body{
  background-color: #2e3333;
  overflow: hidden;
  height: 300px;
}
.container{
  display: flex;
  justify-content: space-between;
    .lista{
      align-items:center; 
      color: white;
      padding-top: 50px ;
        ul{
          background-color: #434848;
          list-style-type: none;
          height: 150px;
          width: 250px;
          margin-top: 20px;
          }
        a{
          color: #00cdbc;
        }
      }
    }
</style>