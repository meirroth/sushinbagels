<template>
  <div>
    <a href="#main" class="skip-link" @click="skipToContent()">
      Skip to content
    </a>
    <TheHeader />
    <TheMobileNav :is-open="isMobileNavOpen" @close="toggleMobileNav" />
    <Nuxt id="main" tab-index="-1" aria-label="Main Content" />
    <TheFooter />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import TheMobileNav from '~/components/TheMobileNav.vue'

export default {
  name: 'Default',
  components: {
    TheHeader,
    TheFooter,
    TheMobileNav,
  },
  head() {
    return this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
  },
  computed: {
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
      document.getElementsById('main').focus()
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
