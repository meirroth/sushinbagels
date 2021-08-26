<template>
  <main>
    <Hero
      :img="require('~/assets/images/sushi-4.jpg')"
      :title="$t('page.contact.title')"
    />
    <div class="relative z-20">
      <section class="text-gray-400 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            class="
              lg:w-2/3
              md:w-1/2
              bg-gray-900
              rounded-lg
              overflow-hidden
              sm:me-10
              p-10
              flex
              items-end
              justify-start
              relative
            "
          >
            <!-- <iframe
              title="map"
              class="absolute inset-0"
              style="filter: grayscale(1) contrast(1.2) opacity(0.16)"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe> -->
            <div
              class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md"
            >
              <div class="lg:w-1/2 px-6">
                <h2 class="text-white tracking-widest text-xs">Address</h2>
                <p class="mt-1 mb-5">
                  Yermiyahu Street 68 Jerusalem 9446753, Israel
                </p>
                <h2 class="text-white tracking-widest text-xs">Direction</h2>
                <p class="mt-1">
                  <a class="me-4" href="#"
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
                    Waze</a
                  >
                  <a href="#"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="26"
                      fill="none"
                      class="inline-block me-1"
                    >
                      <g clip-path="url(#clip0)">
                        <path
                          fill="#34A853"
                          d="M4.964 19.26a26.266 26.266 0 012.032 3.021c.519.99.735 1.662 1.114 2.856.232.66.442.856.893.856.492 0 .715-.335.888-.852.358-1.128.639-1.988 1.082-2.8.87-1.57 1.95-2.964 3.012-4.305.288-.379 2.147-2.589 2.983-4.332 0 0 1.029-1.915 1.029-4.59 0-2.502-1.014-4.238-1.014-4.238l-2.92.789-1.774 4.707-.439.65-.087.117-.117.147-.205.235-.293.295-1.579 1.297-3.948 2.298-.657 3.85z"
                        />
                        <path
                          fill="#FBBC04"
                          d="M.89 13.382c.963 2.218 2.821 4.168 4.079 5.88l6.677-7.973s-.94 1.24-2.647 1.24c-1.9 0-3.437-1.53-3.437-3.459 0-1.322.79-2.231.79-2.231L1.82 8.063l-.93 5.319z"
                        />
                        <path
                          fill="#4285F4"
                          d="M11.72.41c2.218.72 4.117 2.234 5.265 4.465l-5.337 6.41s.79-.925.79-2.24c0-1.974-1.65-3.449-3.431-3.449-1.685 0-2.653 1.238-2.653 1.238V2.796L11.721.41z"
                        />
                        <path
                          fill="#1A73E8"
                          d="M2.113 3.242C3.437 1.645 5.768 0 8.982 0c1.559 0 2.733.413 2.733.413L6.35 6.838H2.548l-.435-3.596z"
                        />
                        <path
                          fill="#EA4335"
                          d="M.89 13.382s-.887-1.75-.887-4.285c0-2.395.924-4.49 2.11-5.855l4.24 3.596-5.464 6.544z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <path fill="#fff" d="M0 0h18v26H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                    Google Maps</a
                  >
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <div>
                  <h2 class="text-white tracking-widest text-xs">Email</h2>
                  <Mailto mail="info@sushinbagels.com" />
                </div>
                <div>
                  <h2 class="text-white tracking-widest text-xs mt-4">Phone</h2>
                  <a href="tel:+97225443111">02-544-3111</a>
                </div>
              </div>
            </div>
          </div>
          <div
            class="
              lg:w-1/3
              md:w-1/2
              flex flex-col
              md:ms-auto
              w-full
              md:py-8
              mt-8
              md:mt-0
            "
          >
            <h2 class="text-white text-lg mb-1 font-medium">
              Send us a message
            </h2>
            <p class="text-sm mb-5">
              Need additional information or have a question or comment? Please
              feel free to leave a message, And our beloved team will answer you
              as soon as possible!
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-400"
                >Name</label
              >
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
              <label for="email" class="leading-7 text-sm text-gray-400"
                >Email</label
              >
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
                >Phone (Optional)</label
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
              <label for="message" class="leading-7 text-sm text-gray-400"
                >Message</label
              >
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
              Send
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'
export default {
  components: {
    Hero,
  },
  head() {
    return {
      title: this.$t('page.contact.title'),
    }
  },
}
</script>
