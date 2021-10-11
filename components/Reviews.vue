<template>
  <div class="bg-gray-800 rounded overflow-hidden relative h-60 py-8">
    <div v-if="reviews">
      <transition
        enter-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0 translate -translate-x-full"
      >
        <blockquote
          :key="reviews[current].text"
          class="transition-all duration-500 absolute w-full px-8"
        >
          <div class="flex justify-between mb-4">
            <div class="flex me-2">
              <Avatar
                :username="reviews[current].author_name"
                shape="circle"
                size="48"
                class="me-4"
              />
              <div>
                <div
                  class="inline-block title-font font-medium text-gray-200 mb-1"
                >
                  {{ capitalize(reviews[current].author_name) }}
                </div>
                <StarRating
                  :show-rating="true"
                  :fixed-points="1"
                  :rating="reviews[current].rating"
                  :increment="0.5"
                  :read-only="true"
                  :star-size="18"
                  active-color="#fbbc04"
                  inactive-color="#E8EAED"
                  class="text-gray-300 text-sm leading-4"
                />
              </div>
            </div>
          </div>
          <p class="mb-4 text-gray-100 text-lg">
            {{ reviews[current].text }}
          </p>
        </blockquote>
      </transition>
    </div>
    <div v-else class="w-full px-8">
      <div class="mb-4">
        <div class="flex mb-4">
          <div class="skeleton-bone w-12 h-12 flex-shrink-0 me-4"></div>
          <div class="flex flex-col justify-around w-full">
            <div class="skeleton-bone w-1/5 h-2"></div>
            <div class="skeleton-bone w-1/6 h-2"></div>
          </div>
        </div>
        <div class="w-full">
          <div class="skeleton-bone w-4/5 h-3 mb-2"></div>
          <div class="skeleton-bone w-2/3 h-3 mb-2"></div>
          <div class="skeleton-bone w-1/2 h-3"></div>
        </div>
      </div>
    </div>
    <QuateIcon
      aria-hidden="true"
      class="
        absolute
        block
        w-8
        h-8
        top-8
        right-8
        text-green
        rtl:-scale-x-1 rtl:left-8 rtl:right-auto
      "
    />
    <div class="absolute bottom-8 inset-x-8 text-end">
      <a
        href="https://www.google.com/maps/place/SushiNBagels/@31.7913509,35.2027142,17z/data=!4m7!3m6!1s0x1502d76c96f282b3:0x116ef1f72b1322ca!8m2!3d31.7913509!4d35.2027142!9m1!1b1"
        target="_blank"
        rel="noopener noreferrer"
        class="text-green group"
      >
        {{ $t('page.index.reviews.viewAll') }}
        <span v-if="userRatingsTotal > 5">{{ userRatingsTotal + ' ' }}</span
        >{{ $t('page.index.reviews.onGoogle') }}
        <ArrowRightIcon
          class="
            inline-block
            rtl:-scale-x-1
            group-hover:-me-2 group-hover:ms-2
            transition-all
          "
          aria-hidden="true"
      /></a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { ArrowRightIcon } from 'vue-tabler-icons'
import QuateIcon from '~/static/img/quate.svg?inline'
const startCase = require('lodash/startCase')
const toLower = require('lodash/toLower')
export default {
  name: 'Reviews',
  components: {
    ArrowRightIcon,
    QuateIcon,
  },
  data() {
    return {
      current: 0,
    }
  },
  computed: mapGetters(['reviews', 'userRatingsTotal']),
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
      this.reviews && this.current === this.reviews.length && (this.current = 0)
    },
    capitalize(text) {
      return startCase(toLower(text))
    },
  },
}
</script>
