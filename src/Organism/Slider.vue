<template>
  <AtomSection tp="large" bp="large" class="relative w-full bg-r-pink" id="nft">
    <MoleculeTitle
      title="Dwagon NFT Collection"
      subtitle="The upcoming collection of 2D avatars have a robust suite of utilities 
      tied in with their development, giving avatar holders immediate and significant 
      tangible benefits including a range of options to earn both passively and actively. "
      class="mb-10 text-white"
    />
    <slot />

    <div
      class="prose-white prose mx-auto grid max-w-7xl gap-4 pb-10 text-white md:grid-cols-2 md:gap-8"
    >
      <div>
        <p>
          The upcoming collection of 2D avatars have a robust suite of utilities
          tied in with their development, giving avatar holders immediate and
          significant tangible benefits including a range of options to earn
          both passively and actively.
        </p>

        <p>
          Simply by staking the avatar in one of the project staking options,
          the holder starts generating passive yield which can be used to buy
          assets for the game as well as on-chain assets! Effectively, simply
          leaving the collectible staked gives avatar holders the ability to
          collect and resell new game assets for a profit easily.
        </p>
      </div>
      <div>
        <p>
          All kinds of strategies can be employed to dramatically increase the
          amount of passive yield the holder of an avatar is receiving.
        </p>
        <p>
          The 2D avatar also loads a corresponding game-ready 3D character in
          the MMORPG and in the PvP. The collectible is uniquely associated with
          the avatar’s profile account and game inventory. In these
          environments, the avatar holder can earn yield and collect more assets
          through active gameplay including successful combat and the completion
          of quests.
        </p>
      </div>
    </div>
    <hooper
      ref="carousel"
      class="focus:outline-none relative z-10 h-full"
      :wheel-control="false"
      :infinite-scroll="true"
      :settings="hooperSettings"
    >
      <slide
        class="text-a-brown items-center !px-4 text-center md:flex md:text-left"
      >
        <div class="">
          <img src="/s2.png" alt="" />
        </div>
      </slide>
      <slide
        class="text-a-brown items-center !px-4 text-center md:flex md:text-left"
      >
        <div class="">
          <img src="/s1.png" alt="" />
        </div>
      </slide>
      <slide
        class="text-a-brown items-center !px-4 text-center md:flex md:text-left"
      >
        <div class="">
          <img src="/s3.png" alt="" />
        </div>
      </slide>
      <slide
        class="text-a-brown items-center !px-4 text-center md:flex md:text-left"
      >
        <div class="">
          <img src="/s4.png" alt="" />
        </div>
      </slide>
      <slide
        class="text-a-brown items-center !px-4 text-center md:flex md:text-left"
      >
        <div class="">
          <img src="/s5.png" alt="" />
        </div>
      </slide>
      <slide
        class="text-a-brown items-center !px-4 text-center md:flex md:text-left"
      >
        <div class="">
          <img src="/s6.png" alt="" />
        </div>
      </slide>
      <slide
        class="text-a-brown items-center !px-4 text-center md:flex md:text-left"
      >
        <div class="">
          <img src="/s7.png" alt="" />
        </div>
      </slide>
      <slide
        class="text-a-brown items-center !px-4 text-center md:flex md:text-left"
      >
        <div class="">
          <img src="/s8.png" alt="" />
        </div>
      </slide>
    </hooper>
    <div class="absolute bottom-0 left-0 w-full opacity-40">
      <!-- simple marquee text -->
      <marquee
        behavior="alternate"
        direction="left"
        class="strokeText flex h-44 items-center"
      >
        <span
          v-for="i in 40"
          :key="i"
          class="font-title text-[15rem] font-bold"
        >
          DWAGON
        </span>
      </marquee>
      <!-- simple marquee text -->
      <marquee
        behavior="alternate"
        direction="right"
        class="strokeText flex h-44 items-center"
      >
        <span
          v-for="i in 40"
          :key="i"
          class="font-title text-[15rem] font-bold"
        >
          DWAGON
        </span>
      </marquee>
    </div>
    <!-- <div
      class="md:pin-y-center absolute bottom-0 z-20 mx-auto w-full md:bottom-auto"
    >
      <div class="flex items-center justify-between">
        <button @click.prevent="slidePrev">
          <AtomIconNext class="w-8 rotate-180 transform lg:w-12" inverted />
        </button>

        <button type="button" @click.prevent="slideNext">
          <AtomIconNext class="w-8 lg:w-12" inverted />
        </button>
      </div>
    </div> -->
  </AtomSection>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
  },
  props: {
    noPaginate: {
      type: Boolean,
      default: false,
    },
    mintSlider: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      carouselData: 0,

      hooperSettings: {
        centerMode: true,
        autoPlay: true,
        itemsToShow: 1,
        breakpoints: {
          800: {
            itemsToShow: 1,
          },
          1000: {
            itemsToShow: 4.2,
            pagination: 'fraction',
          },
        },
      },
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
  },
};
</script>

<style media="screen">
.hooper {
  height: 100%;
}
.hooper-indicator {
  @apply border-2 border-solid border-white bg-transparent;
}
.hooper-pagination {
  @apply py-2;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  @apply border-white bg-white;
}
.hooper-indicator {
  @apply h-3 w-3 rounded-full;
}
.strokeText {
  -webkit-text-fill-color: #231f20;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #c6b784;
}

/* CSS */
.button-52 {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid white;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  color: black;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-52:after {
  content: '';
  @apply bg-white;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.button-52:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .button-52 {
    padding: 13px 50px 13px;
  }
}
</style>
