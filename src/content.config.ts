import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = {
    blog: blogCollection,
};
