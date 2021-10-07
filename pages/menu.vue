<template>
  <main class="overflow-hidden">
    <Hero img="/img/hero-bg-menu.jpg" :title="$t('page.menu.title')" />
    <div class="z-20">
      <section class="min-h-screen">
        <client-only>
          <Flipbook
            ref="flipbook"
            v-slot="flipbook"
            :pages="pages"
            :zooms="[1, 2]"
            class="flipbook w-full h-screen"
          >
            <div
              v-if="pages.length > 0"
              class="fixed inset-x-0 bottom-4 flex justify-center z-20 ltr"
            >
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
                  href="/pdf/digital-menu-1.1.pdf"
                  target="_blank"
                  download="SushiNBagels-Menu"
                  role="button"
                  title="Download PDF"
                  aria-label="Download PDF"
                  aria-haspopup="false"
                  aria-disabled="false"
                  class="p-1 rounded hover:bg-gray-600 transition-colors"
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
                <span class="p-1" aria-label="Current menu page">{{
                  formatCurrentPage(flipbook.page, flipbook.numPages)
                }}</span>
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
import StaticallyPath from '~/scripts/StaticallyPath'
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
      pages: [],
    }
  },
  head() {
    return this.$createSeo('menu', [
      {
        name: 'og:image',
        content: '/img/hero-bg-menu.jpg',
      },
    ])
  },
  computed: {
    flipbookRef() {
      return this.$refs.flipbook
    },
  },
  beforeMount() {
    const imgPaths = require
      .context('~/static/img/menu/', false, /\.(png|jpg)$/)
      .keys()
    imgPaths.forEach((path) => {
      const _path = path.replace('./', '/img/menu/')
      this.pages.push(
        StaticallyPath({
          src: _path,
          width: 768,
        })
      )
    })
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    formatCurrentPage(page, total) {
      let currentPage = page
      // when there are two pages displayed side by side
      if (
        page !== total &&
        document.documentElement.clientWidth >
          document.documentElement.clientHeight
      ) {
        currentPage += '-' + (page + 1)
      }
      return currentPage + ' of ' + total
    },
    isDisabled(bool) {
      return bool ? true : null
    },
    handleKeydown(ev) {
      ev.key === 'ArrowLeft' &&
        this.flipbookRef.canFlipLeft &&
        this.flipbookRef.flipLeft()
      ev.key === 'ArrowRight' &&
        this.flipbookRef.canFlipRight &&
        this.flipbookRef.flipRight()
    },
  },
}
</script>
