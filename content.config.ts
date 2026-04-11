import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tag: z.string(),
        tagVariant: z.enum(['primary', 'tertiary']),
        image: z.string(),
        imageAlt: z.string(),
        readTime: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
      indexes: [{ columns: ['date'] }],
    }),
  },
})
