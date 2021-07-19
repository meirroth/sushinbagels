<template>
  <section class="container">
    <div>
      <h1>{{ $t('page.story.title') }}</h1>
      <p>
        {{ $t('page.story.body') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('page.story.title'),
    }
  },
}
</script>
