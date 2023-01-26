<template>
  <AtomSection
    tp="large"
    bp="large"
    class="relative transition-all duration-1000 ease-in-out"
  >
    <AtomInner>
      <AtomAnimate>
        <MoleculeTitle title="FAQ" class="text-white" subtitle="Lorem ipsum" />
      </AtomAnimate>
      <AtomAnimate class="mb-10">
        <MoleculeAccordionCard
          v-for="item in faq"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </AtomAnimate>
    </AtomInner>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: 'How many Resurās are there?',
          description: `There are currently 2777 Resurās`,
        },
        {
          title: 'What’s the release date?',
          description: `TBA`,
        },
        {
          title: 'What’s the mint price',
          description: `TBA`,
        },
        {
          title: 'What blockchain is Resurā on?',
          description: `Resurā is built on the Solana Blockchain`,
        },
        {
          title: 'Where will the mint happen?',
          description: `TBA`,
        },
        {
          title: 'Where can I contact the team?',
          description: `You can contact us anytime in our discord server, see you there! `,
        },
      ],
    };
  },
};
</script>
