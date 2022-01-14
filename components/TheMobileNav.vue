<template>
  <div
    v-show="isVisible"
    ref="navDialog"
    class="container lg:hidden fixed inset-0 overflow-y-auto z-30"
  >
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="ease-in duration-100"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
      @before-enter="isVisible = true"
      @after-leave="isVisible = false"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 bg-black bg-opacity-70"
        @click="$emit('closeMobileNav')"
      />
    </transition>
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="ease-in duration-100"
      leave-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <div
        v-show="isOpen"
        class="z-40 relative my-6 rounded-xl bg-gray-800 shadow-xl transition-all"
      >
        <header class="flex items-center justify-between p-4">
          <span class="sr-only">Site Menu</span>
          <button
            class="ml-auto group"
            title="Close menu"
            aria-label="Close menu"
            @click="$emit('closeMobileNav')"
          >
            <XIcon
              size="30"
              class="text-gray-200 group-hover:text-green transition-colors ease-in-out"
              aria-hidden="true"
            />
          </button>
        </header>
        <nav aria-label="Site Navigation" class="pb-8 text-center">
          <ul>
            <li>
              <a
                href="https://www.tabitorder.com/?siteName=sushinbagel#/start"
                target="_blank"
                rel="noopener nofollow"
                class="mobile-nav-link"
                >{{ $t('nav.orderNow') }}</a
              >
            </li>
            <li>
              <nuxt-link class="mobile-nav-link" :to="localePath('menu')">
                {{ $t('nav.ourMenu') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="mobile-nav-link" :to="localePath('gallery')">
                {{ $t('nav.gallery') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="mobile-nav-link" :to="localePath('story')">
                {{ $t('nav.ourStory') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="mobile-nav-link" :to="localePath('contact')">
                {{ $t('nav.contact') }}
              </nuxt-link>
            </li>
            <li>
              <LangSwitcher class="mobile-nav-link" />
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script>
import { XIcon } from 'vue-tabler-icons'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default {
  name: 'TheMobileNav',
  components: {
    XIcon,
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
  watch: {
    isVisible(newState) {
      newState
        ? disableBodyScroll(this.$refs.navDialog, {
            reserveScrollBarGap: true,
            allowTouchMove: false,
          })
        : enableBodyScroll(this.$refs.navDialog)
    },
  },
}
</script>

<style scoped>
.mobile-nav-link {
  @apply block py-3 px-8 hover:bg-gray-700 text-2xl font-semibold transition-colors ease-in-out;
}
</style>
