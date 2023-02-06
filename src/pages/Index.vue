<template>
  <TemplateDefault class="relative overflow-x-hidden bg-black font-sans">
    <OrganismVideo />
    <!-- <AtomSection
      class="relative flex h-screen max-h-[1080px] w-full items-center"
    >
      <div
        class="absolute inset-0 z-20 h-full w-full bg-gradient-to-r from-black to-transparent"
      />
      <div class="absolute inset-0 z-10 h-full w-full">
        <img src="/bg.jpg" alt="" class="h-full w-full object-cover" />
      </div>
      <AtomInner class="z-30 text-white">
        <h1 class="textXLarge relative max-w-3xl">
          <span class="relative z-10"> $Dwagon </span>
          <span class="absolute inset-0 ml-1 mt-1 h-full w-full text-r-pink">
            $Dwagon</span
          >
        </h1>
        <div class="max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aut
          alias praesentium quod deleniti velit, qui itaque ex quis laboriosam
          eos harum placeat, sunt debitis veritatis? Dolor quasi modi nihil.
        </div>
      </AtomInner>
    </AtomSection> -->
    <OrganismCharacters class="relative z-30 -mb-10 pb-32" id="game" />

    <AtomSection full-width>
      <AtomInner
        v-aos
        class="transition-all duration-[1200ms] ease-in-out"
        aos-from="px-64"
        aos-to="px-0"
      >
        <AtomAnimate class="relative mx-auto">
          <div class="aspect-h-9 aspect-w-16">
            <iframe
              src="https://player.vimeo.com/video/796388981"
              width="640"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </AtomAnimate>
      </AtomInner>
    </AtomSection>

    <AtomSection full-width class="text-white">
      <MoleculeTitle
        class="!py-32 text-r-pink"
        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aut
          alias praesentium quod deleniti velit."
      />
      <AtomInner>
        <OrganismTwoColumn
          title="Two Flames"
          description="Two special flames will erupt from the Dwagon’s breath. The first 
              will melt its tokens, to be destroyed forever. The second will toast its tokens 
              in the AMM to induce instant price shock."
          image="/1.jpg"
        />
        <OrganismTwoColumn
          title="Melt"
          description="On every transaction, a chunk of tokens are melted. This brand 
              new melting feature will wipe tokens making them no longer usable by anyone
               and they will be wiped from the blockchain forever. They are not sent to a 
               dead wallet or deployed, they are instead destroyed forever."
          image="/2.jpg"
          reverse
        />
        <OrganismTwoColumn
          title="Total Supply: 1,000,000,000"
          description="The supply of V2 $Dwagon on Etherscan will drop from 1,000,000,000 
              tokens, and it will continue dropping every time someone buys or sells the token.
               The Dwagon’s wings will carry its holders to great new heights because of this."
          image="/3.jpg"
        />
        <OrganismTwoColumn
          title="Toast"
          description="The second flame of Dwagon’s breath will toast tokens in the AMM. 
              As the contract is live and tokens are being automatically melted, the contract
               will also start toasting tokens in the AMM. Every toasting session will reduce 
               the supply of $Dwagon in the AMM, causing an instant price impact. Toasting will 
               speed up the supply shock. Every time tokens are toasted, the Dwagon’s spirit 
               will be boosted even further."
          image="/4.jpg"
          reverse
        />
      </AtomInner>
    </AtomSection>
    <AtomSection tp="large" bp="large" id="how-to-buy">
      <MoleculeTitle
        title="How to Buy"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aut
          alias praesentium quod deleniti velit, qui itaque ex quis laboriosam
          eos harum placeat, sunt debitis veritatis? Dolor quasi modi nihil."
        class="mb-10 text-white"
      />
      <AtomInner class="grid gap-20 text-white lg:grid-cols-2">
        <AtomAnimate
          class="flex flex-col justify-center space-y-10 text-center font-title"
        >
          <div>
            <span class="textXLarge">5%</span>
            <div class="text-r-pink">Percent Buy Tax</div>
          </div>

          <div>
            <span class="textXLarge">5%</span>
            <div class="text-r-pink">Sell Tax</div>
          </div>

          <div>
            <span class="textXLarge">1</span>
            <div class="text-r-pink">Billion Total Supply</div>
          </div>
        </AtomAnimate>
        <AtomAnimate class="flex w-full justify-center">
          <iframe
            src="https://voltichange.net/api/widget/?chain=1&amp;darktheme=true&amp;tokenin=Native&amp;tokenout=0xdf1a2f85f3af80e85d14ddaab2933c8caa09294a&amp;slippage=5"
            frameborder="0"
            class="voltichange-widget"
          ></iframe>
        </AtomAnimate>
      </AtomInner>
    </AtomSection>
    <OrganismSlider />
  </TemplateDefault>
</template>

<script>
import Characters from '../Organism/Characters.vue';
export default {
  components: { Characters },
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
