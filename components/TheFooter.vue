<template>
  <footer class="pb-12 pt-24">
    <div class="container">
      <nav
        class="flex flex-wrap text-center lg:text-start space-y-4 lg:space-y-0"
      >
        <div class="w-full lg:w-2/5">
          <div class="flex justify-center lg:justify-start pb-4">
            <nuxt-link :to="localePath('index')">
              <img src="~/assets/images/logo.svg" alt="SushiNBagels" />
            </nuxt-link>
          </div>
          <ul>
            <li>
              <MailIcon size="20" class="inline-block me-1" />
              <a class="link text-xs" href="mailto:info&#64;sushinbagels&com"
                >info&#64;sushinbagels.com</a
              >
            </li>
            <li>
              <MapPinIcon size="20" class="inline-block me-1" />
              <a class="link text-xs" href="#">Yirmiyahu 68</a>
            </li>
            <li>
              <PhoneIcon size="20" class="inline-block me-1" />
              <a class="link text-xs" href="tel:+97225443111">02-544-3111</a>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h5 class="font-bold pb-2">{{ $t('footer.cravingSushi') }}</h5>
          <ul>
            <li>
              <nuxt-link class="link text-xs" :to="localePath('menu')">
                {{ $t('nav.ourMenu') }}
              </nuxt-link>
            </li>
            <li class="mt-1">
              <a class="link text-xs" href="#">{{ $t('nav.orderNow') }}</a>
            </li>
            <li class="mt-1">
              <nuxt-link class="link text-xs" :to="localePath('contact')">
                {{ $t('footer.findUs') }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h5 class="font-bold pb-2">{{ $t('footer.information') }}</h5>
          <ul>
            <li>
              <nuxt-link class="link text-xs" :to="localePath('gallery')">
                {{ $t('nav.gallery') }}
              </nuxt-link>
            </li>
            <li class="mt-1">
              <nuxt-link class="link text-xs" :to="localePath('story')">
                {{ $t('nav.ourStory') }}
              </nuxt-link>
            </li>
            <li class="mt-1">
              <nuxt-link class="link text-xs" :to="localePath('contact')">
                {{ $t('nav.contact') }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="w-full lg:w-1/5">
          <h5 class="font-bold pb-2">{{ $t('footer.stayConnected') }}</h5>
          <ul class="flex flex-row justify-center lg:justify-start lg:flex-col">
            <li>
              <a class="link text-0 lg:text-xs" href="#"
                ><BrandFacebookIcon
                  size="20"
                  class="inline-block lg:me-1"
                /><span>{{ $t('footer.facebook') }}</span></a
              >
            </li>
            <li class="lg:mt-1 mx-4 lg:mx-0">
              <a class="link text-0 lg:text-xs" href="#"
                ><BrandInstagramIcon
                  size="20"
                  class="inline-block lg:me-1"
                /><span>{{ $t('footer.instagram') }}</span></a
              >
            </li>
            <li class="lg:mt-1">
              <a class="link text-0 lg:text-xs" href="#"
                ><BrandWhatsappIcon
                  size="20"
                  class="inline-block lg:me-1"
                /><span>{{ $t('footer.whatsapp') }}</span></a
              >
            </li>
          </ul>
        </div>
      </nav>
      <p class="pt-10 text-center text-xs text-gray-400">
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
  },
}
</script>
