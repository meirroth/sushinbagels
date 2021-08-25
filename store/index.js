export const state = () => ({
  scrolled: 0,
  isMobileNavOpen: false,
})
export const mutations = {
  setScroll(state, scrollY) {
    state.scrolled = scrollY
  },
  TOGGLE_MOBILE_NAV(state) {
    state.isMobileNavOpen = !state.isMobileNavOpen
  },
}

// actions
export const actions = {
  toggleMobileNav({ commit }) {
    commit('TOGGLE_MOBILE_NAV')
  },
}

// Getters
export const getters = {
  isMobileNavOpen: (state) => state.isMobileNavOpen,
}
