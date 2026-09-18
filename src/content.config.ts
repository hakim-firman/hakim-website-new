import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    num: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    datetime: z.string(),
  }),
});

export const collections = { notes };
