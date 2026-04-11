/**
 * Schema.org helpers — doctrine C1 wf-00-cms §7 + schemas centralises.
 *
 * Specifique refuge-biollet : business hybride avec DEUX types Schema.org
 * complementaires pour la meme entite :
 *  - Restaurant (getRestaurantSchema) — cuisine locale, servesCuisine
 *  - LodgingBusiness (getLodgingBusinessSchema) — maison d'hotes + gite,
 *    petsAllowed, numberOfRooms
 *
 * Les deux partagent : address, geo, sameAs, aggregateRating (depuis
 * business.rating.platform = "Google").
 *
 * Helpers sync (pas de getCollection utilise ici, mais FAQPage est async
 * via getCollection('faq') donc getFAQPageSchema est async).
 */

import { getCollection } from 'astro:content';
import { business, geo, schemaData } from '@data/business';

export interface Breadcrumb {
  name: string;
  url: string;
}

// ============================================================
// getRestaurantSchema — Restaurant principal
// ============================================================

export function getRestaurantSchema(): object {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: schemaData.restaurantName,
    image: `${business.siteUrl}/images/og-image.jpg`,
    description: schemaData.restaurantDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.zip,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    telephone: business.phone.replace(/\s/g, ''),
    email: business.email,
    url: business.siteUrl,
    servesCuisine: schemaData.restaurantServesCuisine,
    priceRange: schemaData.restaurantPriceRange,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(geo.lat),
      longitude: String(geo.lon),
    },
    sameAs: [business.socials.facebook, business.socials.instagram],
  };

  // aggregateRating depuis business.rating (doctrine C1 — platform documente)
  if (business.rating && business.rating.platform) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: business.rating.value,
      reviewCount: String(business.rating.count),
      bestRating: '5',
    };
  }

  return schema;
}

// ============================================================
// getLodgingBusinessSchema — LodgingBusiness (maison d'hotes + gite)
// ============================================================

export function getLodgingBusinessSchema(): object {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: schemaData.lodgingName,
    image: `${business.siteUrl}/images/og-image.jpg`,
    description: schemaData.lodgingDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    telephone: business.phone2.replace(/\s/g, ''),
    email: business.email,
    url: business.siteUrl,
    petsAllowed: schemaData.lodgingPetsAllowed,
    numberOfRooms: schemaData.lodgingNumberOfRooms,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: String(geo.lat),
      longitude: String(geo.lon),
    },
  };

  // aggregateRating partage (meme source Google pour le business entier)
  if (business.rating && business.rating.platform) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: business.rating.value,
      reviewCount: String(business.rating.count),
      bestRating: '5',
    };
  }

  return schema;
}

// ============================================================
// getWebsiteSchema — WebSite
// ============================================================

export function getWebsiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: business.name,
    url: business.siteUrl,
    description: schemaData.websiteDescription,
    inLanguage: 'fr',
  };
}

// ============================================================
// getFAQPageSchema — FAQPage (async, lit getCollection('faq'))
// ============================================================

export async function getFAQPageSchema(): Promise<object | null> {
  try {
    const faqs = await getCollection('faq');
    if (faqs.length === 0) return null;
    const sorted = [...faqs].sort((a: any, b: any) => (a.data.order ?? 0) - (b.data.order ?? 0));
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: sorted.map((faq: any) => ({
        '@type': 'Question',
        name: faq.data.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.data.answer,
        },
      })),
    };
  } catch {
    return null;
  }
}

// ============================================================
// getBreadcrumbSchema — BreadcrumbList (pur)
// ============================================================

export function getBreadcrumbSchema(items: Breadcrumb[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${business.siteUrl}${item.url}`,
    })),
  };
}

// ============================================================
// getSpeakableSchema — Speakable WebPage (pur)
// Note : refuge-biollet avait deja un Speakable WebPage pre-C1 avec un
// `name` hardcode different du title prop. On preserve ce `name` via
// schemaData.speakableName pour diff minimal avec le baseline.
// ============================================================

export function getSpeakableSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: schemaData.speakableName,
    url: business.siteUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.intro-text', '.faq-answer'],
    },
  };
}
