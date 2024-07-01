// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxthq/studio',
    '@nuxtjs/seo',
    'nuxt-delay-hydration',
    '@nuxtjs/i18n',
  ],
  site: {
    url: 'https://permadi.dev/',
    name: 'Dinar Permadi Yusup',
    description: 'Dinar Permadi Yusup: Guru SD, Desainer Grafis, dan Programmer',
    defaultLocale: 'id',
  },
  ui: {
    // global: true,
    icons: ['ph', 'skill-icons', 'devicon', 'logos', 'file-icons', 'vscode-icons', 'circle-flags'],
  },
  ogImage: {
    fonts: [
      {
        name: 'Title',
        weight: 900,
        path: '/fonts/DPDisplay-900.otf',
      },
      {
        name: 'BodyBold',
        weight: 700,
        path: '/fonts/DPBody-700.otf',
      },
      {
        name: 'BodyRegular',
        weight: 400,
        path: '/fonts/DPBody-400.otf',
      },
    ],
  },
  colorMode: {
    preference: 'light',
  },
  fonts: {
    families: [
      { name: 'DPDisplay', weights: ['400', '700', '900'], display: 'swap' },
      { name: 'DPBody', weights: ['300', '400', '500', '700', '900'], display: 'swap' },
    ],
    assets: {
      prefix: '/_fonts/',
    },
    defaults: {
      fallbacks: {
        'sans-serif': ['Arial', 'Helvetica', 'Trebuchet MS', 'Verdana'],
        'serif': ['Georgia', 'Times New Roman', 'Times'],
        'monospace': ['Courier New'],
      },
      preload: true,
      styles: ['normal', 'italic'],
      subsets: [
        'latin',
      ],
    },
  },

  content: {
    documentDriven: true,

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
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'id', iso: 'id-ID', file: 'id.json' },
    ],
    defaultLocale: 'id',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    types: 'composition',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },

  },
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: [
        '/',
        // '/artikel',
        // '/galeri',
        // '/projek',
      ],
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/en': { prerender: true },
    '/articles/**': { isr: true, prerender: true },
    '/gallery/**': { isr: true, prerender: true },
    '/projects/**': { isr: true, prerender: true },
    '/en/articles/**': { isr: true, prerender: true },
    '/en/gallery/**': { isr: true, prerender: true },
    '/en/projects/**': { isr: true, prerender: true },
    // '/artikel/**': { isr: true, prerender: true },
    // '/galeri/**': { isr: true, prerender: true },
    // '/projek/**': { isr: true, prerender: true },
  },
  hooks: {
    'components:extend': function (components) {
      for (const comp of components) {
        if (comp.global)
          comp.global = 'sync'
      }
    },
  },
})
