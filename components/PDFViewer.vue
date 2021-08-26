<template>
  <div id="pdfvuer" class="container ltr space-y-10">
    <div class="fixed inset-x-0 bottom-4 flex justify-center z-20">
      <div
        class="
          flex
          bg-gray-800
          opacity-60
          hover:opacity-80
          p-2
          rounded
          transition-opacity
        "
      >
        <button
          class="p-1 rounded hover:bg-gray-600 transition-colors"
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="18"
            height="18"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M15 6l-6 6l6 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div class="px-2">
          <form>
            <input
              type="number"
              :max="Number(numPages) + 1"
              min="0"
              tabindex="-1"
              class="
                number-appearance-none
                text-end
                bg-transparent
                outline-none
                w-2.5
              "
              aria-label="Set page"
              :value="onPage"
            />
            / 9
          </form>
        </div>
        <button
          class="p-1 rounded hover:bg-gray-600 transition-colors"
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="18"
            height="18"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 6l6 6l-6 6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <pdf
      v-for="i in numPages"
      :id="'page-' + (Number(i) + 1)"
      :key="Number(i) + 1"
      :page="Number(i) + 1"
      :src="pdfdata"
      :resize="true"
      :annotation="true"
      class="w-full"
    >
      <template slot="loading"> loading content here... </template>
    </pdf>
  </div>
</template>

<script>
import pdfvuer from 'pdfvuer'

export default {
  name: 'PDFViewer',
  components: {
    pdf: pdfvuer,
  },
  props: {
    src: { type: [Object, String], default: null },
  },
  data() {
    return {
      onPage: 1,
      numPages: 0,
      pdfdata: undefined,
    }
  },
  mounted() {
    const self = this
    self.pdfdata = pdfvuer.createLoadingTask(this.src)
    self.pdfdata.then((pdf) => {
      self.numPages = pdf.numPages - 1
    })
  },
}
</script>
<style src="pdfvuer/dist/pdfvuer.css"></style>
