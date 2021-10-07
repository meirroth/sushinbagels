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
              <Logo aria-hidden="true" class="h-8" />
              <span class="sr-only">SushiNBagels</span>
            </nuxt-link>
            <nav class="hidden lg:block" aria-label="Site Navigation">
              <ul class="flex">
                <li class="me-8">
                  <a
                    href="https://www.tabitorder.com/?siteName=sushinbagel#/start"
                    target="_blank"
                    rel="noopener nofollow"
                    class="nav-link font-medium group"
                    >{{ $t('nav.orderNow') }}
                    <ExternalLinkIcon
                      aria-label="External link"
                      size="16"
                      class="
                        group-hover:opacity-80
                        opacity-0
                        transition-opacity
                        inline
                        absolute
                        -right-5
                        rtl:right-auto rtl:-left-5 rtl:-scale-x-1
                        h-full
                        pointer-events-none
                      "
                  /></a>
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
import { Menu2Icon, ExternalLinkIcon } from 'vue-tabler-icons'
import Logo from '~/static/img/logo.svg?inline'

export default {
  name: 'TheHeader',
  components: {
    Logo,
    Menu2Icon,
    ExternalLinkIcon,
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
