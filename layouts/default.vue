<template>
  <div>
    <a href="#main" class="skip-link" @click="skipToContent()">
      Skip to content
    </a>
    <TheHeader :scrolled="scrolled" @openMobileNav="toggleMobileNav()" />
    <TheMobileNav
      :is-open="isMobileNavOpen"
      @closeMobileNav="toggleMobileNav()"
    />
    <Nuxt id="main" tab-index="-1" aria-label="Main Content" />
    <TheFooter />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Default',
  head() {
    return this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
  },
  computed: {
    ...mapState(['scrolled']),
    ...mapState(['isMobileNavOpen']),
  },
  watch: {
    $route() {
      if (process.client && this.isMobileNavOpen && window.innerWidth < 1024) {
        this.toggleMobileNav()
      }
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions(['toggleMobileNav']),
    skipToContent() {
      document.getElementById('main').focus()
    },
    handleScroll() {
      this.$store.commit('setScroll', window.scrollY)
    },
  },
}
</script>
<style lang="scss" scoped>
.skip-link {
  @apply block fixed z-30 inset-x-0 w-max mx-auto py-2 px-4 -translate-y-20;
  @apply bg-green text-black font-bold rounded-full shadow-lg opacity-0;
  @apply focus:opacity-100 focus:translate-y-4;
}
</style>
