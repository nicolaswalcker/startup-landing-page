<template>
  <header
    class="flex justify-center items-center bg-bg-dark py-2 w-full min-h-32 font-graphik min-h-[120px]"
  >
    <div
      class="max-w-6xl w-full h-full flex items-center justify-between sm:px-4"
    >
      <NuxtImg src="/img/logo.png" alt="Figmaland logo" />
      <nav class="flex items-center justify-center w-auto" role="menu">
        <ul class="flex items-center justify-center gap-8 w-auto">
          <li class="flex items-center justify-center" role="menuitem">
            <NuxtLink
              external
              href="https://www.google.com"
              class="text-white hover:text-primary transition-colors font-medium"
              aria-label="Button to go to home section"
              >Home</NuxtLink
            >
          </li>
          <li class="flex items-center justify-center" role="menuitem">
            <NuxtLink
              external
              href="https://www.google.com"
              class="text-white hover:text-primary transition-colors font-medium"
              aria-label="Button to go to product section"
              >Product</NuxtLink
            >
          </li>
          <li class="flex items-center justify-center" role="menuitem">
            <NuxtLink
              external
              href="https://www.google.com"
              class="text-white hover:text-primary transition-colors font-medium"
              aria-label="Button to go to about section"
              >About</NuxtLink
            >
          </li>
          <li class="flex items-center justify-center" role="menuitem">
            <NuxtLink
              external
              href="https://www.google.com"
              class="text-white hover:text-primary transition-colors font-medium"
              aria-label="Button to go to contact section"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <ButtonComponent button-type="secondary" button-text="Login" />
    </div>
  </header>
  <slot />
</template>
