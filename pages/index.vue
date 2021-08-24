<template>
  <main>
    <Hero
      :full="true"
      :img="require('~/assets/images/sushi-1.jpg')"
      :title="$t('page.index.hero.title')"
    >
      <nuxt-link class="btn" :to="localePath('menu')">
        {{ $t('page.index.hero.cta') }}
      </nuxt-link>
    </Hero>
    <div class="relative space-y-20">
      <section id="story">
        <div
          class="
            container
            flex flex-col
            space-y-6
            lg:flex-row lg:items-center lg:space-y-0
          "
        >
          <div class="w-full lg:w-5/12 pe-0 lg:pe-10 text-center lg:text-start">
            <h2>{{ $t('page.index.story.title') }}</h2>
            <p class="mt-4">
              {{ $t('page.index.story.body') }}
            </p>
            <nuxt-link class="mt-6 btn" :to="localePath('story')">
              {{ $t('page.index.story.cta') }}
            </nuxt-link>
          </div>
          <div class="w-full lg:w-7/12">
            <img
              class="object-contain w-full h-full"
              src="~/assets/images/sushi-plate-1.png"
              alt="Sushi plater"
            />
          </div>
        </div>
      </section>
      <section id="services">
        <div class="container text-center">
          <h2>{{ $t('page.index.services.title') }}</h2>
          <div class="flex flex-row flex-wrap justify-center -mx-10">
            <div v-for="i in 4" :key="i" class="p-10 sm:w-1/2 lg:w-1/4">
              <div class="relative w-1/3 mx-auto mb-6 pb-1/3">
                <img
                  class="absolute object-contain w-full h-full"
                  :src="
                    require('~/assets/images/' +
                      $t(`page.index.services.body[${i - 1}].icon`))
                  "
                  alt=""
                />
              </div>
              <h3>{{ $t(`page.index.services.body[${i - 1}].title`) }}</h3>
              <p class="mt-4 text-xs">
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
              <img
                class="max-h-450 lg:max-h-850 -mt-20 lg:-my-28"
                src="~/assets/images/tabit-mockup.png"
                alt=""
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
              <h2>{{ $t('page.index.order.title') }}</h2>
              <p>{{ $t('page.index.order.body') }}</p>
              <div
                class="flex flex-wrap justify-center lg:justify-start -mx-2.5"
              >
                <a href="#" class="btn-alt mx-2.5">
                  {{ $t('page.index.order.cta[0]') }}
                </a>
                <a href="#" class="btn mx-2.5">
                  {{ $t('page.index.order.cta[1]') }}
                </a>
              </div>
            </div>
          </div>
          <img
            src="~/assets/images/banner-bg.jpg"
            class="absolute inset-0 z-0 object-cover w-full h-full opacity-40"
          />
        </div>
      </section>
      <section id="testimonial" class="relative pb-20">
        <div class="container">
          <div class="flex flex-col w-full lg:w-1/2 relative z-10">
            <h2 class="text-center lg:text-start">
              {{ $t('page.index.testimonial.title') }}
            </h2>
            <Testimonial
              class="lg:max-w-md mt-60 lg:mt-10"
              :quote="$t('testimonials[0].body')"
              :caption="$t('testimonials[0].name')"
            />
          </div>
        </div>
        <img
          class="
            absolute
            right-0
            top-10
            xl:top-auto xl:bottom-0
            z-0
            w-9/12
            lg:w-1/2
            max-w-3xl
          "
          src="~/assets/images/sushi-hand.png"
          alt=""
        />
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'
import Testimonial from '~/components/Testimonial.vue'
export default {
  components: {
    Hero,
    Testimonial,
  },
}
</script>

<style lang="scss" scoped>
.btn {
  @apply inline-block mt-10 py-2 px-6 font-bold text-black hover:text-white text-lg bg-white hover:bg-transparent border-2 rounded-full shadow-white transition-colors ease-out;
}
.btn-alt {
  @apply inline-block mt-10 py-2 px-6 font-bold text-white hover:text-black text-lg bg-transparent hover:bg-white border-2 rounded-full shadow-white transition-colors ease-out;
}
// .tabit-mockup {
//   max-height: 850px;
// }
</style>
