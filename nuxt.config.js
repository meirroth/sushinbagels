import { join } from 'path'
const isProd = process.env.NODE_ENV === 'production'
export default {
  server: {
    host: '192.168.1.20',
    // host: !isProd ? '192.168.1.20' : 'localhost', // default: localhost
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - SushiNBagels` : 'SushiNBagels'
    },
    meta: [
      // { charset: 'utf-8' },
      { name: 'robots', content: 'noindex' },
      // {
      //   name: 'viewport',
      //   content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      // },
    ],
    // link: [
    //   {
    //     rel: 'apple-touch-icon',
    //     sizes: '180x180',
    //     href: '/apple-touch-icon.png',
    //   },
    //   {
    //     rel: 'icon',
    //     type: 'image/png',
    //     sizes: '32x32',
    //     href: '/favicon-32x32.png',
    //   },
    //   {
    //     rel: 'icon',
    //     type: 'image/png',
    //     sizes: '16x16',
    //     href: '/favicon-16x16.png',
    //   },
    //   { rel: 'manifest', href: '/site.webmanifest', color: '#92c020' },
    //   { rel: 'mask-icon', href: '/safari-pinned-tab.svg' },
    //   { name: 'msapplication-TileColor', content: '#da532c' },
    //   { name: 'theme-color', content: '#92c020' },
    // ],
    bodyAttrs: {
      class: 'min-h-screen text-white leading-relaxed antialiased',
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

    ['@nuxtjs/svg'],
    [
      '@nuxtjs/pwa',
      {
        meta: {
          name: 'SushiNBagels',
          author: 'Meir Roth',
          description: 'Beyond Sushi',
          theme_color: '#92c020',
          viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
        manifest: {
          name: 'SushiNBagels',
          short_name: 'SushiNBagels',
          description: 'Beyond Sushi',
          start_url: '/?pwa=1',
        },
      },
    ],
    // ['@teamnovu/nuxt-breaky'],
  ],

  /**
   * Tailwind CSS configuration
   */
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
    exposeConfig: !isProd,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      // i18n https://i18n.nuxtjs.org
      '@nuxtjs/i18n',
      {
        seo: false,
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            dir: 'ltr',
            file: 'en-US.js',
          },
          {
            code: 'he',
            iso: 'he-IL',
            name: 'עברית',
            dir: 'rtl',
            file: 'he-IL.js',
          },
        ],
        vueI18n: {
          fallbackLocale: 'en',
        },
        baseUrl: 'https://sushinbagels.com',
      },
    ],
    [
      // Sitemap https://sitemap.nuxtjs.org/
      '@nuxtjs/sitemap',
      {
        hostname: isProd
          ? 'https://sushinbagels.com'
          : 'https://sushinbagels.meir.io',
        i18n: true,
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
    // https://github.com/nuxt-community/tailwindcss-module/issues/361#issuecomment-903135510
    postcss: {
      order: 'presetEnvAndCssnanoLast',
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),
        autoprefixer: {},
        cssnano: isProd
          ? {
              preset: [
                'default',
                {
                  discardComments: {
                    removeAll: true,
                  },
                },
              ],
            }
          : false, // disable cssnano when not in production
      },
    },
  },

  loading: false,
  telemetry: false,
}
