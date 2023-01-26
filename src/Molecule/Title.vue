<template>
  <AtomAnimate class="mx-auto w-full max-w-4xl text-center uppercase xl:pb-10">
    <component :is="tag" class="relative text-4xl font-semibold md:text-5xl">
      <span class="relative z-10">
        {{ title }}
      </span>
      <span class="absolute inset-0 ml-1 mt-1 h-full w-full text-r-pink">
        {{ title }}</span
      >
    </component>
    <div
      v-if="subtitle"
      class="pt-4 font-mont text-sm font-bold uppercase text-r-pink md:text-lg"
    >
      {{ subtitle }}
    </div>
  </AtomAnimate>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'h2',
    },
  },
};
</script>
