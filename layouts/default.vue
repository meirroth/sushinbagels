<template>
  <div>
    <a href="#main" class="skip-link btn-alt" @click="skipToContent()">
      Skip to content
    </a>
    <TheHeader :scrolled="scrolled" @openMobileNav="toggleMobileNav()" />
    <TheMobileNav
      :is-open="isMobileNavOpen"
      @closeMobileNav="toggleMobileNav()"
    />
    <Nuxt id="main" tabindex="-1" aria-label="Main Content" />
    <TheFooter />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
const throttle = require('lodash/throttle')
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
      if (process.client && this.isMobileNavOpen) {
        this.toggleMobileNav()
      }
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  },
  mounted() {
    this.$store.commit('setScroll', window.scrollY)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapActions(['toggleMobileNav']),
    skipToContent() {
      document.getElementById('main').focus()
    },
    handleScroll() {
      if (window.scrollY < window.innerHeight) {
        this.$store.commit('setScroll', window.scrollY)
      }
    },
    // https://www.digitalocean.com/community/tutorials/vuejs-lodash-throttle-debounce
    handleResize: throttle(function () {
      if (window.innerWidth >= 1024 && this.isMobileNavOpen) {
        this.toggleMobileNav()
      }
    }, 1000),
  },
}
</script>
<style scoped>
.skip-link {
  @apply block fixed w-max z-30 inset-x-0 mx-auto opacity-0 focus:opacity-100 -translate-y-20  focus:translate-y-4 transition;
}
</style>
