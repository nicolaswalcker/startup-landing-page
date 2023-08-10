<script setup lang="ts">
const device = useDevice();
</script>
<template>
  <NuxtLayout :name="device.isMobile ? 'mobile' : 'default'">
    <SeoKit />
    <main class="flex flex-col items-center justify-center gap-24 bg-bg-dark">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>
