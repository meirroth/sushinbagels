<template>
  <form
    v-if="formStatus === 'empty' || formStatus === 'sending'"
    name="Contact Us"
    method="POST"
    data-netlify="true"
    netlify-honeypot="yummy-honey"
    class="flex flex-col h-full"
    @submit.prevent="handleSubmit()"
  >
    <p class="hidden">
      <label
        >Don’t fill out this input if you’re human: <input name="yummy-honey"
      /></label>
    </p>
    <label for="name" class="leading-7 text-sm text-gray-400">{{
      $parent.$t('nameField')
    }}</label>
    <input
      id="name"
      v-model="form.name"
      type="text"
      required
      name="name"
      class="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-green text-base outline-none text-gray-100 mb-4 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    <label for="email" class="leading-7 text-sm text-gray-400">{{
      $parent.$t('emailField')
    }}</label>
    <input
      id="email"
      v-model="form.email"
      type="email"
      required
      name="email"
      class="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-green text-base outline-none text-gray-100 mb-4 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    <label for="phone" class="leading-7 text-sm text-gray-400"
      >{{ $parent.$t('phoneField') }}
      <span>{{ $parent.$t('optionalTag') }}</span></label
    >
    <input
      id="phone"
      v-model="form.phone"
      type="phone"
      name="phone"
      class="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-green text-base outline-none text-gray-100 mb-4 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
    <label for="message" class="leading-7 text-sm text-gray-400">{{
      $parent.$t('messageField')
    }}</label>
    <textarea
      id="message"
      v-model="form.message"
      required
      name="message"
      class="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-green text-base outline-none text-gray-100 mb-6 py-1 px-3 grow min-h-32 resize-none leading-6 transition-colors duration-200 ease-in-out"
    ></textarea>
    <button
      type="submit"
      class="text-black bg-gray-300 font-bold border-0 py-2 px-6 hover:bg-gray-200 rounded text-lg w-full disabled:opacity-80 disabled:pointer-events-none"
      :disabled="formStatus === 'sending' ? true : null"
    >
      <span v-if="formStatus === 'sending'">{{ $parent.$t('sending') }}</span>
      <span v-else>{{ $parent.$t('submit') }}</span>
    </button>
  </form>
  <div v-else class="rounded bg-gray-800 text-gray-100 grow p-10">
    <div v-if="formStatus === 'sending'" class="text-center h-full">
      <span class="spinner"></span>
      <span>{{ $parent.$t('sending') }}</span>
    </div>
    <div v-else-if="formStatus === 'success'" class="text-center h-full">
      <ThumbUpIcon size="60" aria-hidden="true" class="mx-auto mb-10" />
      <p class="mb-6 text-2xl font-serif font-bold">
        {{ $parent.$t('successTitle') }}
      </p>
      <p class="text-base">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="$md.render($parent.$t('successMessage'))"></span>
      </p>
    </div>
    <div v-else class="text-center h-full">
      <MoodSadIcon size="60" aria-hidden="true" class="mx-auto mb-10" />
      <p class="mb-6 text-2xl font-serif font-bold">
        {{ $parent.$t('errorTitle') }}
      </p>
      <p class="text-base">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="$md.render($parent.$t('errorMessage'))"></span>
        <a
          v-if="mailto !== ''"
          :href="mailto"
          target="_blank"
          class="link underline"
          >{{ $parent.$t('sendViaEmail') }}</a
        >
      </p>
    </div>
  </div>
</template>
<script>
import { ThumbUpIcon, MoodSadIcon } from 'vue-tabler-icons'
import axios from 'axios'
export default {
  name: 'ContactForm',
  components: {
    ThumbUpIcon,
    MoodSadIcon,
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
      formStatus: 'empty',
      mailtoSubject: 'Hi',
      mailtoBody: '',
    }
  },
  computed: {
    mailto() {
      return (
        'mailto:info@sushinbagels.com?Subject=' +
        encodeURIComponent(this.mailtoSubject) +
        '&body=' +
        encodeURIComponent(this.mailtoBody)
      )
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      this.formStatus = 'sending'
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
      console.log(this.form)
      axios
        .post(
          '/',
          this.encode({
            'form-name': 'Contact Us',
            ...this.form,
          }),
          axiosConfig
        )
        .then((response) => {
          console.log(response)
          if (response.status === 200) {
            this.formStatus = 'success'
          } else {
            throw new Error(response.data)
          }
          this.form = {
            name: null,
            email: null,
            phone: null,
            message: null,
          }
        })
        .catch((error) => {
          console.log(error)

          this.mailtoBody = `Name: ${this.form.name}\r\nEmail: ${this.form.email}`
          if (this.form.phone)
            this.mailtoBody += `\r\nPhone : ${this.form.phone}`
          this.mailtoBody += `\r\n\r\n${this.form.message}\r\n\r\nSent from https://sushinbagels.com/contact`

          this.formStatus = 'error'
        })
    },
  },
}
</script>
