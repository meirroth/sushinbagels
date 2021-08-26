<template>
  <div v-if="isOpen">
    <div
      aria-label="Dialog"
      class="container lg:hidden fixed inset-0 overflow-y-auto z-30"
    >
      <!--  <div
        aria-label="TransitionChild"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-100"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >-->
      <div
        aria-label="DialogOverlay"
        class="fixed inset-0 bg-black bg-opacity-70"
      />
      <!--  </div>-->
      <!-- <div
        aria-label="TransitionChild"
        enter="ease-out duration-300"
        enter-from="opacity-0 translate-y-4"
        enter-to="opacity-100 translate-y-0"
        leave="ease-in duration-100"
        leave-from="opacity-100 translate-y-0"
        leave-to="opacity-0 translate-y-4"
      > -->
      <div
        class="
          z-40
          relative
          my-6
          rounded-xl
          bg-gray-800
          shadow-xl
          transition-all
          transform
        "
      >
        <header class="flex items-center justify-between p-4">
          <h2 aria-label="DialogTitle" class="sr-only">Site Menu</h2>
          <button
            class="ml-auto group"
            title="Close menu"
            @click="$emit('close')"
          >
            <svg
              class="
                w-8
                h-8
                text-gray-600
                group-hover:text-gray-400
                transition-colors
                ease-in-out
              "
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              stroke="currentColor"
              role="img"
              width="30"
              height="30"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </g></svg
            ><span class="sr-only">Close menu</span>
          </button>
        </header>
        <nav aria-label="Site Navigation" class="pb-8 text-center">
          <ul>
            <li>
              <a href="#" class="mobile-nav-link">{{ $t('nav.orderNow') }}</a>
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
      <!--</div> -->
    </div>
  </div>
</template>

<script>
import LangSwitcher from '~/components/LangSwitcher.vue'

export default {
  components: { LangSwitcher },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.mobile-nav-link {
  @apply block py-3 px-8 hover:bg-gray-700 text-2xl font-semibold transition-colors ease-in-out;
}
</style>
