<template>
  <AtomSection tp="large" bp="large">
    <MoleculeTitle title="Testimonials" />
    <AtomAnimate
      class="relative mx-auto -mt-10 max-w-6xl rounded-3xl bg-lab-pink px-8 text-white shadow-2xl sm:px-10 md:border md:p-32 md:pb-20"
    >
      <div ref="outer" class="relative w-full overflow-hidden">
        <div
          class="relative flex items-stretch transition-all duration-500 ease-in-out"
          :style="{ left: leftOffset }"
        >
          <div
            v-for="(testimonial, i) in testimonials"
            :key="i"
            class="flex w-full flex-shrink-0 items-center justify-center"
          >
            <blockquote
              class="z-30 flex flex-col items-center justify-center text-center font-sans text-2xl"
            >
              {{ testimonial.description }}
              <div class="py-4 font-machina font-bold">
                <a
                  target="_blank"
                  href="'https://twitter.com/' + testimonial.link"
                  >@{{ testimonial.link }}</a
                >
              </div>
              <div class="mx-auto w-20">
                <g-image
                  :src="testimonial.image"
                  immediate
                  class="h-full w-full object-cover"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      <div
        class="pin-center group absolute z-10 flex w-full justify-between text-lab-navy"
      >
        <button class="-ml-3 xl:-ml-6" @click.prevent="slidePrev">
          <AtomIconArrow class="w-10 rotate-180 transform" />
        </button>

        <button type="button" class="-mr-3 xl:-mr-6" @click.prevent="slideNext">
          <AtomIconArrow class="-ml-3 w-10 xl:-ml-6" />
        </button>
      </div>
    </AtomAnimate>
  </AtomSection>
</template>

<script>
export default {
  props: {
    homepage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      index: 0,
      leftOffset: '0px',
      testimonials: [
        {
          link: 'qasimackrim',
          image: '/t1.png',
          description: `Goose and the Lightlabs team were an invaluable asset my
           project & community -
with his advice & work the discord community was extremely impressive, well
organised & ran very well. The addition of bots, structuring of the server
etc... were things I would've never implemented without his proactive approach
to going above and beyond for his clients. His communication, turn around times
and willingness to help with my vision of the community was extraordinary. I
can't recommend working with him and the team at lightlabs enough.`,
        },
        {
          cite: 'Robin',
          image: '/t2.jpg',
          link: 'THEYUKINFT',
          description: `The website that LightLabs have built for me was just 
          amazing, fast, responsive
and what I have asked for, I promise everyone that you simply cannot find a more
talented team, I also purchased a Wallet Submission BOT which was so amazing,
Apart from this, The 24/7 Support from the team is just amazing they helped me
with everything I needed help with, Even with creating simple tasks too.
LightLabs is just amazing and I would never choose anyone else besides them!`,
        },
        {
          link: 'ExpertMetaverse',
          image: '/t3.png',
          description: `Me as a staff member of several servers, I am glad I 
          came into contact with Lightlabs. Reliable and creative team. Keep going.`,
        },

        {
          link: 'LorensHuculak',
          image: '/t4.png',
          description: `Thanks for the quick help, insanely appreciated`,
        },
      ],
    };
  },
  computed: {
    numPages() {
      return this.testimonials.length;
    },
  },
  watch: {
    index() {
      this.computeOffset();
    },
  },
  mounted() {
    window.addEventListener('resize', this.computeOffset);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.computeOffset);
  },
  methods: {
    computeOffset() {
      const offset =
        (this.index % this.numPages) * this.$refs.outer.clientWidth;
      this.leftOffset = `${-offset}px`;
    },
    slidePrev() {
      this.index = this.index === 0 ? this.numPages - 1 : this.index - 1;
    },
    slideNext() {
      this.index = (this.index + 1) % this.numPages;
    },
  },
};
</script>
