<template>
  <div
    class="
      fixed
      top-0
      left-0
      w-full
      text-white
      z-20
      transition-opacity
      ease-out
      duration-300
    "
    :style="{ opacity, pointerEvents }"
  >
    <header class="py-6" aria-label="Site Header">
      <div class="container">
        <div class="max-w-8xl mx-auto">
          <div class="flex items-center justify-between ltr lg:dir">
            <nuxt-link class="flex items-center" :to="localePath('index')">
              <img src="~/assets/images/logo.svg" alt="SushiNBagels" />
            </nuxt-link>
            <nav class="hidden lg:block" aria-label="Site Navigation">
              <ul class="flex">
                <li class="me-8">
                  <a href="#" class="nav-link font-medium">{{
                    $t('nav.orderNow')
                  }}</a>
                </li>
                <li class="me-8">
                  <nuxt-link
                    class="nav-link font-medium"
                    :to="localePath('menu')"
                  >
                    {{ $t('nav.ourMenu') }}
                  </nuxt-link>
                </li>
                <li class="me-8">
                  <nuxt-link
                    class="nav-link font-medium"
                    :to="localePath('gallery')"
                  >
                    {{ $t('nav.gallery') }}
                  </nuxt-link>
                </li>
                <li class="me-8">
                  <nuxt-link
                    class="nav-link font-medium"
                    :to="localePath('story')"
                  >
                    {{ $t('nav.ourStory') }}
                  </nuxt-link>
                </li>
                <li class="me-8">
                  <nuxt-link
                    class="nav-link font-medium"
                    :to="localePath('contact')"
                  >
                    {{ $t('nav.contact') }}
                  </nuxt-link>
                </li>
                <li class="flex items-center">
                  <LangSwitcher />
                </li>
              </ul>
            </nav>
            <button
              class="nav-btn lg:hidden"
              aria-label="Open site menu"
              @click="toggleMobileNav()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="30"
                height="30"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g
                  class="icon-tabler"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import LangSwitcher from '~/components/LangSwitcher.vue'
export default {
  name: 'TheHeader',
  components: {
    LangSwitcher,
  },
  computed: {
    ...mapState(['scrolled']),

    pointerEvents() {
      const threshold = 120
      if (this.scrolled <= threshold * 3) return 'auto'
      return 'none'
    },
    opacity() {
      const threshold = 120
      if (this.scrolled > threshold * 3) return 0 // keep opacity at 0 when scrolled passed threshold * 3
      if (this.scrolled <= threshold) return 1 // only start transition once scrolled reaches threshold
      return 1 - this.scrolled / (threshold * 3)
    },
  },
  methods: {
    ...mapActions(['toggleMobileNav']),
  },
}
</script>
<style lang="scss" scoped>
.nav-btn {
  // @apply py-1 px-4 font-semibold  hover:text-black rounded-full border-2 border-white hover:bg-white transition-colors ease-out;
}
</style>
