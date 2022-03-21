<template>
  <v-app app>
    <div class="home">
      <NavBar />
      <div v-if="anime" class="container">

      <div class="single-movie container">
        <div class="movie-info" align="center">
          <div class="movie-img" >
            <!-- <v-img height="280" 
            :src="`${anime.images.jpg.image_url}`"
            alt=""></v-img> -->
            <img v-if="anime"
            :src="anime.images.jpg.image_url"
            alt=""
          />
          </div>
          <div class="movie-content">
            <h2 v-if="anime.title_english">{{ anime.title_english }}</h2>
            <h2 v-else>{{ anime.title }}</h2>
            <span class="user">
              <v-chip class="ma-2" color="orange" outlined>
                {{ anime.status }}
              </v-chip>
              <v-chip class="ma-2" color="red" outlined>
                <v-icon left> mdi-account-circle-outline </v-icon>
                {{ anime.rating }}
              </v-chip>
            </span>
            <p class="movie-fact">
              <span> Rank: #</span>{{ anime.rank }}
            </p>
            <p class="movie-fact tagline">
              <span>Episodes: </span> {{ anime.episodes }}
            </p>
            <p class="movie-fact">
              <span> Duration: </span>{{ anime.duration }}
            </p>
            <p v-if="anime.background" class="movie-fact">
              <span> Background: </span>{{ anime.background }}
            </p>
          </div>
        </div>
        <p v-if="anime.synopsis"><span> </span>{{ anime.synopsis }}</p>
        <div v-if="anime.trailer" align="center">
          <iframe
            width="560"
            height="315"
            :src="`${anime.trailer.embed_url}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          >
          </iframe>
        </div>
      </div>

      </div>
      </div>
      </v-app>

</template>

<script>
export default {
  name: 'OneAnime',
  data() {
    return {
      anime: null,
      reviews: [],
      readMoreActivated: [],
    }
  },
  async fetch() {
     await this.getOneAnime()
  },
  // created() {
  //   // await this.anime;
  //   const oneAnime = this.$axios.$get(
  //       `https://api.jikan.moe/v4/anime/${this.$route.params.animeid}`
  //     )
  //     this.anime = oneAnime.data;
  //     console.log(this.anime)
  //   this.getOneAnime();
  // },
  //  computed: {
  //   anime() {
  //     const oneAnime = this.$axios.$get(
  //       `https://api.jikan.moe/v4/anime/${this.$route.params.animeid}`
  //     )
  //      console.log(this.oneAnime)
  //       return oneAnime;
  //   },
  // },
  // computed:{
  //    anime() {
  //     const oneAnime = this.$axios.$get(
  //       `https://api.jikan.moe/v4/anime/${this.$route.params.animeid}`
  //     )
  //     // this.anime = oneAnime.data
  //     console.log(oneAnime.data)
  //     return oneAnime.data;
  //   },
  // },
  methods: {
     async getOneAnime() {
      const oneAnime = await this.$axios.$get(
        `https://api.jikan.moe/v4/anime/${this.$route.params.animeid}`
      )
      this.anime = oneAnime.data
      console.log(this.anime)
    },
  },
}
</script>

<style lang="scss" scoped>
.Rvtitle {
  margin-top: 4px;
  text-align: center;
  font-style: italic;
}

.reviewbox {
  border-style: solid;
  border-width: 1px;
  border-color: yellow;
}
.review {
  padding: 20px 50px;
}
.ricn {
  margin-bottom: 8px;
}
.single-movie {
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 16px;
  .button {
    align-self: flex-start;
    margin-bottom: 32px;
  }
  .movie-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    color: #fff;
    @media (min-width: 500px) {
      flex-direction: row;
      align-items: flex-start;
    }
    .movie-img {
      img {
        max-height: 500px;
        width: 100%;
        @media (min-width: 500px) {
          max-height: 400px;
          width: initial;
        }
      }
    }
    .movie-content {
      h1 {
        font-size: 50px;
        font-weight: 400;
      }
      .movie-fact {
        margin-top: 12px;
        font-size: 20px;
        line-height: 1.5;
        span {
          font-weight: 600;
          text-decoration: none;
        }
      }
      .tagline {
        font-style: italic;
        span {
          font-style: normal;
        }
      }
    }
  }
}
</style>
