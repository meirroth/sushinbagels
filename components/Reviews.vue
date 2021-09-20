<template>
  <div
    class="bg-gray-100 rounded shadow-white overflow-hidden relative h-64 py-8"
  >
    <QuateIcon alt="Quate" class="block w-8 h-8 ms-8 mb-4 text-gray-400" />
    <transition
      enter-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 "
      leave-class="opacity-100"
      leave-to-class="opacity-0 translate -translate-x-full"
    >
      <blockquote
        v-if="reviews"
        :key="reviews[current].text"
        class="transition-all duration-500 absolute w-full px-8"
      >
        <p class="mb-4 text-black text-lg">
          {{ reviews[current].text }}
        </p>
        <span class="title-font font-medium text-gray-900">{{
          reviews[current].author_name
        }}</span>
      </blockquote>
    </transition>
  </div>
</template>
<script>
import QuateIcon from '~/assets/images/quate.svg?inline'
export default {
  name: 'Reviews',
  components: {
    QuateIcon,
  },
  props: {
    reviews: {
      type: Array,
      default: null, // this.$t('reviews')
    },
  },
  data() {
    return {
      current: 0,
    }
  },
  mounted() {
    setInterval(this.cycleReviews, 6000)
  },
  beforeDestroy() {
    clearInterval(this.cycleReviews)
  },
  methods: {
    // eslint-disable-next-line object-shorthand
    cycleReviews: function () {
      this.current++
      if (this.current === this.reviews?.length - 1) {
        this.current = 0
      }
    },
  },
}
</script>
