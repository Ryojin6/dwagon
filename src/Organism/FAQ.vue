<template>
  <AtomSection
    tp="large"
    bp="large"
    class="relative transition-all duration-1000 ease-in-out"
    id="FAQ"
  >
    <AtomInner>
      <AtomAnimate>
        <MoleculeTitle title="FAQ" class="pb-10 text-white" />
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
          title: 'What is Deagons’s custom minting dapp about? ',
          description: `Dwagon’s custom minting dapp allows for holders to receive 
          discounts, increased rarity percentage, and can be updated for future mints.
           This opens a realm of possibilities for new characters and accessory packs 
           for the MMORPG game.`,
        },
        {
          title: 'What is the rarity multiplier? ',
          description: `The more $Dwagon in the wallet at the time of minting a 
          collectible 2D avatar, the greater likelihood of minting rare traits! There’s
           no ceiling, so the more token you have, the more likely you are to mint rare
            traits! This is true for the first mint of the 2D avatar and also in all 
            minting events, such as the upcoming metaverse land sale minting event.`,
        },
        {
          title: 'What’s the Dwagon Discount Scanner all about? ',
          description: `The Dwagon wallet connect code scans the user wallet and provides
           a discount to $Dwagon holders when minting items. All holders with 500,000 
           $Dwagon tokens or more mint for a discount on all items and parcels of land.`,
        },
        {
          title:
            'Can you tell me more about the 2D avatar experience multiplier and the game economy?',
          description: `The Collectible avatar is the key to maximally enhancing both 
          the in- game experience and earnings potential from the game. Simply by owning
           it and leaving it to stake, the wallet owner earns synthetic yield which can 
           be traded or burned for both on-chain and off-chain assets such as defensive 
           traps, tools, weapons, elixirs, strategic advancements, upgrades, and unique accessories 
           of many different kinds. All items in the real world and in the Dwagon universe decay 
           over time. Only avatar holders get some advantage against decay, strengthening their 
           ability to preserve precious, valuable assets for longer time periods and earning compounded 
           synthetic token, $Ember, along the way.`,
        },
        {
          title: `Ok, I think I get it but can you more fully break it down for me so I understand 
          how the 2D avatar relates to the game more completely? What’s the land about? `,
          description: `    
          Owning the 2D collectible avatar grants access to the premium version
          of the game and allows the player to get involved in dynamic,
          incentivised staking and resource management strategies. Simply by
          staking the 2D avatar, the player starts earning in the game and can
          choose how they will carve their journey through it as they build
          wealth and accumulate both experience and assets. Once the player
          loads into the game with one or multiple avatars in the wallet, they
          are able to choose a strategy of either homesteading or that of a
          raider in order to earn value and grow their wealth in the game.
          Staking the collectible avatar either as a raider or a homesteader
          generates passive synthetic yield for the avatar owner. This synthetic
          yield accumulates in different ways based on the activity in the game.
          As it accumulates, it can be used to purchase standard in-game items
          as well as on- chain assets for the game which then can be resold by
          players engaged in the economy. Homesteading includes staking land,
          building defenses and traps, strengthening the defenses with upgrades,
          setting competitive tax rates for renters along with these increased
          defenses to attract tenants to the land looking to earn yield and
          remain safe from raiding parties, and strengthening the avatar renters
          on the land with elixirs and upgrades to help bolster the defense.
        `,
        },
        {
          title: 'What if I don’t want to homestead? What’s the raiding about?',
          description: `    
       <p>
          Players can also choose instead to stake with the raiding parties,
          accumulate tools and weapons for raids, raid land using strategy and
          teamwork to steal others’ resources all the while earning yield and
          accumulating assets. Each piece of land in this part of the game is
          segmented into a grid. The raiders are not able to identify which rows
          and columns in an area are filled with loot silos or traps. They must
          collaborate with their fellow guild members and use their synthetic
          token, $Ember, to scout different blocks ahead. Whether they come upon
          loot silos or traps will result in either profit or loss for the
          raiders, tenants, and owners depending on what each side has
          accumulated to date and what strategy is being employed.
        </p>
        <p>
          So who wins and what happens in terms of net change on-chain when
          raiders find land and a group defending that land?
        </p>
        <p>
          In a clash between raiders and defenders, the yield output and net
          change to avatars and land is determined by the amount and strength of
          the defenses, weapons, and avatars meeting. What are the 4 ways to
          acquire synthetic $Dwagon so I can acquire more game assets that I can
          flip for profit or stake to earn more?
        </p>
        <p>The 4 ways to acquire synthetic $Dwagon are to:</p>
        <p>
          1. Earn it in the game by undertaking quests<br />
          2. Earn it in the metaverse via automatic yield from owning land and
          from metaverse DAO participation<br />
          3. Purchase it directly via fiat or cryptocurrency<br />
          4. Collectible Staking
        </p>
        `,
        },
      ],
    };
  },
};
</script>
