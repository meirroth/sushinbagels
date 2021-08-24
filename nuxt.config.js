import en from './lang/en-US'
import he from './lang/he-IL'

export default {
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - SushiNBagels` : 'SushiNBagels'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: 'min-h-screen bg-black text-white antialiased',
      // class: 'min-h-screen bg-white text-black antialiased',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/lightgallery.client.js', mode: 'client' }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    [
      // Google fonts https://google-fonts.nuxtjs.org/setup
      '@nuxtjs/google-fonts',
      {
        download: true,
        display: 'swap',
        stylePath: 'scss/_fonts.scss',
        families: {
          Heebo: [400, 500, 600, 700],
          Kalam: [400, 700],
        },
      },
    ],
    [
      // Sitemap https://sitemap.nuxtjs.org/
      '@nuxtjs/sitemap',
      {
        hostname: 'https://sushinbagels.com/',
        i18n: true,
      },
    ],
    ['@nuxtjs/svg'],
    ['@teamnovu/nuxt-breaky'],
  ],

  /**
   * Tailwind CSS configuration
   */
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
    exposeConfig: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      // i18n https://i18n.nuxtjs.org
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
          },
          {
            code: 'he',
            iso: 'he-IL',
            name: 'עברית',
            dir: 'rtl',
          },
        ],
        seo: false,
        defaultLocale: 'en',
        routes: {},
        vueI18n: {
          fallbackLocale: 'en',
          messages: { en, he },
        },
      },
    ],
    // protect email-addresses https://github.com/mmoollllee/nuxt-protected-mailto
    'nuxt-protected-mailto',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/mmoollllee/nuxt-protected-mailto
    html: {
      minify: {
        decodeEntities: false,
      },
    },
  },

  loading: false,
  telemetry: false,
}
