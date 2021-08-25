<template>
  <div id="pdfvuer">
    <div id="buttons" ref="nav" class="">
      <button class="item" @click.prevent="page > 1 ? page-- : 1">
        <i class="left chevron icon"></i>
        Back
      </button>
      <a class="ui active item">
        {{ page }} / {{ numPages ? numPages : '∞' }}
      </a>
      <button class="item" @click.prevent="page < numPages ? page++ : 1">
        Forward
        <i class="right chevron icon"></i>
      </button>
    </div>

    <pdf
      v-for="i in numPages"
      :id="i"
      :key="i"
      :src="pdfdata"
      :page="i"
      :scale.sync="scale"
      style="width: 100%; margin: 20px auto"
      :annotation="true"
      :resize="true"
      @link-clicked="handle_pdf_link"
    >
      <template slot="loading"> loading content here... </template>
    </pdf>
  </div>
</template>

<script>
import pdfvuer from 'pdfvuer'
import 'pdfjs-dist/build/pdf.worker.entry'

export default {
  name: 'PDFViewerAdvanced',
  components: {
    pdf: pdfvuer,
  },
  props: {
    src: { type: [Object, String], default: null },
  },
  data() {
    return {
      page: 1,
      numPages: 0,
      pdfdata: undefined,
      errors: [],
      scale: 'page-width',
    }
  },
  computed: {
    formattedZoom() {
      return Number.parseInt(this.scale * 100)
    },
  },
  watch: {
    show(s) {
      if (s) {
        this.getPdf()
      }
    },
    page(p) {
      if (
        window.pageYOffset <= this.findPos(document.getElementById(p)) ||
        (document.getElementById(p + 1) &&
          window.pageYOffset >= this.findPos(document.getElementById(p + 1)))
      ) {
        // window.scrollTo(0,this.findPos(document.getElementById(p)));
        document.getElementById(p).scrollIntoView()
      }
    },
  },
  mounted() {
    this.getPdf()
  },
  methods: {
    handle_pdf_link(params) {
      // Scroll to the appropriate place on our page - the Y component of
      // params.destArray * (div height / ???), from the bottom of the page div
      const page = document.getElementById(String(params.pageNumber))
      page.scrollIntoView()
    },
    getPdf() {
      const self = this
      self.pdfdata = pdfvuer.createLoadingTask(this.src)
      self.pdfdata.then((pdf) => {
        self.numPages = pdf.numPages
        window.onscroll = function () {
          changePage()
          stickyNav()
        }

        const nav = this.$refs.nav
        // eslint-disable-next-line no-console
        console.debug(this.$refs.nav)
        // Get the offset position of the navbar
        const sticky = nav.offsetTop

        // Add the sticky class to the self.$refs.nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function stickyNav() {
          if (window.pageYOffset >= sticky) {
            nav.classList.add('sticky')
          } else {
            nav.classList.remove('sticky')
          }
        }

        function changePage() {
          let i = 1
          const count = Number(pdf.numPages)
          do {
            if (
              window.pageYOffset >= self.findPos(document.getElementById(i)) &&
              window.pageYOffset <= self.findPos(document.getElementById(i + 1))
            ) {
              self.page = i
            }
            i++
          } while (i < count)
          if (window.pageYOffset >= self.findPos(document.getElementById(i))) {
            self.page = i
          }
        }
      })
    },
    findPos(obj) {
      return obj.offsetTop
    },
  },
}
</script>
<style src="pdfvuer/dist/pdfvuer.css"></style>
<style lang="css" scoped>
#buttons {
  padding: 10px;
}
.sticky {
  position: fixed;
  top: 0;
  z-index: 1;
}
/* Page content */
.content {
  padding: 16px;
}
</style>
