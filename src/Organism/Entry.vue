<template>
  <transition name="slide-fade">
    <section class="fixed inset-0 z-50 h-screen" v-if="hideLoader">
      <div class="relative z-20 flex h-full flex-col md:pt-0">
        <div class="absolute inset-0 z-50 h-full w-full bg-black/80" />

        <!-- <div class="ag-smoke-block relative z-50 h-screen opacity-40">
        <picture>
          <source
            srcset="
              https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-pink.webp
            "
            type="image/webp"
          />
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-pink.png"
            alt="smoke-pink"
            class="ag-smoke_img ag-smoke_img__left"
            width="1920"
            height="1080"
          />
        </picture>
        <picture>
          <source
            srcset="
              https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-blue.webp
            "
            type="image/webp"
          />
          <img
            src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/animation-smoke-images/images/smoke-blue.png"
            alt="smoke-blue"
            class="ag-smoke_img ag-smoke_img__right"
            width="1920"
            height="1080"
          />
        </picture>
      </div> -->

        <div
          class="pin-center absolute z-50 flex w-full flex-col items-center justify-center space-y-6"
        >
          <img src="/logoBig.png" alt="" class="mx-auto w-full max-w-5xl" />

          <button
            class="button-52 !font-bold"
            role="button"
            @click="hideLoader = false"
          >
            Enter Dwagon World
          </button>
        </div>
        <div class="bird-container bird-container--one relative z-20">
          <div class="bird bird--one" />
        </div>

        <div class="bird-container bird-container--two relative z-20">
          <div class="bird bird--two" />
        </div>

        <div class="bird-container bird-container--three relative z-20">
          <div class="bird bird--three" />
        </div>

        <div class="bird-container bird-container--four relative z-20">
          <div class="bird bird--four" />
        </div>
        <div class="absolute inset-0 z-10 h-full w-full bg-black opacity-80" />
        <div class="absolute inset-0 z-10 h-full w-full">
          <img
            src="/bg3.jpg"
            alt=""
            immediate
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      hideLoader: true,
    };
  },
};
</script>
<style>
.voltichange-widget {
  width: 500px;
  height: 460px;
}
.ag-smoke-block {
  width: 100%;

  overflow: hidden;
  @apply inset-0;
  position: absolute;
}

.ag-smoke_img {
  width: 100%;
  height: auto;

  z-index: 10;
  position: absolute;
  bottom: -50px;
}
.ag-smoke_img__left {
  left: 0;

  -webkit-animation: an-smoke-left 20s linear infinite;
  -moz-animation: an-smoke-left 20s linear infinite;
  -o-animation: an-smoke-left 20s linear infinite;
  animation: an-smoke-left 20s linear infinite;
}
.ag-smoke_img__right {
  right: 0;

  -webkit-animation: an-smoke-right 20s linear infinite;
  -moz-animation: an-smoke-right 20s linear infinite;
  -o-animation: an-smoke-right 20s linear infinite;
  animation: an-smoke-right 20s linear infinite;
}

@-webkit-keyframes an-smoke-left {
  0%,
  100% {
    -webkit-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  25% {
    -webkit-transform: translate(-10%, 0%);
    transform: translate(-10%, 0%);
  }
  50% {
    -webkit-transform: translate(-20%, 0%);
    transform: translate(-20%, 0%);
  }
  75% {
    -webkit-transform: translate(-10%, 0%);
    transform: translate(-10%, 0%);
  }
}
@-moz-keyframes an-smoke-left {
  0%,
  100% {
    -moz-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  25% {
    -moz-transform: translate(-10%, 0%);
    transform: translate(-10%, 0%);
  }
  50% {
    -moz-transform: translate(-20%, 0%);
    transform: translate(-20%, 0%);
  }
  75% {
    -moz-transform: translate(-10%, 0%);
    transform: translate(-10%, 0%);
  }
}
@-o-keyframes an-smoke-left {
  0%,
  100% {
    -o-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  25% {
    -o-transform: translate(-10%, 0%);
    transform: translate(-10%, 0%);
  }
  50% {
    -o-transform: translate(-20%, 0%);
    transform: translate(-20%, 0%);
  }
  75% {
    -o-transform: translate(-10%, 0%);
    transform: translate(-10%, 0%);
  }
}
@keyframes an-smoke-left {
  0%,
  100% {
    -webkit-transform: translate(0%, 0%);
    -moz-transform: translate(0%, 0%);
    -o-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  25% {
    -webkit-transform: translate(-10%, 0%);
    -moz-transform: translate(-10%, 0%);
    -o-transform: translate(-10%, 0%);
    transform: translate(-10%, 0%);
  }
  50% {
    -webkit-transform: translate(-20%, 0%);
    -moz-transform: translate(-20%, 0%);
    -o-transform: translate(-20%, 0%);
    transform: translate(-20%, 0%);
  }
  75% {
    -webkit-transform: translate(-10%, 0%);
    -moz-transform: translate(-10%, 0%);
    -o-transform: translate(-10%, 0%);
    transform: translate(-10%, 0%);
  }
}

@-webkit-keyframes an-smoke-right {
  0%,
  100% {
    -webkit-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  25% {
    -webkit-transform: translate(10%, 0%);
    transform: translate(10%, 0%);
  }
  50% {
    -webkit-transform: translate(20%, 0%);
    transform: translate(20%, 0%);
  }
  75% {
    -webkit-transform: translate(10%, 0%);
    transform: translate(10%, 0%);
  }
}
@-moz-keyframes an-smoke-right {
  0%,
  100% {
    -moz-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  25% {
    -moz-transform: translate(10%, 0%);
    transform: translate(10%, 0%);
  }
  50% {
    -moz-transform: translate(20%, 0%);
    transform: translate(20%, 0%);
  }
  75% {
    -moz-transform: translate(10%, 0%);
    transform: translate(10%, 0%);
  }
}
@-o-keyframes an-smoke-right {
  0%,
  100% {
    -o-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  25% {
    -o-transform: translate(10%, 0%);
    transform: translate(10%, 0%);
  }
  50% {
    -o-transform: translate(20%, 0%);
    transform: translate(20%, 0%);
  }
  75% {
    -o-transform: translate(10%, 0%);
    transform: translate(10%, 0%);
  }
}
@keyframes an-smoke-right {
  0%,
  100% {
    -webkit-transform: translate(0%, 0%);
    -moz-transform: translate(0%, 0%);
    -o-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
  }
  25% {
    -webkit-transform: translate(10%, 0%);
    -moz-transform: translate(10%, 0%);
    -o-transform: translate(10%, 0%);
    transform: translate(10%, 0%);
  }
  50% {
    -webkit-transform: translate(20%, 0%);
    -moz-transform: translate(20%, 0%);
    -o-transform: translate(20%, 0%);
    transform: translate(20%, 0%);
  }
  75% {
    -webkit-transform: translate(10%, 0%);
    -moz-transform: translate(10%, 0%);
    -o-transform: translate(10%, 0%);
    transform: translate(10%, 0%);
  }
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 96%;
  }
}

@media only screen and (max-width: 639px) {
}

@media only screen and (max-width: 479px) {
}

@media (min-width: 768px) and (max-width: 979px) {
  .ag-format-container {
    width: 750px;
  }
}

@media (min-width: 980px) and (max-width: 1161px) {
  .ag-format-container {
    width: 960px;
  }
}
.bird {
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  z-index: 999;
  will-change: background-position;
  -webkit-animation-name: fly-cycle;
  animation-name: fly-cycle;
  -webkit-animation-timing-function: steps(10);
  animation-timing-function: steps(10);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.bird--one {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.bird--two {
  -webkit-animation-duration: 0.9s;
  animation-duration: 0.9s;
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}
.bird--three {
  -webkit-animation-duration: 1.25s;
  animation-duration: 1.25s;
  -webkit-animation-delay: -0.25s;
  animation-delay: -0.25s;
}
.bird--four {
  -webkit-animation-duration: 1.1s;
  animation-duration: 1.1s;
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.bird-container {
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  will-change: transform;
  -webkit-animation-name: fly-right-one;
  animation-name: fly-right-one;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.bird-container--one {
  -webkit-animation-duration: 15s;
  animation-duration: 15s;
  -webkit-animation-delay: 0;
  animation-delay: 0;
}
.bird-container--two {
  -webkit-animation-duration: 16s;
  animation-duration: 16s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}
.bird-container--three {
  -webkit-animation-duration: 14.6s;
  animation-duration: 14.6s;
  -webkit-animation-delay: 9.5s;
  animation-delay: 9.5s;
}
.bird-container--four {
  -webkit-animation-duration: 16s;
  animation-duration: 16s;
  -webkit-animation-delay: 10.25s;
  animation-delay: 10.25s;
}

@-webkit-keyframes fly-cycle {
  100% {
    background-position: -900px 0;
  }
}

@keyframes fly-cycle {
  100% {
    background-position: -900px 0;
  }
}
@-webkit-keyframes fly-right-one {
  0% {
    transform: scale(0.3) translateX(-10vw);
  }
  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }
  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }
  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }
  60% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
}
@keyframes fly-right-one {
  0% {
    transform: scale(0.3) translateX(-10vw);
  }
  10% {
    transform: translateY(2vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(0vh) translateX(30vw) scale(0.5);
  }
  30% {
    transform: translateY(4vh) translateX(50vw) scale(0.6);
  }
  40% {
    transform: translateY(2vh) translateX(70vw) scale(0.6);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.6);
  }
  60% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.6);
  }
}
@-webkit-keyframes fly-right-two {
  0% {
    transform: translateY(-2vh) translateX(-10vw) scale(0.5);
  }
  10% {
    transform: translateY(0vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(-4vh) translateX(30vw) scale(0.6);
  }
  30% {
    transform: translateY(1vh) translateX(50vw) scale(0.45);
  }
  40% {
    transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.45);
  }
  51% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
}
@keyframes fly-right-two {
  0% {
    transform: translateY(-2vh) translateX(-10vw) scale(0.5);
  }
  10% {
    transform: translateY(0vh) translateX(10vw) scale(0.4);
  }
  20% {
    transform: translateY(-4vh) translateX(30vw) scale(0.6);
  }
  30% {
    transform: translateY(1vh) translateX(50vw) scale(0.45);
  }
  40% {
    transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
  }
  50% {
    transform: translateY(0vh) translateX(90vw) scale(0.45);
  }
  51% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
  100% {
    transform: translateY(0vh) translateX(110vw) scale(0.45);
  }
}
</style>
