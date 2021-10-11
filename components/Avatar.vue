<template>
  <img
    :src="src"
    :width="size"
    :height="size"
    :alt="alt"
    loading="lazy"
    aria-hidden="true"
    :class="inline ? 'inline-block' : 'block'"
    class="select-none"
  />
</template>

<script>
const getInitials = (username) => {
  const parts = username.split(/[ -]/)
  let initials = ''

  for (let i = 0; i < parts.length; i++) {
    initials += parts[i].charAt(0)
  }

  if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
    initials = initials.replace(/[a-z]+/g, '')
  }

  initials = initials.substr(0, 3).toUpperCase()

  // eslint-disable-next-line no-control-regex
  return initials.replace(/[^\x00-\x7F]/g, '')
}

export default {
  name: 'Avatar',
  props: {
    username: {
      type: String,
      default: null,
    },
    initials: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
    },
    size: {
      type: [Number, String],
      default: 50,
    },
    shape: {
      type: String,
      default: null,
      validator(value) {
        // The value must match one of these strings
        return ['rounded', 'circle', 'square'].includes(value)
      },
    },
  },
  computed: {
    userInitials() {
      return this.initials || getInitials(this.username)
    },
    src() {
      const shape =
        this.shape || this.shape !== 'square' ? `shape=${this.shape},` : ''
      const size = `s=${this.size}`
      return `https://cdn.statically.io/avatar/${shape}${size}/${this.userInitials}`
    },
  },
}
</script>
