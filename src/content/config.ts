import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(165),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(['Ghiduri', 'Tehnic', 'Legislație', 'Studii de caz']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
