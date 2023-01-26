<template>
  <div class="relative w-full">
    <hooper
      ref="carousel"
      class="focus:outline-none h-full"
      :wheel-control="false"
      :infinite-scroll="true"
      :settings="mintSlider ? mintSetting : hooperSettings"
    >
      <slide>
        <img src="/slider/8.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/3.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/12.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/4.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/5.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/10.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/1.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/7.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/9.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/6.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/11.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/2.jpg" alt="" />
      </slide>
      <slide>
        <img src="/slider/13.jpg" alt="" />
      </slide>

      <hooper-pagination v-if="!noPaginate" slot="hooper-addons" />
    </hooper>
    <div
      class="md:pin-y-center absolute bottom-0 mx-auto w-full md:bottom-auto"
    >
      <div class="flex items-center justify-between">
        <button @click.prevent="slidePrev">
          <AtomIconNext class="w-8 rotate-180 transform lg:w-12" inverted />
        </button>

        <button type="button" @click.prevent="slideNext">
          <AtomIconNext class="w-8 lg:w-12" inverted />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
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
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      carouselData: 0,
      mintSetting: {
        itemsToShow: 1,

        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 1,
          },
          1000: {
            itemsToShow: 2,
          },
        },
      },
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 2,
          },
          1000: {
            itemsToShow: 4,
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
</style>
