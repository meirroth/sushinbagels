<template>
  <footer class="pb-12 pt-24">
    <div class="container">
      <nav
        class="flex flex-wrap text-center lg:text-start space-y-4 lg:space-y-0"
      >
        <div class="w-full lg:w-2/5">
          <div class="flex justify-center lg:justify-start mb-6">
            <nuxt-link :to="localePath('index')">
              <Logo alt="SushiNBagels" class="h-8" />
            </nuxt-link>
          </div>
          <ul>
            <li class="mb-4 text-sm">
              <MailIcon size="20" class="inline-block me-1" /><a
                class="link"
                href="mailto:info&#64;sushinbagels&com"
                >info&#64;sushinbagels.com</a
              >
            </li>
            <li class="mb-4 text-sm">
              <MapPinIcon size="20" class="inline-block me-1" /><a
                class="link"
                href="#"
                >Yirmiyahu 68</a
              >
            </li>
            <li class="text-sm">
              <PhoneIcon size="20" class="inline-block me-1" /><a
                class="link"
                href="tel:+97225443111"
                >02-544-3111</a
              >
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h5 class="font-bold text-base mt-2 mb-6">
            {{ $t('footer.cravingSushi') }}
          </h5>
          <ul>
            <li class="mb-4 text-sm">
              <nuxt-link class="link" :to="localePath('menu')">
                {{ $t('nav.ourMenu') }}
              </nuxt-link>
            </li>
            <li class="mb-4 text-sm">
              <a
                class="link"
                href="https://www.tabitorder.com/?siteName=sushinbagel#/start"
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
          <h5 class="font-bold text-base mt-2 mb-6">
            {{ $t('footer.information') }}
          </h5>
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
          <h5 class="font-bold text-base mt-2 mb-6">
            {{ $t('footer.stayConnected') }}
          </h5>
          <ul class="flex flex-row justify-center lg:justify-start lg:flex-col">
            <li class="lg:mb-4 text-sm">
              <a class="link" href="#"
                ><BrandFacebookIcon
                  size="20"
                  class="inline-block lg:me-1 lg:text-white"
                /><span class="hidden lg:inline-block">{{
                  $t('footer.facebook')
                }}</span></a
              >
            </li>
            <li class="lg:mb-4 mx-6 lg:mx-0 text-sm">
              <a class="link" href="#"
                ><BrandInstagramIcon
                  size="20"
                  class="inline-block lg:me-1 lg:text-white"
                /><span class="hidden lg:inline-block">{{
                  $t('footer.instagram')
                }}</span></a
              >
            </li>
            <li class="text-sm">
              <a class="link" href="#"
                ><BrandWhatsappIcon
                  size="20"
                  class="inline-block lg:me-1 lg:text-white"
                /><span class="hidden lg:inline-block">{{
                  $t('footer.whatsapp')
                }}</span></a
              >
            </li>
          </ul>
        </div>
      </nav>
      <p class="pt-10 text-center text-sm text-gray-400">
        {{ $t('footer.copy') }}
        <HeartIcon size="16" class="text-green inline-block" />
        {{ $t('footer.right') }}
      </p>
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
import Logo from '~/assets/images/logo.svg?inline'

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
}
</script>
