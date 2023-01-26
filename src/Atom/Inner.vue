<template>
  <div
    class="mx-auto w-full flex-shrink-0"
    :class="{ 'max-w-8xl': !fullWidth }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
