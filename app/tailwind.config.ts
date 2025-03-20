import type { Config } from 'tailwindcss'

export default <Partial<Config>>{

  theme: {
    dropShadow: {
      '1': '2px 2px 0px rgba(2, 50, 48, 1)',
      '2': '4px 4px 0px rgba(2, 50, 48, 1)',
      '3': '6px 6px 0px rgba(2, 50, 48, 1)',
      '1gelap': '2px 2px 0px rgba(0, 0, 0, 1)',
      '2gelap': '4px 4px 0px rgba(0, 0, 0, 1)',
      '3gelap': '6px 6px 0px rgba(0, 0, 0, 1)',
    },
    extend: {

      fontSize: {
        // Golden ratio dengan clamp untuk responsive dan performa
        g0: ['clamp(0.5rem, 0.618vw, 0.618rem)', {
          lineHeight: '1.2',
          letterSpacing: '-0.01em',
        }],
        g1: ['clamp(0.8rem, 1vw, 1rem)', {
          lineHeight: '1.5',
          letterSpacing: '-0.01em',
        }],
        g2: ['clamp(1.2rem, 1.618vw, 1.618rem)', {
          lineHeight: '1.4',
          letterSpacing: '-0.015em',
        }],
        g3: ['clamp(1.8rem, 2.618vw, 2.618rem)', {
          lineHeight: '1.3',
          letterSpacing: '-0.02em',
        }],
        g4: ['clamp(2.618rem, 4.236vw, 4.236rem)', {
          lineHeight: '1.2',
          letterSpacing: '-0.025em',
          fontWeight: '800',
        }],
        g5: ['clamp(4.236rem, 6.854vw, 6.854rem)', {
          lineHeight: '1.1',
          letterSpacing: '-0.03em',
          fontWeight: '900',
        }],
        g6: ['clamp(6.854rem, 11.09vw, 11.09rem)', {
          lineHeight: '1',
          letterSpacing: '-0.035em',
          fontWeight: '900',
        }],

      },

      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
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
            '--tw-prose-body': theme('colors.permadi[800]'),
            '--tw-prose-headings': theme('colors.permadi[800]'),
            '--tw-prose-lead': theme('colors.permadi[700]'),
            '--tw-prose-links': theme('colors.permadi[900]'),
            '--tw-prose-bold': theme('colors.permadi[900]'),
            '--tw-prose-counters': theme('colors.permadi[600]'),
            '--tw-prose-bullets': theme('colors.permadi[400]'),
            '--tw-prose-hr': theme('colors.permadi[300]'),
            '--tw-prose-quotes': theme('colors.permadi[900]'),
            '--tw-prose-quote-borders': theme('colors.permadi[500]'),
            '--tw-prose-captions': theme('colors.permadi[700]'),
            '--tw-prose-code': theme('colors.permadi[900]'),
            '--tw-prose-pre-code': theme('colors.permadi[100]'),
            '--tw-prose-pre-bg': theme('colors.permadi[900]'),
            '--tw-prose-th-borders': theme('colors.permadi[300]'),
            '--tw-prose-td-borders': theme('colors.permadi[200]'),
            '--tw-prose-invert-body': theme('colors.permadi[300]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.permadi[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.permadi[400]'),
            '--tw-prose-invert-bullets': theme('colors.permadi[600]'),
            '--tw-prose-invert-hr': theme('colors.permadi[700]'),
            '--tw-prose-invert-quotes': theme('colors.permadi[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.permadi[500]'),
            '--tw-prose-invert-captions': theme('colors.permadi[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.permadi[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.permadi[600]'),
            '--tw-prose-invert-td-borders': theme('colors.permadi[700]'),
          },
        },
      }),
    },
  },

}
