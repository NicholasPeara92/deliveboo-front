<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="body">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-4 col-md-3 item">
          <h5>Scopri DeliveBoo</h5>
          <ul>
            <li><a href="#about-us">Chi siamo</a></li>
            <li><a href="#restaurants">Ristoranti</a></li>
            <li><a href="#partner">Diventa Nostro partner</a></li>
          </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
          <h5>Aiuto</h5>
          <ul>
            <li><a href="#contact-us">Contatti</a></li>
            <li><a href="https://deliveroo.it/it/faq">FAQ</a></li>
          </ul>
        </div>
        <div class="col-sm-4 col-md-3 item">
          <h5 class="text-center">Porta con te DeliveBoo</h5>
          <ul class="d-flex justify-content-center">
            <li class="me-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.deliveroo.orderapp&hl=it&gl=US"
                ><img class="google" src="../assets/google.png" alt="playstore"
              /></a>
            </li>
            <li>
              <a
                href="https://apps.apple.com/it/app/deliveroo-food-delivery-app/id1001501844"
                ><img
                  class="apple"
                  src="../assets/Apple 300x104.png"
                  alt="appstore"
              /></a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 item social">
          <a  href="https://www.facebook.com/DeliverooIT/?locale=it_IT"><i class="fa-brands fa-facebook-f"></i></a
          ><a href="https://twitter.com/Deliveroo_Italy"><i class="fa-brands fa-twitter"></i></a
          ><a href="https://www.instagram.com/deliveroo_italy/"><i class="fa-brands fa-instagram"></i></a>
          <p class="copyright">DeliveBoo © classe 76 - 2023</p>
        </div>
      </div>
    </div>
    <div>
      <button class="top-btn">
        <a href="#top"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="#fff" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.707 14.293c-.391.391-1.023.391-1.414 0l-4.293-4.293-4.293 4.293c-.391.391-1.023.391-1.414 0-.391-.391-.391-1.023 0-1.414l4.999-4.999c.191-.191.447-.293.707-.293s.516.102.707.293l4.999 4.999c.391.391.391 1.023 0 1.414z"/></svg></a>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  padding: 50px 0;
  background-color: #2e3333;
}

.body h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

h5 {
  color: white;
}

p {
  color: white;
}

i {
  color: white;
}
ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.8;
  color: #00ccbc;
}

ul a:hover {
  opacity: 1;
}

.item.social {
  text-align: right;
}

@media (max-width: 767px) {
  .body .item {
    text-align: center;
    padding-bottom: 20px;
  }
}

@media (min-width: 768px) {
  .body .item.social {
    text-align: center;
  }
}

.body .item.social > a {
  font-size: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 22px;
  color: inherit;
  opacity: 0.75;
}

.body .item.social > a:hover {
  opacity: 0.9;
}

@media (max-width: 991px) {
  .body .item.social > a {
    margin-top: 40px;
  }
}

@media (max-width: 767px) {
  .body .item.social > a {
    margin-top: 10px;
  }
}

.body .copyright {
  margin-top: 14px;
  margin-bottom: 0;
  font-size: 13px;
  opacity: 0.6;
}
.google {
  width: 104px;
  height: 40px;
}
.apple {
  width: 104px;
  height: 40px;
}

.top-btn {
  background-color: #66cccc;
  border-radius: 50%;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 99;
  margin-bottom: 50px;
}

.top-btn:hover {
  background-color: #55aaaa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.top-btn svg {
  width: 24px;
  height: 24px;
  fill: #fff;
}
</style>
