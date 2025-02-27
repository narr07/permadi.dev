
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sofia Sans", "sans-serif"],
        host: ["Host Grotesk", "sans-serif"],
    },
    dropShadow: {
      '1': '2px 2px 0px rgba(2, 50, 48, 1)',
      '2': '4px 4px 0px rgba(2, 50, 48, 1)',
      '3': '6px 6px 0px rgba(2, 50, 48, 1)',
      '1gelap': '2px 2px 0px rgba(0, 0, 0, 1)',
      '2gelap': '4px 4px 0px rgba(0, 0, 0, 1)',
      '3gelap': '6px 6px 0px rgba(0, 0, 0, 1)',
    },
    fontSize: {
      g0: '0.618rem',
      g1: '1rem',
      g2: '1.618rem',
      g3: '2.618rem',
      g4: '4.236rem',
      g5: '6.854rem',
      g6: '11.09rem',
    },
    colors: {
      brand: {
        DEFAULT: '#ABD1C6',
        50: '#EDF5F3',
        100: '#D7E9E4',
        200: '#C1DDD5',
        300: '#ABD1C6',
        400: '#80AEA5',
        500: '#568C85',
        600: '#2B6964',
        700: '#004643',
        800: '#023230',
        900: '#031E1C',
        950: '#050A09',
      },
      gray: {
        DEFAULT: '#7299bf',
        50: '#f4f8fa',
        100: '#e5edf4',
        200: '#d2e0eb',
        300: '#b2cdde',
        400: '#90b4ce',
        500: '#7299bf',
        600: '#5f84b1',
        800: '#495f84',
        900: '#3e4f6a',
        950: '#293242',
      },
      yellow: {
        DEFAULT: '#F9BC60',
        50: '#FFFFFF',
        100: '#FFFEFD',
        200: '#FDEED6',
        300: '#FCDDAF',
        400: '#FACD87',
        500: '#F9BC60',
        600: '#F7A52A',
        700: '#E08A08',
        800: '#AA6906',
        900: '#744804',
        950: '#593703',
      },
      blue: {
        DEFAULT: '#3DA9FC',
        50: '#F2F9FF',
        100: '#DEF0FE',
        200: '#B6DEFE',
        300: '#8DCDFD',
        400: '#65BBFD',
        500: '#3DA9FC',
        600: '#0691FB',
        700: '#0371C6',
        800: '#02528E',
        900: '#013257',
        950: '#01223C',
      },
      red: {
        DEFAULT: '#E16162',
        50: '#FEFBFB',
        100: '#FBEAEA',
        200: '#F5C8C8',
        300: '#EEA6A6',
        400: '#E88384',
        500: '#E16162',
        600: '#D83233',
        700: '#B02123',
        800: '#811919',
        900: '#521010',
        950: '#3A0B0B',
      },

      green: {
        DEFAULT: '#2cb67d',
        50: '#eefbf4',
        100: '#d7f4e3',
        200: '#b1e9ca',
        300: '#7fd6ad',
        400: '#4abd8a',
        500: '#2cb67d',
        600: '#198258',
        700: '#146849',
        800: '#12533c',
        900: '#104432',
        950: '#08261d',
      },
      purple: {
        DEFAULT: '#a786df',
        50: '#f7f5fd',
        100: '#f0edfa',
        200: '#e4ddf7',
        300: '#cec2f0',
        400: '#b69ee7',
        500: '#a786df',
        600: '#8c59ce',
        700: '#7c47ba',
        800: '#673b9c',
        900: '#563280',
        950: '#361f56',
      },

    },
    typography: ({ theme }: { theme: any }) => ({
      DEFAULT: {
        css: {
          'code::before': { content: '' },
          'code::after': { content: '' },
        },
      },
      permadi: {
        css: {
          '--tw-prose-body': theme('colors.brand[800]'),
          '--tw-prose-headings': theme('colors.brand[800]'),
          '--tw-prose-lead': theme('colors.brand[700]'),
          '--tw-prose-links': theme('colors.brand[900]'),
          '--tw-prose-bold': theme('colors.brand[900]'),
          '--tw-prose-counters': theme('colors.brand[600]'),
          '--tw-prose-bullets': theme('colors.brand[400]'),
          '--tw-prose-hr': theme('colors.brand[300]'),
          '--tw-prose-quotes': theme('colors.brand[900]'),
          '--tw-prose-quote-borders': theme('colors.brand[500]'),
          '--tw-prose-captions': theme('colors.brand[700]'),
          '--tw-prose-code': theme('colors.brand[900]'),
          '--tw-prose-pre-code': theme('colors.brand[100]'),
          '--tw-prose-pre-bg': theme('colors.brand[900]'),
          '--tw-prose-th-borders': theme('colors.brand[300]'),
          '--tw-prose-td-borders': theme('colors.brand[200]'),
          '--tw-prose-invert-body': theme('colors.brand[300]'),
          '--tw-prose-invert-headings': theme('colors.white'),
          '--tw-prose-invert-lead': theme('colors.brand[300]'),
          '--tw-prose-invert-links': theme('colors.white'),
          '--tw-prose-invert-bold': theme('colors.white'),
          '--tw-prose-invert-counters': theme('colors.brand[400]'),
          '--tw-prose-invert-bullets': theme('colors.brand[600]'),
          '--tw-prose-invert-hr': theme('colors.brand[700]'),
          '--tw-prose-invert-quotes': theme('colors.brand[100]'),
          '--tw-prose-invert-quote-borders': theme('colors.brand[500]'),
          '--tw-prose-invert-captions': theme('colors.brand[400]'),
          '--tw-prose-invert-code': theme('colors.white'),
          '--tw-prose-invert-pre-code': theme('colors.brand[300]'),
          '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
          '--tw-prose-invert-th-borders': theme('colors.brand[600]'),
          '--tw-prose-invert-td-borders': theme('colors.brand[700]'),
        },
      },
    }),
  }
  },
  plugins: [
    // eslint-disable-next-line ts/no-require-imports
    require('@tailwindcss/typography'),
    plugin(({
      addComponents,
    }: {
      addComponents: any
      theme: any
    }) => {
      addComponents({
        '.headline': {},
        '.subheadline': {},
        '.cardHover': {},
      })
    }),
  ],
} satisfies Config;
