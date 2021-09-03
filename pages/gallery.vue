<template>
  <main>
    <Hero
      :img="require('~/assets/images/sushi-3.jpg')"
      :title="$t('page.gallery.title')"
    />
    <div class="relative z-20 container">
      <section>
        <!-- masonry-grid md:masonry-2-col lg:masonry-3-col -->
        <div id="lightgallery" class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <a
            v-for="image in images"
            :key="image.src"
            :href="image.src"
            class="inline text-0 lg:hover:scale-105 transition-transform"
          >
            <nuxt-img
              :src="image.thumb"
              width="400"
              height="300"
              quality="80"
              format="jpg"
              class="w-full rounded"
            />
          </a>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    }
  },
  head() {
    return {
      title: this.$t('page.gallery.title'),
    }
  },
  beforeMount() {
    const imgPaths = require
      .context('~/static/img/gallery/', false, /\.(png|jpg)$/)
      .keys()
    for (let i = imgPaths.length - 1; i >= 0; i--) {
      const _path = imgPaths[i].replace('./', '/img/gallery/')
      this.images.push({
        src: this.$img(_path, { format: 'jpg', width: 1600, quality: 80 }),
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
<style lang="scss" scoped>
.masonry-grid {
  column-count: 3;
  column-gap: 10px;
  column-width: 33.33333333333333%;
  a {
    font-size: 0;
    display: block;
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: 480px) and (max-width: 727px) {
    column-count: 2;
    column-width: 50%;
  }
  @media screen and (max-width: 479px) {
    column-count: 1;
    column-width: 100%;
  }
}
</style>
