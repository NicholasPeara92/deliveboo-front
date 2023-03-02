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
    >
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
      {
        title: "Slide #5",
        content: `<img src="https://www.tandoori.it/wp-content/uploads/2018/02/Logo-Tandoori-sh-tr02.png">`,
      },
      {
        title: "Slide #6",
        content: `<img src="http://www.mythosristorante.it/new/wp-content/uploads/2013/11/logo11.png">`,
      },
      {
        title: "Slide #7",
        content: `<img src="https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/291531583_527044179121977_920587846237125201_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QEauVtIfeFgAX9UGnHM&_nc_ht=scontent-fco2-1.xx&oh=00_AfBp_996_ksXLFksHYHCMmtNHRMSnYgtBRWmerH3Jlutxw&oe=64033660">`,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
