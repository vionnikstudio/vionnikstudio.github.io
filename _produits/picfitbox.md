---
# ═══════════════════════════════════════════════════════════════
#  FICHE PRODUIT : PicFitBox
#  Règle d'or : modifie seulement le texte ENTRE les guillemets " ".
#  Les images de ce produit sont dans : assets/produits/picfitbox/
# ═══════════════════════════════════════════════════════════════

# ── Identité ────────────────────────────────────────────────────
nom: "PicFitBox"
version: "1.7"
categorie: "Image · Redimensionnement"
couleur: "#2F5E34"          # couleur principale de la page (choisis une teinte assez foncée)
icone: "icone.jpg"
ordre: 1                    # position sur l'accueil : 1 = en premier

# ── Statut ──────────────────────────────────────────────────────
# "a-venir"    → bannière « Bientôt » + bouton « M'aviser du lancement »
# "disponible" → bouton « Acheter » (et « Essai gratuit » si un lien est donné)
statut: "a-venir"
sortie: "Dans quelques mois"      # affiché tant que l'app est à venir
date_lancement: ""                # facultatif, ex. "2027-02-15" : affiche un compte à rebours sur l'accueil

# ── Carte sur l'accueil ─────────────────────────────────────────
resume: "Place une ou plusieurs images dans un format précis, 1080 × 1350 px par exemple, sans jamais déformer leurs proportions. Recadrage au curseur, préréglages et traitement par lots."

# ── Haut de la page produit ─────────────────────────────────────
surtitre: "Redimensionnement d'images pour Mac"
accroche: "Le format exact. Jamais déformé."
description: "PicFitBox place une ou plusieurs images dans un format précis sans jamais toucher à leurs proportions. Garde l'image entière avec des bandes, ou recadre exactement la partie qui compte."
image_principale: "remplir.webp"
image_principale_texte: "Fenêtre de PicFitBox en mode Remplir : une affiche recadrée en carré 1080 × 1080 px, zoom à 165 %."
infos:
  - "Application macOS"
  - "PNG · JPEG · HEIC"
  - "Essai gratuit inclus"

# ── Bande de points forts (icônes : voir COMMENT-MODIFIER.md) ───
points:
  - icone: "recadrer"
    texte: "Aucune déformation"
  - icone: "dossier"
    texte: "Traitement par lots"
  - icone: "grille"
    texte: "Préréglages Instagram, Webtoon…"
  - icone: "bouclier"
    texte: "Originaux jamais modifiés"

# ── Prix ────────────────────────────────────────────────────────
prix: ""                    # ex. "19.99" — laisse "" pour afficher « Prix à venir »
prix_mention: ""            # ex. "CAD · achat unique"
configuration: "Pour macOS"
lien_achat: ""              # lien vers ta plateforme d'achat (vide = bouton simulé)
lien_essai: ""              # lien de téléchargement de l'essai gratuit (facultatif)
tarif_titre: "Toutes les fonctions. Un seul prix."
tarif_texte: "Essaie PicFitBox gratuitement, puis active ta licence directement dans l'application."
inclus:
  - "Modes Ajuster et Remplir, recadrage au curseur"
  - "Traitement par lots d'images et de dossiers"
  - "Préréglages intégrés et personnalisés"
  - "PNG, JPEG, HEIC et limite de poids"

# ── Spécial (rabais) ────────────────────────────────────────────
# Inscris un pourcentage pour lancer un spécial. Il s'affiche seulement
# entre les deux dates, puis disparaît tout seul.
rabais: ""                  # ex. "20" pour −20 %
rabais_debut: ""            # ex. "2026-11-24" (vide = dès maintenant)
rabais_fin: ""              # ex. "2026-12-01" (vide = sans fin)
rabais_texte: ""            # ex. "Vendredi fou :" (facultatif)

# ── Fonctions (cartes) ──────────────────────────────────────────
fonctions_titre: "Tout un dossier d'images, d'un seul clic"
fonctions:
  - icone: "dossier"
    titre: "Traitement par lots"
    texte: "Glisse des images ou des dossiers entiers, puis lance le tout avec une barre de progression."
  - icone: "grille"
    titre: "Préréglages"
    texte: "Carré, portrait, vertical, Instagram, Webtoon… et enregistre tes propres formats sous le nom de ton choix."
  - icone: "fond"
    titre: "Couleur, flou ou transparent"
    texte: "Comble les bandes d'une teinte unie, d'une version floutée de l'image, ou laisse-les transparentes."
  - icone: "fichier"
    titre: "PNG, JPEG ou HEIC"
    texte: "Règle la qualité, ou fixe un poids maximal en Ko : la qualité baisse juste assez pour le respecter."
  - icone: "gps"
    titre: "Métadonnées maîtrisées"
    texte: "Tout supprimer, tout garder, ou tout garder sauf la position GPS avant de partager."
  - icone: "texte"
    titre: "Noms de fichiers"
    texte: "Ajoute un préfixe ou un suffixe, ou numérote tes fichiers. Un exemple montre le nom final en direct."
note: "<b>Tes originaux ne sont jamais touchés.</b> Chaque image traitée devient un nouveau fichier dans le dossier de sortie. PicFitBox refuse même d'écraser un original, et tes réglages sont mémorisés d'une fois à l'autre."

# ── Sections détaillées (dans l'ordre d'affichage) ──────────────
sections:
  - type: "demo-ajuster-remplir"
    surtitre: "Deux modes"
    titre: "Ajuster ou remplir : à toi de choisir"
    texte: "Une photo paysage placée dans un format portrait de 800 × 1280 px."

  - surtitre: "Mode Ajuster"
    titre: "L'image entière, placée où tu veux"
    texte: "L'image reste visible au complet. Choisis où l'ancrer dans le format, et comment combler l'espace autour."
    details:
      - nom: "Horizontal"
        valeur: "Gauche · Centre · Droite"
      - nom: "Vertical"
        valeur: "Haut · Centre · Bas"
      - nom: "Fond des bandes"
        valeur: "Couleur · Flou · Transparent"
    image: "ajuster.webp"
    image_texte: "Fenêtre de PicFitBox en mode Ajuster, avec les réglages de position Gauche, Centre, Droite et Haut, Centre, Bas."

  - surtitre: "Mode Remplir"
    titre: "Garde exactement la partie que tu veux"
    texte: "En mode Remplir, trois curseurs choisissent précisément quelle partie de l'image garder. L'aperçu montre le résultat exact pendant que tu les déplaces."
    details:
      - nom: "Zoom"
        valeur: "100 % → 300 %"
      - nom: "Horizontal et vertical"
        valeur: "Glisse pour cadrer"
      - nom: "Réinitialiser le recadrage"
        valeur: "Retour au cadrage de départ"
    image: "curseurs.webp"
    image_texte: "Gros plan des curseurs Zoom, Horizontal et Vertical, zoom réglé à 165 %."
    cadre: true

  - surtitre: "Préréglages"
    titre: "Tes formats favoris, à un clic"
    texte: "Choisis un format dans la liste, ou enregistre tes réglages actuels sous le nom de ton choix pour les retrouver plus tard."
    points:
      - "Carré 1080 × 1080, Portrait 1080 × 1350, Vertical 1080 × 1920"
      - "Tes propres formats : Instagram, Webtoon, vignettes…"
      - "Supprime un préréglage quand tu n'en as plus besoin"
    image: "prereglages.webp"
    image_texte: "Menu Préréglages ouvert : 800 × 1280, Carré 1080 × 1080, Portrait 1080 × 1350, Vertical 1080 × 1920, Instagram, Webtoon."
    cadre: true

  - surtitre: "Essai gratuit"
    titre: "Essaie d'abord, active ensuite"
    texte: "PicFitBox s'ouvre en mode essai. Les jours restants s'affichent en haut de la fenêtre ; quand tu es prêt, un clic sur « Activer… » suffit pour entrer ta licence."
    points:
      - "Mode clair, sombre ou automatique"
      - "Un dossier de sortie par défaut"
      - "Réinitialiser tous les réglages en un clic"
    image: "reglages.webp"
    image_texte: "Réglages de PicFitBox : licence en essai, mode d'affichage, dossier de sortie par défaut."

  - surtitre: "Au clavier"
    titre: "Les raccourcis qui font gagner du temps"
    texte: "Tout se fait aussi au clavier, de l'ajout des images au lancement du traitement."
    raccourcis:
      - touches: "⌘ O"
        action: "Ajouter des images"
      - touches: "⇧ ⌘ S"
        action: "Choisir le dossier de sortie"
      - touches: "⌘ R"
        action: "Lancer le traitement"
      - touches: "⌘ ,"
        action: "Ouvrir les réglages"
      - touches: "⌘ ?"
        action: "Ouvrir l'aide intégrée"

# ── Questions fréquentes ────────────────────────────────────────
faq:
  - question: "Mes images d'origine sont-elles modifiées ?"
    reponse: "Jamais. Chaque image traitée devient un nouveau fichier dans le dossier de sortie choisi."
  - question: "Pourquoi mon fond transparent devient blanc ?"
    reponse: "Le JPEG ne gère pas la transparence. Choisis PNG ou HEIC pour obtenir un vrai fond transparent."
  - question: "Une petite image sera-t-elle étirée ?"
    reponse: "Seulement si tu le veux : décoche « Agrandir les images plus petites » et elle garde sa taille d'origine."
  - question: "Puis-je essayer PicFitBox avant de l'acheter ?"
    reponse: "Oui. L'application s'ouvre en mode essai ; le nombre de jours restants s'affiche en haut de la fenêtre et dans les réglages."
  - question: "Dois-je tout reconfigurer à chaque lancement ?"
    reponse: "Non. Tous les réglages sont sauvegardés automatiquement, et tu peux définir un dossier de sortie par défaut."
---
