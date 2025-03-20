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
    'nuxt-disqus',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'permadi.dev',
        owner: 'narr07',
        url: 'https://github.com/narr07/permadi.dev',
      },
    },
    database: {
      type: 'd1',
      bindingName: 'permadidev',
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'houston',
            dark: 'ayu-dark',
          },
          langs: [
            'json',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'diff',
            'shell',
            'markdown',
            'yaml',
            'bash',
            'ini',
            'c',
            'cpp',
          ],
          preload: [
            'json',
            'js',
            'ts',
            'html',
            'css',
            'vue',
            'diff',
            'shell',
            'markdown',
            'yaml',
            'bash',
            'ini',
            'c',
            'cpp',
          ],
        },
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    componentIslands: true,
    viewTransition: true,
  },
  compatibilityDate: '2024-11-01',
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      // ignore: ['/api/**', '/kegiatan/**'],
    },
    experimental: {
      websocket: true,
      openAPI: true,
    },
  },
  disqus: {
    shortname: 'permadi-dev',
  },
  eslint: {
    config: {
      standalone: false,
      stylistic: true,
    },
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'id', iso: 'id-ID', name: 'Bahasa Indonesia' },
    ],
    defaultLocale: 'id',
    strategy: 'prefix_except_default',
    lazy: true,
    vueI18n: '~/i18n.config.ts',
    customRoutes: 'config',
  },
  icon: {
    customCollections: [
      {
        prefix: 'narr',
        dir: './app/assets/icons',
      },
    ],
  },
  image: {
    provider: 'ipx',
    format: ['webp'],
    domains: [
      'nuxtjs.org',
      'res.cloudinary.com',
      'img.youtube.com',
      'i.vimeocdn.com',
    ],
    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
    },
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536,
    },
  },
})
