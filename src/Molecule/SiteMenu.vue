<template>
  <nav class="text-white xl:w-full">
    <div class="z-40 flex h-full w-full items-center uppercase">
      <div
        class="custom-transition z-30 hidden w-full items-center justify-end space-x-10 font-title text-base font-bold xl:flex"
      >
        <AtomSiteMenuItem
          v-for="item in links"
          :key="item.label"
          :item="item"
          class="transition-all duration-300 ease-in-out"
        />
        <a
          class="menu-item relative transition-all duration-300 ease-in-out hover:text-r-pink scrolled:text-base"
          href="https://dwagonweborn.com/assets/whitepaper.pdf"
          target="_blank"
          >Whitepaper</a
        >
        <a
          href="#how-to-buy"
          class="bg-r-pink px-6 py-2 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
          >How to Buy</a
        >
      </div>
      <transition name="slide-fade">
        <div
          v-if="toggled"
          class="absolute inset-0 z-50 flex h-screen w-full flex-col items-center justify-center space-y-6 bg-r-gray xl:shadow-xl"
          @click="toggled = !toggled"
        >
          <AtomSiteMenuItem
            v-for="item in links"
            :key="item.label"
            :item="item"
            class="textLarge text-black scrolled:text-white xl:hidden"
          />
        </div>
      </transition>
      <button
        class="focus:outline-none relative z-50 block xl:hidden"
        @click="toggled = !toggled"
      >
        <AtomIconHamburger :class="{ 'open text-white': toggled }" />
      </button>
    </div>

    <div
      class="fixed inset-0 h-full w-full transition-all duration-500 ease-in-out xl:hidden"
    />
  </nav>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },

    homepage: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      links: [
        {
          label: 'Game',
          link: '#game',
        },
        {
          label: 'Token',
          link: '#how-to-buy',
        },
        {
          label: 'NFT',
          link: '#nft',
        },
        {
          label: 'FAQ',
          link: '#FAQ',
        },
      ],
      toggled: false,
      toggleSearch: false,
    };
  },
  methods: {
    closeMenu() {
      this.toggled = false;
    },
  },
};
</script>
