# Comment modifier le site Vionnik

Ce site se met en page tout seul. Toi, tu modifies seulement des **fiches de texte**. GitHub reconstruit le site environ **une minute** après chaque modification.

| Je veux…                                   | Fichier à ouvrir                    |
|--------------------------------------------|-------------------------------------|
| Changer l'annonce ou les textes de l'accueil | `index.md`                         |
| Modifier une application (textes, prix, statut, spécial) | `_produits/nom-du-produit.md` |
| Ajouter une application                     | copier `modele-produit.md`         |
| Changer l'adresse courriel ou l'année       | `_config.yml`                      |
| Remplacer une image                         | `assets/produits/nom-du-produit/`  |

---

## 1. Mettre le site en ligne (une seule fois)

Le guide illustré « Publier le site Vionnik » explique chaque clic. En résumé :

1. Crée ton compte sur github.com.
2. Crée un dépôt **Public** nommé exactement `ton-nom-d-utilisateur.github.io`. Avec ce nom, le site fonctionne sans aucun réglage.
3. Dans le dépôt vide, clique sur **uploading an existing file**, puis glisse **le contenu** du dossier `vionnik-site` (pas le dossier lui-même). Clique sur **Commit changes**.
4. Va dans **Settings → Pages**. À *Build and deployment*, choisis **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
5. Une à deux minutes plus tard, le site est en ligne à `https://ton-nom-d-utilisateur.github.io`.

**Ton nom de domaine** (ex. vionnik.com) : dans **Settings → Pages**, inscris-le dans *Custom domain*, puis ajoute les enregistrements DNS indiqués dans le guide illustré.

**Si ton dépôt porte un autre nom** (ex. `vionnik-site`), ouvre `_config.yml` et remplace `baseurl: ""` par `baseurl: "/vionnik-site"`, sauf si tu utilises ton propre nom de domaine.

---

## 2. La règle d'or des fiches

Les fiches sont écrites dans un format très simple. Pour ne rien briser :

- **Modifie seulement le texte entre les guillemets** `" "`.
- **Ne touche pas aux espaces au début des lignes** : ils indiquent ce qui va ensemble.
- Les lignes qui commencent par `-` sont des éléments d'une liste. Pour en ajouter un, copie un élément complet (toutes ses lignes) et colle-le juste en dessous.
- Tout ce qui suit un `#` est un commentaire : le site l'ignore.
- Pour citer un mot, utilise les guillemets français « » plutôt que " ".
- L'apostrophe ' est permise sans problème.

---

## 3. Modifier un texte

1. Sur github.com, ouvre le fichier (par exemple `_produits/picfitbox.md`).
2. Clique sur le **crayon** ✏️ en haut à droite du fichier.
3. Modifie le texte.
4. Clique sur **Commit changes…**, puis encore sur **Commit changes**.
5. Attends une minute et recharge ton site (Cmd + Maj + R pour forcer le rafraîchissement).

Pour voir si la mise à jour est terminée : onglet **Actions** du dépôt. Un rond jaune = en cours, un crochet vert = en ligne, un X rouge = erreur (voir la section 9).

---

## 4. L'annonce de l'accueil

Dans `index.md`, la section `annonce` choisit l'application mise en vedette :

```
annonce:
  produit: "picfitbox"
  surtitre: ""
  titre: ""
  texte: "La première application de Vionnik place tes images…"
```

- `produit` : le nom de la fiche, sans `.md`.
- Laisse `surtitre` et `titre` vides : le site écrit tout seul « PicFitBox arrive bientôt sur Mac. » tant que l'app est à venir, puis « PicFitBox est arrivé sur Mac. » quand elle devient disponible.
- Tu peux aussi écrire ton propre titre : il remplacera le titre automatique.

---

## 5. Lancer une application (passer de « à venir » à « disponible »)

Dans la fiche du produit :

```
statut: "disponible"
prix: "19.99"
prix_mention: "CAD · achat unique"
lien_achat: "https://lien-de-ta-plateforme-d-achat"
lien_essai: "https://lien-de-telechargement-de-l-essai"
```

- `statut: "a-venir"` affiche « Bientôt », la date de `sortie` et un bouton **M'aviser du lancement** (qui ouvre un courriel vers toi).
- `statut: "disponible"` affiche le bouton **Acheter**.
- Tant que `lien_achat` est vide, le bouton Acheter est **simulé** : il affiche « Redirection vers la plateforme d'achat… ».
- `prix` : écris le montant seulement, avec un point ou une virgule (`"19.99"` ou `"19,99"`). Vide = « Prix à venir ». `"0"` = « Gratuit ».
- **Compte à rebours** : inscris une date dans `date_lancement: "2027-02-15"` et l'accueil affichera « Lancement dans 42 jours ».

---

## 6. Annoncer un spécial

Dans la fiche du produit :

```
rabais: "25"
rabais_debut: "2026-11-27"
rabais_fin: "2026-12-01"
rabais_texte: "Vendredi fou :"
```

Le site affiche alors automatiquement, **seulement entre ces deux dates** :

- un bandeau orange en haut de **toutes** les pages : « −25 % Vendredi fou : PicFitBox jusqu'au 1er décembre » ;
- une pastille « −25 % » sur la carte de l'accueil ;
- l'ancien prix barré et le nouveau prix, calculé tout seul, sur l'accueil et sur la page du produit.

Après la date de fin, tout disparaît de lui-même : rien à défaire. Dates au format **année-mois-jour**. Sans date de début, le spécial commence tout de suite ; sans date de fin, il dure jusqu'à ce que tu remettes `rabais: ""`.

Le spécial ne s'affiche nulle part tant qu'aucun `prix` n'est inscrit dans la fiche.

---

## 7. Ajouter une nouvelle application

1. Ouvre `modele-produit.md` et copie tout son contenu.
2. Dans le dossier `_produits`, clique sur **Add file → Create new file**. Nomme-le avec un nom court, en minuscules, sans espace ni accent : `le-facteur.md`. Colle le modèle, remplis-le, puis **Commit changes**.
   - La page sera en ligne à l'adresse `/le-facteur/`.
3. Dans `assets/produits`, crée le dossier d'images **du même nom** : sur GitHub, va dans `assets/produits`, clique sur **Add file → Upload files**, et glisse un dossier `le-facteur` qui contient l'icône et les captures.
4. Dans la fiche, `icone`, `image_principale` et chaque `image` doivent porter **exactement** le nom des fichiers (majuscules et extension comprises).
5. `ordre` règle la position sur l'accueil (1 = en premier).

La carte de l'accueil, le lien dans le menu et le lien « Application suivante » se créent tout seuls. Pour mettre la nouvelle application en vedette, change `produit` dans l'annonce de `index.md`.

---

## 8. Les images

- **Remplacer une image** : téléverse un fichier **portant le même nom** dans le même dossier ; GitHub remplace l'ancien.
- **Formats** : `.webp`, `.png` ou `.jpg`. Les captures avec fond transparent (Cmd + Maj + 4, barre d'espace, clic sur la fenêtre) sont les plus belles.
- **Poids** : vise moins de 300 Ko par image. Une largeur de 1400 px suffit pour une capture de fenêtre. (PicFitBox est parfait pour ça !)
- **Icône** : carrée, 512 × 512 px.
- Dans une section, ajoute `cadre: true` pour encadrer une capture qui n'a pas de fond transparent.

---

## 9. Les icônes disponibles

Pour les champs `icone:` des points forts, des fonctions et des principes :

`dossier` · `grille` · `fond` · `fichier` · `gps` · `texte` · `bouclier` · `cle` · `ecran` · `image` · `recadrer` · `clavier` · `courriel` · `coeur` · `eclair` · `etoile` · `horloge` · `personnes` · `crochet` · `telecharger` · `pinceau` · `icone-app`

---

## 10. Si quelque chose ne marche plus

- **Un X rouge dans l'onglet Actions** : il y a presque toujours un guillemet oublié ou un espace en trop au début d'une ligne. Ouvre le fichier que tu viens de modifier et compare avec une ligne voisine.
- **Revenir en arrière** : ouvre le fichier, clique sur **History**, choisis la version d'avant, copie son contenu et recolle-le.
- **Tu peux toujours demander à Claude** : colle le contenu de la fiche et décris ce que tu veux changer.
