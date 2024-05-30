import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
    type: 'content',
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        readTime: z.string().optional(),
        heroImage: z.string().optional(),
        hiddenInProduction: z.boolean().optional()
    })
})

export const collections = { blog }
