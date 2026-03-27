/**
 * Helpers for reading Keystatic singleton content (JSON flat files)
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
    ctaSecondary: string;
    reassurance: string;
  }>('hero');
}

export function getAbout() {
  return readJson<{
    title: string;
    content: string;
    proximityTitle: string;
    proximityItems: string;
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
