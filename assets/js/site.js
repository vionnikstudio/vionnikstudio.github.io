/* Vionnik — petits comportements du site (aucune modification nécessaire) */
(function () {
  "use strict";

  // Date du jour au format AAAA-MM-JJ (heure locale du visiteur)
  var d = new Date();
  var aujourdhui = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");

  // 1. Spéciaux : visibles seulement entre la date de début et la date de fin
  function actif(periode) {
    var parts = (periode || "").split("|");
    var debut = (parts[0] || "").trim(), fin = (parts[1] || "").trim();
    if (debut && aujourdhui < debut) return false;
    if (fin && aujourdhui > fin) return false;
    return true;
  }
  document.querySelectorAll("[data-promo]").forEach(function (el) {
    el.hidden = !actif(el.getAttribute("data-promo"));
  });
  document.querySelectorAll("[data-promo-sinon]").forEach(function (el) {
    el.hidden = actif(el.getAttribute("data-promo-sinon"));
  });

  // 2. Compte à rebours avant un lancement
  document.querySelectorAll("[data-compte-a-rebours]").forEach(function (el) {
    var cible = new Date(el.getAttribute("data-compte-a-rebours") + "T00:00:00");
    var jour = new Date(aujourdhui + "T00:00:00");
    if (isNaN(cible)) return;
    var n = Math.round((cible - jour) / 86400000);
    if (n > 1) el.textContent = "Lancement dans " + n + " jours";
    else if (n === 1) el.textContent = "Lancement demain";
    else if (n === 0) el.textContent = "Lancement aujourd’hui";
  });

  // 3. Bouton « Acheter » simulé (quand aucun lien d'achat n'est encore inscrit)
  var toast = document.getElementById("toast");
  var minuterie;
  function fermer() { if (toast) toast.hidden = true; }
  document.querySelectorAll("[data-achat-simule]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!toast) return;
      document.getElementById("toast-texte").textContent =
        "La boutique de " + btn.getAttribute("data-achat-simule") + " sera bientôt branchée.";
      toast.hidden = false;
      clearTimeout(minuterie);
      minuterie = setTimeout(fermer, 6000);
    });
  });
  var x = document.getElementById("toast-fermer");
  if (x) x.addEventListener("click", fermer);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fermer(); });

  // 4. Copier l'adresse courriel
  var copier = document.getElementById("copier-courriel");
  if (copier) {
    var sortie = document.getElementById("copie");
    copier.addEventListener("click", function () {
      var adresse = copier.getAttribute("data-courriel");
      function repli() {
        var r = document.createRange();
        r.selectNodeContents(document.getElementById("mail"));
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        sortie.textContent = "Adresse sélectionnée : fais Cmd + C pour la copier.";
      }
      try {
        navigator.clipboard.writeText(adresse).then(function () { sortie.textContent = "Adresse copiée."; }, repli);
      } catch (e) { repli(); }
    });
  }
})();
