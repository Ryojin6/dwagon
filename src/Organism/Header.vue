<template>
  <header
    class="pin-x-center bg-blur-2xl custom-transition fixed top-0 z-40 w-full border-white bg-black/30 bg-opacity-30 p-4 scrolled:border-b-2 scrolled:bg-black/100"
  >
    <div class="mx-auto flex w-full max-w-8xl items-center justify-between">
      <g-link
        to="/"
        class="w-16 transition-all duration-300 ease-in-out scrolled:w-16 lg:w-16"
      >
        <AtomBrand />
      </g-link>

      <div
        class="order-2 ml-auto flex w-16 max-w-8xl items-center justify-end text-right md:order-none md:mr-10 md:w-full"
      >
        <MoleculeSiteMenu />
      </div>
    </div>
  </header>
</template>
