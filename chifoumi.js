let choixPossible = [
    { name: "pierre", image: "pierre.jpg" },
    { name: "feuille", image: "feuille.jpg" },
    { name: "ciseau", image: "ciseau.jpg" }
  ];
let imageGauche = document.getElementById('image-gauche');
let imageDroite = document.getElementById('image-droite');
let resultatGauche = document.getElementById('resultat-gauche');
let resultatDroite = document.getElementById('resultat-droite');
let boutonRejouer = document.getElementById('boutonRejouer');

function choixOrdinateur (){
    return  choixPossible[Math.floor(Math.random() * choixPossible.length )];
}

function comparerChoix(choixJoueur, choixOrdi) {
    if (choixJoueur === choixOrdi) {
      return "Égalité!";
    }
    if (
            ( choixJoueur==="pierre"&& choixOrdi === "ciseau") ||
            ( choixJoueur==="feuille"&& choixOrdi === "pierre")||
            ( choixJoueur==="ciseau"&& choixOrdi === "feuille")
    ) {
        return "vous avez gagné!";
    }
    return "L'ordinateur gagne!";
}

function jouer(choixJoueur) {
    let choixOrdi = choixOrdinateur().name;
    let resultat = comparerChoix(choixJoueur, choixOrdi);
    console.log("Choix du joueur: " + choixJoueur);
    console.log("Choix de l'ordinateur: " + choixOrdi);
    console.log(resultat);
}
jouer("pierre");