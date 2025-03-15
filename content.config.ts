import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages_id: defineCollection({
      type: 'page',
      source: {
        include: 'id/*.md',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            icon: z.string(),
          }),
        ]),
      }),
    }),
    pages_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/*.md',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            icon: z.string(),
          }),
        ]),
      }),
    }),
  },
})
