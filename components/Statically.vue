<template>
  <img :src="path" :width="width" :height="height" />
</template>
<script>
import StaticallyPath from '~/scripts/StaticallyPath'

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
      validator(value) {
        // The value must match one of these strings
        return ['auto', 'webp'].includes(value)
      },
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
      return StaticallyPath({
        src: this.src,
        width: this.width,
        height: this.height,
        format: this.format,
        quality: this.quality,
      })
    },
  },
}
</script>
