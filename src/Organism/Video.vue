<template>
  <div class="aspect-h-9 aspect-w-16">
    <iframe
      src="https://player.vimeo.com/video/796390878?autoplay=1&loop=1&autopause=0&controls=0"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playVideo: false,
    };
  },
  methods: {
    play() {
      this.$refs.myvideo.play();
      this.playVideo = true;
    },
  },
};
</script>
