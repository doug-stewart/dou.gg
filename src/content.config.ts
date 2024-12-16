import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

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
