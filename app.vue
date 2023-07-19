<script setup lang="ts">
const device = useDevice();
</script>
<template>
  <NuxtLayout :name="device.isMobile ? 'mobile' : 'default'">
    <SeoKit />
    <NuxtPage />
  </NuxtLayout>
</template>
