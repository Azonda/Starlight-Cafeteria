import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    category: z.enum(['special-coffee', 'sparkling-water', 'iced-tea', 'desserts']),
    image: image(),
    description: z.string(),
    link: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
};