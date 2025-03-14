import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        seo: z
          .intersection(
            z.object({
              title: z.string().optional(),
              description: z.string().optional(),
              meta: z.array(z.record(z.string(), z.any())).optional(),
              link: z.array(z.record(z.string(), z.any())).optional(),
            }),
            z.record(z.string(), z.any()),
          )
          .optional()
          .default({})
          .editor({ hidden: true }),
        navigation: z.object({
          icon: z.string().editor({ input: 'icon' }),
        }),
      }),
    }),
  },
})
