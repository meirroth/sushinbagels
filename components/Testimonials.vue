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
        :key="testimonials[current].name"
        class="transition-all duration-500 absolute w-full px-8"
      >
        <p class="mb-4 text-black text-lg">
          {{ testimonials[current].body }}
        </p>
        <span class="title-font font-medium text-gray-900">{{
          testimonials[current].name
        }}</span>
      </blockquote>
    </transition>
  </div>
</template>
<script>
import QuateIcon from '~/assets/images/quate.svg?inline'
export default {
  name: 'Testimonials',
  components: {
    QuateIcon,
  },
  data() {
    return {
      testimonials: this.$t('testimonials'),
      current: 0,
    }
  },
  mounted() {
    setInterval(this.cycleTestimonials, 6000)
  },
  beforeDestroy() {
    clearInterval(this.cycleTestimonials)
  },
  methods: {
    // eslint-disable-next-line object-shorthand
    cycleTestimonials: function () {
      this.current++
      if (this.current === this.testimonials.length - 1) {
        this.current = 0
      }
    },
  },
}
</script>
