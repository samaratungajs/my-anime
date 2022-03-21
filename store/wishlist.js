export const state = () => ({
  animes:[]
});

export const getters = {
    getWishlistItems(state) {
        return state.animes;
      },
};

export const mutations = {
    PUSH_ANIME(state, anime) {
        state.animes.push(anime);
      },
      REMOVE_ANIME(state, anime) {
        state.animes.splice(state.animes.indexOf(anime), 1);
      },
};

export const actions = {
    addToWishlist({ commit }, anime) {
          commit("PUSH_ANIME", anime);
      },
      removeFromWishlist({ commit, state }, anime) {
        const wishlistItem = state.movies.find(item => item.mal_id === anime.mal_id);
        commit("REMOVE_ANIME", wishlistItem);
      }
};