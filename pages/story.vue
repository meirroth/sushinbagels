<template>
  <main>
    <Hero
      :img="require('~/assets/images/sushi-1.jpg')"
      :title="$t('page.story.title')"
    />
    <div class="relative z-20 bg-gradient-to-t from-black via-black">
      <div class="container space-y-20">
        <section
          id="our-goal"
          class="flex flex-col lg:flex-row justify-between"
        >
          <p>
            <b>{{ $t('page.story.ourGoal') }}</b>
            {{ $t('page.story.ourGoalIs') }}
          </p>
          <!-- <img
            class="w-full lg:w-1/4 h-auto mt-10 lg:mt-0 lg:ms-10"
            src="~/assets/images/sushi-1.jpg"
            alt=""
          /> -->
        </section>
        <section
          id="our-journey"
          class="flex flex-col-reverse lg:flex-row justify-between"
        >
          <!-- <img
            class="w-full lg:w-1/4 h-auto mt-10 lg:mt-0 lg:me-10"
            src="~/assets/images/sushi-2.jpg"
            alt=""
          /> -->
          <p>
            <b>{{ $t('page.story.ourJourney') }}</b>
            {{ $t('page.story.ourJourneyIs') }}
          </p>
        </section>
      </div>
      <div class="w-full h-96 xl:max-h-650 xl:h-screen relative mt-20">
        <img
          src="~/assets/images/outside-shop.jpg"
          class="absolute inset-0 object-cover w-full h-full"
        />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('page.story.title'),
    }
  },
}
</script>
