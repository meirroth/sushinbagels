<template>
  <img :src="path" />
</template>
<script>
// Parameter Docs https://statically.io/docs/using-images/
export default {
  name: 'Statically',
  props: {
    src: {
      type: String,
      required: true,
      validator(value) {
        return value.match(/\.(gif|jpe?g|png|webp)$/i)
      },
    },
    width: {
      type: [Number, String],
      default: null,
    },
    height: {
      type: [Number, String],
      default: null,
    },
    format: {
      type: String,
      default: 'auto',
      // validator(value) {
      //   // The value must match one of these strings
      //   return ['auto', 'webp'].includes(value)
      // },
    },
    quality: {
      type: Number,
      default: 85,
      validator(value) {
        return value >= 10 && value <= 100
      },
    },
  },
  computed: {
    path() {
      let srcURL = ''
      const params = []
      this.width && params.push(`w=${this.width}`)
      this.height && params.push(`h=${this.height}`)
      this.format && params.push(`f=${this.format}`)
      this.quality !== 85 && params.push(`q=${this.quality}`)
      const allParams = params.length ? params.join() : ''

      if (process.env.NETLIFY) {
        srcURL = `https://cdn.statically.io/img/${
          process.env.DEPLOY_PRIME_URL.replace(/^https?:\/\//, '').split('/')[0]
        }/`

        if (allParams !== '') {
          srcURL += `${allParams}`
        }

        // domain/f=format,w=width,h=height,q=:percentage/path
        return srcURL + this.src
      }

      // /path?f=format,w=width,h=height,q=:percentage
      return srcURL + this.src + '?' + allParams
    },
  },
}
</script>
