// Source: https://github.com/nuxt-community/pwa-module/issues/52#issuecomment-375459903
import Vue from 'vue'

// What a monster :O
Vue.prototype.$createSeo = function (slug, baseMetaArray = []) {
  const seo = this.$t('seo')
  return Object.entries(seo).reduce((acc, [key, actualValue]) => {
    const defaultMetaArray = [
      {
        name: 'og:title',
        content: seo.title
          ? slug === 'index'
            ? `SushiNBagels - ${seo.title}`
            : `${seo.title} - SushiNBagels`
          : 'SushiNBagels',
      },
      {
        name: 'keywords',
        content: this.$t('seo.keywords'),
      },
      {
        name: 'og:url',
        content: `${process.env.baseUrl}${this.$route.path}`,
      },
    ]

    // If meta, add base array (likely og:image) and defaultArray containing og:url
    const valueForKey =
      key !== 'meta'
        ? actualValue
        : wrap(actualValue)
            .concat(defaultMetaArray, baseMetaArray)
            .reduce(
              (acc, metaObject) =>
                acc.concat(retrieveMetaObjectArray(metaObject)),
              []
            )

    return { ...acc, [key]: valueForKey }
  }, {})
}

const wrap = (a) => (Array.isArray(a) ? a : [a])

const retrieveMetaObjectArray = (metaObject) => {
  const wrappedName = wrap(metaObject.name)

  return wrappedName.map((n) => ({
    hid: n,
    name: n,
    property: n,
    // Fix url when the meta information is og:image
    content: wrappedName.includes('og:image')
      ? process.env.baseUrl + metaObject.content
      : metaObject.content,
  }))
}
