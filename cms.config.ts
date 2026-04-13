import type { CmsConfig } from './cms.types';

// ============================================================
// Configuration CMS — Le Refuge (restaurant + maison d'hotes)
// ============================================================

const cmsConfig: CmsConfig = {
  repo: 'mavailable/site-refuge-biollet',
  branch: 'dev',
  siteName: 'Le Refuge',

  singletons: {
    'site-info': {
      label: 'Informations generales',
      description: 'Nom, telephone, email, adresse',
      path: 'src/content/site-info/index.json',
      fields: {
        name: { type: 'text', label: 'Nom commercial' },
        description: { type: 'text', label: 'Description courte', multiline: true },
        phone: { type: 'text', label: 'Telephone (format +33...)' },
        email: { type: 'text', label: 'Email' },
        address: { type: 'text', label: 'Adresse postale', multiline: true },
      },
    },

    hero: {
      label: 'Section Hero',
      description: "Titre, sous-titre, boutons d'appel a l'action, badge",
      path: 'src/content/hero/index.json',
      fields: {
        title: { type: 'text', label: 'Titre principal (H1)' },
        subtitle: { type: 'text', label: 'Sous-titre', multiline: true },
        ctaPrimary: { type: 'text', label: 'Bouton principal' },
        ctaPrimaryHref: { type: 'text', label: 'Lien bouton principal' },
        ctaSecondary: { type: 'text', label: 'Bouton secondaire' },
        ctaSecondaryHref: { type: 'text', label: 'Lien bouton secondaire' },
        reassurance: { type: 'text', label: 'Texte de reassurance' },
        badgeText: { type: 'text', label: 'Badge (ex: 4.9/5 - 114 avis)' },
        image: { type: 'text', label: 'Image de fond (chemin)' },
        imageAlt: { type: 'text', label: 'Description image' },
      },
    },

    restaurant: {
      label: 'Restaurant',
      description: 'Carte, menus, producteurs, horaires',
      path: 'src/content/restaurant/index.json',
      fields: {
        title: { type: 'text', label: 'Titre de la section' },
        subtitle: { type: 'text', label: 'Description', multiline: true },
        entrees: {
          type: 'array',
          label: 'Entrees',
          itemLabel: 'name',
          item: {
            type: 'object',
            label: 'Entree',
            fields: {
              name: { type: 'text', label: 'Nom du plat' },
              price: { type: 'text', label: 'Prix' },
            },
          },
        },
        plats: {
          type: 'array',
          label: 'Plats',
          itemLabel: 'name',
          item: {
            type: 'object',
            label: 'Plat',
            fields: {
              name: { type: 'text', label: 'Nom du plat' },
              price: { type: 'text', label: 'Prix' },
            },
          },
        },
        dessertsTitle: { type: 'text', label: 'Titre desserts (avec prix)' },
        desserts: {
          type: 'array',
          label: 'Desserts',
          item: { type: 'text', label: 'Nom du dessert' },
        },
        menus: {
          type: 'array',
          label: 'Menus',
          itemLabel: 'name',
          item: {
            type: 'object',
            label: 'Menu',
            fields: {
              name: { type: 'text', label: 'Nom du menu' },
              price: { type: 'text', label: 'Prix' },
              description: { type: 'text', label: 'Description' },
            },
          },
        },
        producteursTitle: { type: 'text', label: 'Titre producteurs' },
        producteursSubtitle: { type: 'text', label: 'Sous-titre producteurs' },
        producteursEnCuisine: {
          type: 'array',
          label: 'Producteurs en cuisine',
          item: { type: 'text', label: 'Producteur' },
        },
        producteursAuBar: {
          type: 'array',
          label: 'Producteurs au bar',
          item: { type: 'text', label: 'Producteur' },
        },
        horaires: { type: 'text', label: 'Horaires (ligne courte)' },
        note: { type: 'text', label: 'Note sous horaires' },
        ctaText: { type: 'text', label: 'Texte du bouton CTA' },
      },
    },

    chambres: {
      label: 'Chambres',
      description: 'Presentation des chambres',
      path: 'src/content/chambres/index.json',
      fields: {
        title: { type: 'text', label: 'Titre de la section' },
        subtitle: { type: 'text', label: 'Description', multiline: true },
        rooms: {
          type: 'array',
          label: 'Chambres',
          itemLabel: 'name',
          item: {
            type: 'object',
            label: 'Chambre',
            fields: {
              name: { type: 'text', label: 'Nom de la chambre' },
              description: { type: 'text', label: 'Description', multiline: true },
              priceNight: { type: 'text', label: 'Prix par nuit' },
              priceWeek: { type: 'text', label: 'Prix semaine + inclus' },
              image: { type: 'text', label: 'Image (chemin)' },
              imageAlt: { type: 'text', label: 'Description image' },
            },
          },
        },
        frais: { type: 'text', label: 'Frais supplementaires' },
        groupe: { type: 'text', label: 'Offre groupe' },
      },
    },

    gite: {
      label: 'Gite',
      description: 'Presentation et tarifs du gite',
      path: 'src/content/gite/index.json',
      fields: {
        title: { type: 'text', label: 'Titre' },
        description: { type: 'text', label: 'Description', multiline: true },
        priceNight: { type: 'text', label: 'Prix par nuit' },
        priceNightNote: { type: 'text', label: 'Note prix (ex: /nuit min. 2 nuits)' },
        priceDetails: {
          type: 'array',
          label: 'Details tarifs',
          item: { type: 'text', label: 'Ligne de tarif' },
        },
        petsNote: { type: 'text', label: 'Note animaux' },
        image: { type: 'text', label: 'Image (chemin)' },
        imageAlt: { type: 'text', label: 'Description image' },
        ctaText: { type: 'text', label: 'Texte du bouton CTA' },
      },
    },

    about: {
      label: 'A propos',
      description: 'Presentation des fondateurs et proximite',
      path: 'src/content/about/index.json',
      fields: {
        title: { type: 'text', label: 'Titre de la section' },
        paragraphs: {
          type: 'array',
          label: 'Paragraphes',
          item: { type: 'text', label: 'Paragraphe', multiline: true },
        },
        quote: { type: 'text', label: 'Citation (verbatim)', multiline: true },
        quotePosition: { type: 'number', label: 'Position citation (apres quel paragraphe)', defaultValue: 2 },
        proximityTitle: { type: 'text', label: 'Titre proximite' },
        proximityItems: {
          type: 'array',
          label: 'Lieux a proximite',
          item: { type: 'text', label: 'Lieu' },
        },
      },
    },

    gallery: {
      label: 'Galerie',
      description: 'Photos du Refuge',
      path: 'src/content/gallery/index.json',
      fields: {
        title: { type: 'text', label: 'Titre de la section' },
        subtitle: { type: 'text', label: 'Sous-titre' },
        images: {
          type: 'array',
          label: 'Images',
          itemLabel: 'alt',
          item: {
            type: 'object',
            label: 'Image',
            fields: {
              src: { type: 'text', label: 'Chemin image' },
              alt: { type: 'text', label: 'Description' },
              span: { type: 'text', label: 'CSS span (ex: col-span-2 row-span-2)' },
            },
          },
        },
      },
    },

    'testimonials-meta': {
      label: 'Temoignages (en-tete)',
      description: 'Titre et statistiques de la section temoignages',
      path: 'src/content/testimonials-meta/index.json',
      fields: {
        title: { type: 'text', label: 'Titre de la section' },
        stats: {
          type: 'array',
          label: 'Statistiques',
          itemLabel: 'label',
          item: {
            type: 'object',
            label: 'Statistique',
            fields: {
              value: { type: 'text', label: 'Valeur (ex: 4.9/5)' },
              label: { type: 'text', label: 'Label (ex: Google - 114 avis)' },
            },
          },
        },
      },
    },

    contact: {
      label: 'Section Contact',
      description: 'Titre, sous-titre et mention RGPD du formulaire',
      path: 'src/content/contact/index.json',
      fields: {
        title: { type: 'text', label: 'Titre de la section' },
        subtitle: { type: 'text', label: 'Sous-titre', multiline: true },
        buttonText: { type: 'text', label: 'Texte du bouton' },
        web3formsKey: { type: 'text', label: 'Cle Web3Forms (formulaire)', description: 'Collez votre cle pour recevoir vos formulaires directement. Guide : marcm.fr/aide/web3forms' },
      },
    },
  },

  collections: {
    testimonials: {
      label: 'Temoignages',
      description: 'Avis et retours clients',
      path: 'src/content/testimonials',
      slugField: 'author',
      labelField: 'author',
      fields: {
        author: { type: 'text', label: 'Auteur' },
        context: { type: 'text', label: 'Contexte' },
        quote: { type: 'text', label: 'Citation', multiline: true },
        source: { type: 'text', label: 'Source (Google, TripAdvisor...)' },
        rating: { type: 'number', label: 'Note (1-5)', defaultValue: 5 },
      },
    },

    faq: {
      label: 'FAQ',
      description: 'Questions frequentes',
      path: 'src/content/faq',
      slugField: 'question',
      labelField: 'question',
      fields: {
        question: { type: 'text', label: 'Question' },
        answer: { type: 'text', label: 'Reponse', multiline: true },
        order: { type: 'number', label: "Ordre d'affichage", defaultValue: 0 },
      },
    },
  },
};

export default cmsConfig;
