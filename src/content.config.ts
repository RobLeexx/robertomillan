import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    excerpt: z.string(),
    sector: z.string(),
    client: z.string(),
    role: z.string(),
    duration: z.string(),
    featured: z.boolean().default(false),
    stack: z.array(z.string()),
    services: z.array(z.string()),
    outcomes: z.array(z.string()),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string()
      })
    ),
    timeline: z.array(
      z.object({
        phase: z.string(),
        summary: z.string()
      })
    )
  })
});

export const collections = {
  'case-studies': caseStudies
};
