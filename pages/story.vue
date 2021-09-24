<template>
  <main>
    <Hero img="/img/sushi-1.jpg" :title="$t('page.story.title')" />
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
          <!-- <Statically
            src="/img/sushi-1.jpg"
            width="432"
            loading="lazy"
            class="w-full lg:w-1/4 h-auto mt-10 lg:mt-0 lg:ms-10"
          /> -->
        </section>
        <section
          id="our-journey"
          class="flex flex-col-reverse lg:flex-row justify-between"
        >
          <!-- <Statically
            src="/img/sushi-2.jpg"
            width="432"
            loading="lazy"
            class="w-full lg:w-1/4 h-auto mt-10 lg:mt-0 lg:me-10"
          /> -->
          <p>
            <b>{{ $t('page.story.ourJourney') }}</b>
            {{ $t('page.story.ourJourneyIs') }}
          </p>
        </section>
      </div>
      <!-- <div class="w-full h-96 xl:max-h-650 xl:h-screen relative mt-20">
        <Statically
          src="/img/outside-shop.jpg"
          width="1536"
          loading="lazy"
          class="absolute inset-0 object-cover w-full h-full"
        />
      </div> -->
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
