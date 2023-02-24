<template>
  <section class="about py-4">
    <div class="container-titleCards">
      <h3 class="titleCard mb-4 text-white">Il Nostro Team</h3>
    </div>
    <div class="container-cards">
      <div class="card">
        <img src="../../assets/person 2.png" alt="" />
        <h5>Pino</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a id
          dolor dolorem! Doloremque quisquam facilis debitis architecto?
        </p>
      </div>
      <div class="card">
        <img src="../../assets/person 1.png" alt="" />
        <h5>Giulia</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a id
          dolor dolorem! Doloremque quisquam facilis debitis architecto?
        </p>
      </div>
      <div class="card">
        <img src="../../assets/person 3.png" alt="" />
        <h5>Antonino</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a id
          dolor dolorem! Doloremque quisquam facilis debitis architecto?
        </p>
      </div>
      <div class="card">
        <img src="../../assets/person 4.png" alt="" />
        <h5>Andrea</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a id
          dolor dolorem! Doloremque quisquam facilis debitis architecto?
        </p>
      </div>
      <div class="card">
        <img src="../../assets/person 5.png" alt="" />
        <h5>Camilla</h5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias a id
          dolor dolorem! Doloremque quisquam facilis debitis architecto?
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

  @media only screen and (max-width: 768px) {
    height: auto;
    opacity: 100%;
  }
}

.container-cards {
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.card {
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

  .card-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  .card-description {
    font-size: 14px;
    color: #666;
  }
}

img {
  max-width: 120px;
  border-radius: 50%;
  margin: auto;
}
</style>
