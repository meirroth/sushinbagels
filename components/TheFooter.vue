<template>
  <footer class="pb-12 pt-24">
    <div class="container">
      <nav
        class="flex flex-wrap text-center lg:text-start space-y-4 lg:space-y-0"
      >
        <div class="w-full lg:w-2/5">
          <nuxt-link
            class="flex justify-center lg:justify-start pb-4"
            :to="localePath('index')"
          >
            <img src="~/assets/images/logo.svg" alt="SushiNBagels" />
          </nuxt-link>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon-tabler-mail inline-block me-1"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <Mailto class="link text-xs" mail="info@sushinbagels.com" />
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon-tabler-map-pin inline-block me-1"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="11" r="3" />
                <path
                  d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                />
              </svg>
              <a class="link text-xs" href="#">Yirmiyahu 68</a>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon-tabler-phone inline-block me-1"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                />
              </svg>
              <a class="link text-xs" href="tel:+97225443111">02-544-3111</a>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h5 class="font-bold pb-2">{{ $t('footer.cravingSushi') }}</h5>
          <ul>
            <li>
              <nuxt-link class="link text-xs" :to="localePath('menu')">
                {{ $t('nav.ourMenu') }}
              </nuxt-link>
            </li>
            <li class="mt-1">
              <a class="link text-xs" href="#">{{ $t('nav.orderNow') }}</a>
            </li>
            <li class="mt-1">
              <nuxt-link class="link text-xs" :to="localePath('contact')">
                {{ $t('footer.findUs') }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h5 class="font-bold pb-2">{{ $t('footer.information') }}</h5>
          <ul>
            <li>
              <nuxt-link class="link text-xs" :to="localePath('gallery')">
                {{ $t('nav.gallery') }}
              </nuxt-link>
            </li>
            <li class="mt-1">
              <nuxt-link class="link text-xs" :to="localePath('story')">
                {{ $t('nav.ourStory') }}
              </nuxt-link>
            </li>
            <li class="mt-1">
              <nuxt-link class="link text-xs" :to="localePath('contact')">
                {{ $t('nav.contact') }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h5 class="font-bold pb-2">{{ $t('footer.stayConnected') }}</h5>
          <ul
            class="
              social
              flex flex-row
              justify-center
              lg:justify-start
              space-x-4
              lg:space-x-0 lg:flex-col
            "
          >
            <li>
              <a class="link text-0 lg:text-xs" href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-tabler-brand-facebook inline-block me-1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                  /></svg
                ><span>{{ $t('footer.facebook') }}</span></a
              >
            </li>
            <li class="lg:mt-1">
              <a class="link text-0 lg:text-xs" href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-tabler-brand-instagram inline-block me-1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg
                ><span>{{ $t('footer.instagram') }}</span></a
              >
            </li>
            <li class="lg:mt-1">
              <a class="link text-0 lg:text-xs" href="#"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon-tabler-brand-whatsapp inline-block me-1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path
                    d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"
                  /></svg
                ><span>{{ $t('footer.whatsapp') }}</span></a
              >
            </li>
          </ul>
        </div>
      </nav>
      <p class="pt-10 text-center text-xs text-gray-400">
        {{ $t('footer.copy') }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon-tabler-heart text-green inline-block"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
          />
        </svg>
        {{ $t('footer.right') }}
      </p>
    </div>
  </footer>
</template>
<script>
export default { name: 'TheFooter' }
</script>
