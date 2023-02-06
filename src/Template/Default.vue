<template>
  <!-- <div class="bg-gradient-to-b from-black to-n-mBlue"> -->
  <div class="overflow-hidden bg-white font-sans">
    <a href="#content" class="sr-only text-blue-600 focus:not-sr-only">
      Skip to main content
    </a>
    <AtomIeBanner />

    <OrganismEntry />

    <div class="">
      <OrganismHeader />
      <div id="content" />
      <slot />
      <div
        class="fixed bottom-10 right-10 flex w-full items-center justify-end space-x-4 md:w-auto"
      >
        <AtomIconTwitter
          link="https://twitter.com/dwagonweborn"
          class="hidden text-white hover:text-r-pink md:block"
        />
        <AtomIconDiscord
          link="https://discord.com/"
          class="hidden text-white hover:text-r-pink md:block"
        />

        <!-- <AtomPlainLink
          to="#form"
          class="g:px-12 scrolled:scrollHover custom-transition inline-block whitespace-nowrap rounded-3xl bg-white px-8 py-2 text-sm uppercase text-white hover:bg- hover:text-white scrolled:bg-r-pink lg:py-3"
        >
          Contact Us
        </AtomPlainLink> -->
      </div>
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
