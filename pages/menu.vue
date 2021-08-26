<template>
  <main>
    <Hero
      :img="require('~/assets/images/sushi-2.jpg')"
      :title="$t('page.menu.title')"
    />
    <div class="z-20">
      <section class="min-h-screen">
        <!-- <pdf
            src="/pdf/menu.pdf"
            :page="2"
            :resize="true"
            :annotation="true"
            style="width: 100%; overflow: hidden"
          >
            <template slot="loading">loading content here...</template>
          </pdf> -->
        <PDFViewer src="/pdf/digital-menu-compressed.pdf" />
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'
import PDFViewer from '~/components/PDFViewer.vue'
// import pdfvuer from 'pdfvuer'
// import 'pdfjs-dist/build/pdf.worker.entry'
export default {
  components: {
    Hero,
    // pdf: pdfvuer,
    PDFViewer,
  },
  head() {
    return {
      title: this.$t('page.menu.title'),
    }
  },
}
</script>
<style src="pdfvuer/dist/pdfvuer.css"></style>
