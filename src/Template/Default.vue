<template>
  <!-- <div class="bg-gradient-to-b from-black to-n-mBlue"> -->
  <div class="overflow-hidden bg-white font-mont">
    <a href="#content" class="sr-only text-blue-600 focus:not-sr-only">
      Skip to main content
    </a>
    <AtomIeBanner />
    <div class="">
      <OrganismHeader />
      <div id="content" />
      <slot />
      <footer class="bg-r-pink">
        <div
          class="flex flex-col items-center justify-between border-t py-6 px-8 text-xs text-white sm:flex-row xl:px-12"
        >
          <div class="flex justify-between space-x-4 text-right">
            <span>Copyright © 2022 <span class="text-red">Dwagon</span></span>
            <span> | </span>
            <g-link
              class="custom-transition hover:text-lab-pink"
              to="/privacy-policy"
            >
              Privacy Policy</g-link
            >
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elementVisible: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 2000);
  },
};
</script>
