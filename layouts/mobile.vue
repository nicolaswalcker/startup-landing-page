<script setup lang="ts">
const menuIsOpen = ref(false);

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
};
</script>
<template>
  <header
    class="flex h-24 items-center min-w-full justify-between bg-bg-dark p-5 z-40 fixed before:h-[1px] before:bg-primary before:top-full before:absolute before:-left-1/2 before:translate-x-1/2 before:transition-all before:duration-200 before:origin-left"
    :class="menuIsOpen ? 'before:w-full' : 'before:w-0'"
  >
    <NuxtImg src="/img/logo.png" />
    <button class="relative group" @click.prevent="toggleMenu">
      <div class="flex flex-col h-auto items-start justify-center gap-2">
        <div
          class="bg-white w-8 h-[0.25rem] transition-all duration-300"
          :class="menuIsOpen ? 'rotate-45 translate-y-3' : ''"
        ></div>
        <div
          class="bg-white w-0 h-[0.25rem] transition-all duration-300"
          :class="menuIsOpen ? 'w-0 opacity-0' : 'w-8 opacity-100'"
        ></div>
        <div
          class="bg-white w-8 h-[0.25rem] transition-all duration-300"
          :class="menuIsOpen ? '-rotate-45 -translate-y-3' : ''"
        ></div>
      </div>
    </button>
  </header>
  <aside
    class="h-[calc(100vh-96px)] bg-bg-dark transition-all duration-300 origin-left fixed top-[96px] left-0 z-20 flex items-start justify-start overflow-hidden"
    :class="menuIsOpen ? 'w-screen' : 'w-0'"
  >
    <ul
      class="w-full py-10 flex flex-col items-center justify-start gap-14 h-full"
    >
      <li class="w-full">
        <NuxtLink
          :external="true"
          href="https://nuxtjs.org"
          target="_blank"
          class="text-white text-4xl w-full h-16 flex items-center justify-center relative before:absolute before:h-full before:left-0 before:w-0 before:bg-primary before:z-[-1] hover:before:w-full before:transition-all before:duration-300 before:origin-left"
          >Home</NuxtLink
        >
      </li>
      <li class="w-full">
        <NuxtLink
          :external="true"
          href="https://nuxtjs.org"
          target="_blank"
          class="text-white text-4xl w-full h-16 flex items-center justify-center relative before:absolute before:h-full before:left-0 before:w-0 before:bg-primary before:z-[-1] hover:before:w-full before:transition-all before:duration-300 before:origin-left"
          >Product</NuxtLink
        >
      </li>
      <li class="w-full">
        <NuxtLink
          :external="true"
          href="https://nuxtjs.org"
          target="_blank"
          class="text-white text-4xl w-full h-16 flex items-center justify-center relative before:absolute before:h-full before:left-0 before:w-0 before:bg-primary before:z-[-1] hover:before:w-full before:transition-all before:duration-300 before:origin-left"
          >About</NuxtLink
        >
      </li>
      <li class="w-full">
        <NuxtLink
          :external="true"
          href="https://nuxtjs.org"
          target="_blank"
          class="text-white text-4xl w-full h-16 flex items-center justify-center relative before:absolute before:h-full before:left-0 before:w-0 before:bg-primary before:z-[-1] hover:before:w-full before:transition-all before:duration-300 before:origin-left"
          >Contact</NuxtLink
        >
      </li>
    </ul>
  </aside>
  <slot />
</template>
