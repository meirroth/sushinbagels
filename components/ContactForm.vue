<template>
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    data-netlify-recaptcha="true"
  >
    <p class="hidden">
      <label
        >Don’t fill this out if you’re human: <input name="bot-field"
      /></label>
    </p>
    <div class="relative mb-4">
      <label for="name" class="leading-7 text-sm text-gray-400">{{
        $t('page.contact.name')
      }}</label>
      <input
        id="name"
        type="text"
        required
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
        required
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
        required
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
    <div data-netlify-recaptcha="true"></div>
    <button
      type="submit"
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
        w-full
      "
    >
      {{ $t('page.contact.submit') }}
    </button>
  </form>
</template>
<script>
export default { name: 'ContactForm' }
</script>
