<template>
  <main>
    <Hero
      :full="true"
      img="/img/storefront.jpg"
      title="The tastiest sushi & bagels in Jerusalem"
    >
      <div class="pb-20"></div>
      <!-- <nuxt-link class="btn mt-20" :to="localePath('menu')">
        {{ $t('page.index.hero.cta') }}
      </nuxt-link> -->
    </Hero>
    <div class="relative z-20 bg-gradient-to-t from-black via-black space-y-24">
      <section id="story">
        <div class="container text-center relative -mt-60">
          <Statically
            src="/img/sushi-roll-2.png"
            width="1280"
            height="298"
            alt="Sushi roll"
            class="pb-24 w-full max-w-screen-xl mx-auto"
          />
          <h2 class="mb-10">{{ $t('page.index.story.title') }}</h2>
          <p class="text-lg max-w-screen-md mx-auto">
            {{ $t('page.index.story.body') }}
          </p>
          <nuxt-link class="mt-10 btn" :to="localePath('story')">
            {{ $t('page.index.story.cta') }}
          </nuxt-link>
        </div>
      </section>
      <section id="services">
        <div class="container text-center">
          <!-- <h2 class="mb-10">{{ $t('page.index.services.title') }}</h2> -->
          <div class="flex flex-row flex-wrap justify-center -mx-6">
            <div v-for="i in 4" :key="i" class="p-6 w-full sm:w-1/2 xl:w-1/4">
              <div class="relative w-1/3 mx-auto mb-6 pb-1/3">
                <img
                  class="absolute object-contain w-full h-full"
                  :src="
                    require('~/static/img/' +
                      $t(`page.index.services.body[${i - 1}].icon`) +
                      '?data')
                  "
                  :alt="$t(`page.index.services.body[${i - 1}].title`)"
                />
              </div>
              <h3 class="my-6">
                {{ $t(`page.index.services.body[${i - 1}].title`) }}
              </h3>
              <p class="text-sm">
                {{ $t(`page.index.services.body[${i - 1}].desc`) }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="order" class="relative">
        <div class="mt-32 lg:my-40">
          <div
            class="
              container
              flex flex-col
              space-y-6
              lg:flex-row lg:items-center lg:space-y-0
              relative
              z-10
            "
          >
            <div class="w-full lg:w-1/2 flex justify-center">
              <Statically
                src="/img/tabit-mockup.png"
                width="468"
                height="850"
                loading="lazy"
                alt="Ordering app"
                class="max-h-450 lg:max-h-850 -mt-20 lg:-my-28 w-auto"
              />
            </div>
            <div
              class="
                w-full
                lg:w-1/2
                ps-0
                lg:ps-10
                text-center
                lg:text-start
                py-10
              "
            >
              <h2 class="mb-10">{{ $t('page.index.order.title') }}</h2>
              <div
                class="flex flex-wrap justify-center lg:justify-start -mx-2.5"
              >
                <a
                  href="/app.html"
                  target="_blank"
                  class="btn-alt mt-10 mx-2.5"
                >
                  {{ $t('page.index.order.cta[0]') }}
                </a>
                <a
                  href="https://www.tabitorder.com/?siteName=sushinbagel#/start"
                  target="_blank"
                  rel="noopener nofollow"
                  class="btn mt-10 mx-2.5"
                >
                  {{ $t('page.index.order.cta[1]') }}
                </a>
              </div>
            </div>
          </div>
          <Statically
            src="/img/sushi-banner-bg.jpg"
            width="1331"
            height="1007"
            loading="lazy"
            class="absolute inset-0 z-0 object-cover w-full h-full opacity-40"
          />
        </div>
      </section>
      <section id="reviews" class="relative pb-20">
        <div class="container">
          <div class="flex flex-col w-full lg:w-1/2 relative z-10">
            <h2 class="text-center lg:text-start mb-10">
              {{ $t('page.index.reviews.title') }}
            </h2>
            <Reviews class="lg:max-w-md mt-60 lg:mt-10" />
          </div>
        </div>
        <Statically
          src="/img/sushi-hand.png"
          width="768"
          height="621"
          loading="lazy"
          alt=""
          class="
            absolute
            end-0
            top-10
            xl:top-auto xl:bottom-0
            z-0
            w-9/12
            lg:w-1/2
            max-w-3xl
            rtl:-scale-x-1
          "
        />
      </section>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: (c) => (c ? `SushiNBagels - ${c}` : 'SushiNBagels'),
      ...this.$createSeo('index', [
        {
          name: 'og:image',
          content: '/img/hero-bg-home.jpg',
        },
      ]),
    }
  },
  mounted() {
    this.$store.dispatch('loadPlaceData')
  },
}
</script>
