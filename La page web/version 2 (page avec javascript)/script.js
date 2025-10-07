let lienWiki = document.querySelector("#liensImages a"); //selection du lien
lienWiki.href = "https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal";
//changement par le lien français

let bouton = document.querySelector("button");
let inputTexte = document.querySelector("#texte");

bouton.addEventListener("click", function () {
  let valeur = inputTexte.value.trim();

  if (valeur === "Oui" || valeur === "Non") {
    //rien ne se passe si c'est "Oui" ou "Non"
  } else {
    // On change le texte de l'etiquette sinon
    inputTexte.value = "";
    inputTexte.placeholder = "Il faut mettre Oui ou Non";
    }
});
document.getElementById("choix1").nextElementSibling.textContent = "HP";
/*nextSibling sert à changer le label et non pas l'input*/
document.getElementById("choix2").nextElementSibling.textContent = "Casque";
document.getElementById("choix3").nextElementSibling.textContent = "Bluetooth";

let radios = document.querySelectorAll('input[name="choix"]');
let range = document.querySelector('input[type="range"]');
let labelVolume = range.nextSibling.nextSibling;

radios.forEach(function(radio) {
  radio.addEventListener("change", function() {
    if (this.id === "choix1") {
      labelVolume.textContent = "Volume HP";
    } else if (this.id === "choix2") {
      labelVolume.textContent = "Volume Casque";
    } else if (this.id === "choix3") {
      labelVolume.textContent = "Volume Bluetooth";
    }
  });
});

range.max = 100; //passage de 11 à 100
console.log(range.max); //en console

let affichage = document.createElement("p");
//element pour afficher la val sous la barre

labelVolume.insertAdjacentElement("afterend", affichage); //positionné après le label Volume

range.addEventListener("input", function() {
  affichage.textContent = "Valeur actuelle : " + this.value; //on retransmet la valeur en input
});

document.querySelector("label[for='case']").textContent = "Mute"; //texte changé avec querySelector et textContent

let muteLaCase = document.getElementById("case"); //id de la case
let barreVolume = document.querySelector('input[type="range"]'); // la barre de volume

muteLaCase.addEventListener("change", function () {
  if (this.checked) {
    barreVolume.disabled = true; //désactive la barre de son
  } else {
    barreVolume.disabled = false; //la réactiver
  }
});

let partieLiensImages = document.getElementById("liensImages"); //l'id du div des liens et images

//image avec lien, et sa taille/son alt
let image = document.createElement("img");
image.src = "https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg";
image.width = 200; //largeur de 200
image.alt = "logo UPHF";

//image a la fin du div
partieLiensImages.appendChild(image);

//menu à cases à cocher pour montrer ou cacher les parties
document.addEventListener("DOMContentLoaded", function () {
  let menu = document.createElement("div");
  menu.id = "menu";
  menu.innerHTML = `
    <h2>Menu</h2>
    <label><input type="checkbox" id="chkLiens"> Lien et images</label><br>
    <label><input type="checkbox" id="chkElements"> Des éléments</label><br>
    <label><input type="checkbox" id="chkProgression"> Barres de progression</label><br>
  `;

  //menu au début du body
  document.body.insertBefore(menu, document.body.firstChild);

  let sections = document.querySelectorAll("body > div"); 
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id !== "menu") {
      sections[i].style.display = "none";
    }
  }
  //cases du menu
  let chkLiens = document.getElementById("chkLiens");
  let chkElements = document.getElementById("chkElements");
  let chkProgression = document.getElementById("chkProgression");

  //montrer ou masquer les sections selon les cases
  chkLiens.addEventListener("change", function () {
    document.getElementById("liensImages").style.display = this.checked
      ? "block"
      : "none";
  });

  chkElements.addEventListener("change", function () {
    document.getElementById("elements").style.display = this.checked
      ? "block"
      : "none";
  });

  chkProgression.addEventListener("change", function () {
    document.getElementById("progression").style.display = this.checked
      ? "block"
      : "none";
  });
});
