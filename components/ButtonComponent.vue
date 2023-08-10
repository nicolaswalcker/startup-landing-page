<template>
  <NuxtLink
    :aria-label="`Link para a seção de ${buttonText}`"
    href="#"
    class="min-w-[148px] min-h-[52px] w-auto font-medium transition-all duration-300 inline-flex items-center justify-center"
    :class="
      buttonType === 'primary'
        ? 'bg-primary text-light-text hover:bg-blue-500'
        : 'bg-transparent text-light-text border-[1px] border-bg-light hover:bg-bg-light hover:text-primary-text'
    "
  >
    {{ buttonText }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
const props = withDefaults(
  defineProps<{
    buttonType?: "primary" | "secondary";
    buttonText: string;
  }>(),
  {
    buttonType: "primary",
  },
);

const { buttonType, buttonText } = toRefs(props);
</script>
