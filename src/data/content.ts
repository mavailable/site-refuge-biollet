/**
 * Helpers for reading singleton content (JSON flat files)
 * CMS maison — wf-00-cms doctrine
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

function readJson<T>(path: string): T {
  const fullPath = join(process.cwd(), 'src/content', path, 'index.json');
  const raw = readFileSync(fullPath, 'utf-8');
  return JSON.parse(raw) as T;
}

export function getSiteInfo() {
  return readJson<{
    name: string;
    description: string;
    phone: string;
    email: string;
    address: string;
  }>('site-info');
}

export function getHero() {
  return readJson<{
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    reassurance: string;
    badgeText: string;
    image: string;
    imageAlt: string;
  }>('hero');
}

export function getAbout() {
  return readJson<{
    title: string;
    paragraphs: string[];
    quote: string;
    quotePosition: number;
    proximityTitle: string;
    proximityItems: string[];
  }>('about');
}

export function getContact() {
  return readJson<{
    title: string;
    subtitle: string;
    buttonText: string;
    rgpdText: string;
  }>('contact');
}

export function getRestaurant() {
  return readJson<{
    title: string;
    subtitle: string;
    entrees: Array<{ name: string; price: string }>;
    plats: Array<{ name: string; price: string }>;
    dessertsTitle: string;
    desserts: string[];
    menus: Array<{ name: string; price: string; description: string }>;
    producteursTitle: string;
    producteursSubtitle: string;
    producteursEnCuisine: string[];
    producteursAuBar: string[];
    horaires: string;
    note: string;
    ctaText: string;
  }>('restaurant');
}

export function getChambres() {
  return readJson<{
    title: string;
    subtitle: string;
    rooms: Array<{
      name: string;
      description: string;
      priceNight: string;
      priceWeek: string;
      image: string;
      imageAlt: string;
    }>;
    frais: string;
    groupe: string;
  }>('chambres');
}

export function getGite() {
  return readJson<{
    title: string;
    description: string;
    priceNight: string;
    priceNightNote: string;
    priceDetails: string[];
    petsNote: string;
    image: string;
    imageAlt: string;
    ctaText: string;
  }>('gite');
}

export function getGallery() {
  return readJson<{
    title: string;
    subtitle: string;
    images: Array<{ src: string; alt: string; span: string }>;
  }>('gallery');
}

export function getTestimonialsMeta() {
  return readJson<{
    title: string;
    stats: Array<{ value: string; label: string }>;
  }>('testimonials-meta');
}
