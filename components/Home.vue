<template>
  <div>
    <Animes :animeList="animeList"></Animes>
  </div>
</template>

<script>
import Animes from './Animes.vue'
export default {
  name: 'Home',
  components: { Animes },
  data() {
    return {
      animeList: [],
      wishlist: [],
      clicked: [],
    }
  },
  async fetch() {
    await this.getMovies()
  },
  methods: {
    async getMovies() {
      const data = await this.$axios.$get(`https://api.jikan.moe/v4/top/anime`)
      this.animeList = data.data
      console.log(this.animeList)
    },
    addToWatchlist(movie) {
      this.clicked.push(movie.id)
      this.$store.dispatch('wishlist/addToWishlist', movie)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  padding: 15px 16px;
  input {
    max-width: 350px;
    width: 100%;
    padding: 12px 6px;
    font-size: 14px;
    background: white;
    outline: white;
    border-radius: 10px;
  }
  .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
</style>
