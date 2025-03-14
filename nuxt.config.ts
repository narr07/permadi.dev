// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@vueuse/nuxt',
    '@nuxthub/core',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true,
    },
    database: {
      type: 'd1',
      bindingName: 'permadidev',
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      standalone: false,
      stylistic: true,
    },
  },
})
