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
  // Doctrine C1 — source verifiable via `platform` (Google Business Profile)
  rating: {
    value: '4.9',
    count: 114,
    platform: 'Google',
  },
} as const;

// ============================================================
// Data SEO technique (non editable par le client — doctrine wf-00-cms §7)
// Extrait du pages/index.astro pre-C1 pour centralisation dans schemas.ts.
// Refuge-biollet est un business hybride : Restaurant + LodgingBusiness
// (maison d'hotes + gite). Deux schemas complementaires pour la meme entite.
// ============================================================

// Web3Forms API key — cascade: CMS content → env var → cle Marc (defaut agence)
const WEB3FORMS_DEFAULT = '9667fcf8-c7da-4b7a-8432-0ec25215c75e';
export const web3formsDefault = WEB3FORMS_DEFAULT;
export const web3formsKey = import.meta.env.WEB3FORMS_KEY || WEB3FORMS_DEFAULT;

export const schemaData = {
  // Restaurant
  restaurantName: 'Le Refuge — Restaurant',
  restaurantDescription:
    'Restaurant de produits locaux à Biollet (63640), au cœur des Combrailles. Cuisine de marché faite maison à partir du potager en permaculture et des producteurs locaux.',
  restaurantServesCuisine: 'Cuisine française de marché, produits locaux',
  restaurantPriceRange: '€€',

  // LodgingBusiness
  lodgingName: "Le Refuge — Maison d'hôtes & Gîte",
  lodgingDescription:
    "Maison d'hôtes et gîte à Biollet (63640). 3 chambres dès 54€/nuit avec petit déjeuner inclus et un gîte pour 2-4 personnes.",
  lodgingPetsAllowed: true,
  lodgingNumberOfRooms: 4,

  // WebSite
  websiteDescription:
    "Restaurant de produits locaux, chambres d'hôtes et gîte à Biollet (63640).",

  // Speakable (name hardcode preserve — different du title prop)
  speakableName: "Le Refuge — Restaurant & Maison d'hôtes à Biollet",
} as const;
