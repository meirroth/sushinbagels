<template>
  <div
    :class="[
      'flex items-end',
      { 'vue-star-rating-rtl': rtl },
      { 'inline-flex': inline },
    ]"
  >
    <div class="sr-only">
      <slot name="screen-reader" :rating="selectedRating" :stars="maxRating">
        <span>Rated {{ selectedRating }} stars out of {{ maxRating }}</span>
      </slot>
    </div>
    <div class="flex items-end">
      <span
        v-for="n in maxRating"
        :key="n"
        class="inline-block"
        :style="{ 'margin-right': margin + 'px' }"
      >
        <star
          :fill="fillLevel[n - 1]"
          :size="starSize"
          :points="starPoints"
          :star-id="n"
          :step="step"
          :active-color="currentActiveColor"
          :inactive-color="inactiveColor"
          :border-color="borderColor"
          :active-border-color="currentActiveBorderColor"
          :border-width="borderWidth"
          :rounded-corners="roundedCorners"
          :rtl="rtl"
        />
      </span>
      <span
        v-if="showRating"
        :class="['vue-star-rating-rating-text', textClass]"
      >
        {{ formattedRating }}</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'StarRating',
  props: {
    increment: {
      type: Number,
      default: 1,
    },
    rating: {
      type: Number,
      default: 0,
    },
    roundStartRating: {
      type: Boolean,
      default: true,
    },
    activeColor: {
      type: [String, Array],
      default: '#ffd055',
    },
    inactiveColor: {
      type: String,
      default: '#d8d8d8',
    },
    maxRating: {
      type: Number,
      default: 5,
    },
    starPoints: {
      type: Array,
      default() {
        return []
      },
    },
    starSize: {
      type: Number,
      default: 50,
    },
    showRating: {
      type: Boolean,
      default: true,
    },
    textClass: {
      type: String,
      default: '',
    },
    inline: {
      type: Boolean,
      default: false,
    },
    borderColor: {
      type: String,
      default: '#999',
    },
    activeBorderColor: {
      type: [String, Array],
      default: null,
    },
    borderWidth: {
      type: Number,
      default: 0,
    },
    roundedCorners: {
      type: Boolean,
      default: false,
    },
    padding: {
      type: Number,
      default: 0,
    },
    rtl: {
      type: Boolean,
      default: false,
    },
    fixedPoints: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      step: 0,
      fillLevel: [],
      currentRating: 0,
      selectedRating: 0,
      ratingSelected: false,
    }
  },
  computed: {
    formattedRating() {
      return this.fixedPoints === null
        ? this.currentRating
        : this.currentRating.toFixed(this.fixedPoints)
    },
    shouldRound() {
      return this.ratingSelected || this.roundStartRating
    },
    margin() {
      return this.padding + this.borderWidth
    },
    activeColors() {
      if (Array.isArray(this.activeColor)) {
        return this.padColors(
          this.activeColor,
          this.maxRating,
          this.activeColor.slice(-1)[0]
        )
      }

      return new Array(this.maxRating).fill(this.activeColor)
    },
    currentActiveColor() {
      return this.selectedRating > 0
        ? this.activeColors[Math.ceil(this.selectedRating) - 1]
        : this.inactiveColor
    },
    activeBorderColors() {
      if (Array.isArray(this.activeBorderColor)) {
        return this.padColors(
          this.activeBorderColor,
          this.maxRating,
          this.activeBorderColor.slice(-1)[0]
        )
      }
      const borderColor = this.activeBorderColor
        ? this.activeBorderColor
        : this.borderColor
      return new Array(this.maxRating).fill(borderColor)
    },
    currentActiveBorderColor() {
      return this.selectedRating > 0
        ? this.activeBorderColors[Math.ceil(this.selectedRating) - 1]
        : this.borderColor
    },
    roundedRating() {
      const inv = 1.0 / this.increment
      return Math.min(this.maxRating, Math.ceil(this.currentRating * inv) / inv)
    },
  },
  created() {
    this.step = this.increment * 100
    this.currentRating = this.rating
    this.selectedRating = this.currentRating
    this.createStars(this.roundStartRating)
  },
  methods: {
    createStars(round = true, applyFill = true) {
      this.currentRating = round ? this.roundedRating : this.currentRating
      for (let i = 0; i < this.maxRating; i++) {
        let level = 0
        if (i < this.currentRating) {
          level =
            this.currentRating - i > 1 ? 100 : (this.currentRating - i) * 100
        }
        if (applyFill) {
          this.fillLevel[i] = Math.round(level)
        }
      }
    },
    padColors(array, minLength, fillValue) {
      return Object.assign(new Array(minLength).fill(fillValue), array)
    },
  },
}
</script>
<style scoped>
.vue-star-rating-rtl {
  direction: rtl;
}

.vue-star-rating-rating-text {
  margin-left: 7px;
  margin-right: 7px;
}

.vue-star-rating-rtl .vue-star-rating-rating-text {
  margin-right: 10px;
  direction: rtl;
}
</style>
