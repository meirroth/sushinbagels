<template>
  <div class="header-wrap" :style="{ opacity, pointerEvents }">
    <header class="py-6" aria-label="Site Header">
      <div class="container">
        <div class="max-w-8xl mx-auto">
          <div class="flex items-center justify-between">
            <nuxt-link class="flex items-center" :to="localePath('index')">
              <img src="~/assets/images/logo.svg" alt="SushiNBagels" />
            </nuxt-link>
            <nav class="hidden lg:block" aria-label="Site Navigation">
              <ul class="flex">
                <li class="me-8">
                  <a href="#" class="nav-link">{{ $t('nav.orderNow') }}</a>
                </li>
                <li class="me-8">
                  <nuxt-link class="nav-link" :to="localePath('menu')">
                    {{ $t('nav.ourMenu') }}
                  </nuxt-link>
                </li>
                <li class="me-8">
                  <nuxt-link class="nav-link" :to="localePath('gallery')">
                    {{ $t('nav.gallery') }}
                  </nuxt-link>
                </li>
                <li class="me-8">
                  <nuxt-link class="nav-link" :to="localePath('story')">
                    {{ $t('nav.ourStory') }}
                  </nuxt-link>
                </li>
                <li class="me-8">
                  <nuxt-link class="nav-link" :to="localePath('contact')">
                    {{ $t('nav.contact') }}
                  </nuxt-link>
                </li>
                <li class="flex items-center">
                  <LangSwitcher />
                </li>
              </ul>
            </nav>
            <div class="lg:hidden">
              <button class="nav-btn" aria-label="Open site menu">Menu</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { mapState } from 'vuex'
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
}
</script>
<style lang="scss" scoped>
.header-wrap {
  @apply fixed top-0 left-0 w-full text-white z-20 transition-opacity ease-out duration-300;
}
.nav-btn {
  @apply py-1 px-4 font-semibold  hover:text-black rounded-full border-2 border-white hover:bg-white transition-colors ease-out;
}
.nav-link {
  @apply font-medium;
}
</style>
