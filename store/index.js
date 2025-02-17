export const state = () => ({
  scrolled: 0,
  isMobileNavOpen: false,
  reviews: null,
  rating: null,
  userRatingsTotal: null,
})

export const mutations = {
  setScroll(state, scrollY) {
    state.scrolled = scrollY
  },
  TOGGLE_MOBILE_NAV(state) {
    state.isMobileNavOpen = !state.isMobileNavOpen
  },
  SET_PLACE_DATA(state, placeData) {
    state.reviews = placeData.reviews.filter((review) => {
      return review.rating >= 4
    })
    state.rating = placeData.rating
    state.userRatingsTotal = placeData.user_ratings_total
  },
}
// Actions
export const actions = {
  toggleMobileNav({ commit }) {
    commit('TOGGLE_MOBILE_NAV')
  },
  async loadPlaceData({ commit }) {
    await this.$axios
      .get(
        // process.env.NODE_ENV === 'production'
        //   ? `/api/places&language=${this.$i18n.locale}`
        //   :
        `/api/places-${this.$i18n.locale}.json`,
        {
          headers: {
            'content-type': 'application/json; charset=UTF-8',
            Accept: 'application/json; charset=UTF-8',
          },
        }
      )
      .then((response) => {
        // console.debug(response)

        if (response.data.status === 'OK') {
          commit('SET_PLACE_DATA', response.data.result)
        } else {
          console.debug(response.data.status, response.data.error_message) // Google API error message
        }
      })
      .catch((err) => {
        console.debug(err) // Axios entire error message
      })
  },
}

// Getters
export const getters = {
  isMobileNavOpen: (state) => state.isMobileNavOpen,
  reviews: (state) => state.reviews,
  rating: (state) => state.rating,
  userRatingsTotal: (state) => state.userRatingsTotal,
}
