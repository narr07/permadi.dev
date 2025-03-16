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
        icon: z.string().editor({ input: 'icon' }).default('hugeicons:star-circle'),
        navigation:
          z.object({
            title: z.string(),
            icon: z.string().editor({ input: 'icon' }).default('hugeicons:star-circle'),
          }),
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}).editor({ hidden: true }),
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
        icon: z.string().editor({ input: 'icon' }).default('hugeicons:star-circle'),
        navigation:
          z.object({
            title: z.string(),
            icon: z.string().editor({ input: 'icon' }).default('hugeicons:star-circle'),
          }),
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}).editor({ hidden: true }),
      }),
    }),
  },
})
