<template>
  <div>
    <a href="#main" class="skip-link" @click="skipToContent()">
      Skip to content
    </a>
    <TheHeader />
    <Nuxt id="main" tab-index="-1" aria-label="Main Content" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  name: 'Default',
  components: {
    TheHeader,
    TheFooter,
  },
  head() {
    return this.$nuxtI18nHead({ addDirAttribute: true, addSeoAttributes: true })
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
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
  @apply block absolute z-30 left-4 py-2 px-4 rounded-full bg-gray-800 shadow-lg hover:shadow-2xl opacity-0 focus:opacity-100 text-gray-100 transform -translate-y-full focus:translate-y-4;
}
</style>
