<template>
  <AtomAnimate class="relative">
    <div
      class="absolute top-0 left-0 z-[-1] mt-2 ml-2 h-full w-full bg-r-pink"
    />
    <div
      class="my-16 flex flex-col items-center bg-white p-6 pb-0 lg:flex-row lg:space-x-12 xl:p-10 xl:pb-0 2xl:px-12"
      :class="{ 'lg:flex-row-reverse lg:space-x-reverse': reverse }"
    >
      <div class="flex items-end justify-end lg:w-1/2">
        <img :src="image" alt="" />
      </div>
      <div class="flex flex-col py-16 lg:w-1/2 lg:pt-0">
        <div class="relative">
          <h3
            class="relative z-10 text-5xl font-bold uppercase text-r-pink md:text-6xl xl:text-7xl 2xl:text-[5rem]"
          >
            {{ title }}
          </h3>
          <h3
            class="absolute top-1 left-1 text-5xl font-bold uppercase text-r-charcoal md:text-6xl xl:text-7xl 2xl:text-[5rem]"
          >
            {{ title }}
          </h3>
        </div>
        <div
          class="textSmall prose-white prose pt-2 !text-r-charcoal xl:pt-6"
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
