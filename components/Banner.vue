<template>
<v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="items[i]"
    >
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: 'Banner',
    data () {
      return {
        items: [
          {
            src: 'https://sportshub.cbsistatic.com/i/2021/09/08/5d15a303-d4ae-4e52-acdd-1c3d309d4472/jujutsu-kaisen.jpg?auto=webp',
          },
          {
            src: 'https://wallpaperaccess.com/full/21593.jpg',
          },
          {
            src: 'https://wallpaperaccess.com/full/10817.jpg',
          },
          {
            src: 'https://wi.wallpapertip.com/wsimgs/21-214202_haikyuu-karasuno.png',
          },
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
        ],
      }
    },
}
</script>

<style lang="scss" scoped>
.hero {
  height: 200px;
  position: relative;
  @media (min-width: 750px) {
    height: 400px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .text-container {
    z-index: 99;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 31%;
    .text {
      padding: 0 16px;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      align-items: center;
    }
    .mini-heading {
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      color: #DAA520;
      margin-bottom: 8px;
      margin-left: 17%;
      @media (min-width: 750px) {
        font-size: 22px;
      }
    }
    h1 {
      color: #fff;
      font-size: 64px;
      font-weight: 200;
      margin-bottom: 8px;
      @media (min-width: 750px) {
        font-size: 84px;
      }
      span {
        font-weight: 500;
      }
    }
    .button {
      font-size: 20px;
      align-self: center;
      background-color: #DAA520;
      margin-left: 20%;

    }
  }
}
</style>