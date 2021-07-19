<template>
  <section class="container">
    <div>
      <h1>{{ $t('page.menu.title') }}</h1>
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
</template>

<script>
import pdfvuer from 'pdfvuer'
import 'pdfjs-dist/build/pdf.worker.entry'

export default {
  components: {
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
