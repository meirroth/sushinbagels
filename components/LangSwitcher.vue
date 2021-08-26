<template>
  <select v-if="$i18n.locales.length > 2" class="lang-switcher" name="language">
    <option
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :value="locale.code"
      @change="handleLangChange()"
    >
      {{ locale.name }}
    </option>
  </select>
  <nuxt-link
    v-else-if="$i18n.locales.length === 2"
    :to="switchLocalePath(showLocales[0].code)"
    class="lang-switcher"
  >
    {{ showLocales[0].name }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'LangSwitcher',
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        (locale) => locale.code !== this.$i18n.locale
      )
    },
  },
}
</script>
