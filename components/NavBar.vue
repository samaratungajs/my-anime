<template>
  <div>
    <v-app-bar color="" dense dark>
      <nuxt-link :to="{ name: 'index' }" class="logo text-lg">
        My Anime
      </nuxt-link>

      <v-spacer></v-spacer>

      <v-btn icon :to="{ name: 'wishlist' }">
        <v-icon>mdi-bookmark-multiple-outline</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<style scoped>
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.8rem;
  text-decoration-line: none;
  color: white;
}
</style>