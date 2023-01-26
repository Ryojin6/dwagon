<template>
  <header
    class="pin-x-center bg-blur-2xl custom-transition fixed top-0 z-50 w-full border-white bg-opacity-30 p-6 scrolled:border-b-2 scrolled:bg-black"
  >
    <div class="mx-auto flex w-full max-w-8xl items-center justify-between">
      <g-link
        to="/"
        class="w-56 transition-all duration-300 ease-in-out scrolled:w-20 lg:w-24"
      >
        <AtomBrand />
      </g-link>

      <div
        class="order-2 ml-auto flex w-16 max-w-8xl items-center justify-end text-right md:order-none md:mr-10 md:w-full"
      >
        <MoleculeSiteMenu />
      </div>
      <div class="flex w-full items-center justify-end space-x-4 md:w-auto">
        <AtomIconTwitter
          link="https://twitter.com/dwagonweborn"
          class="hidden text-white hover:text-r-pink scrolled:text-r-pink md:block"
        />
        <AtomIconDiscord
          link="https://discord.com/"
          class="hidden text-white hover:text-r-pink scrolled:text-r-pink md:block"
        />

        <!-- <AtomPlainLink
          to="#form"
          class="g:px-12 scrolled:scrollHover custom-transition inline-block whitespace-nowrap rounded-3xl bg-white px-8 py-2 text-sm uppercase text-white hover:bg- hover:text-white scrolled:bg-r-pink lg:py-3"
        >
          Contact Us
        </AtomPlainLink> -->
      </div>
    </div>
  </header>
</template>

<style></style>
