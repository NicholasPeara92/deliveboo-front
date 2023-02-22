
<script setup>
import { ref } from 'vue'
</script>

<!--------------------------------->
<template>
    <div class="body">
      
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                      <h5>Scopri DeliveBoo</h5>
                        <ul>
                          <li><a href="*">Chi siamo</a></li>
                          <li><a href="*">Ristoranti</a></li>
                          <li><a href="*">Diventa Nostro partner</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                      <h5>Aiuto</h5>
                        <ul>
                          <li><a href="*">Contatti</a></li>
                          <li><a href="*">FAQ</a></li>      
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h5>Porta con te DeliveBoo</h5>
                        <ul>
                          <li><a href="*"><img class="google" src="../assets/google.png" alt="playstore"></a></li>
                          <li><a href="*"><img class="apple" src="../assets/Apple 300x104.png" alt="appstore"></a></li> 
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <p class="copyright">DeliveBoo  © classe 76 - 2023</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<style lang="scss" scoped>
.body {
  padding:50px 0;
  background-color:#2E3333;
}

.body h3 {
  margin-top:0;
  margin-bottom:12px;
  font-weight:bold;
  font-size:16px;
}

ul {
  padding:0;
  list-style:none;
  line-height:1.6;
  font-size:14px;
  margin-bottom:0;
}

h5{
  color: white;
}

p{
  color:white;
}

i{
  color: white;
}
ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
  color: #00ccbc
}

ul a:hover {
  opacity:1;
}

.item.social {
  text-align:right;
}

@media (max-width:767px) {
  .body .item {
    text-align:center;
    padding-bottom:20px;
  }
}

@media (max-width: 768px) {
  .body .item.social {
    text-align:center;
  }
}

.body .item.social > a {
  font-size:24px;
  width:40px;
  height:40px;
  line-height:40px;
  display:inline-block;
  text-align:center;
  border-radius:50%;
  border:1px solid #ccc;
  margin-left:10px;
  margin-top:22px;
  color:inherit;
  opacity:0.75;
}

.body .item.social > a:hover {
  opacity:0.9;
}

@media (max-width:991px) {
  .body .item.social > a {
    margin-top:40px;
  }
}

@media (max-width:767px) {
  .body .item.social > a {
    margin-top:10px;
  }
}

.body .copyright {
  margin-top:14px;
  margin-bottom:0;
  font-size:13px;
  opacity:0.6;
}
.google{
  width: 104px;
  height: 40px;
  }
.apple{
  width: 104px;
  height: 40px;
}
</style>