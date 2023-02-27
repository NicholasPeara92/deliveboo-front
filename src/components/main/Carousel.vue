<script>
export default {};

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentImage = 0;
  carousel.children[currentImage].classList.add('active');

  prevBtn.addEventListener('click', () => {
    carousel.children[currentImage].classList.remove('active');
    currentImage = (currentImage === 0) ? carousel.children.length - 1 : currentImage - 1;
    carousel.children[currentImage].classList.add('active');
  });

  nextBtn.addEventListener('click', () => {
    carousel.children[currentImage].classList.remove('active');
    currentImage = (currentImage === carousel.children.length - 1) ? 0 : currentImage + 1;
    carousel.children[currentImage].classList.add('active');

    function restartCarousel() {
  currentImage = 0;
  carousel.children[currentImage].classList.add('active');
}
  });
    let currentSlide = 0;
    const slides = document.querySelectorAll('#carousel img');
    const intervalTime = 5000; // Cambiare qui l'intervallo in millisecondi
    let slideInterval;

    // Funzione per passare alla prossima immagine
    function nextSlide() {
    slides[currentSlide].className = 'next';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'active';
    }

    // Avvia lo slideshow
    function startSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
    }

    // Ferma lo slideshow
    function stopSlide() {
    clearInterval(slideInterval);
    }

    // Avvia lo slideshow quando la pagina è caricata
    window.onload = startSlide;
});




</script>

<template>
    <h1>Prova i nostri migliori ristoranti!</h1>
    <div id="carousel" class="carousel">
        <img src="../../assets/LogoMC.png">
        <img src="../../assets/logoKFC.jpg">
        <img src="../../assets/Ristorante da ciro.jpg">
        <img src="../../assets/Ristorante da pino.png">
        <button id="prevBtn"><i class="fa-solid fa-arrow-left"></i></button>
        <button id="nextBtn"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
</template>

<style lang="scss" scoped>

h1{
    font-size: 40px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
}
.carousel {
  position: relative;
  display: flex;
  overflow: hidden;
  height: 300px;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Aggiungiamo questa proprietà per evitare che le immagini si deformino */
  transition: transform 0.5s ease-in-out;
}

.carousel img.active {
  transform: translateX(0%);
}

.carousel img.next {
  transform: translateX(100%);
}

.carousel img.prev {
  transform: translateX(-100%);
}
    #carousel {
        padding-top: 300px;
        position: relative;
        width: 100%;
        max-width: 800px;
        height: 300px;
        overflow: hidden;
        margin: 0 auto;
    }

    #carousel img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    }

    #carousel img.active {
    opacity: 1;
    }

    #prevBtn, #nextBtn {
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    color: white;
    background-color: #66cccc;
    }

    #prevBtn {
    left: 5px;
    }

    #nextBtn {
    right: 5px;
    }

    #prevBtn:hover, #nextBtn:hover {
        background-color: rgba(0, 0, 0, 0.7);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 767px) {
    #carousel {
        height: 200px;
    }
    
    #prevBtn, #nextBtn {
        display: none;
    }
    }
</style>