<template>
  <main>
    <Hero img="/img/hero-bg-story.jpg" :title="$t('title')" />
    <div class="relative z-20 bg-gradient-to-t from-black via-black">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="container space-y-20" v-html="$md.render($t('body'))" />
    </div>
  </main>
</template>

<script>
import translations from '~/lang/story'
export default {
  i18n: {
    messages: translations,
  },
  head() {
    return this.$createSeo('story', [
      {
        name: 'og:image',
        content: '/img/hero-bg-story.jpg',
      },
    ])
  },
}
</script>
