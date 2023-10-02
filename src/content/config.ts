// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const service = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    body: z.string(),
  }),
});

const testimonial = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    name: z.string(),
    profetion: z.string(),
    description: z.string(),
    imageSrc: image(),
    imageAlt: z.string(),
  }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = { service , testimonial}; 