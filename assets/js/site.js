/* Vionnik — petits comportements du site (aucune modification nécessaire) */
(function () {
  "use strict";
  var en = document.documentElement.lang === "en";

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
    if (n > 1) el.textContent = en ? "Launching in " + n + " days" : "Lancement dans " + n + " jours";
    else if (n === 1) el.textContent = en ? "Launching tomorrow" : "Lancement demain";
    else if (n === 0) el.textContent = en ? "Launching today" : "Lancement aujourd’hui";
  });

  // 3. Bouton « Acheter » simulé (quand aucun lien d'achat n'est encore inscrit)
  var toast = document.getElementById("toast");
  var minuterie;
  function fermer() { if (toast) toast.hidden = true; }
  document.querySelectorAll("[data-achat-simule]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!toast) return;
      document.getElementById("toast-texte").textContent =
        en ? "The store for " + btn.getAttribute("data-achat-simule") + " will be connected soon."
          : "La boutique de " + btn.getAttribute("data-achat-simule") + " sera bientôt branchée.";
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
        sortie.textContent = en ? "Address selected: press Cmd + C to copy it." : "Adresse sélectionnée : fais Cmd + C pour la copier.";
      }
      try {
        navigator.clipboard.writeText(adresse).then(function () { sortie.textContent = en ? "Address copied." : "Adresse copiée."; }, repli);
      } catch (e) { repli(); }
    });
  }

  // Diaporama d'images (galerie des pages d'application)
  document.querySelectorAll("[data-galerie]").forEach(function (g) {
    var piste = g.querySelector(".galerie-piste");
    var diapos = piste.querySelectorAll(".galerie-diapo");
    var points = g.querySelectorAll(".galerie-points button");
    if (diapos.length < 2) return;
    function position() { return Math.round(piste.scrollLeft / piste.clientWidth); }
    function aller(i) {
      i = (i + diapos.length) % diapos.length;
      piste.scrollTo({ left: i * piste.clientWidth, behavior: "smooth" });
    }
    function maj() {
      var i = position();
      points.forEach(function (b, j) { b.setAttribute("aria-current", i === j ? "true" : "false"); });
    }
    var prec = g.querySelector(".galerie-prec"), suiv = g.querySelector(".galerie-suiv");
    if (prec) prec.addEventListener("click", function () { aller(position() - 1); });
    if (suiv) suiv.addEventListener("click", function () { aller(position() + 1); });
    points.forEach(function (b, i) { b.addEventListener("click", function () { aller(i); }); });
    piste.addEventListener("scroll", function () { window.requestAnimationFrame(maj); });
    piste.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); aller(position() + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); aller(position() - 1); }
    });
    maj();
  });
})();
