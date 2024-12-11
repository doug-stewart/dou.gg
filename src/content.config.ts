import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
