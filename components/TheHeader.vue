<template>
  <div class="header-wrap">
    <header aria-label="Site Header">
      <div class="container">
        <div class="max-w-8xl mx-auto">
          <div class="flex items-center justify-between">
            <nuxt-link class="flex items-center" :to="localePath('index')">
              <img src="~/assets/images/logo.svg" alt="SushiNBagels" />
            </nuxt-link>
            <nav aria-label="Site Navigation" class="hidden md:block">
              <ul class="is-unstyled">
                <li class="nav-link">
                  <nuxt-link :to="localePath('menu')">
                    {{ $t('nav.ourMenu') }}
                  </nuxt-link>
                </li>
                <li class="nav-link">
                  <nuxt-link :to="localePath('gallery')">
                    {{ $t('nav.gallery') }}
                  </nuxt-link>
                </li>
                <li class="nav-link">
                  <nuxt-link :to="localePath('story')">
                    {{ $t('nav.ourStory') }}
                  </nuxt-link>
                </li>
                <li class="nav-link">
                  <nuxt-link :to="localePath('contact')">
                    {{ $t('nav.contact') }}
                  </nuxt-link>
                </li>
                <li class="flex items-center">
                  <LangSwitcher />
                </li>
              </ul>
            </nav>
            <div class="md:hidden">
              <button class="" aria-label="Open site menu">Menu</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import LangSwitcher from '~/components/LangSwitcher'
export default {
  components: {
    LangSwitcher,
  },
}
</script>
<style lang="scss">
.header-wrap {
  display: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  transition: opacity cubic-bezier(0, 0, 0.2, 1) 0.3s;
  .nav-link {
    margin-right: 2rem;
  }
  header {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  nav {
    ul {
      display: flex;
    }
  }
}
</style>
