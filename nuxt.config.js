const isProd = process.env.NODE_ENV === 'production'
const baseUrl = process.env.BASE_URL || 'https://sushinbagels.com'

export default {
  server: {
    host: '0.0.0.0', // default: localhost
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Env (https://nuxtjs.org/api/configuration-env/)
  env: {
    baseUrl,
    NETLIFY: process.env.NETLIFY,
    CONTEXT: process.env.CONTEXT,
    URL: process.env.URL,
    DEPLOY_URL: process.env.DEPLOY_URL,
  },

  // Global page headers: (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: (c) => (c ? `${c} - SushiNBagels` : 'SushiNBagels'),
    meta: isProd
      ? []
      : [{ hid: 'noindex', name: 'robots', content: 'noindex' }],
    link: isProd
      ? [
          {
            hid: 'prefetch-statically',
            rel: 'dns-prefetch',
            href: 'https://cdn.statically.io',
          },
          {
            hid: 'preconnect-statically',
            rel: 'preconnect',
            href: 'https://cdn.statically.io',
          },
          {
            hid: 'prefetch-umami',
            rel: 'dns-prefetch',
            href: 'https://umami.meir.io',
          },
          // {
          //   hid: 'preconnect-umami',
          //   rel: 'preconnect',
          //   href: 'https://umami.meir.io',
          // },
        ]
      : [],
    // https://vue-meta.nuxtjs.org/api/#dangerouslydisablesanitizersbytagid
    __dangerouslyDisableSanitizersByTagID: {
      schema: ['innerHTML'],
    },
    script: [
      {
        hid: 'schema',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'http://schema.org/',
          '@type': 'Restaurant',
          '@id': 'https://sushinbagels.com/',
          name: 'SushiNBagels',
          image: 'https://sushinbagels.com/img/hero-bg-contact.jpg',
          logo: 'https://sushinbagels.com/img/logo.jpg',
          email: 'info@sushinbagels.com',
          telephone: '+972 2-544-3111',
          url: 'https://sushinbagels.com/',
          menu: 'https://sushinbagels.com/menu',
          priceRange: '8 ILS - 60 ILS',
          acceptsReservations: 'true',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Yirmiyahu St 68',
            addressLocality: 'Jerusalem',
            addressRegion: 'Israel',
            addressCountry: 'Israel',
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
              opens: '11:00',
              closes: '22:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Thursday'],
              opens: '11:00',
              closes: '23:00',
            },
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Saturday'],
              opens: '22:30',
              closes: '00:30',
            },
          ],
          sameAs: [
            'https://www.facebook.com/sushinbagels/',
            'https://www.instagram.com/sushinbagels/',
          ],
        }),
      },
    ].concat(
      isProd
        ? {
            hid: 'umami',
            async: true,
            defer: true,
            src: 'https://umami.meir.io/t.js',
            'data-website-id': '3a64289e-7ed6-4b39-b1ff-cce4f2687481',
            'data-domains': 'sushinbagels.com',
          }
        : []
    ),
    bodyAttrs: {
      class: 'min-h-screen text-white leading-relaxed antialiased',
    },
  },

  // Auto import components: (https://go.nuxtjs.dev/config-components)
  components: true,

  // Loading Progress Bar (https://nuxtjs.org/docs/features/loading/)
  loading: { color: '#92C020', throttle: 400 },

  // Global CSS: (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Tailwind CSS configuration (https://tailwindcss.nuxtjs.org)
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
  },

  // Plugins to run before rendering page: (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/vue-prototype-extensions.js' },
    { src: '~/plugins/lightgallery.client.js', mode: 'client' },
    { src: '~/plugins/flipbook.client.js', mode: 'client' },
  ],

  // Modules for dev and build (recommended): (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    // '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/svg',
    '@nuxtjs/pwa',
  ],

  // Modules: (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/i18n', '@nuxtjs/axios', '@nuxtjs/sitemap'],

  // Google fonts (https://google-fonts.nuxtjs.org/options/)
  googleFonts: {
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

  // Nuxt PWA (https://pwa.nuxtjs.org/)
  pwa: {
    meta: {
      name: 'SushiNBagels',
      author: 'Meir Roth',
      theme_color: '#92c020',
      ogSiteName: 'SushiNBagels',
      ogHost: `${baseUrl}/`,
      ogImage: {
        path: 'img/hero-bg-home.jpg',
      },
      twitterCard: 'summary',
      viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    },
    manifest: {
      name: 'SushiNBagels',
      short_name: 'SushiNBagels',
      description:
        'Your home for the tastiest sushi & Bagels in romema Jerusalem under the hashgocha of the Eidah Hachareidis',
      start_url: '/?pwa=1',
    },
  },

  // i18n (https://i18n.nuxtjs.org)
  i18n: {
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
    baseUrl,
  },

  // Axios (https://axios.nuxtjs.org/)
  axios: {
    baseURL: '/',
  },

  // Sitemap (https://sitemap.nuxtjs.org/)
  sitemap: {
    hostname: baseUrl,
    i18n: true,
  },

  // Build Configuration: (https://go.nuxtjs.dev/config-build)
  build: {
    // https://www.voorhoede.nl/en/blog/10x-faster-nuxt-builds-on-netlify/#optimise-html-minification
    html: {
      minify: {
        minifyCSS: false,
        minifyJS: false,
      },
    },
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
    // Automatically remove console statements from production build https://stackoverflow.com/a/64409635
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },

  // For 404 page to work on Netlify (https://nuxtjs.org/docs/directory-structure/nuxt-config/#generate)
  generate: {
    fallback: true,
  },

  telemetry: false,
}
