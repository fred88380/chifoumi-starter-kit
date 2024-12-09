const choix = ["pierre", "feuille", "ciseau"];

const boutonRejouer = document.getElementById("boutonRejouer");
const imageGauche = document.getElementById("image-gauche");
const imageDroite = document.getElementById("image-droite");
const resultatGauche = document.getElementById("resultat-gauche");
const resultatDroite = document.getElementById("resultat-droite");

function obtenirChoixAleatoire() {
  return choix[Math.floor(Math.random() * choix.length)];
}

function afficherImage(element, choix) {
  element.style.backgroundImage = `url(images-pfc/${choix}.jpg)`;
}

function determinerGagnant(joueur1, joueur2) {
  if (joueur1 === joueur2) {
    return "Égalité";
  } else if (
    (joueur1 === "pierre" && joueur2 === "ciseau") ||
    (joueur1 === "feuille" && joueur2 === "pierre") ||
    (joueur1 === "ciseau" && joueur2 === "feuille")
  ) {
    return "Joueur 1 gagne";
  } else {
    return "Joueur 2 gagne";
  }
}

function afficherResultatTexte(resultat, gauche, droite) {
  const ancienTexteGauche = gauche.querySelector(".resultat-texte");
  const ancienTexteDroite = droite.querySelector(".resultat-texte");
  if (ancienTexteGauche) ancienTexteGauche.remove();
  if (ancienTexteDroite) ancienTexteDroite.remove();

  const texteGauche = document.createElement("div");
  const texteDroite = document.createElement("div");

  texteGauche.className = "resultat-texte";
  texteDroite.className = "resultat-texte";

  texteGauche.style.fontSize = "50px";
  texteDroite.style.fontSize = "50px";

  if (resultat === "Égalité") {
    texteGauche.textContent = "Égalité";
    texteDroite.textContent = "Égalité";
  } else if (resultat === "Joueur 1 gagne") {
    texteGauche.textContent = "Gagné";
    texteDroite.textContent = "Perdu";
  } else if (resultat === "Joueur 2 gagne") {
    texteGauche.textContent = "Perdu";
    texteDroite.textContent = "Gagné";
  }

  gauche.appendChild(texteGauche);
  droite.appendChild(texteDroite);
}

function appliquerCouleurResultat(resultat, gauche, droite) {
  const hauteurPage = window.innerHeight;
  const largeurPage = window.innerWidth;

  if (resultat === "Égalité") {
    gauche.style.backgroundColor = "yellow";
    droite.style.backgroundColor = "yellow";
  } else if (resultat === "Joueur 1 gagne") {
    gauche.style.backgroundColor = "green";
    droite.style.backgroundColor = "red";
  } else if (resultat === "Joueur 2 gagne") {
    gauche.style.backgroundColor = "red";
    droite.style.backgroundColor = "green";
  }

  gauche.style.height = (hauteurPage / 2) * 1.5 + "px";
  droite.style.height = (hauteurPage / 2) * 1.5 + "px";

  gauche.style.width = largeurPage / 2 + "px";
  droite.style.width = largeurPage / 2 + "px";

  gauche.style.display = "inline-block";
  droite.style.display = "inline-block";

  gauche.style.position = "relative";  // Ajouté pour positionner les éléments à l'intérieur
  droite.style.position = "relative";  // Ajouté pour positionner les éléments à l'intérieur
}

function jouer() {
  const choixJoueur1 = obtenirChoixAleatoire();
  const choixJoueur2 = obtenirChoixAleatoire();

  afficherImage(imageGauche, choixJoueur1);
  afficherImage(imageDroite, choixJoueur2);

  resultatGauche.textContent = choixJoueur1;
  resultatDroite.textContent = choixJoueur2;

  const resultat = determinerGagnant(choixJoueur1, choixJoueur2);
  appliquerCouleurResultat(resultat, resultatGauche, resultatDroite);
  afficherResultatTexte(resultat, resultatGauche, resultatDroite);
}

boutonRejouer.addEventListener("click", jouer);

jouer();
