<template>
  <main>
    <section id="hero" class="hero hero-full">
      <div class="hero-bg">
        <img src="~/assets/images/hero-1.jpg" alt="" />
      </div>
      <div class="container">
        <h1>{{ $t('page.index.hero.title') }}</h1>
        <nuxt-link class="btn" :to="localePath('menu')">
          {{ $t('page.index.hero.cta') }}
        </nuxt-link>
      </div>
    </section>
    <section id="story">
      <div class="container">
        <h1>{{ $t('page.index.story.title') }}</h1>
        <p>{{ $t('page.index.story.body') }}</p>
        <nuxt-link class="btn" :to="localePath('story')">
          {{ $t('page.index.story.cta') }}
        </nuxt-link>
      </div>
    </section>
    <section id="services">
      <div class="container">
        <h1>{{ $t('page.index.services.title') }}</h1>
        <div v-for="i in 4" :key="i">
          <i>icon</i>
          <h3>{{ $t(`page.index.services.body[${i - 1}].title`) }}</h3>
          <p>{{ $t(`page.index.services.body[${i - 1}].desc`) }}</p>
        </div>
      </div>
    </section>
    <section id="order">
      <div class="container">
        <h1>{{ $t('page.index.order.title') }}</h1>
        <p>{{ $t('page.index.order.body') }}</p>
        <a href="#" class="btn">
          {{ $t('page.index.order.cta[0]') }}
        </a>
        <a href="#" class="btn">
          {{ $t('page.index.order.cta[1]') }}
        </a>
      </div>
    </section>
    <section id="testimonial">
      <div class="container">
        <h1>{{ $t('page.index.testimonial.title') }}</h1>
        <p>{{ $t('testimonials[0].body') }}</p>
        <p>{{ $t('testimonials[0].name') }}</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
