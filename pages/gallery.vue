<template>
  <main>
    <div class="container">
      <h1>{{ $t('page.gallery.title') }}</h1>
    </div>
    <section class="container is-fluid">
      <div></div>
      <div id="lightgallery" class="masonry-grid">
        <a v-for="image in images" :key="image.src" :href="image.src">
          <img :src="image.thumb" />
        </a>
      </div>
    </section>
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
    const mImg = this.importImages(
      require.context('@/assets/images/gallery/', false, /-m\.jpg$/)
    )
    const sImg = this.importImages(
      require.context('@/assets/images/gallery/', false, /-s\.jpg$/)
    )
    for (let i = mImg.length - 1; i >= 0; i--) {
      this.images.push({ src: mImg[i], thumb: sImg[i] })
    }
  },
  mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el, { download: false })
  },
  methods: {
    importImages(r) {
      const paths = []
      r.keys().forEach((key) => paths.push(r(key)))
      return paths
    },
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
