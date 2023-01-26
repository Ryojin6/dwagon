<template>
  <a
    :href="item.link"
    class="menu-item relative transition-all duration-300 ease-in-out hover:text-r-pink scrolled:text-base"
    >{{ item.label }}</a
  >
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoed>
.menu-item:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.menu-item:hover:after {
  width: 100%;
  left: 0;
}
</style>
