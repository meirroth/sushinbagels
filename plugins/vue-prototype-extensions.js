// Source: https://github.com/nuxt-community/pwa-module/issues/52#issuecomment-375459903
import Vue from 'vue'

// What a monster :O
Vue.prototype.$createSeo = function (slug, baseMetaArray = []) {
  const seo = this.$i18n.messages[this.$i18n.locale].seo
  return Object.entries(seo[slug]).reduce((acc, [key, actualValue]) => {
    const defaultMetaArray = [
      {
        name: 'og:title',
        content: seo[slug].title
          ? slug === 'index'
            ? `SushiNBagels - ${seo[slug].title}`
            : `${seo[slug].title} - SushiNBagels`
          : 'SushiNBagels',
      },
      {
        name: 'keywords',
        content: seo.global.keywords,
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
