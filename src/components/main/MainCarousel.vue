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
        content: `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAaVBMVEX///8jOYNaa6KRnMHx8/cxRYvIzeBMXpo/UpPW2uh2hLKstNDj5u+6wdhod6qeqMmEkLnp6/OYosUoPoZ7iLXQ1OSjq8szR4ve4ezEyd09UJJdbaRVZp+Dj7m3vdaKlb1mdKhufK1IWZgHZxEEAAAXxElEQVR4nO1d55bjNrIWkYhEEuNwHcb2ePf9H3JRKIQCk6hWq2fOuV0/uhVIor7KiLrdPumTPumTPumTPumT/t+Rd5xbxljgfPLfm5lnyHCOSPQwDJLxSXxvjh4gr/jklDPrz9UUIQ06akep78HXIwSWdMeGvGNROYPd4PwRCDn31q7YEyExnUjOy8KRxvSBDj8WlslGviJLYgrcbXWhkhl5Ow47pPmPEgAElyBsZxY2LneY8moJTK6xMPcDuD/CiMFIS7Apv8zT5hrDgKwr773bKGfeUeSHktPFQha1xHg0sGT0xvEYbEtcUlnw9aYYzYTiK9WM31EvqgpWJo+WAeUa8MOlXLYCkt7wqDmzzCCIcVpQHt8pjPm5k6i01agcfsLzW9W/FVmH+R0mlAXVw75DdlnkCoUJxTbMjgo2uOb+cYLjx/aDncUzAiM6uOfROqo7Z6vv3xYgK33dSqjLj5T1i48gUIduTmpYL+TsO+Vtz3kWfTGiqL45v17wgfOHuQrIbtRoUqnRKaum2JbFt8VKeiBzf22KDNq11+OHRa9JDtqmLMhLm1k7xbaWXug9EEZ9fXWr0h+HRESx2blJMVHoHTj7c4m/PZD+0hwYpGhPH8aPcHg/xuQ3Zp+swdJndsp7fBu6dxmI6GFlEdjaAChFvt5LolkF8HQItbHJKrrs3lP3tsTfjnXVX6l7K7yhUuSr8wkf5BT0bGM7YqaCdL1gbecHHRDXBYKsyuoxygqsGIjdvj8JO4yKCwM+nvNhkZzobSt7e37XXcr3Lqy5g0VJ4UUvRCLGKHF/m6Cl7KMte9vOYrL9mMIdATJ3942dfvC+OcrJjIMTL4peRqKUPGV8XeIW2+q+ZNs3WQV+JY6c3FEpbnkJEiU7DxRyxYPuTGak7HZAOs1lyypmlKWB9xnt+Auil1vHRL5SCe84RIWFLRDR2dLYoS+GplETwqr379O7bZYqtVZ+m60kUFhsC0RR1n1vjzmg1dAc85R9Z58PtW5oPdliB6WprvRQ9A0F4ijCbFlF7HplrTcIMPD4d8v0tuKwLVKW6q/kAEe5yha0BcK3zrN6wNCZEyDxcjsQ8BwOYYlTxOf3KpHUtjThiQJhxHgy2lKS6c44Iy3YShCjfBed2FLSieSM7aG8V0mXzucN8/h6JL7eJ/lsZ7LG3JAySgz7VozU3J7AYQgO0vMTuhOpoZZBTWgmZkZNDj/PdbBY6Td1cpIluCEiKWp7Bkcx2tJ9asqfeiFq8q0ir3ljHuMUyjdbVrb/rN4qepOAJSQ8ItHPGpclMiqpo32Se+7ZdxdiW4KwRYBQfGhZORIXhdTiragfkMyDNavBijfgCN07bLwEltIPEfQdyk43UATIQgQxU/WWQZRNU/C0aMN2esq4Qh/VS+ptvVHeqQRZW8jrNRB8meSQLSv7n+yMtIZi1JCPb/kzXRRXy4VMReFVcoUB1AL6zLhmmQBh7SW9uCigSL0U18WIZ/tUXQ/+ZrYfdU32PSrZbEs1gRIgSRCM8I7sZaMs8bCEw2rWZmRPIAHxo80QrVRZFYTZ3+mobwIpms0RIIQ9BC0IqOrpZTC2OTjXW6FeJouymyC5tk+L9RabM1QlhghWV54bEN+0MJHbfM93To3duBBge+OYxISmPznQTBvlqEG4NBuoSkjiZtWKGhDVlIlKmG7tdSkZSjXacnysGpN3vmnEC9x4geEfbIYgKZGRtwsrLtdsK7GfssRSIS3NyNJdmnLeP4/KX0WTSB+/JZkwNBGmpo2eS+jKJu3IO5IHp14PTTfk21CaGlrJVobHW8Xr0tNTnHk8mUxoAnwuNS5BUoJK0T0dxUJ1wRe+wmtAWOXeNhtUnViypZIY5XJbE7nqMoEiLURbUSss0kcsQTiHS8rJ1LiQRa4NyFgNTzfsjMihFnTNlLNPzvhKP+gmFuUNRaerMzrNaos/hnp1ZUXnVjODvANSAZuGNz8rT9TLyvaNPhtFMg6PuolCFpYkcrODpO9eCzIEx6tt8SLZCgStDa4K2Vxu/YBLVyr2OOAK1Zq8SCzp0OcBINEmPetTQgeN1L0tVUyFf9W9SMLR1XxQJLpLjDXwijYxBk8044PG5fBGW9Vou+fRj7LsdPuSFdNIkCQFshT2TdOgJpp1K8UTCZJO8wNzczpJ17TB9ppsG5LSCHolGTVx1bZkNqQKJBkb+HpYXY3uZeR+Ey3OoLov97GyQhhJgjCfkKmUK6Kba5rra3QYeMWy2CuQ8gGqoUWvXNf3PWfim7ZaEy/qvkQ6WanpkRtdH7tqKHHhW6aulQDPRuOLQYxZRaYKlhPZzPuP721JF1lcIIf3WskZrdKa45WmcuBE72ujDelj8I2pfEL/jzciV9Qe+na23tKRUwWH7Mp3Ra+5QzpJS+hZrhyrunyJjtk55yarxJPOmjAFdQZS34/F+Hg1yFJFrx69KnmVQPO8VAY7bG1R6JFq9VXXnCW6n+rLGpyK9PIXSZoLCWeokCTfvqu5bSldE+LdntrEKTE0Ql6qUEseVfVdwki2a1VuTCqpjLL8PwPh+dIKlK9uruKv4zVdvMFgaqVus/QnBCoGnxU14tKRV18iYj9oJ1uVyAu8KUfZBqS8HbN1YICwhPPsDtWGSbErSlz0Q7hUBdtiKjVKReW3+CVKN1R2wx+kA+WzYdj8X1UgDGWUAI+F3ySDXCryHgeVYFnDAyrhZPb0kBJjvhMLPJJIIPTNmDZ2LWrhIdGmTNZMZhK+nrNlFVdJss2lItpRjY5jc2nTShV18/OV/rsbWnVOVwCRp9ZyGA0hS3O6FRf1GWxTRf8vWZbIkkptoX1iszWds+YH1WUQrQndsOE+sYEY4ETMa6gLT1qqchV7jjesNJWVxPAtIjCILnUiZ9rxQt1jfNqMnOUFKhVH9sY6kn5A6elEbZwsL2uRuLaGcmmM1JSdylTUDEObUhh9BeKeckSYmyDMjoxueXVKoZKh57sF1zKsHKl7zlzL6+JAtjw3v05Xs+wHBnksEZ3js2f8p4oaM+8djpYFp11JqrvDdeOwMT+6WK6VCyU4J1VnDbkSxLL9BNSQyEBC0kD+plbk7d6Wpmqnmq6bpAEn6vi8chRZ7T211aQkEhdRJdPGsANydFklWe4Ii9W/HC/wqBBdtZkCb0nnVfF03STvcmC4kxMdSnD7eXtiXXNYyuER58cSYyJHIIWxzCTmXQaCngKMj62iR82SviIZ8CWmMK9cwt7JiRZbufn1amJBvL5E4trBNpWLuZWnOrEUkrQRSBKSQDtS+WoyxppjbLFeQWLudhWtvBO3ZDZFXhcjV/IkQYa+ZkyuiaJd8odTgjCmT2cEgrVP1rlGAxNVkd2zbl3M1Wu/9miyJ3EL2koGiqP/qweQBKn7QcbUOnKikDmNgdyrpJ4ERCVMuMor3cdLndnu7ubB87N757j5IGfU94ltLflrUR6yUgtJkNkhc5yRtWcbS6cFrWdMD4PXCIQn3uVQ3CXqoVa/pSzJlTaJubaHgVtosK0T2yrrAdro4rDafdBcJUdDkx3FFZ9hJRvCdFe4WRa7/o4HZhxjbJqafU25h+mat+EjSbzvuqg3X1rHnHRiW3ogw2eF+q0qJEFiJC7lsCtBONzUzBd1FB2NMreF6Qi4XF77AiizFnO7Tt1tajmFo6gPbUsMOa3TajGphT6RCAwjcVsoaljYIBBKqf1SdWJlgBnZxtzehrIon4LTgouhBx523VX50vUbEaAVupqtRZQxIcTh8hbqlUr79fT6IdG2OHeKKBjCfMaRil0Sc6mPK9s/SObe0pHWeUMp3ForgyVqaQkyRWIzLyj03a1HWxpnsi9OOCtzSmwSIglQLGuJRNerndBdAtyt0PLLegMR2XTTRFcMeWfD0TnJuU2dG2CpxVySAI1d34b7VFJoPOqUYDFEyK+FIdumm5wgcafXZOmFWg9hY5z7NLf9ZXVOuiVA4VayabttUklwFIDlDkgTVljG2oximGc6j4IhjtEzZYYNzZPYiiZeXbCItGOrJUBvV1Y608IpfXIABL7aiQRrLF2aNH1rswizt0ovy7Ai629TgL1vfP0NqSEUqwlw7aTzqvw7GagzB0BuYDpyt2W1DQmBT25kOig1EfO2vpSdozE7vrQqRGId0n29s8OxDJLtUB2zvYKF78FgYyycBiaZEm5mwefIKq33pHrme0qhUKb+ufv7NFXhYofVdBuksAMszRkgf7TEmDbvzREWn1H62bqlgz5L5ND3oWf0ZuMpAyngqc/pdRVe6RhImQSPgFjYbuFObSCWIEgloUfJpOJucRCuYuYkinIxr4tNBI3FiNh8lhova3LLaNz+AmaheB7f2B8DLpOXpYfDdndziwUcpEmNKcscWyYNxhOTZm8Xi5o2bpSaEdNe4pQGV/aDG0m7ZxlqSenK1RGaIyCqHw7TMWvtFAJtUiyaUzBzAFuK+dLzPZvZI23ELsIFs6TgO3t+XdtSzjElXgeSaLRLLxyCI3IEpiNn53fKmjMKwu0pZbI7+dpPq629nFSGGyrjAftJmbrNanMrVFpmeQgFkJ7EpgqCoS7bLQKKDjFv1YzzX/ocyDFH0W3Aa6b+05tYp5mrFL3NKx5WH97GgsQsR/UbaE0ObL9qLEDCSfGXuisrAV11iz2S0WrVqr1Y3oxiK6+OcI74oENSJ4/TKRr79XhbR/IWrtkl87OxDG8zpVuKnYBk5VeAZFKOz524kkJWZVQ6P+BIiSNrHSwQs9fperzrgFENushbxjqScAxJywjhCMi8AXIr6rGMbEWgzy/9eTXskyLXp5vHVLFi3Xqkn+THt7rUMckj9izXaYAfVb+pwcOFHiKqJw1qeAKkdquvAInpErLjFSAjqkRGJVh+0OU/3uN3DqTS4lqTSR9wokuqOHTgEWxiOX7EpOUIxPIU1TQciLICEq9xfBXvcWQ4rb05HajmR13Eur7qlDxrGser82BzGfWAid+0ADBygUDgTyzNWINQgJRdfJ1uQioI769u4Eed9rZy8oyUpCaBwygqz80jiXoAh2pAogNvgbQBH4rEY1y8AmRfY2VZmFdAR1pVw9TFX5ZHhFL/maVBtgWBhOIjMkHQGyBprmZOYiU5I+Cd9yeg+dE1KnvaOuqxQhYqORElu3RfpZtZBqIqkLJgIzI5ngGRPZAYpFMCuW9a4cgP0PbFWUaF/uMYuSu9iXazbvaaTQvnpKpi3TXTgqH55Pz3ow47nEdMT1KHoRTIgbxjY7YHAnN9G2dHnbWtYCfOXuOWNmS2/i6QI/NP+dmQPLSjkqR4medrBzxjqlR2MfzmA6dsiciRZnid5hEw/La/OoVfTsIvdBHxyRfW/7DDa1Kf9FZ2pu0TLsGISPbGQp6kpFOy/OCcxIn1eQSyLWfH4u8z1CQWBwqWt9Xuh5TGe3NNf2Fx73LmRjrZplFIRwtXUgdxFt0M6XsAmei00V1iZ0DmawsfU3cblCIu99Ev0Wb9xhmdssqvruDElT1pmu7icPUDcC7hUKesnn9LCUdz0tCp2M4LPUB6EzSunU11LnNxfW9ZHtnCGUbRzytcln2aVTCbHr++d5jdLaXQM8DygZXnpa+dx8n9FB4ZSNE2z3LtzCgNm9nkPU5PfWR8aH9GnYep8zVm4vO9ybfY3WvjZIYf5aPN2ouOoG44ARJ5uLc0bfW8VlxYMlxsYneSB9ZTTOJLV1WrZSaY5dY6Tw4+hGhz0u3Kqf0RoqOkkvH9we8NwazpluftOLE8OGAvzdGfPH85V9gBraa04MzV6SCbqqgqu7E9Vp17PcMzrGbGC5E1pPvtDA/tM0H6v7+WL37ZC8FjZ1r7cS2apPidevZ6AnTY83wwndO68g7QXQIGf7M/GbXsDNKe0mjd73/w+efhZ3iOL2NL23i8me+BC04TBRjpo4cSlMb+/PpNCbVjOXt6YMGpL65ea6Djz2oq3C4S6D0/9f1O+YTi88Hdl65rTn79xiefF3GsjUSmE6Vj6FILrzFKg/B+gTGKcSJmvV62MVDPzysmTygdffEYkH/jLdOqny//Yl///ukfrKG9/+I9VtTT8m1mf/3ZXWsVtunC0i9125k1yh351PU7X4stsp4foLRv5uHJEcJcajPayWI3trCeOspA7qzWqmxd2mZSCMeg5BDSiKE87V6ylbnoBRJqavOoIunjcT6HRN5n0j8MxGWhKmNjh0tABB/3yo5RwawXvEhLXhah5GBtiHemkcr/HDZAF6SQ40nuhaQLYHv6K94QIpOxs6XYMMdKchY8vomxdBjdNI0wtRubNkINY0y4zisjBzVJH2LPw8M4UmLsrI06wZ2A+Es8wi2Hqx/2CJ6/LPEeCYsw+QTrSXnknIPExQyrGC2LPhSi4FnEEu3CBFiquXC42uA9w/DraSs5Htf9NvfPpCx7V64SjrOyyGDyDxjpUZxxllaVcgW8SycEhxcD82iFHK6L/AehRBjGZDq/3G1pRiACF6repbzt5iqRuCsD3Bk5NAHgRN1GXmNwDQZYZwb4GKRYwJfiN2xJi1eqD91vy3MwqM2GijPOrif3rzvBaQa9QG8J5B6VEuXOIwIxaIgEy8F0/O8XW7yzdrmShzrucuH4BdzUT+eDddtueUcyLOq6PR/tQ9jSGK3giuoS/QE2IWMQVXtLl+6SnWJsZT6cB+COrueHaOmxh3cRyN9wtji4+SODD3DosVY3o7Vjk4tyS67y86UGy47AC2Quai7Rb9FehfJTDL1cqEmH9VS635rVAv7qlmGCRecG4plLuzcvVUYgr6vnuMnr4RfKpBhtxxhG4JWRfIo+HYvDVFfMsUsOhZ/GQ2tiyc5gvcbIVQpqMY2OyqdtAvPVHl3KDldHrOz9TX6FQNFp/DSmB+lg5R/EVj2kDcvBxG7jTTIRa99BGljlL2zUQEopNoaylINirpQyLf7/90KDV2Nv5u7ypd/A80CkMY8bkO0ioERRaX1zgMriFg1BytsIVcwAv62CeRHUFE1rZDYGl4gxafDL3fb83Z4hJXE9j1QP10wrc1P8Ns06MmjS7ICNaRuAwA4Sns5fmNK6jRHscJ6iAnm3wO6Pu+2xRxQC/a+LtrVZXjPGXGhngavjlpjiKxB2gy7jzS2gK9CI3XbM70bV5REPudUp8fv0z250LTTD7BsfNBRdOvp5LO714UoaoP/eac7LxxQCFnPRtgz/9xTLAzT/dNdFYGHH+NCwm3ugSyIU//rnfT7PSLK/D9cnEOJgfA8eenZZJZnM8o39/CYQ+per5xaaNwy5NZVM/HKWF7/+sfyHjVfx/MbY3/+o6/ISmp7ldplYVonRD/V70y3TTzCo9d99RHL8+jfnyx/3c8aKLk5vbrgpnavwptsriS/e/KrUr78a/+WpM8eXNwxKJ+JZJeKxePcqMtdLxTXZbFPszec8viPBspE3KzQfF6Kfs633ofHBg852iL3lSMH3pnSG55MnFw9vN853I6hArXpSJd1qxe9DePrCkycwp0Lt0bMR35cur3u68JxnpfFs+8O7/BxJPm3mO9Hqp2aeobT11D4b/d5IGcfj1eIe4W7CD/3lskIFxzs5qZHvpd0HaXUyx/OESOYPDl5li+B7/qoVbnP7uF9hAyq7R9/317lw0+DoX/VLRlsqy9bf/VfG8MA4xT6m8qrz3S/4tbR8bvf4Eb/qW7dajq9oC0+lmbmWL9ZK25H8Iq/E5cVaOf0SQfXNvDTi5z26bOIyvMzr29TXCxVfdhsz714krXY0yot/SrDI6zUVi+93YLyUigW/4Pcw6YkKHxHl83aLhxZ6XCB6osJLg0mjlK3et6n+TJqPq7Th6LN3zItTt46LfeRAWpokLGvxn2t4tav/2qaLdySshmDppw93V+Qf0uZootflp2PKuxVggf/E7fQ4BxsU9ITkDyVXDs8MExyvNXOnLmexLYrv8uvshVqw0aydFTEydmBtaoLJ3eC2KD6iqD6l7UJjXE22DqHG8eMZ3fEVP3P6MOEhclS2U7/1jx4xswMivMG9XkZeKddZy8jmtO8lWtIxBj0/9QtuL6MHjtyRcKLj9+b3hHZW5heC5f1uYfsHavyAtHueUyiH0T4wHf0DkOGbzTv6Rzajc4IdJJkeyJKf9Emf9Emf9Emf9Cz9D/3BuU6U9gc5AAAAAElFTkSuQmCC">`,
      },
      {
        title: "Slide #4",
        content: `<img src="https://raw.githubusercontent.com/NicholasPeara92/deliveboo-front/0c277eae807e38895eefbec187f915f20b9b8d01/src/assets/Ristorante%20da%20pino.png">`,
      },
      {
        title: "Slide #5",
        content: `<img src="https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/327973729_700720308354598_5424718633700778066_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=II-V7eCtxn0AX8gTM04&_nc_ht=scontent-fco2-1.xx&oh=00_AfC6Tc6sDYmDOcqtI1yTkINoXMOWTbeqgnDDa-jOp38wXw&oe=64092B18">`,
      },
      {
        title: "Slide #6",
        content: `<img src="http://www.mythosristorante.it/new/wp-content/uploads/2013/11/logo11.png">`,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped></style>
