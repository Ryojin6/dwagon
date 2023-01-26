<template>
  <TemplateDefault class="bg-r-charcoal font-sans">
    <AtomSection tp="large" bp="large" id="team">
      <AtomInner>
        <MoleculeTitle
          title="Our team"
          class="text-white"
          subtitle="Meet With"
        />
        <div class="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          <AtomAnimate
            v-for="(item, index) in team"
            :key="index"
            position="left"
            class="relative flex flex-col font-bold text-white transition-all duration-1000 ease-in-out"
          >
            <div
              class="absolute top-0 left-0 z-[-1] mt-2 ml-2 h-full w-full bg-white"
            />
            <div class="relative z-20 flex-1 bg-r-pink py-6 px-6 xl:p-10">
              <div class="mx-auto mb-10 h-56 w-56">
                <g-image :src="item.image" immediate alt="" />
              </div>
              <div class="w-full">
                <h4 class="textMedium text-lab-pink uppercase">
                  {{ item.name }}
                </h4>
                <div class="pb-4 font-mont uppercase">{{ item.title }}</div>
              </div>
              <div class="font-mont font-light">
                {{ item.description }}
              </div>
              <!-- <AtomIconTwitter
              link="https://twitter.com/goosexbt"
              class="text-lab-pink hover:text-lab-lightpink mt-5"
            /> -->
            </div>
          </AtomAnimate>
        </div>
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          image: '/ian.jpg',
          name: 'Ian',
          title: 'CEO',
          description: `SOL OG. Been in this space since September 2021, while working as
              a mod. Now expressing his vision through building Resurā.`,
        },
        {
          image: '/martin.jpg',
          name: 'MARTIN',
          title: 'ADMINISTRATOR',
          description: `Community guy who always loved to work around people. By the end 
          of the year 2021, he found his passion in the NFT communities, by dedicating
           his work and free time in the server.`,
        },
        {
          image: '/muha.jpg',
          name: 'MUHAMMAD',
          title: 'ARTIST',
          description: `Talented, hard-working, and humble artist. Spent hundreds of hours 
          working on Resurā art.`,
        },
        {
          image: '/heis.jpg',
          name: 'Heist',
          title: 'COLLAB MANAGER',
          description: `Smartest guy in the room. Experienced Collab manager for many
           quality projects.`,
        },
        {
          image: '/goose.jpg',
          name: 'GOOSE',
          title: 'DISCORD MANAGER',
          description: `Co-Founder of LightLabs. Assisting your favorite project's 
          projects since the start.`,
        },
        {
          image: '/879.jpg',
          name: 'RYOJIN',
          title: 'WEB DEVELOPER',
          description: `Senior Web Developer and UX/UI Designer at LightLabs. 10+ 
          Years of developing your favorite sites.`,
        },
        {
          image: '/axel.jpg',
          name: 'AXXEELL',
          title: 'ARTIST',
          description: `Very talented anime artist, always exceeds all expectations.`,
        },
        {
          image: '/suba.jpg',
          name: 'Suba',
          title: 'HEAD MODERATOR',
          description: `Got any questions? Suba and his mods are here for you 24/7!`,
        },
      ],
    };
  },
};
</script>
