# État du projet — KZHUB (Kazak Mining Hub)

Site : Next.js 16 (App Router) — hébergement Netlify (`https://kazak-hub.netlify.app`)
Domaine final prévu : `.mg` (via registrar agréé NIC Madagascar)
Référentiel de conformité : `public/images/image client et cahier de charge/Kazak Mining Hub website .docx`

Dernière mise à jour : 24/08/2026

---

## ✅ Travail effectué

### SEO / visibilité Google
- `src/app/robots.ts` → `/robots.txt` (autorise les crawlers, pointe vers le sitemap)
- `src/app/sitemap.ts` → `/sitemap.xml` (accueil + pages légales)
- `src/app/layout.tsx` : `metadataBase`, canonical, OpenGraph/Twitter alignés sur l'URL du site
- JSON-LD schema.org `Organization` injecté dans le layout
- `src/lib/site.ts` : URL centralisée via variable d'environnement `NEXT_PUBLIC_SITE_URL`

### Conformité au cahier des charges
- Suppression des **partenaires fictifs** (composant `Partners`, données, clés i18n) — noms inventés présentés comme réels = risque juridique
- Suppression des **témoignages fictifs** (composant `Testimonials`, photos Unsplash + citations inventées, données, clés i18n)
- **FAQ alignée sur le CDC** : les 4 questions officielles (investisseurs étrangers, licences minières, visite de site, joint-venture) en premier + 2 bonus conservés (processus de due diligence, accompagnement post-acquisition). EN + FR synchronisés.
- Pages légales créées :
  - `/legal` — Mentions légales (Kazak Ltd., éditeur, hébergeur Netlify, PI, disclaimer investissement, droit malgache)
  - `/privacy` — Politique de confidentialité (formulaire → WhatsApp, pas de stockage serveur, cookies, tiers, droits utilisateur)
  - Liens du footer branchés ; sitemap mis à jour

### Contact
- Formulaire branché sur **WhatsApp** (`wa.me`) : nom, email, société, domaine d'intérêt et message préremplis dans la conversation. Pas d'email pro pour l'instant — remplacera WhatsApp plus tard.
- Message WhatsApp prérempli **localisé** (EN/FR selon la langue active)
- Options du menu « Domaine d'Intérêt » **localisées** (réutilisation des clés i18n existantes + nouvelle clé `formInterestPortfolio`)
- Numéros au format `+261 XX XX XXX XX`
- Badges « Demo » retirés

### Bilinguisme (EN/FR)
- Pages `/legal` et `/privacy` entièrement bilingues via le LanguageContext (`LegalNoticeContent.tsx`, `PrivacyContent.tsx` : dictionnaires EN/FR typés garantissant la parité ; chrome localisé : titre, date de mise à jour, lien retour, footer)
- FAQ synchronisée EN/FR (4 questions CDC en premier)
- Limite connue : les balises `<metadata>` des pages légales restent en anglais (statique) — acceptable pour le référencement secondaire

### Technique
- Erreur ESLint corrigée (`Portfolio.tsx` apostrophe non échappée)
- Lint 0 erreur / build production OK

---

## 🔲 À faire (priorisé)

### Bloquant avant mise en ligne
1. **Portfolio** : remplacer les données mock par les vrais sites miniers (permis, surfaces, régions sont actuellement fictifs présentés comme « Verified ») — ou ajouter un disclaimer démo
2. **Stats hero** (« 12+ opportunités », « 15 ans », « 24 connexions ») : à confirmer/valider avec Kazak Ltd.
3. CTA secondaire « Download Investor Brief » pointe vers `#contact` sans PDF existant : fournir le dossier investisseur ou changer l'intitulé
4. Renseigner les mentions légales manquantes : NIF / STAT / RCS de Kazak Ltd.

### Au passage au domaine .mg
5. Acheter le `.mg` (registrar agréé NIC Madagascar)
6. Netlify : variable d'env `NEXT_PUBLIC_SITE_URL=https://<domaine>.mg` + attacher le domaine + redirection 301 depuis le sous-domaine netlify.app
7. Nouvelle propriété Search Console pour le `.mg` + re-soumettre `sitemap.xml`
8. Créer la boîte mail pro (`contact@<domaine>.mg`) puis :
   - remplacer WhatsApp par un vrai backend formulaire (Netlify Forms / Formspree / Resend)
   - mettre à jour `contactInfo.email`, footer, page privacy
9. Mettre à jour JSON-LD (`sameAs` : réseaux sociaux réels)

### Améliorations continues
10. Activer Google Analytics 4 (composant `Analytics.tsx` prêt, désactivé) + bandeau cookies si nécessaire
11. Bouton header « Investor Portal » : définir une destination (page login ? section ?) — actuellement sans cible claire
12. Réseaux sociaux du footer : liens `href="#"` à renseigner
13. Remplacer les `<img>` par `next/image` (warnings lint restants : Footer, Header, Preloader, LegalShell)
14. Vérifier/perfectionner le SEO images (alts, poids des photos client)

---

## Historique des décisions
| Date | Décision |
|---|---|
| 24/08/2026 | URL de référence = `https://kazak-hub.netlify.app` (défaut), futur `.mg` via variable d'env |
| 24/08/2026 | Partenaires + témoignages supprimés (contenus fictifs) plutôt que remplacés — à recréer avec de vrais contenus clients |
| 24/08/2026 | Formulaire → WhatsApp en attendant une adresse email pro |
