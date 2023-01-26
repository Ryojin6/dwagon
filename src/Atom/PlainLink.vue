<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  computed: {
    tag() {
      if (this.to.includes('://') || this.to[0] === '#') {
        return 'a';
      }

      return 'g-link';
    },
    toAttr() {
      if (this.tag === 'a') {
        return 'href';
      }

      return 'to';
    },
    target() {
      if (this.$attrs.target) {
        return this.$attrs.target;
      }

      const to = this.to.toLowerCase();
      if (to.startsWith('http://') || to.startsWith('https://')) {
        return '_blank';
      }

      return '';
    },
    rel() {
      if (this.target === '_blank') {
        return 'noopener noreferrer';
      }

      return '';
    },
    focus() {
      return this.$refs.link.focus.bind(this.$refs.link);
    },
  },
  render(h) {
    return h(
      this.tag,
      {
        attrs: {
          [this.toAttr]: this.to,
          target: this.target,
          rel: this.$attrs.rel ?? this.rel,
        },
        on: this.$listeners,
        ref: 'link',
      },
      this.$slots.default,
    );
  },
};
</script>
