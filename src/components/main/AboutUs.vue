<template>
  <section class="about py-4">
    <div class="container-titleCards">
      <h3 class="titleCard mb-4 text-white">Il nostro team</h3>
    </div>
      <div class="container-cards">
          <div class="card">
            <img src="../../assets/deliveroo-3442893-2875354.webp" alt="" />
            <h5>Pino</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a
              id dolor dolorem! Doloremque quisquam facilis debitis architecto?
              Eum earum corrupti inventore doloremque ut id in nesciunt
              explicabo ad quae!
            </p>
        </div>
          <div class="card">
            <img src="../../assets/deliveroo-3442893-2875354.webp" alt="" />
            <h5>Pino</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a
              id dolor dolorem! Doloremque quisquam facilis debitis architecto?
              Eum earum corrupti inventore doloremque ut id in nesciunt
              explicabo ad quae!
            </p>
        </div>
          <div class="card">
            <img src="../../assets/deliveroo-3442893-2875354.webp" alt="" />
            <h5>Pino</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a
              id dolor dolorem! Doloremque quisquam facilis debitis architecto?
              Eum earum corrupti inventore doloremque ut id in nesciunt
              explicabo ad quae!
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
  background-color: #2E3333;
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
 
  @media only screen and (max-width: 768px) {
    height: 1300px;

  }
}

.container-cards{
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.card{
  width: auto;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;

&:hover {
transform: translateY(-5px);
}
// @media only screen and (max-width: 768px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;

//   }
  .card-title{
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px
  }
  .card-description{
    font-size: 14px;
    color: #666;
  }
}

img {
  max-width: 80px;
  border-radius: 50%;
  margin: auto;
}
</style>
