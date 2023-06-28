// TOUT LES VARIBLES
import { questionReponse, imageBase, imageAutre } from "./BaseAPI.js";
let Cubequestion = document.querySelector(".answerComponent");
let bouton = document.querySelector(".buttonTest");
let questionNumber = 0;
let GameComponent = document.querySelector(".imageComponent");
let questionParagraphe = document.querySelector("#questionParagraphe");
let numeroQ = document.querySelector("#numeroQ");
let bonneReponse = 0;
let popUp = document.querySelector(".popUp");
let imageQuizz = document.querySelector(".imageQuizz");
let nombre = 0;

imageQuizz.src = imageBase[nombre];

// MISE EN PLACE DES QUESTIONS
questionReponse[questionNumber].suggestion.forEach(
  (reponse) =>
    (Cubequestion.innerHTML +=
      `<div class='reponse'>
  <form action='#'>
    <input type='checkbox' name='checker' class='checker' id='check1'>
    <label for='checker' class='MaReponse'>` +
      reponse +
      `</label>
  </form>
  </div>`)
);
// AJOUT DES ATTRIBUTS ACTIVE OU NOTACTIVE SUR LES QUESTION(changer l'apparence du reponse selectionne)
for (let i = 0; i < Cubequestion.childElementCount; i++) {
  Cubequestion.children[i].addEventListener("click", function selection() {
    for (let index = 0; index < Cubequestion.childElementCount; index++) {
      Cubequestion.children[index].setAttribute("class", "notActive");
      this.setAttribute("class", "active");
    }
    faux();
  });
}

// FONCTION POUR ACTIVE LE BOUTON "QUESTION SUIVANTE"
function vrai() {
  bouton.disabled = true;
  bouton.style.background = "grey";
}
function faux() {
  bouton.disabled = false;
  bouton.style.background =
    "linear-gradient(130deg,rgba(101, 101, 102, 0.644) 0%,rgba(255, 255, 255, 0.534) 40%, rgba(255, 124, 2, 0.39) 100%)";
}
vrai();

// GESTION DES QUESTIONS DU QUIZZ
bouton.addEventListener("click", function next() {
  let reponseActive =
    document.querySelector(".active").childNodes[1].lastChild.previousSibling
      .innerHTML;

  // METTRE EN VERT LA BONNE REPONSE
  for (let index = 0; index < Cubequestion.childElementCount; index++) {
    if (
      Cubequestion.children[index].childNodes[1].lastChild.previousSibling
        .innerHTML == questionReponse[questionNumber].reponse
    ) {
      Cubequestion.children[index].setAttribute("class", "faux");
      Cubequestion.children[index].setAttribute("class", "vrai");
    }
  }

  // INCREMENTATION DU NOTE
  if (reponseActive == questionReponse[questionNumber].reponse) {
    bonneReponse += 1;
  }

  // INTERVAL POUR MONTRE LA BONNE REPONSE
  setTimeout(() => {
    nombre += 1;

    // PASSER A LA QUESTION SUIVANTE
    if (questionNumber < questionReponse.length - 1) {
      questionNumber += 1;
      while (Cubequestion.firstChild) {
        Cubequestion.removeChild(Cubequestion.firstChild);
      }
      questionParagraphe.innerHTML = questionReponse[questionNumber].question;
      numeroQ.innerHTML = questionNumber + 1;

      // AFFICHER LES REPONSES
      questionReponse[questionNumber].suggestion.forEach(
        (reponse) =>
          (Cubequestion.innerHTML +=
            `<div class='reponse'>
         <form action='#'>
           <input type='checkbox' name='checker' class='checker' id='check1'>
           <label for='checker' class='MaReponse'>` +
            reponse +
            `</label>
     </form>
         </div>`)
      );

      // AJOUT DES ATTRIBUTS ACTIVE OU NOTACTIVE SUR LES QUESTION(changer l'apparence du reponse selectionne)
      for (let i = 0; i < Cubequestion.childElementCount; i++) {
        Cubequestion.children[i].addEventListener(
          "click",
          function selection() {
            for (
              let index = 0;
              index < Cubequestion.childElementCount;
              index++
            ) {
              Cubequestion.children[index].setAttribute("class", "notActive");
              this.setAttribute("class", "active");
            }
            faux();
          }
        );
      }
      imageQuizz.src = imageBase[nombre];
      vrai();

      // SUPPRIMER LES IMAGES DANS LE QUIZZ
      const netoie = () => {
        while (GameComponent.firstChild) {
          GameComponent.removeChild(GameComponent.firstChild);
        }
      };

      // AFFICHER LES IMAGES CORRESPONDANT A CHAQUE QUESTION
      if (imageAutre.length != 0) {
        netoie();
        for (
          let index = 0;
          index < imageAutre[questionNumber].length;
          index++
        ) {
          GameComponent.innerHTML +=
            `<img src="` +
            imageAutre[questionNumber][index].lien +
            `" class="randomImage" alt="image" style="margin-top:` +
            imageAutre[questionNumber][index].x +
            `;margin-left:` +
            imageAutre[questionNumber][index].y +
            `"/>`;
        }
      } else {
        netoie();
      }
    } else {
      //AFFICHER LES RESULTATS DANS LE POPUP
      while (popUp.firstChild) {
        popUp.removeChild(popUp.firstChild);
      }
      if (bonneReponse > 10) {
        popUp.innerHTML +=
          `<h2>` +
          bonneReponse +
          `/15 BRAV0 ! </h2>
            <p>Vous etes veritablement un vrai fan de l'univers de batman! Comics ,films, rien ne vous echappe.
            Bruce Wayne a de quoi etre fier, Gotham est en paix et Batman peut prendre sa retraite, vous veiller aux grains
            </p>
            <a href="game.html" class="beginLink">Recommencer le quizz</a>`;
      } else if (bonneReponse > 5) {
        popUp.innerHTML +=
          `<h2>` +
          bonneReponse +
          `/15 PAS MAL </h2>
            <p>Encore un peu d'entrainement avec le chevalier vous serait benefique, mais vous pouvez marcher la tete 
            vos connaissances sont la. A vous de les consolider, foncer Gotham est votre terrain de chasse!
            </p>
            <a href="game.html" class="beginLink">Recommencer le quizz</a>`;
      } else {
        popUp.innerHTML +=
          `<h2>` +
          bonneReponse +
          `/15 C'EST PAS TOUT A FAIT CA </h2>
       <p>Oula! Heureusement que Riddler est sous les verrous...Il faut que vous repassiez les films,
         cette fois en enlevant peut-etre le masque qui vous a bloqué la vue ! Aller,rien n'est perdu !
       </p>
       <a href="game.html" class="beginLink">Recommencer le quizz</a>`;
      }
      popUp.style.display = "flex";
    }
  }, 1200);
});
