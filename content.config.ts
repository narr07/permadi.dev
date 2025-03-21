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
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}).editor({ hidden: true }),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
          }),
        ]).default(true).editor({ hidden: true }),
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
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}).editor({ hidden: true }),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
          }),
        ]).default(true).editor({ hidden: true }),
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
        id_slug: z.string(), // Required Indonesian slug
        en_slug: z.string(), // Also require English slug for cross-language navigation
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}).editor({ hidden: true }),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
          }),
        ]).default(true).editor({ hidden: true }),
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
        en_slug: z.string(), // Required English slug
        id_slug: z.string(), // Also require Indonesian slug for cross-language navigation
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}).editor({ hidden: true }),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
          }),
        ]).default(true).editor({ hidden: true }),
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
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}).editor({ hidden: true }),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
          }),
        ]).default(true).editor({ hidden: true }),
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
        seo: z.intersection(
          z.object({
            title: z.string().optional(),
            description: z.string().optional(),
            meta: z.array(z.record(z.string(), z.any())).optional(),
            link: z.array(z.record(z.string(), z.any())).optional(),
          }),
          z.record(z.string(), z.any()),
        ).optional().default({}).editor({ hidden: true }),
        navigation: z.union([
          z.boolean(),
          z.object({
            title: z.string(),
            description: z.string(),
            icon: z.string(),
          }),
        ]).default(true).editor({ hidden: true }),
      }),
    }),
  },
})
