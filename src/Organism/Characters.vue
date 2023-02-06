<template>
  <AtomSection tp="small" bp="small" class="relative">
    <AtomInner class="relative z-40">
      <MoleculeTitle
        title="P2E gaming platform which connects 2D NFT collection with 3D in-game
          Avatars"
        class="pt-24 text-white"
      />
      <div
        class="mx-auto w-full max-w-6xl items-center pt-10 lg:flex lg:space-x-10"
      >
        <div
          class="grid grid-cols-3 gap-6 pb-10 lg:flex lg:w-1/4 lg:flex-col lg:space-y-6 lg:pb-0"
        >
          <button
            v-for="card in cardInfo"
            :key="card.selector"
            class="custom-transition group flex text-left font-title text-2xl uppercase text-white opacity-50 md:text-5xl"
            :class="{
              'text-r-pink !opacity-100': selectedTab === card.selector,
            }"
            @click="selectedTab = card.selector"
          >
            <span>{{ card.title }}</span>
          </button>
        </div>

        <div class="relative lg:w-2/3">
          <div
            v-for="(card, cardName) in cardInfo"
            :id="`divine-${cardName}`"
            :key="cardName"
          >
            <div
              v-show="cardName === selectedTab"
              class="relative z-20 flex w-full flex-col justify-center text-white"
            >
              <div class="relative flex max-w-3xl space-x-4">
                <img :src="card.image" alt="" class="w-full" />
              </div>
              <div
                class="bottom-0 right-0 z-10 bg-r-pink p-6 md:absolute md:w-2/3"
              >
                <div class="flex font-title uppercase">
                  <h2 class="textMedium">{{ card.title }}</h2>
                </div>

                <div
                  class="space-y-4 pt-2 text-sm font-light"
                  v-html="card.description"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AtomInner>
    <div class="ag-smoke-block relative z-30 opacity-40">
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
    </div>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'Character1',

      cardInfo: {
        Character1: {
          selector: 'Character1',
          title: `Mage`,
          image: '/dragon1.png',

          description: `  <p>
        A dragon mage combines the power and magic of dragons with the knowledge
        and skill of a mage. They often possesses the ability to control and
        manipulate dragon magic, using it for both offensive and defensive
        purposes. In some settings, dragon mages are respected and feared
        figures, in others they are seen as dangerous and unpredictable.
        <br /><br />
        Often portrayed as wise and powerful.
      </p>
           `,
        },
        Character2: {
          selector: 'Character2',
          title: `Hunter`,
          image: '/dragon2.png',

          description: `  <p>
         A dragon hunter is skilled in all forms of combat and is extraordinarily
          capable of tracking and hunting down almost any foe. As the fastest dragon
           class in the skies and equipped with the keenest sense of smell, hunters
            are extremely well advantaged in the art of finding their objects of 
            desire. Often seen with a terrifying flaming sword and fiery bow in 
            combat, members of the hunter class are able to use the natural fire 
            breathing abilities shared by all dragons to amplify the special fire 
            resistant weapons and tools they use to hunt and fight. Whether it’s
             a simple raiding party quest or a long harrowing journey to recover
              a precious artifact, no guild is the worse by having a capable hunter at their side.

            </p>
           `,
        },
        Character3: {
          selector: 'Character3',
          title: `Healer`,
          image: '/dragon3.png',

          description: `  <p>
                         A healing dragon specializes in restoring the health and 
                         well-being of allies. They typically use spells or abilities 
                         that heal damage, remove negative effects, or grant protective 
                         shields. Healing dragons are often associated with the "support"
                          role, and are valued by their fellow players for their ability 
                          to keep the group alive and functioning during battles or
                           challenges. They may also have secondary abilities that aid 
                           in group mobility, crowd control, or debuffing enemies.

            </p>
           `,
        },
      },
    };
  },
};
</script>
