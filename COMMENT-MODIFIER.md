# Comment modifier le site Studio Vionnik

Ce site se met en page tout seul. Toi, tu modifies seulement des **fiches de texte**. GitHub reconstruit le site environ **une minute** après chaque modification.

| Je veux…                                   | Fichier à ouvrir                    |
|--------------------------------------------|-------------------------------------|
| Changer l'annonce ou les textes de l'accueil | `index.md`                         |
| Modifier une application (textes, prix, statut, spécial) | `_produits/nom-du-produit.md` |
| Ajouter une application                     | copier `modele-produit.md`         |
| Changer le nom, le logo, le courriel ou l'année | `_config.yml`                  |
| Remplacer une image                         | `assets/produits/nom-du-produit/`  |
| Ajouter une image au diaporama              | `assets/produits/nom-du-produit/galerie/` + la fiche (voir section 8) |
| Modifier la page Soutien ou Confidentialité | `soutien.md` ou `confidentialite.md` |
| Modifier les pages en anglais               | le dossier `en`                     |

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

**Important** : on ne modifie jamais le site lui-même (`ton-nom.github.io`). On modifie le **dépôt**, c'est-à-dire les fichiers rangés sur github.com. Le site se met à jour tout seul ensuite.

**Trouver ton dépôt**

1. Va sur **github.com** et connecte-toi (*Sign in*).
2. Dans la colonne de gauche de la page d'accueil, sous **Top repositories**, clique sur `ton-nom.github.io`.
   - Ou tape directement l'adresse `github.com/ton-nom/ton-nom.github.io`. **Ajoute-la à tes favoris** : c'est ton « tableau de bord » du site.
3. Tu arrives sur l'onglet **Code**, avec la liste des fichiers et des dossiers.

**Ouvrir le bon fichier**

| Pour modifier…                  | Clique sur…                              |
|---------------------------------|------------------------------------------|
| l'accueil                       | `index.md`                               |
| Le Coloriste (textes, prix, statut, spécial) | le dossier `_produits`, puis `le-coloriste.md` |
| le courriel ou l'année          | `_config.yml`                            |
| les images du Coloriste         | `assets` → `produits` → `le-coloriste`   |

Astuce : sur la page du dépôt, appuie sur la touche **T** et tape `coloriste` : GitHub trouve le fichier pour toi.

**Modifier et enregistrer**

1. Le fichier s'affiche (parfois sous forme de tableau). En haut à droite de l'encadré du fichier, clique sur le **crayon** ✏️ (*Edit this file*).
2. Le texte devient modifiable. Change seulement ce qui est entre guillemets.
3. En haut à droite, clique sur le bouton vert **Commit changes…**.
4. Une petite fenêtre s'ouvre : laisse *Commit directly to the main branch* coché et clique encore sur **Commit changes**.
5. Attends une minute (onglet **Actions** : crochet vert = c'est en ligne), puis recharge ton site avec **Cmd + Maj + R**.

---

## 4. L'annonce de l'accueil

Dans `index.md`, la section `annonce` choisit l'application mise en vedette :

```
annonce:
  produit: "le-coloriste"
  surtitre: ""
  titre: ""
  texte: "Une pipette pour Mac qui fonctionne même en arrière-plan…"
```

- `produit` : le nom de la fiche, sans `.md`.
- Laisse `surtitre` et `titre` vides : le site écrit tout seul « Le Coloriste arrive bientôt sur Mac. » tant que l'app est à venir, puis « Le Coloriste est arrivé sur Mac. » quand elle devient disponible.
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

- un bandeau orange en haut de **toutes** les pages : « −25 % Vendredi fou : Le Coloriste jusqu'au 1er décembre » ;
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
- **Poids** : vise moins de 300 Ko par image. Une largeur de 1400 px suffit pour une capture de fenêtre. (PicFitBox sera parfait pour ça !)
- **Icône** : carrée, 512 × 512 px.
- Dans une section, ajoute `cadre: true` pour encadrer une capture qui n'a pas de fond transparent.

### Le diaporama (galerie d'images)

Sur la page d'une application, le diaporama affiche autant d'images que tu veux, avec des flèches, des points et une légende sous chaque image. On peut aussi glisser du doigt sur iPhone.

1. **Téléverse l'image** dans `assets/produits/le-coloriste/galerie/` (Add file → Upload files). Format conseillé : `.webp`, `.png` ou `.jpg`, environ 1600 px de large, moins de 300 Ko. Le format 16:9 (comme une capture d'écran) remplit tout le cadre.
2. **Ajoute-la dans la fiche** `_produits/le-coloriste.md`, sous `galerie:`. Copie un élément complet (les 2 lignes) et colle-le juste en dessous :

```
galerie:
  - image: "galerie-1.webp"
    legende: "Le nuancier d'Henri reste à côté de la planche."
  - image: "galerie-4.webp"
    legende: "Ta nouvelle légende."
```

3. **Fais la même chose en anglais** dans `en/le-coloriste.md` (même nom de fichier, légende en anglais). Les deux pages utilisent le même dossier d'images.

- L'ordre dans la liste = l'ordre du diaporama.
- Pour retirer une image, supprime ses 2 lignes dans les deux fiches.
- `galerie_titre` change le titre au-dessus du diaporama.

---

## 9. Changer le logo ou le nom de l'entreprise

**Le nom** (« Studio Vionnik ») : dans `_config.yml`, modifie `title`. Il change partout d'un coup : onglet du navigateur, pied de page, « Une application Studio Vionnik »…

**Le logo** :

1. Prépare un **PNG au fond transparent**, avec le logo **en noir ou très foncé** (le site l'inverse tout seul en blanc en mode sombre).
2. **Recadre-le au plus près** du dessin, sans marge vide autour : sinon il paraîtra plus petit.
3. Hauteur conseillée : environ 200 px. La largeur n'a pas d'importance.
4. Téléverse-le dans `assets/img` (Add file → Upload files), par exemple sous le nom `logo-studio-vionnik.png`.
5. Dans `_config.yml`, inscris ce nom à la ligne `logo:`, par exemple `logo: "logo-studio-vionnik.png"`.

Le site s'adapte à n'importe quelle largeur : le logo garde toujours la même hauteur (26 px dans le menu, 17 px dans le pied de page) et ses proportions. Un logo très large est réduit automatiquement pour ne jamais déborder, même sur iPhone.

---

## 10. Les icônes disponibles

Pour les champs `icone:` des points forts, des fonctions et des principes :

`dossier` · `grille` · `fond` · `fichier` · `gps` · `texte` · `bouclier` · `cle` · `ecran` · `image` · `soleil` · `calendrier` · `main` · `recadrer` · `clavier` · `courriel` · `coeur` · `eclair` · `etoile` · `horloge` · `personnes` · `crochet` · `telecharger` · `pinceau` · `icone-app`

---

## 11. Les pages Soutien, Confidentialité et la version anglaise

| Page | Fichier | Adresse |
|---|---|---|
| Soutien | `soutien.md` | `/soutien/` |
| Politique de confidentialité | `confidentialite.md` | `/confidentialite/` |
| Accueil en anglais | `en/index.md` | `/en/` |
| Le Coloriste en anglais | `en/le-coloriste.md` | `/en/le-coloriste/` |
| Support (anglais) | `en/support.md` | `/en/support/` |
| Privacy Policy (anglais) | `en/privacy.md` | `/en/privacy/` |

- Le haut du fichier (`titre`, `surtitre`, `intro`) remplit la bande foncée en haut de la page.
- Le texte sous la ligne `---` se met en forme tout seul : `## Titre` fait un titre, `**mot**` met en gras, une ligne qui commence par `- ` fait une liste.
- `autre_langue` indique la page correspondante dans l'autre langue : c'est là que mènent les liens « English » et « Français ».
- **Quand tu modifies une page en français, fais la même modification en anglais.**
- Ce qui est entre crochets `[ ]` dans les deux politiques de confidentialité est à remplacer avant de donner les adresses à Apple.

Pour l'App Store : fiche en français → `/soutien/` et `/confidentialite/` ; fiche en anglais → `/en/support/` et `/en/privacy/`.

---

## 12. Si quelque chose ne marche plus

- **Un X rouge dans l'onglet Actions** : il y a presque toujours un guillemet oublié ou un espace en trop au début d'une ligne. Ouvre le fichier que tu viens de modifier et compare avec une ligne voisine.
- **Revenir en arrière** : ouvre le fichier, clique sur **History**, choisis la version d'avant, copie son contenu et recolle-le.
- **Tu peux toujours demander à Claude** : colle le contenu de la fiche et décris ce que tu veux changer.
