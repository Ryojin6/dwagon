<template>
  <AtomAnimate class="relative">
    <div>
      <div class="w-full">
        <img :src="image" alt="" />
      </div>
      <div class="absolute inset-0 hidden w-full bg-black/20 lg:block" />
      <div
        class="lg:pin-y-center flex flex-col bg-black/80 p-10 text-center lg:absolute lg:max-w-2xl lg:p-10 lg:pt-16"
        :class="reverse ? 'lg:left-10' : 'lg:right-10'"
      >
        <h2
          v-if="subtitle"
          class="textLarge pb-2 font-bold uppercase text-white"
        >
          {{ subtitle }}
        </h2>
        <h3 class="textLarge font-title uppercase text-r-pink">
          {{ title }}
        </h3>
        <div
          class="textSmall prose-white prose max-w-full pt-6 !text-white"
          v-html="description"
        />
      </div>
    </div>
  </AtomAnimate>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    buttonTitle: {
      type: String,
      default: '',
    },
    secondLink: {
      type: String,
      default: '',
    },
    secondButtonTitle: {
      type: String,
      default: '',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
