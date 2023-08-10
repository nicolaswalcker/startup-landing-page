// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/device",
    "nuxt-icon",
    "@nuxtjs/eslint-module",
    "nuxt-delay-hydration",
    "@nuxtjs/html-validator",
    "nuxt-simple-robots",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],

  css: ["@/assets/css/global.css"],

  extends: ["nuxt-seo-kit"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    debug: process.env.NODE_ENV === "development",
    mode: "init",
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? "https://example.com",
      siteName: "Figmaland - Startup",
      siteDescription: "Welcome to my awesome site!",
      language: "pt-BR", // prefer more explicit language codes like `en-AU` over `en`,
    },
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
});
