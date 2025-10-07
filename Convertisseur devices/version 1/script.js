function convertir() {
    let montantEuro = document.getElementById("euro").value; //recup de l'id euro

    if (montantEuro === "" || isNaN(montantEuro)) {
        alert("Merci d'entrer un montant valide en euros.");
        return; //fin de la fonction
    }

    montantEuro = parseFloat(montantEuro);
    //Conversion du texte en nb flottant

    //Les taux du départ
    let tauxUSD = 1.01; 
    let tauxAUD = 1.47; 

    let montantUSD = (montantEuro * tauxUSD).toFixed(2);
    let montantAUD = (montantEuro * tauxAUD).toFixed(2); //2 decimales
    

    document.getElementById("usd").value = montantUSD;
    document.getElementById("aud").value = montantAUD; //recup des id
}

//lien vers le la fonction de conversion
document.getElementById("convertir").addEventListener("click", convertir);

document.addEventListener("DOMContentLoaded", function () {
    let inputsReadonly = document.querySelectorAll("input[readonly]"); //selection des readonly
    inputsReadonly.forEach(function (input) {
        input.style.backgroundColor = "#f4f4f4ff"; //couleur noire clair
    });
});
