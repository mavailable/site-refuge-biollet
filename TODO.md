# TODO — refuge-biollet

## business.ts duplique les donnees CMS (P6)
- business.ts contient phone, email, address, socials, rating — aussi dans site-info/index.json
- Si le client modifie son telephone via /admin, le Schema.org garde l'ancien numero (lu depuis business.ts)
- Action : nettoyer business.ts pour ne garder que les donnees techniques (geo, legal, schemaType), et faire lire phone/email/address depuis site-info JSON dans schemas.ts
- Priorite : moyenne (risque d'incoherence si le client change ses coordonnees)
- Date : 2026-04-13
