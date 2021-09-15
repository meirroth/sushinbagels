<template>
  <main>
    <Hero :full="true" img="/img/sushi-1.jpg">
      <nuxt-link class="btn mt-20" :to="localePath('menu')">
        {{ $t('page.index.hero.cta') }}
      </nuxt-link>
    </Hero>
    <div class="relative z-20 bg-gradient-to-t from-black via-black space-y-24">
      <section id="story">
        <div
          class="
            container
            flex flex-col-reverse
            lg:flex-row lg:items-center lg:space-y-0
          "
        >
          <div class="w-full lg:w-5/12 pe-0 lg:pe-16 text-center lg:text-start">
            <h2 class="mb-10">{{ $t('page.index.story.title') }}</h2>
            <p class="text-lg">
              {{ $t('page.index.story.body') }}
            </p>
            <nuxt-link class="mt-10 btn" :to="localePath('story')">
              {{ $t('page.index.story.cta') }}
            </nuxt-link>
          </div>
          <div class="w-full lg:w-7/12 mb-8 lg:mb-0">
            <nuxt-img
              src="/img/404A7916-removebg-s.png"
              width="1024"
              quality="80"
              alt="Sushi plater"
              class="object-contain w-full h-full"
            />
          </div>
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
                    require('~/assets/images/' +
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
              <nuxt-img
                class="max-h-450 lg:max-h-850 -mt-20 lg:-my-28"
                src="/img/tabit-mockup.png"
                alt="Ordering app"
                width="768"
              />
            </div>
            <div
              class="
                w-full
                lg:w-1/2
                pe-0
                lg:pe-10
                text-center
                lg:text-start
                py-10
              "
            >
              <h2 class="mb-10">{{ $t('page.index.order.title') }}</h2>
              <div
                class="flex flex-wrap justify-center lg:justify-start -mx-2.5"
              >
                <a href="#" class="btn-alt mt-10 mx-2.5">
                  {{ $t('page.index.order.cta[0]') }}
                </a>
                <a
                  href="https://www.tabitorder.com/?siteName=sushinbagel#/start"
                  target="_blank"
                  rel="noopener"
                  class="btn mt-10 mx-2.5"
                >
                  {{ $t('page.index.order.cta[1]') }}
                </a>
              </div>
            </div>
          </div>
          <nuxt-img
            class="absolute inset-0 z-0 object-cover w-full h-full opacity-40"
            src="/img/banner-bg.jpg"
            width="1024"
            quality="80"
          />
        </div>
      </section>
      <section id="testimonial" class="relative pb-20">
        <div class="container">
          <div class="flex flex-col w-full lg:w-1/2 relative z-10">
            <h2 class="text-center lg:text-start mb-10">
              {{ $t('page.index.testimonial.title') }}
            </h2>
            <Testimonials class="lg:max-w-md mt-60 lg:mt-10" />
          </div>
        </div>
        <nuxt-img
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
          src="/img/sushi-hand.png"
          alt=""
          width="1024"
          quality="80"
        />
      </section>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: null,
    }
  },
}
</script>
