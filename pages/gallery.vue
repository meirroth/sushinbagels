<template>
  <main>
    <Hero img="/img/hero-bg-gallery.jpg" :title="$t('title')" />
    <div class="relative z-20 container">
      <section>
        <!-- masonry-grid md:masonry-2-col lg:masonry-3-col -->
        <div id="lightgallery" class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <a
            v-for="(image, i) in images"
            :key="image.src"
            :href="image.src"
            class="relative w-full pb-2/3 inline text-0 lg:hover:scale-105 transition-transform rounded overflow-hidden"
          >
            <Statically
              :src="image.thumb"
              width="437"
              height="291"
              alt=""
              :loading="i > 9 ? 'lazy' : null"
              class="absolute object-cover w-full h-full"
            />
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import translations from '~/lang/gallery'
import StaticallyPath from '~/scripts/StaticallyPath'
export default {
  i18n: {
    messages: translations,
  },
  data() {
    return {
      images: [],
    }
  },
  head() {
    return this.$createSeo('gallery', [
      {
        name: 'og:image',
        content: '/img/hero-bg-gallery.jpg',
      },
    ])
  },
  beforeMount() {
    const imgPaths = require
      .context('~/static/img/gallery/', false, /\.(png|jpg)$/)
      .keys()
    for (let i = imgPaths.length - 1; i >= 0; i--) {
      const _path = imgPaths[i].replace('./', '/img/gallery/')
      this.images.push({
        src: StaticallyPath({
          src: _path,
          width: 1536,
        }),
        thumb: _path,
      })
    }
  },
  mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el, { download: false })
  },
}
</script>
