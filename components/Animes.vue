<template>
  <div class="container movies">
    <div id="movie-grid" class="movies-grid">
      <v-card
        v-for="(anime, index) in animeList"
        :key="index"
        :loading="loading"
        class="mx-auto"
        max-width="250"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" :src="`${anime.images.jpg.image_url}`"></v-img>
        <v-card-title v-if="anime.title_english">{{
          anime.title_english
        }}</v-card-title>
        <v-card-title v-else>{{ anime.title }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0 mb-2">
            <v-rating
              :value="anime.score / 2"
              color="yellow"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">
              {{ anime.score / 2 }} ({{ anime.scored_by }})
            </div>
          </v-row>

          <div class="text-subtitle-1 mt-2">
            <v-row class="mx-2 my-2"
              >{{ anime.year }}
              <v-spacer></v-spacer>
              <v-icon>mdi-swap-vertical</v-icon>
              {{ anime.rank }}
            </v-row>
          </div>
          <div class="text-subtitle-1">Episodes: {{ anime.episodes }}</div>
        </v-card-text>
        <div class="ml-4">Duration: {{ anime.duration }}</div>
        <v-card-actions>
          <NuxtLink
            class="button button-light amber--text ml-2"
            :to="{ name: 'anime-animeid', params: { animeid: anime.mal_id } }"
          >
            View Anime
          </NuxtLink>
          <v-spacer></v-spacer>
          <v-btn
            icon
            class="icn"
            :disabled="clicked.includes(anime.mal_id)"
            @click="addToWatchlist(anime)"
          >
            <v-icon class="ic">mdi-bookmark-plus-outline</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Animes',
  props: {
    animeList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      wishlist: [],
      clicked: [],
    }
  },
  methods: {
    addToWatchlist(anime) {
      this.clicked.push(anime.mal_id)
      this.$store.dispatch('wishlist/addToWishlist', anime)
    },
  },
}
</script>

<style lang="scss" scoped>
.movies {
  padding: 25px 60px;
  .movies-grid {
    display: grid;
    column-gap: 32px;
    row-gap: 64px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 750px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1100px) {
      grid-template-columns: repeat(4, 1fr);
    }
    .movie {
      position: relative;
      display: flex;
      flex-direction: column;
      .movie-img {
        position: relative;
        overflow: hidden;
        &:hover {
          .overview {
            transform: translateY(0);
          }
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .review {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background-color: #daa520;
          color: #fff;
          border-radius: 0 0 15px 15px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .overview {
          line-height: 1.5;
          position: absolute;
          bottom: 0;
          background-color: rgba(201, 38, 2, 0.9);
          padding: 12px;
          color: #fff;
          transform: translateY(100%);
          transition: 0.3s ease-in-out all;
        }
      }
      .info {
        margin-top: auto;
        .title {
          margin-top: 8px;
          color: #fff;
          font-size: 20px;
        }
        .release {
          margin-top: 8px;
          color: #c9c9c9;
        }
        .button {
          margin-top: 8px;
        }
        .icn {
          position: absolute;
          bottom: 1%;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          &:disabled {
            background-color: #1f273b;
          }
        }
        .ic {
          color: #fff;
        }
      }
    }
  }
}
</style>
