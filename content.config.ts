import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
  category: z.enum(['Education', 'Design', 'Programmer']).optional(),
})

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  github: z.object({
    repo: z.boolean().default(false),
    src: z.string().url().optional(), // src dibuat optional terlebih dahulu
  }).refine((data) => {
    // Jika repo bernilai true, src harus ada
    return data.repo ? !!data.src : true
  }, {
    message: 'Field "src" harus diisi jika "repo" bernilai true',
    path: ['github', 'src'], // Menentukan lokasi error
  }),
  image: z.object({
    src: z.string().editor({ input: 'media' }),
  }),
})

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
        include: 'id/blog/*.md',
        prefix: '',
      },
      schema: blogSchema,
    }),
    blog_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/blog/*.md',
        prefix: '',
      },
      schema: blogSchema,
    }),
    projects_id: defineCollection({
      type: 'data',
      source: {
        include: 'id/projects/*.yml',
        prefix: '',
      },
      schema: projectSchema,
    }),
    projects_en: defineCollection({
      type: 'data',
      source: {
        include: 'en/projects/*.yml',
        prefix: '',
      },
      schema: projectSchema,
    }),
  },
})
