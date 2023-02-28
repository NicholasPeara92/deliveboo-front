<template>
  <div>
    <vueper-slides
      :slide-ratio="1 / 2"
      fixed-height="350px"
      ref="myVueperSlides"
      autoplay
      :pause-on-hover="pauseOnHover"
      @autoplay-pause="internalAutoPlaying = false"
      @autoplay-resume="internalAutoPlaying = true"
      >>
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :content="slide.content"
      >
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  data: () => ({
    pauseOnHover: true,
    autoPlaying: true,
    internalAutoPlaying: true,
    slides: [
      {
        title: "Slide #1",
        content: `<img src="https://www.crearelogo.it/wp-content/uploads/i-lovin-300x250.jpg">`,
      },
      {
        title: "Slide #2",
        content: `<img src="https://seeklogo.com/images/K/kfc-logo-A232F2E6D1-seeklogo.com.png">`,
      },
      {
        title: "Slide #3",
        content: `<img src="https://raw.githubusercontent.com/NicholasPeara92/deliveboo-front/0c277eae807e38895eefbec187f915f20b9b8d01/src/assets/Ristorante%20da%20ciro.jpg">`,
      },
      {
        title: "Slide #4",
        content: `<img src="https://raw.githubusercontent.com/NicholasPeara92/deliveboo-front/0c277eae807e38895eefbec187f915f20b9b8d01/src/assets/Ristorante%20da%20pino.png">`,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
