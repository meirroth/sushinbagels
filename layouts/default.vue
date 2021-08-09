<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>
