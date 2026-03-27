/**
 * Technical business data — NOT editable via Keystatic
 * For editable content, see src/content/ (managed via Keystatic)
 */

export const legal = {
  registrationNumber: '', // SIRET — à compléter avant mise en prod
  vatNumber: '',
  tradeRegister: '',
} as const;

export const geo = {
  lat: 46.0120524,
  lon: 2.6964998,
} as const;

export const business = {
  name: 'Le Refuge — Restaurant & Maison d\'hôtes',
  owner: 'Manon & François',
  email: 'contact@lerefuge63.fr',
  phone: '+33 6 33 49 20 78',
  phone2: '+33 6 82 14 83 88',
  address: {
    street: '9 Lieu dit Les Arses',
    city: 'Biollet',
    zip: '63640',
    region: 'Auvergne-Rhône-Alpes',
    country: 'FR',
  },
  siteUrl: 'https://www.lerefuge63.fr',
  socials: {
    facebook: 'https://www.facebook.com/Le-refuge-100558589386637',
    instagram: 'https://www.instagram.com/le_refuge_63/',
    googleMaps: 'https://www.google.com/maps/place/Le+refuge',
  },
} as const;
