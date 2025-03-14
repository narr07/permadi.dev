// eslint.config.mjs
// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    formatters: {
      markdown: false,
    },
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single',
    },
    vue: true,
    overrides: {
      vue: {
        // Nonaktifkan aturan vue/no-multiple-template-root
        'vue/no-multiple-template-root': 'off',
        'vue/keyword-spacing': ['error', {}], // Atur spacing di sekitar keyword
        'no-multi-spaces': 'error', // Tidak boleh ada spasi berlebih antar kata
      },
    },
  }),
)
