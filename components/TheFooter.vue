<template>
  <footer class="pb-12 pt-24">
    <div class="container">
      <nav
        class="
          flex flex-wrap
          text-center
          lg:text-start
          space-y-4
          lg:space-y-0
          pb-12
        "
      >
        <div class="w-full lg:w-2/5">
          <div class="flex justify-center lg:justify-start mb-6">
            <nuxt-link :to="localePath('index')">
              <Logo aria-hidden="true" class="h-8" />
              <span class="sr-only">SushiNBagels</span>
            </nuxt-link>
          </div>
          <ul>
            <li class="mb-4 text-sm">
              <MailIcon
                size="20"
                aria-label="Email:"
                class="inline-block me-1"
              /><a class="link" href="mailto:info&#64;sushinbagels&com"
                >info&#64;sushinbagels.com</a
              >
            </li>
            <li class="mb-4 text-sm">
              <MapPinIcon
                size="20"
                aria-label="Store address:"
                class="inline-block me-1"
              /><nuxt-link class="link" :to="localePath('contact')"
                >Yirmiyahu 68</nuxt-link
              >
            </li>
            <li class="text-sm">
              <PhoneIcon
                size="20"
                aria-label="Phone #:"
                class="inline-block me-1"
              /><a class="link" href="tel:+97225443111">02-544-3111</a>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h4 class="font-bold text-base mt-2 mb-6">
            {{ $t('footer.cravingSushi') }}
          </h4>
          <ul>
            <li class="mb-4 text-sm">
              <nuxt-link class="link" :to="localePath('menu')">
                {{ $t('nav.ourMenu') }}
              </nuxt-link>
            </li>
            <li class="mb-4 text-sm">
              <a
                href="https://www.tabitorder.com/?siteName=sushinbagel#/start"
                target="_blank"
                rel="noopener nofollow"
                class="link"
                >{{ $t('nav.orderNow') }}</a
              >
            </li>
            <li class="text-sm">
              <nuxt-link class="link" :to="localePath('contact')">
                {{ $t('footer.findUs') }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h4 class="font-bold text-base mt-2 mb-6">
            {{ $t('footer.information') }}
          </h4>
          <ul>
            <li class="mb-4 text-sm">
              <nuxt-link class="link" :to="localePath('gallery')">
                {{ $t('nav.gallery') }}
              </nuxt-link>
            </li>
            <li class="mb-4 text-sm">
              <nuxt-link class="link" :to="localePath('story')">
                {{ $t('nav.ourStory') }}
              </nuxt-link>
            </li>
            <li class="text-sm">
              <nuxt-link class="link" :to="localePath('contact')">
                {{ $t('nav.contact') }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h4 class="font-bold text-base mt-2 mb-6">
            {{ $t('footer.stayConnected') }}
          </h4>
          <ul class="flex flex-row justify-center lg:justify-start lg:flex-col">
            <li class="lg:mb-4 text-sm">
              <a
                href="https://www.facebook.com/sushinbagels/ "
                target="_blank"
                rel="noopener nofollow"
                class="link"
                ><BrandFacebookIcon
                  size="20"
                  aria-hidden="true"
                  class="inline-block lg:me-1 lg:text-white"
                /><span class="hidden lg:inline-block">{{
                  $t('footer.facebook')
                }}</span></a
              >
            </li>
            <li class="lg:mb-4 mx-6 lg:mx-0 text-sm">
              <a
                href="https://www.instagram.com/sushinbagels/"
                target="_blank"
                rel="noopener nofollow"
                class="link"
                ><BrandInstagramIcon
                  size="20"
                  aria-hidden="true"
                  class="inline-block lg:me-1 lg:text-white"
                /><span class="hidden lg:inline-block">{{
                  $t('footer.instagram')
                }}</span></a
              >
            </li>
            <li class="text-sm">
              <a
                href="https://wa.me/+97225443111?text=היי"
                target="_blank"
                rel="noopener nofollow"
                class="link"
                ><BrandWhatsappIcon
                  size="20"
                  aria-hidden="true"
                  class="inline-block lg:me-1 lg:text-white"
                /><span class="hidden lg:inline-block">{{
                  $t('footer.whatsapp')
                }}</span></a
              >
            </li>
          </ul>
        </div>
      </nav>
      <div class="text-sm text-gray-400 text-center ltr">
        <p class="pb-6">
          © {{ year }} SushiNBagel a product of David Ehrentreu
        </p>
        <p>
          {{ $t('footer.createdWith') }}
          <span class="sr-only">{{ $t('footer.love') }}</span>
          <HeartIcon
            size="16"
            aria-hidden="true"
            class="text-green inline-block"
          />
          {{ $t('footer.by') }}
          <a
            href="https://meirroth.net/"
            target="_blank"
            rel="noopener"
            class="link"
            >{{ $t('footer.MeirRoth') }}</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  BrandFacebookIcon,
  BrandInstagramIcon,
  BrandWhatsappIcon,
  HeartIcon,
} from 'vue-tabler-icons'
import Logo from '~/static/img/logo.svg?inline'

export default {
  name: 'TheFooter',
  components: {
    MailIcon,
    MapPinIcon,
    PhoneIcon,
    BrandFacebookIcon,
    BrandInstagramIcon,
    BrandWhatsappIcon,
    HeartIcon,
    Logo,
  },
  data() {
    return { year: 2021 }
  },
  mounted() {
    this.year = new Date().getFullYear()
  },
}
</script>
