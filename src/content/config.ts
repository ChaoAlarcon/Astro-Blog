import{z, defineCollection}from 'astro:content'

const blogCollection = defineCollection({
    type:'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.date(),
        draft: z.boolean().optional(),
        tags: z.array(z.string()),
        category: z.string().optional(),
    })
})

export const collections = {
    blog: blogCollection,
}