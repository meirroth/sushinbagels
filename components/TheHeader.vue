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
              <img
                src="~/assets/images/logo.svg"
                alt="SushiNBagels"
                class="h-8"
              />
            </nuxt-link>
            <nav class="hidden lg:block" aria-label="Site Navigation">
              <ul class="flex">
                <li class="me-8">
                  <a
                    href="https://www.tabitorder.com/?siteName=sushinbagel#/start"
                    target="_blank"
                    rel="noopener"
                    class="nav-link font-medium"
                    >{{ $t('nav.orderNow') }}</a
                  >
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
              class="lg:hidden group"
              title="Open site menu"
              aria-label="Open site menu"
              @click="$emit('openMobileNav')"
            >
              <Menu2Icon
                size="30"
                aria-hidden="true"
                class="
                  text-gray-200
                  group-hover:text-green
                  transition-colors
                  ease-in-out
                "
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import { Menu2Icon } from 'vue-tabler-icons'

export default {
  name: 'TheHeader',
  components: {
    Menu2Icon,
  },
  props: { scrolled: { default: 0, type: Number } },
  computed: {
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
