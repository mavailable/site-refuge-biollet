import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: { kind: 'cloud' },
  cloud: { project: 'web-factory/refuge-biollet' },

  singletons: {
    'site-info': singleton({
      label: 'Informations du site',
      path: 'src/content/site-info/index',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Nom du site' }),
        description: fields.text({ label: 'Description', multiline: true }),
        phone: fields.text({ label: 'Téléphone' }),
        email: fields.text({ label: 'Email' }),
        address: fields.text({ label: 'Adresse', multiline: true }),
      },
    }),

    hero: singleton({
      label: 'Hero (accueil)',
      path: 'src/content/hero/index',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Titre H1' }),
        subtitle: fields.text({ label: 'Sous-titre', multiline: true }),
        ctaPrimary: fields.text({ label: 'Texte CTA principal' }),
        ctaSecondary: fields.text({ label: 'Texte CTA secondaire' }),
        reassurance: fields.text({ label: 'Texte réassurance' }),
      },
    }),

    about: singleton({
      label: 'À propos',
      path: 'src/content/about/index',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Titre de section' }),
        content: fields.text({ label: 'Texte à propos', multiline: true }),
        proximityTitle: fields.text({ label: 'Titre à proximité' }),
        proximityItems: fields.text({ label: 'Lieux à proximité (un par ligne)', multiline: true }),
      },
    }),

    contact: singleton({
      label: 'Contact / Réservation',
      path: 'src/content/contact/index',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Titre de section' }),
        subtitle: fields.text({ label: 'Sous-titre' }),
        buttonText: fields.text({ label: 'Texte du bouton' }),
        rgpdText: fields.text({ label: 'Mention RGPD', multiline: true }),
      },
    }),
  },

  collections: {
    services: collection({
      label: 'Services / Prestations',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Titre' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        price: fields.text({ label: 'Prix (optionnel)' }),
        order: fields.integer({ label: 'Ordre d\'affichage', defaultValue: 0 }),
      },
    }),

    testimonials: collection({
      label: 'Témoignages',
      slugField: 'author',
      path: 'src/content/testimonials/*',
      format: { data: 'json' },
      schema: {
        author: fields.slug({ name: { label: 'Auteur' } }),
        quote: fields.text({ label: 'Citation', multiline: true }),
        context: fields.text({ label: 'Contexte (ex: en couple, mai 2024)' }),
        source: fields.text({ label: 'Source (ex: TripAdvisor, Google)' }),
        rating: fields.integer({ label: 'Note /5', defaultValue: 5 }),
      },
    }),

    faq: collection({
      label: 'FAQ',
      slugField: 'question',
      path: 'src/content/faq/*',
      format: { data: 'json' },
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        answer: fields.text({ label: 'Réponse', multiline: true }),
        order: fields.integer({ label: 'Ordre d\'affichage', defaultValue: 0 }),
      },
    }),
  },
});
