import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.string().optional(),
    order: z.number().default(0),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    author: z.string(),
    quote: z.string(),
    context: z.string(),
    source: z.string(),
    rating: z.number().default(5),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    order: z.number().default(0),
  }),
});

// Singletons — declared to prevent auto-generation warnings
const siteInfo = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/site-info' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    phone: z.string(),
    email: z.string(),
    address: z.string(),
  }),
});

const hero = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/hero' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    ctaPrimary: z.string(),
    ctaSecondary: z.string(),
    reassurance: z.string(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    content: z.string(),
    proximityTitle: z.string(),
    proximityItems: z.string(),
  }),
});

const contact = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/contact' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    buttonText: z.string(),
    rgpdText: z.string(),
  }),
});

export const collections = {
  services,
  testimonials,
  faq,
  'site-info': siteInfo,
  hero,
  about,
  contact,
};
