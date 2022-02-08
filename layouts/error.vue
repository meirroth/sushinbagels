<template>
  <main>
    <Hero img="/img/hero-bg-error.jpg"
      ><h1 v-if="error.statusCode === 404" class="pt-16 text-white text-8xl">
        404
      </h1>
      <h1 v-else>Uh oh</h1></Hero
    >
    <div class="relative z-20">
      <section class="container text-center mb-24">
        <div v-if="error.statusCode === 404">
          <!-- <Statically
          src="/img/404.png"
          alt=""
          class="px-8 mb-8 mx-auto"
        /> -->
          <h3 class="font-bold text-2xl mb-6">
            {{ $t('subTitle') }}
          </h3>
          <i18n path="page.error.body" tag="p">
            <template #action>
              <a :href="$t('email') + currentURL" class="link"
                ><MailIcon size="20" aria-hidden="true" class="inline-block" />
                {{ $t('action') }}</a
              >
            </template>
            <template #br><br /></template>
          </i18n>
        </div>
        <div v-else>
          <p>An error occurred</p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import { MailIcon } from 'vue-tabler-icons'
import translations from '~/lang/error'
export default {
  i18n: {
    messages: translations,
  },
  components: { MailIcon },
  layout: 'default',
  props: { error: { type: Object, default: null } },
  head() {
    return {
      title: this.$t('title'),
    }
  },
  computed: {
    currentURL() {
      return this.$route.fullPath
    },
  },
}
</script>
