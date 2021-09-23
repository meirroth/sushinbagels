<template>
  <div
    v-if="placeData"
    class="bg-white rounded shadow-white overflow-hidden relative h-60 py-8"
  >
    <transition
      enter-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0 translate -translate-x-full"
    >
      <blockquote
        :key="placeData.reviews[current].text"
        class="transition-all duration-500 absolute w-full px-8"
      >
        <!-- @mouseenter="stopInterval()"
        @mouseleave="startInterval()" -->
        <div class="flex justify-between mb-4">
          <div class="flex me-2">
            <div class="font-sans w-12 h-12 me-4">
              <Avatar
                :username="placeData.reviews[current].author_name"
                :custom-style="{
                  fontFamily: 'inherit',
                  height: '100%',
                  width: '100%',
                }"
              />
            </div>
            <div>
              <div
                class="inline-block title-font font-medium text-gray-900 mb-1"
              >
                {{ capitalize(placeData.reviews[current].author_name) }}
              </div>
              <!-- <div class="inline-block text-xs text-gray-600 mx-1">
          {{ placeData.reviews[current].relative_time_description }}
        </div> -->
              <StarRating
                :show-rating="true"
                :fixed-points="1"
                :rating="placeData.reviews[current].rating"
                :increment="0.5"
                :read-only="true"
                :star-size="18"
                active-color="#fbbc04"
                inactive-color="#E8EAED"
                class="text-gray-600 text-sm leading-4"
              />
            </div>
          </div>
          <QuateIcon
            alt="Quate"
            class="block w-8 h-8 ms-8 mb-4 text-green rtl:-scale-x-1"
          />
        </div>
        <p class="mb-4 text-black text-lg">
          {{ placeData.reviews[current].text }}
        </p>
      </blockquote>
    </transition>
    <div
      v-if="placeData.user_ratings_total > 5"
      class="absolute bottom-8 inset-x-8 text-end"
    >
      <a
        href="https://search.google.com/local/writereview?placeid=ChIJs4LylmzXAhURyiITK_fxbhE"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-900"
        >{{
          $t('page.index.reviews.viewAll') +
          ' ' +
          placeData.user_ratings_total +
          ' ' +
          $t('page.index.reviews.onGoogle')
        }}
        <ArrowRightIcon class="inline-block rtl:-scale-x-1" aria-hidden="true"
      /></a>
    </div>
  </div>
</template>
<script>
import { ArrowRightIcon } from 'vue-tabler-icons'
import { startCase, toLower } from 'lodash'
import Avatar from 'vue-avatar'
import QuateIcon from '~/static/img/quate.svg?inline'
export default {
  name: 'Reviews',
  components: {
    ArrowRightIcon,
    QuateIcon,
    Avatar,
  },
  props: {
    placeData: {
      type: Object,
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
      if (this.current === this.placeData.reviews?.length) {
        this.current = 0
      }
    },
    // // eslint-disable-next-line object-shorthand
    // startInterval: function () {
    //   console.log('started')
    //   setInterval(this.cycleReviews, 6000)
    // },
    // // eslint-disable-next-line object-shorthand
    // stopInterval: function () {
    //   console.log('stoped')
    //   clearInterval(this.cycleReviews)
    // },
    capitalize(text) {
      return startCase(toLower(text))
    },
  },
}
</script>
