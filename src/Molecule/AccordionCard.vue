<template>
  <div class="relative mx-auto mb-6 max-w-8xl">
    <div class="absolute top-0 left-0 mt-2 ml-2 h-full w-full bg-r-pink" />
    <button
      :id="`label${_uid}`"
      type="button"
      class="custom-transition relative flex w-full items-center justify-between space-x-10 bg-white p-4 px-6 font-bold text-r-charcoal"
      :aria-expanded="show ? 'true' : 'false'"
      :aria-controls="`title${_uid}`"
      @click="show = !show"
    >
      <h3 class="text-xl text-r-charcoal xl:text-2xl 2xl:text-3xl">
        {{ title }}
      </h3>
      <span class="flex items-center pt-6 pr-6 font-bold">
        <span
          class="transform transition-transform duration-300"
          :class="show ? '-rotate-90' : 'rotate-90'"
        >
          <AtomIconArrow class="w-4" />
        </span>
      </span>
    </button>

    <div
      v-if="show"
      class="textSmall relative z-10 w-full bg-white px-6 pb-6 text-left"
    >
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
