const choix = ["pierre", "feuille", "ciseau"];
const boutonRejouer = document.getElementById("boutonRejouer");
const imageGauche = document.getElementById("image-gauche");
const imageDroite = document.getElementById("image-droite");
const resultatGauche = document.getElementById("resultat-gauche");
const resultatDroite = document.getElementById("resultat-droite");

const obtenirChoixAleatoire = () => choix[Math.floor(Math.random() * choix.length)];

const afficherImage = (element, choix) => element.style.backgroundImage = `url(images-pfc/${choix}.jpg)`;

const determinerGagnant = (joueur1, joueur2) => {
  if (joueur1 === joueur2) return "Égalité";
  if ((joueur1 === "pierre" && joueur2 === "ciseau") || (joueur1 === "feuille" && joueur2 === "pierre") || (joueur1 === "ciseau" && joueur2 === "feuille")) return "Joueur 1 gagne";
  return "Joueur 2 gagne";
};

const afficherResultatTexte = (resultat, gauche, droite) => {
  const texteGauche = document.createElement("div"), texteDroite = document.createElement("div");
  texteGauche.className = texteDroite.className = "resultat-texte";
  texteGauche.style.fontSize = texteDroite.style.fontSize = "50px";
  texteGauche.textContent = texteDroite.textContent = resultat === "Égalité" ? "Égalité" : (resultat === "Joueur 1 gagne" ? "Gagné" : "Perdu");
  droite.appendChild(texteDroite);
  gauche.appendChild(texteGauche);
};

const appliquerCouleurResultat = (resultat, gauche, droite) => {
  const couleur = {
    "Égalité": ["yellow", "yellow"],
    "Joueur 1 gagne": ["green", "red"],
    "Joueur 2 gagne": ["red", "green"]
  }[resultat];

  [gauche, droite].forEach((element, index) => {
    element.style.backgroundColor = couleur[index];
    element.style.height = window.innerHeight * 0.50 + "px";
    element.style.width = window.innerWidth / 2 + "px";
    element.style.display = "inline-block";
    element.style.position = "relative";
  });
};

const jouer = () => {
  const choixJoueur1 = obtenirChoixAleatoire();
  const choixJoueur2 = obtenirChoixAleatoire();
  afficherImage(imageGauche, choixJoueur1);
  afficherImage(imageDroite, choixJoueur2);

  resultatGauche.textContent = choixJoueur1;
  resultatDroite.textContent = choixJoueur2;

  const resultat = determinerGagnant(choixJoueur1, choixJoueur2);
  appliquerCouleurResultat(resultat, resultatGauche, resultatDroite);
  afficherResultatTexte(resultat, resultatGauche, resultatDroite);
};

boutonRejouer.addEventListener("click", jouer);
jouer();
