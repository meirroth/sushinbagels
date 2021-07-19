<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    Footer,
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>
