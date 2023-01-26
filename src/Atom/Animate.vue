<template>
  <div
    v-aos
    class="transition-all duration-1000 ease-in-out"
    :aos-from="['opacity-0 shadow-xl blur-lg ' + from]"
    :aos-to="[' opacity-100 shadow-none blur-none' + to]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: String,
      default: 'bottom',
    },
  },
  computed: {
    from() {
      switch (this.position) {
        case 'bottom':
          return ` translate-y-32 `;
        case 'left':
          return ` -translate-x-32 `;
        case 'right':
          return ` translate-x-32 `;

        default:
          return '';
      }
    },
    to() {
      switch (this.position) {
        case 'bottom':
          return ` translate-y-0 `;
        default:
          return ' translate-x-0';
      }
    },
  },
};
</script>
