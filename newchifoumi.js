
    class Chifoumi {
        constructor() {
          this.tableau = ["pierre", "feuille", "ciseau"];
          this.Html = this.CreationHtml();
          this.resultat = "";
        }
        aleatoire() {
          let random = Math.floor(Math.random() * this.tableau.length);
          return this.tableau[random];
        }
        CreationHtml() {
          const section = document.createElement("section");
          const div = document.createElement("div");
          section.appendChild(div);
          section.classList.add("section");
          const result = document.createElement("div");
          section.appendChild(result);
          div.classList.add("image");
          result.classList.add("resultat");
          div.addEventListener("click", () => {
            this.resultat = this.aleatoire();
            div.style.backgroundImage = `url(/images-pfc/${this.resultat}.jpg)`;
            result.textContent = this.resultat;
            result.style.color = "black";
            div.style.pointerEvents = "none";
      
            checkWin();
    });
          return section;
        }
      
        getHtml() {
          return this.Html;
        }
      
        getResultat() {
          return this.resultat;
        }
      
        static Verif(joueur1, joueur2) {
          const result1 = joueur1.getHtml().querySelector(".resultat");
          const result2 = joueur2.getHtml().querySelector(".resultat");
          const titre = document.getElementById("titre");
          if (joueur1.getResultat() === joueur2.getResultat()) {
            setTimeout(() => {
              joueur1.getHtml().style.backgroundColor = "blue";
              joueur2.getHtml().style.backgroundColor = "blue";
              titre.textContent = "Égalité";
              result1.textContent = "Egalité";
              result2.textContent = "Égalité";
              bouton.style.display = "block";
             
            }, 2000);
          } else if (
            (joueur1.getResultat() === "pierre" &&
              joueur2.getResultat() === "ciseau") ||
            (joueur1.getResultat() === "feuille" &&
              joueur2.getResultat() === "pierre") ||
            (joueur1.getResultat() === "ciseau" &&
              joueur2.getResultat() === "feuille")
          ) {
            setTimeout(() => {
      
            joueur1.getHtml().style.backgroundColor = "green";
            joueur2.getHtml().style.backgroundColor = "red";
            titre.textContent = "Joueur 1 Gagne";
            result1.textContent = "GAGNÉ";
            result2.textContent = "PERDU";
            bouton.style.display = "block";
          }, 2000);
      
          } else if (
            (joueur2.getResultat() === "pierre" &&
              joueur1.getResultat() === "ciseau") ||
            (joueur2.getResultat() === "feuille" &&
              joueur1.getResultat() === "pierre") ||
            (joueur2.getResultat() === "ciseau" &&
              joueur1.getResultat() === "feuille")
          ) {
            setTimeout(() => {
      
            joueur1.getHtml().style.backgroundColor = "red";
            joueur2.getHtml().style.backgroundColor = "green";
            titre.textContent = "Joueur 2 gagne";
            result1.textContent = "PERDU";
            result2.textContent = "GAGNÉ";
            bouton.style.display = "block";
          }, 2000);
      
          }
         
        }
        static resetGame(joueur1, joueur2) {
          joueur1.getHtml().style.backgroundColor = "";
          joueur2.getHtml().style.backgroundColor = "";
      
          joueur1.resultat = "";
          joueur2.resultat = "";
      
          joueur1.getHtml().querySelector(".image").style.pointerEvents = "auto";
          joueur2.getHtml().querySelector(".image").style.pointerEvents = "auto";
      
          joueur1.getHtml().querySelector(".image").style.backgroundImage = "";
          joueur2.getHtml().querySelector(".image").style.backgroundImage = "";
      
          joueur1.getHtml().querySelector(".resultat").textContent = "";
          joueur2.getHtml().querySelector(".resultat").textContent = "";
      
          titre.textContent = "chifoumi";
          bouton.style.display = "none";
      }
      }
      

