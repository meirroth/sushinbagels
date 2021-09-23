const isProd = process.env.NODE_ENV === 'production'
export default {
  server: {
    host: '0.0.0.0', // default: localhost
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
    meta: [{ name: 'robots', content: 'noindex' }],
    bodyAttrs: {
      class: 'min-h-screen text-white leading-relaxed antialiased',
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Tailwind CSS configuration
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
    // exposeConfig: !isProd,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/lightgallery.client.js', mode: 'client' },
    { src: '~/plugins/flipbook.client.js', mode: 'client' },
  ],

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
        outputDir: '~',
        fontsDir: 'static/fonts',
        stylePath: 'assets/scss/_fonts.scss',
        fontsPath: '/fonts',
        display: 'swap',
        families: {
          Heebo: [400, 500, 600, 700],
          Kalam: [400, 700],
        },
      },
    ],
    [
      '@nuxt/image',
      {
        provider: 'netlify',
        screens: {
          xs: 320,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
          xxl: 1536,
        },
        // dir: 'static/img',
      },
    ],
    ['@nuxtjs/svg'],
    // Nuxt PWA https://pwa.nuxtjs.org/icon
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
          // short_name: 'SushiNBagels',
          description: 'Beyond Sushi',
          start_url: '/?pwa=1',
        },
      },
    ],
    // ['@teamnovu/nuxt-breaky'],
  ],

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
            file: 'en.json',
          },
          {
            code: 'he',
            iso: 'he-IL',
            name: 'עברית',
            dir: 'rtl',
            file: 'he.json',
          },
        ],
        vueI18n: {
          fallbackLocale: 'en',
        },
        baseUrl: process.env.baseUrl,
      },
    ],
    [
      '@nuxtjs/axios',
      {
        baseURL: process.env.baseUrl,
      },
    ],
    [
      // Sitemap https://sitemap.nuxtjs.org/
      '@nuxtjs/sitemap',
      {
        hostname: process.env.baseUrl,
        i18n: true,
      },
    ],
  ],

  env: {
    // PLACES_API: process.env.PLACES_API,
    // PLACES_API_KEY: process.env.PLACES_API_KEY,
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      order: 'presetEnvAndCssnanoLast',
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-focus-visible': {},
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

  // https://nuxtjs.org/docs/2.x/features/loading
  loading: { color: '#92C020' },

  telemetry: false,
}
