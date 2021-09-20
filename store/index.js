export const state = () => ({
  scrolled: 0,
  isMobileNavOpen: false,
  reviews: null,
})

export const mutations = {
  setScroll(state, scrollY) {
    state.scrolled = scrollY
  },
  TOGGLE_MOBILE_NAV(state) {
    state.isMobileNavOpen = !state.isMobileNavOpen
  },
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews
  },
}
// Actions
export const actions = {
  toggleMobileNav({ commit }) {
    commit('TOGGLE_MOBILE_NAV')
  },
  async loadReviews({ commit }) {
    await this.$axios
      .get('/api/places', {
        headers: {
          'content-type': 'application/json; charset=UTF-8',
          Accept: 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        console.debug(response)

        if (response.data.status === 'OK')
          commit('SET_REVIEWS', response.data.result.reviews)
        else console.debug(response.data.status, response.data.error_message) // Google API error message
      })
      .catch((err) => {
        console.debug(err) // Axios entire error message
      })
  },
}

// Getters
export const getters = {
  isMobileNavOpen: (state) => state.isMobileNavOpen,
  getReviews: (state) => state.reviews,
}
