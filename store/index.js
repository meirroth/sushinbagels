export const state = () => ({
  scrolled: 0,
})
export const mutations = {
  setScroll(state, scrollY) {
    state.scrolled = scrollY
  },
}
