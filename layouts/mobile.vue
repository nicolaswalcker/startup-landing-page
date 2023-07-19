<script setup lang="ts">
const menuIsOpen = ref(false);

const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
};
</script>
<template>
  <div>
    <header
      class="flex items-center justify-between bg-[#00DC82] p-4 z-20 relative"
    >
      <h1 class="text-black text-xs">Mobile Layout</h1>
      <button class="relative group" @click.prevent="toggleMenu">
        <div class="flex flex-col h-auto items-start justify-center gap-2">
          <div
            class="bg-black w-10 h-[0.25rem] transition-all duration-300"
            :class="menuIsOpen ? 'rotate-45 translate-y-3' : ''"
          ></div>
          <div
            class="bg-black w-0 h-[0.25rem] transition-all duration-300"
            :class="menuIsOpen ? 'w-0 opacity-0' : 'w-10 opacity-100'"
          ></div>
          <div
            class="bg-black w-10 h-[0.25rem] transition-all duration-300"
            :class="menuIsOpen ? '-rotate-45 -translate-y-3' : ''"
          ></div>
        </div>
      </button>
    </header>
    <aside
      class="h-screen bg-black transition-all duration-300 origin-left fixed top-0 left-0 z-10"
      :class="menuIsOpen ? 'w-screen' : 'w-0'"
    ></aside>
    <slot />
  </div>
</template>
