<template>
  <main>
    <Hero
      :img="require('~/assets/images/sushi-2.jpg')"
      :title="$t('page.menu.title')"
    />
    <div class="z-20">
      <section class="min-h-screen">
        <client-only>
          <Flipbook
            ref="flipbook"
            v-slot="flipbook"
            :pages="pages"
            class="flipbook w-full h-screen overflow-hidden"
          >
            <div class="fixed inset-x-0 bottom-4 flex justify-center z-20 ltr">
              <div
                class="
                  flex
                  items-center
                  bg-gray-800 bg-opacity-80
                  hover:bg-opacity-100
                  p-2
                  rounded
                  transition-colors
                  space-x-2
                "
              >
                <a
                  href="/pdf/digital-menu.pdf"
                  download="SushiNBagels-Menu"
                  target="_blank"
                  class="p-1 rounded hover:bg-gray-600 transition-colors"
                  role="button"
                  title="Download PDF"
                  aria-label="Download PDF"
                  aria-haspopup="false"
                  aria-disabled="false"
                >
                  <DownloadIcon aria-hidden="true" />
                </a>
                <button
                  :disabled="isDisabled(!flipbook.canFlipLeft)"
                  class="p-1 rounded transition-colors pointer-events-none"
                  :class="{
                    'hover:bg-gray-600 pointer-events-auto':
                      flipbook.canFlipLeft,
                  }"
                  title="Previous page"
                  aria-label="Previous page"
                  aria-haspopup="false"
                  :aria-disabled="!flipbook.canFlipLeft"
                  @click="flipbook.flipLeft"
                >
                  <ChevronLeftIcon aria-hidden="true" />
                </button>
                <span class="p-1"
                  >{{ formatCurrentPage(flipbook.page) }}&nbsp;of&nbsp;{{
                    flipbook.numPages
                  }}</span
                >
                <button
                  :disabled="isDisabled(!flipbook.canFlipRight)"
                  class="p-1 rounded transition-colors pointer-events-none"
                  :class="{
                    'hover:bg-gray-600 pointer-events-auto':
                      flipbook.canFlipRight,
                  }"
                  title="Next page"
                  aria-label="Next page"
                  aria-haspopup="false"
                  :aria-disabled="!flipbook.canFlipRight"
                  @click="flipbook.flipRight"
                >
                  <ChevronRightIcon aria-hidden="true" />
                </button>
                <button
                  :disabled="isDisabled(!flipbook.canZoomIn)"
                  class="p-1 rounded transition-colors pointer-events-none"
                  :class="{
                    'hover:bg-gray-600 pointer-events-auto': flipbook.canZoomIn,
                  }"
                  title="Zoom in"
                  aria-label="Zoom in"
                  aria-haspopup="false"
                  :aria-disabled="!flipbook.canZoomIn"
                  @click="flipbook.zoomIn"
                >
                  <PlusIcon aria-hidden="true" />
                </button>
                <button
                  :disabled="isDisabled(!flipbook.canZoomOut)"
                  class="p-1 rounded transition-colors pointer-events-none"
                  :class="{
                    'hover:bg-gray-600 pointer-events-auto':
                      flipbook.canZoomOut,
                  }"
                  title="Zoom out"
                  aria-label="Zoom out"
                  aria-haspopup="false"
                  :aria-disabled="!flipbook.canZoomOut"
                  @click="flipbook.zoomOut"
                >
                  <MinusIcon aria-hidden="true" />
                </button>
              </div></div></Flipbook
        ></client-only>
      </section>
    </div>
  </main>
</template>

<script>
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  MinusIcon,
  DownloadIcon,
} from 'vue-tabler-icons'
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    PlusIcon,
    MinusIcon,
    DownloadIcon,
  },
  data() {
    return {
      pages: [
        '/img/digital-menu-1-845x1199.jpg',
        '/img/digital-menu-2-845x1199.jpg',
        '/img/digital-menu-3-845x1199.jpg',
        '/img/digital-menu-4-845x1199.jpg',
        '/img/digital-menu-5-845x1199.jpg',
        '/img/digital-menu-6-845x1199.jpg',
        '/img/digital-menu-7-845x1199.jpg',
        '/img/digital-menu-8-845x1199.jpg',
      ],
    }
  },

  head() {
    return {
      title: this.$t('page.menu.title'),
    }
  },
  computed: {
    /* pages () {
      return 'something'
    },
    pagesHiRes () {
      return 'something'
    }, */
    canFlipLeft() {
      return this.$refs.flipbook.canFlipLeft
    },
  },
  mounted() {
    // eslint-disable-next-line no-console
    // console.log(this.$refs.flipbook)
    this.$nextTick(function () {
      this.$nextTick(function () {
        // eslint-disable-next-line no-console
        console.log(this.$refs.flipbook)
        const flipbook = this.$refs.flipbook
        window.addEventListener('keydown', function (ev) {
          // return unless flipbook
          if (ev.key === 37 && flipbook.canFlipLeft) {
            flipbook.flipLeft()
          }
          if (ev.key === 39 && flipbook.canFlipRight) {
            flipbook.flipRight()
          }
          // flipbook.flipLeft() if ev.keyCode == 37 and flipbook.canFlipLeft
          // flipbook.flipRight() if ev.keyCode == 39 and flipbook.canFlipRight
        })
      })
    })
  },
  methods: {
    formatCurrentPage(page) {
      let currentPage = page
      if (
        document.documentElement.clientWidth >
        document.documentElement.clientHeight
      ) {
        currentPage += '-' + (page + 1)
      }
      return currentPage
    },
    isDisabled(bool) {
      return bool ? true : null
    },
  },
}
</script>
