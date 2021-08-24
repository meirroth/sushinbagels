<template>
  <main>
    <Hero
      :img="require('~/assets/images/sushi-2.jpg')"
      :title="$t('page.menu.title')"
    />
    <div class="relative">
      <section>
        <div class="container">
          <pdf
            src="/pdf/menu.pdf"
            :page="2"
            :resize="true"
            :annotation="true"
            style="width: 100%; overflow: hidden"
          >
            <template slot="loading">loading content here...</template>
          </pdf>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import pdfvuer from 'pdfvuer'
import 'pdfjs-dist/build/pdf.worker.entry'
import Hero from '~/components/Hero.vue'
export default {
  components: {
    Hero,
    pdf: pdfvuer,
  },
  head() {
    return {
      title: this.$t('page.menu.title'),
    }
  },
}
</script>
<style src="pdfvuer/dist/pdfvuer.css"></style>
