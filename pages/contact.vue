<template>
  <section class="container">
    <div>
      <h1>{{ $t('page.contact.title') }}</h1>
      <p>
        {{ $t('page.contact.body') }}
      </p>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('page.contact.title'),
    }
  },
}
</script>
