<template>
  <header
    class="flex flex-col items-center bg-black py-2 border-b-[1px] border-[#3c584d]"
  >
    <h1 class="text-slate-200 text-xs">Default & Not Mobile Layout</h1>
    <p class="flex gap-2 text-white">
      <NuxtLink active-class="text-[#00DC82]" class="font-medium" to="/"
        >Home</NuxtLink
      >
    </p>
  </header>
  <slot />
</template>
