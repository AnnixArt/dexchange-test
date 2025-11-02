# DEXCHANGE – Test Technique Front-End

## 🔗 Démo
 [ Voir le lien github ]  ( https://github.com/AnnixArt/dexchange-test.git ) 
 
[Voir la démo sur Vercel] 
(https://dexchange-frontend-test-c8jq.vercel.app/auth)

( https://dexchange-frontend-test-c8jq.vercel.app/dashboard )

( https://dexchange-frontend-test-c8jq.vercel.app/table) 
                          
---Layout responsive desktop → mobile 

## 📦 Installation & lancement

1. Cloner le dépôt
```bash
git clone https://github.com/AnnixArt/test-de-linterface-dexchange.git
cd dexchange-test

2.   Installer les dépendances
       npm install
3.  Lancer le projet en mode développement
      npm run dev
Le projet sera accessible sur : http://localhost:3000 { pour wampserver }

🛠 Librairies utilisées
   . Next.js (App Router) – pour le routage et SSR/SSG
   . Tailwind CSS – pour le style et la rapidité de mise en page
   . TypeScript – typage strict
   . [Optionnel] framer-motion – animations fluides ( sur les premiers cadre cadre dashboad )

## 🎯 Pages intégrées
  . Auth : Login / Formualire de connexion 
  . Dashboard : vue principale avec cartes et statistiques
  . Table View : affichage de données mockées avec composants réutilisables.

## 🧾 Ce que j'aurais fait avec plus de temps.
  Avec plus de temps, j’aurais implémenté plusieurs fonctionnalités avancées pour rendre le projet plus complet et interactif :

1. Tests unitaires et d’intégration
   . Mise en place de Vitest pour les tests unitaires
    . Tests des composants avec React Testing Library pour vérifier le rendu, les interactions et les props

2. CRUD complet avec formulaire dynamique
  . Gestion des utilisateurs/produits via formulaires dynamiques
   . Ajout, modification, suppression et validation des données

   3. Graphiques et charts interactifs sur le dashboard
    . Visualisation de statistiques via des graphiques (barres, lignes, secteurs)
     . Composants interactifs avec hover et animation pour une meilleure UX

4. Pagination, tri et filtres avancés sur la table
   . Affichage paginé pour les grandes listes de données
   . Améliorations UI/UX supplémentaires

5. Feedback visuel sur actions utilisateurs (success, error)
   . Optimisation responsive mobile et tablette
    . Amélioration des performances (lazy loading des composants, images et data)


