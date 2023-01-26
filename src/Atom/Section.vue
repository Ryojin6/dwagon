<template>
  <section
    class="z-10 flex-shrink-0"
    :class="{
      'pt-0': tp === '0',
      'pt-10': tp === 'small',
      'pt-20 md:pt-32 xl:pt-48': tp === 'large',
      'pb-0': bp === '0',
      'pb-10': bp === 'small',
      'pb-20 md:pb-32 xl:pb-48': bp === 'large',
      'px-8 xl:px-12 ': !fullWidth,
    }"
  >
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    bgColour: {
      type: String,
      default: '',
    },
    tp: {
      type: String,
      default: '',
    },
    bp: {
      type: String,
      default: '',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
