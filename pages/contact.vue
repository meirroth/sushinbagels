<template>
  <main>
    <Hero
      :img="require('~/assets/images/sushi-4.jpg')"
      :title="$t('page.contact.title')"
    />
    <div class="relative z-20">
      <section class="container flex lg:flex-nowrap flex-wrap">
        <div
          class="
            relative
            flex
            items-end
            justify-start
            w-full
            lg:w-2/3
            p-10
            lg:me-10
            overflow-hidden
            rounded-lg
            bg-gray-900
          "
        >
          <img
            class="absolute inset-0 z-0 object-cover w-full h-full"
            src="~/assets/images/location-map.jpg"
            :alt="$t('page.contact.mapAlt')"
          />
          <!-- <iframe
              title="map"
              class="absolute inset-0"
              style="filter: grayscale(1) contrast(1.2) opacity(0.16)"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=SushiNBagels+(SushiNBagels)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe> -->
          <div class="relative w-auto mt-80 py-6 rounded shadow-md bg-gray-900">
            <div class="px-6 mb-6">
              <h4 class="mb-2 text-sm">{{ $t('page.contact.hours') }}</h4>
              <p class="text-base">
                {{ $t('page.contact.hours1') }}<br />
                {{ $t('page.contact.hours2') }}<br />
                {{ $t('page.contact.hours3') }}
              </p>
            </div>
            <div class="w-full lg:w-auto flex flex-wrap">
              <div class="w-full lg:w-auto px-6 mb-6 xl:mb-0">
                <div class="mb-5">
                  <h4 class="mb-2 text-sm">{{ $t('page.contact.email') }}</h4>
                  <a href="mailto:info@sushinbagels.com" class="link text-base"
                    >info@sushinbagels.com</a
                  >
                </div>
                <div>
                  <h4 class="mb-2 text-sm">{{ $t('page.contact.phone') }}</h4>
                  <a href="tel:+97225443111" class="link text-base"
                    >02-544-3111</a
                  >
                </div>
              </div>
              <div class="w-full lg:w-auto px-6">
                <div class="mb-5">
                  <h4 class="mb-2 text-sm">{{ $t('page.contact.address') }}</h4>
                  <p class="text-base">
                    {{ $t('page.contact.yermiyahuStreet') }}
                  </p>
                </div>
                <div>
                  <h4 class="mb-2 text-sm">
                    {{ $t('page.contact.directions') }}
                  </h4>
                  <div class="ltr">
                    <a href="#" class="me-4"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        aria-hidden="true"
                        role="img"
                        width="30"
                        height="30"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 512 512"
                        class="inline-block me-1"
                      >
                        <path
                          d="M502.17 201.67C516.69 287.53 471.23 369.59 389 409.8c13 34.1-12.4 70.2-48.32 70.2a51.68 51.68 0 0 1-51.57-49c-6.44.19-64.2 0-76.33-.64A51.69 51.69 0 0 1 159 479.92c-33.86-1.36-57.95-34.84-47-67.92c-37.21-13.11-72.54-34.87-99.62-70.8c-13-17.28-.48-41.8 20.84-41.8c46.31 0 32.22-54.17 43.15-110.26C94.8 95.2 193.12 32 288.09 32c102.48 0 197.15 70.67 214.08 169.67zM373.51 388.28c42-19.18 81.33-56.71 96.29-102.14c40.48-123.09-64.15-228-181.71-228c-83.45 0-170.32 55.42-186.07 136c-9.53 48.91 5 131.35-68.75 131.35C58.21 358.6 91.6 378.11 127 389.54c24.66-21.8 63.87-15.47 79.83 14.34c14.22 1 79.19 1.18 87.9.82a51.69 51.69 0 0 1 78.78-16.42zM205.12 187.13c0-34.74 50.84-34.75 50.84 0s-50.84 34.74-50.84 0zm116.57 0c0-34.74 50.86-34.75 50.86 0s-50.86 34.75-50.86 0zm-122.61 70.69c-3.44-16.94 22.18-22.18 25.62-5.21l.06.28c4.14 21.42 29.85 44 64.12 43.07c35.68-.94 59.25-22.21 64.11-42.77c4.46-16.05 28.6-10.36 25.47 6c-5.23 22.18-31.21 62-91.46 62.9c-42.55 0-80.88-27.84-87.9-64.25z"
                          fill="currentColor"
                        />
                      </svg>
                      {{ $t('page.contact.waze') }}</a
                    >
                    <a href="#" class="me-4">
                      <svg
                        width="21"
                        height="30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline-block me-1"
                        aria-hidden="true"
                      >
                        <g clip-path="url(#clip0)">
                          <path
                            d="M13.588.499A10.508 10.508 0 0010.405 0C7.223 0 4.356 1.451 2.438 3.741l4.92 4.15L13.588.5z"
                            fill="#1A73E8"
                          />
                          <path
                            d="M2.438 3.741A10.494 10.494 0 000 10.454c0 1.972.384 3.56 1.038 4.988l6.32-7.55-4.92-4.15z"
                            fill="#EA4335"
                          />
                          <path
                            d="M10.428 6.463a3.997 3.997 0 013.995 4.013 4.04 4.04 0 01-.948 2.585s3.138-3.764 6.207-7.415A10.41 10.41 0 0013.588.5L7.358 7.89c.745-.862 1.829-1.428 3.07-1.428"
                            fill="#4285F4"
                          />
                          <path
                            d="M10.428 14.467a3.997 3.997 0 01-3.995-4.014c0-.975.338-1.882.925-2.562l-6.32 7.551c1.084 2.404 2.89 4.354 4.74 6.78l7.697-9.184a3.955 3.955 0 01-3.047 1.43z"
                            fill="#FBBC04"
                          />
                          <path
                            d="M13.34 24.762c3.476-5.465 7.516-7.937 7.516-14.286 0-1.746-.429-3.379-1.174-4.83L5.778 22.222a41.771 41.771 0 011.783 2.563c2.122 3.288 1.535 5.238 2.89 5.238 1.354 0 .767-1.973 2.889-5.261z"
                            fill="#34A853"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <path fill="#fff" d="M0 0h20.833v30H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                      {{ $t('page.contact.googleMaps') }}</a
                    >
                    <a href="#"
                      ><svg
                        width="24"
                        height="30"
                        viewBox="0 0 24 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="inline-block me-1"
                        aria-hidden="true"
                      >
                        <path
                          d="M9.94194 28.3479C5.0625 24.0947 1.41998 18.9751 0.379904 14.9084C-1.31999 8.26192 2.84654 1.66039 9.64583 0.227288C11.4123 -0.145027 13.7037 -0.0537775 15.3848 0.455827C18.2902 1.33655 21.3349 3.85831 22.6248 6.4524C25.5772 12.39 23.6286 18.591 16.4915 25.9703C15.0073 27.5048 12.1811 30 11.9271 30C11.8777 30 10.9844 29.2566 9.94194 28.3479ZM14.8214 14.7543C15.6164 14.3654 15.9532 14.0781 15.9532 13.789C15.9532 13.143 15.4689 13.1143 14.3761 13.6953C12.9136 14.4729 11.3429 14.4382 9.73542 13.5926C8.65301 13.0232 8.48633 12.9882 8.20383 13.2707C7.92134 13.5532 7.92743 13.6325 8.25983 13.9998C8.67481 14.4584 9.83886 15.058 10.8022 15.3094C11.8605 15.5857 13.6184 15.3429 14.8214 14.7543ZM8.05097 11.2419C8.46791 10.0488 6.85255 9.28106 6.15743 10.342C5.83784 10.8297 5.83842 10.9063 6.16552 11.4055C6.66082 12.1615 7.76304 12.0658 8.05097 11.2419ZM17.8034 11.6665C17.9422 11.5277 18.0557 11.1682 18.0557 10.8676C18.0557 10.5669 17.9422 10.2074 17.8034 10.0686C17.6646 9.92987 17.3051 9.81634 17.0045 9.81634C16.7038 9.81634 16.3443 9.92987 16.2055 10.0686C15.8803 10.3939 15.8803 11.3413 16.2055 11.6665C16.5307 11.9917 17.4782 11.9917 17.8034 11.6665Z"
                          fill="#EF6234"
                        />
                      </svg>
                      {{ $t('page.contact.moovit') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full lg:w-1/3 mt-10 lg:mt-0">
          <h3 class="text-xl mb-4">
            {{ $t('page.contact.formTitle') }}
          </h3>
          <p class="text-sm mb-6">
            {{ $t('page.contact.formDesc') }}
          </p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-400">{{
              $t('page.contact.name')
            }}</label>
            <input
              id="name"
              type="text"
              name="name"
              class="
                w-full
                bg-gray-800
                rounded
                border border-gray-700
                focus:ring-2 focus:ring-green
                text-base
                outline-none
                text-gray-100
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-400">{{
              $t('page.contact.email')
            }}</label>
            <input
              id="email"
              type="email"
              name="email"
              class="
                w-full
                bg-gray-800
                rounded
                border border-gray-700
                focus:ring-2 focus:ring-green
                text-base
                outline-none
                text-gray-100
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <div class="relative mb-4">
            <label for="phone" class="leading-7 text-sm text-gray-400"
              >{{ $t('page.contact.phone') }}
              <span>{{ $t('page.contact.optional') }}</span></label
            >
            <input
              id="phone"
              type="phone"
              name="phone"
              class="
                w-full
                bg-gray-800
                rounded
                border border-gray-700
                focus:ring-2 focus:ring-green
                text-base
                outline-none
                text-gray-100
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-400">{{
              $t('page.contact.message')
            }}</label>
            <textarea
              id="message"
              name="message"
              class="
                w-full
                bg-gray-800
                rounded
                border border-gray-700
                focus:ring-2 focus:ring-green
                h-32
                text-base
                outline-none
                text-gray-100
                py-1
                px-3
                resize-none
                leading-6
                transition-colors
                duration-200
                ease-in-out
              "
            ></textarea>
          </div>
          <button
            class="
              text-black
              bg-gray-300
              font-bold
              border-0
              py-2
              px-6
              hover:bg-gray-200
              rounded
              text-lg
            "
          >
            {{ $t('page.contact.submit') }}
          </button>
        </div>
      </section>
    </div>
  </main>
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
