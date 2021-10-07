<template>
  <header
    aria-label="Page Hero"
    class="sticky top-0 mb-6 md:mb-12"
    :class="full ? 'hero-full' : 'h-96'"
  >
    <figure
      class="
        absolute
        inset-0
        w-full
        h-full
        overflow-hidden
        transition-opacity
        ease-out
        duration-fast
      "
      :style="{
        opacity: imageOpacity,
      }"
    >
      <div
        class="h-full transition-transform ease-out duration-fast"
        :style="{
          transform: 'scale(' + imageScale + ')',
        }"
      >
        <Statically
          :src="img"
          width="1536"
          alt=""
          class="absolute inset-0 w-full h-full object-cover filter z-0"
          :class="full ? 'blur-sm' : 'blur'"
        />
      </div>
      <div
        class="absolute top-0 w-full h-1/2 bg-gradient-to-b from-gray-900 z-0"
      />
      <div
        class="absolute bottom-0 w-full h-3/4 bg-gradient-to-t from-black z-0"
      />
    </figure>

    <div
      class="z-10 h-full transition-opacity ease-out duration-fast"
      :style="{ opacity: textOpacity, pointerEvents: textPointerEvents }"
    >
      <div class="absolute inset-0 w-full h-full">
        <div class="container h-full">
          <div
            class="flex flex-col items-center justify-center text-center h-full"
          >
            <h1 v-if="title" class="pt-16 text-white">
              {{ title }}
            </h1>
            <slot />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
    full: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState(['scrolled']),
    textPointerEvents() {
      let threshold = 200
      if (this.full) {
        threshold *= 1.2
      }
      if (this.scrolled <= threshold) return 'auto'
      return 'none'
    },
    textOpacity() {
      let threshold = 200
      if (this.full) {
        threshold *= 1.2
      }
      if (this.scrolled <= 0) return 1
      if (this.scrolled > threshold) return 0
      return 1 - this.scrolled / threshold
    },
    imageOpacity() {
      let threshold = 480
      if (this.full) {
        threshold *= 1.2
      }
      if (this.scrolled <= 0) return 1
      if (this.scrolled > threshold) return 0
      return 1 - this.scrolled / threshold
    },
    imageScale() {
      let threshold = 480
      if (this.full) {
        threshold *= 1.2
      }
      if (this.scrolled <= 0) return 1
      if (this.scrolled > threshold) return 1.5
      return 1 + this.scrolled / threshold
    },
  },
}
</script>
<style lang="scss" scoped>
.hero-full {
  height: 40rem;
}
</style>
