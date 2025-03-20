import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// const gallerySchema = z.object({
//   title: z.string(),
//   tools: z.object({
//     src: z.string().editor({ input: 'icon' }),
//   }),
//   images: z.array(
//     z.object({
//       src: z.string().editor({ input: 'media' }),
//     }),
//   ),
// })

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
      }),
    }),
    blog_id: defineCollection({
      type: 'page',
      source: {
        include: 'id/article/*.md',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        category: z.enum(['Education', 'Design', 'Programmer']).optional(),
      }),
    }),
    blog_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/article/*.md',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        category: z.enum(['Education', 'Design', 'Programmer']).optional(),
      }),
    }),
    projects_id: defineCollection({
      type: 'data',
      source: {
        include: 'id/project/*.yml',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        github: z.object({
          repo: z.boolean().default(false),
          src: z.string().url().optional(), // src remains optional
        }),
        image: z.object({
          src: z.string().editor({ input: 'media' }),
        }),
      }),
    }),
    projects_en: defineCollection({
      type: 'data',
      source: {
        include: 'en/project/*.yml',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string().url(),
        github: z.object({
          repo: z.boolean().default(false),
          src: z.string().url().optional(), // src remains optional
        }),
        image: z.object({
          src: z.string().editor({ input: 'media' }),
        }),
      }),
    }),
  },
})
