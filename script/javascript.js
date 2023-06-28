const tada = () => {};
var choixFilm;

const paragraphe = [
  "Le personnage de Batman est un super héros de l’univers de DC Comics. Il a été créé par le dessinateur Bob Kane et le scénariste Bill Finger et apparaît pour la première fois dans le comic book Detective Comics en 1939. Batman se différencie de Superman, alors héros majeur de DC, car il n’a aucun pouvoir. Il sera porté au cinema pour la première fois en 1943 par Lewis Wilson et bénéficiera de nombreux reboot, donnant l’occasion à de multiples acteurs d’interpréter l’homme chauve-souris. Voici les trois derniers :",
  "  Batman souhaite éradiquer la criminalité de Gotham. C’est pourquoi, il affrontera la plupart du temps, des vilains sans capacités surnaturelles mais particulièrement violents ou psychopathes. Avec on introduction dans la Justice League il aura l’occasion de se mesurer à des antagonistes qui défient l’imagination et les lois de la physique. Parmi les derniers ennemis emblématiques que nous avons pu voir au cinéma, on retrouve :",
  "Alfred est le majordome des Wayne. A leur mort il s’occupe de l’éducation du jeune Bruce avant de l’assister dans son rôle du Batman. Ce dernier rencontrera Catwoman dès le premier numéro des aventures de l’homme chauve-souris en 1940. Tantôt ennemie tantôt alliée la jeune femme fatale fera tourner la tête de Batman à maintes reprises. Du côté de la police, Bruce pourra compter sur l’aide infaillible de James Gordon, “Jim”, qui désire lui aussi nettoyer sa ville de la criminalité qui y règne.",
];
const lesTitre = ["BATMAN AU CINÉMA", "NÉMÉSIS", "ALLIES"];

const listeImage = [
  {
    lien: "../Illustrations/Bathome2.png",
    nom: "Robbert pattinson",
    date: "2024",
  },
  {
    lien: "../Illustrations/Bathome3.png",
    nom: "Christian Bale",
    date: "2006-2008-2012",
  },
  {
    lien: "../Illustrations/Bathome4.png",
    nom: "Ben Affleck",
    date: "2016/2017-2020-2023",
  },
];
let backChange = document.querySelector(".a1");
let h3Change = document.querySelector(".h3Change");
let h4Change = document.querySelector(".h4Change");
let nombreClick = 1;

function suivant(operateur) {
  if (operateur == "plus") {
    if (nombreClick < 2) {
      backChange.style.background =
        "url(" + listeImage[nombreClick].lien + ") 100% center no-repeat";
      h3Change.innerHTML = listeImage[nombreClick].nom;
      h4Change.innerHTML = listeImage[nombreClick].date;
      nombreClick++;
    }
  } else if (operateur == "moins") {
    if (nombreClick > 0) {
      backChange.style.background =
        "url(" + listeImage[nombreClick].lien + ") 100% center no-repeat";
      h3Change.innerHTML = listeImage[nombreClick].nom;
      h4Change.innerHTML = listeImage[nombreClick].date;
      nombreClick--;
    }
  } else {
  }
}

// Fonction qui reinitialise l'etat des trois bouton
const reinitialiser = () => {
  let c1 = document.getElementById("C1");
  let c2 = document.getElementById("C2");
  let c3 = document.getElementById("C3");
  c1.style.color = "white";
  c1.style.background = "none";
  c2.style.color = "white";
  c2.style.background = "none";
  c3.style.color = "white";
  c3.style.background = "none";
};

// Fonction qui change l'apparence du bouton selectionner dans le formulaire

const selectionBouton = (objetSelectionner) => {
  var salut = objetSelectionner;
  reinitialiser();
  salut.style.color = "#19587d85";
  salut.style.backgroundColor = "white";
};

// Gestion de l'animation du popUp

const test = () => {
  let confirmer = document.getElementById("confirmer");
  let popUp = document.getElementById("popUp");
  let input1 = document.getElementById("mail");
  let input2 = document.getElementById("news");
  let input3 = document.getElementById("check");
  //let input4 = document.getElementById("choix");
  // var top = -180;
  if (
    input1.value != false &&
    input3.checked != false &&
    input2 != false &&
    receptionChoix.innerHTML !=
      " Choisissez la fréquence à laquelle vous souhaitez recevoir votre newsletter"
  ) {
    document.getElementById("popUp").style.display = "flex";
    setTimeout(() => {
      document.getElementById("popUp").style.display = "none";
    }, 4000);
  } else {
    alert(" remplis le Formulaire");
  }
};

// Gestion du caroussel en version mobile

// Affichage du popUp de la description en version mobile

const evenementPlus = (numero) => {
  let popUp_plusV = document.getElementById("popUp_plus");
  popUp_plusV.style.display = "flex";
  if (numero == 1) {
    document.getElementById("lesTitre").innerHTML = lesTitre[0];
    document.getElementById("popUp_para").innerHTML = paragraphe[0];
  } else if (numero == 2) {
    document.getElementById("lesTitre").innerHTML = lesTitre[1];
    document.getElementById("popUp_para").innerHTML = paragraphe[1];
  } else {
    document.getElementById("lesTitre").innerHTML = lesTitre[2];
    document.getElementById("popUp_para").innerHTML = paragraphe[2];
  }
  popUp_plusV.style.marginTop = -popUp_plusV.clientHeight - 20 + "px";
  marginTop = -popUp_plusV.clientHeight;

  const bas = setInterval(() => {
    if (popUp_plusV.style.marginTop != "0px") {
      popUp_plusV.style.marginTop = marginTop + 1 + "px";
      marginTop = marginTop + 1;
    } else {
      clearInterval(bas);
    }
  }, 0);
};

const retourPop = () => {
  let popUp_plusV = document.getElementById("popUp_plus");
  marginTop = 0;

  const haute = setInterval(() => {
    if (popUp_plusV.style.marginTop != popUp_plusV.clientHeight + "0px") {
      popUp_plusV.style.marginTop = marginTop - 1 + "px";
      marginTop = marginTop - 1;
    } else {
      clearInterval(haute);
      popUp_plusV.style.display = "none";
    }
  }, 0);
};

let backImage = document.getElementById("imageTrailer");
let videoPlay = document.getElementById("videoPlay");
const video = () => {
  backImage.style.background = "none";
  play_video.style.display = "none";
  videoPlay.style.display = "flex";
};
var filmNow = 0;
let tabFilmP = [
  "Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une secte de guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De retour chez lui à Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman.",
];
let titreFilm = [
  "Batman begins",
  "Batman the dark knight",
  "Batman the dark knight rise",
];
let imageAffiche = [
  "Illustrations/Bathome_ba1.png",
  "Illustrations/batAffiche2.png",
  "Illustrations/batAffiche3.png",
];
let tabParagraphe = document.getElementById("tabParagraphe");
let changeImage = document.getElementById("tabImage");
let tabTitre = document.getElementById("tabTitre");
const nextFilm = () => {
  if (filmNow == 0) {
    tabParagraphe.innerHTML = tabFilmP[0];
    changeImage.src = imageAffiche[0];
    tabTitre.innerHTML = titreFilm[0];
    filmNow = 1;
  } else if (filmNow == 1) {
    tabParagraphe.innerHTML = tabFilmP[0];
    changeImage.src = imageAffiche[1];
    tabTitre.innerHTML = titreFilm[1];
    filmNow = 2;
  } else {
    tabParagraphe.innerHTML = tabFilmP[0];
    changeImage.src = imageAffiche[2];
    tabTitre.innerHTML = titreFilm[2];
    filmNow = 0;
  }
};

// recuperation du width du formulaire

setTimeout(() => {
  let largeur = document.getElementById("form").scrollWidth;
  document.getElementById("testMenu").style.width = largeur + "px";
}, 5000);

// Affichage du select

let testMenu = document.getElementById("testMenu");
let receptionChoix = document.getElementById("receptionChoix");
const afficheSelect = () => {
  if (testMenu.style.display == "none") {
    testMenu.style.display = "block";
  } else {
    testMenu.style.display = "none";
  }
};

// recevoir le choix du select

const reception = (valeur) => {
  receptionChoix.innerHTML = valeur;
  afficheSelect();
};

let nextBat = document.querySelector(".nextBatman");
nextBat.addEventListener("click", function name(params) {
  suivant();
});



let carte3=document.querySelectorAll(".carte3")


const showChild=(element)=>{
element.children[0].style.display="flex";
}
const hideChild=(element)=>{
  element.children[0].style.display="none";
  }

for (let index = 0; index < carte3.length; index++) {
  carte3[index].addEventListener('mouseenter',function aa() {
    showChild(carte3[index])
  })  
  carte3[index].addEventListener('mouseleave',function aa() {
    hideChild(carte3[index])
  })  
}



let imagePatt=document.querySelectorAll(".imagePatt")
for(let i=0;i<imagePatt.length;i++){
  // imagePatt[i].style.background="url(../Illustrations/a"+i+1+".jpg) 100% center"
  // console.log(i);
  imagePatt[i].style.background="url(../Illustrations/a"+(i+1)+".jpg)"
imagePatt[i].style.backgroundPosition="center"
imagePatt[i].style.backgroundSize="100%"
console.log(i+1);
}

// imagePatt[0].style.background="url(../Illustrations/a"+4+".jpg) 100% center"
// imagePatt[0].style.backgroundPosition="100%"