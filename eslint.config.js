// https://github.com/antfu/eslint-config#customization
import antfu from '@antfu/eslint-config'

// workaround for flat config not being supported yet by eslint-plugin-tailwindcss
// https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/280
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    formatters: {
      css: true,
      /**
       * Format HTML files
       * By default uses Prettier
       */
      html: true,
      markdown: false,
    },
    vue: true,
    // Customize the stylistic rules
    stylistic: true,

  },
  ...compat.config({
    // https://github.com/francoismassart/eslint-plugin-tailwindcss
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  }),
)
