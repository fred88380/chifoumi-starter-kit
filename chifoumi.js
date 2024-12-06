const choixPossible = ["pierre", "feuille", "ciseau"];

const imageGauche = document.getElementById('image-gauche');
const imageDroite = document.getElementById('image-droite');
let resultatGauche = document.getElementById('resultat-gauche');
let resultatDroite = document.getElementById('resultat-droite');

function choixAleatoire() {
  return choixPossible[Math.floor(Math.random() * choixPossible.length)];
}

imageGauche.addEventListener('click', function () {
  const choixJoueur1 = choixAleatoire();
  afficherImageGauche(choixJoueur1);
  jouer("pierre");
});

imageDroite.addEventListener('click', function () {
  const choixJoueur2 = choixAleatoire();
  afficherImageDroite(choixJoueur2, 'droite');
  jouer("pierre");
});
function afficherImageGauche(choixJoueur) {
  imageGauche.style.backgroundImage = 'url(images-pfc/' + choixJoueur + '.jpg)';
}
function afficherImageDroite(choixJoueur) {
  imageDroite.style.backgroundImage = 'url(images-pfc/' + choixJoueur + '.jpg)';
}

function comparerChoix(choixJoueur1, choixJoueur2) {
  if (choixJoueur1 === choixJoueur2) {
    return "Égalité!";
  }
  if (
    (choixJoueur1 === "pierre" && choixJoueur2 === "ciseau") ||
    (choixJoueur1 === "feuille" && choixJoueur2 === "pierre") ||
    (choixJoueur1 === "ciseau" && choixJoueur2 === "feuille")
  ) {
    return "le joueur 1 gagne!";
  }
  return "Le joueur 2 gagne!";
}
function jouer(choixJoueur1, choixJoueur2) {

  let resultat = comparerChoix(choixJoueur1, choixJoueur2);
  console.log("Choix du joueur 1: " + choixJoueur1);
  console.log("Choix du joueur 2: " + choixJoueur2);
  console.log(resultat);
}
jouer("pierre");