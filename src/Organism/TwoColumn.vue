<template>
  <AtomAnimate class="relative">
    <div
      class="absolute top-0 left-0 z-[-1] mt-2 ml-2 h-full w-full bg-white"
    />
    <div
      class="my-64 flex flex-col items-center bg-r-pink px-6 py-6 lg:flex-row lg:space-x-12 xl:p-10 xl:py-0 2xl:px-12"
      :class="{ 'lg:flex-row-reverse lg:space-x-reverse': reverse }"
    >
      <div class="flex items-end justify-end lg:-mt-40 lg:w-1/2">
        <img :src="image" alt="" />
      </div>
      <div class="flex flex-col pt-16 lg:w-1/2 lg:py-10">
        <h2
          v-if="subtitle"
          class="textLarge pb-2 font-bold uppercase text-white"
        >
          {{ subtitle }}
        </h2>
        <h3 class="textLarge font-sans font-bold uppercase text-r-charcoal">
          {{ title }}
        </h3>
        <div
          class="textSmall prose-white prose pt-6 !text-white"
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
