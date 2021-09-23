<template>
  <form name="contact" netlify>
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
