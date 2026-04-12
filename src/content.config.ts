import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================
// Collections
// ============================================================

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

// ============================================================
// Singletons
// ============================================================

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
    ctaPrimaryHref: z.string(),
    ctaSecondary: z.string(),
    ctaSecondaryHref: z.string(),
    reassurance: z.string(),
    badgeText: z.string(),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    paragraphs: z.array(z.string()),
    quote: z.string(),
    quotePosition: z.number(),
    proximityTitle: z.string(),
    proximityItems: z.array(z.string()),
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

const restaurant = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/restaurant' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    entrees: z.array(z.object({ name: z.string(), price: z.string() })),
    plats: z.array(z.object({ name: z.string(), price: z.string() })),
    dessertsTitle: z.string(),
    desserts: z.array(z.string()),
    menus: z.array(z.object({ name: z.string(), price: z.string(), description: z.string() })),
    producteursTitle: z.string(),
    producteursSubtitle: z.string(),
    producteursEnCuisine: z.array(z.string()),
    producteursAuBar: z.array(z.string()),
    horaires: z.string(),
    note: z.string(),
    ctaText: z.string(),
  }),
});

const chambres = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/chambres' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    rooms: z.array(z.object({
      name: z.string(),
      description: z.string(),
      priceNight: z.string(),
      priceWeek: z.string(),
      image: z.string(),
      imageAlt: z.string(),
    })),
    frais: z.string(),
    groupe: z.string(),
  }),
});

const gite = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/gite' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    priceNight: z.string(),
    priceNightNote: z.string(),
    priceDetails: z.array(z.string()),
    petsNote: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    ctaText: z.string(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    images: z.array(z.object({ src: z.string(), alt: z.string(), span: z.string() })),
  }),
});

const testimonialsMeta = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/testimonials-meta' }),
  schema: z.object({
    title: z.string(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })),
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
  restaurant,
  chambres,
  gite,
  gallery,
  'testimonials-meta': testimonialsMeta,
};
