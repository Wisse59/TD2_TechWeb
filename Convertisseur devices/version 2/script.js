function convertir(nbAConvertir) {
    let euro = document.getElementById("euro");
    let usd = document.getElementById("usd");
    let aud = document.getElementById("aud");
    //recup des id pour l'euro, l'usd et l'aud

    //Les taux du départ
    let tauxUSD = 1.01; 
    let tauxAUD = 1.47; 

    let montantEUR; //declaration de variable

    if (nbAConvertir === "euro") {
        montantEUR = parseFloat(euro.value);
    } else if (nbAConvertir === "usd") {
        montantEUR = parseFloat(usd.value) / tauxUSD;
    } else if (nbAConvertir === "aud") {
        montantEUR = parseFloat(aud.value) / tauxAUD;
    }

    if (isNaN(montantEUR)) {
        euro.value = "";
        usd.value = "";
        aud.value = "";
        return;
    }

    //actualisation des trois champs
    euro.value = (montantEUR).toFixed(2);
    usd.value = (montantEUR * tauxUSD).toFixed(2);
    aud.value = (montantEUR * tauxAUD).toFixed(2);
}

//conversion automatique sans bouton
document.getElementById("euro").addEventListener("input", () => convertir("euro"));
document.getElementById("usd").addEventListener("input", () => convertir("usd"));
document.getElementById("aud").addEventListener("input", () => convertir("aud"));

document.addEventListener("DOMContentLoaded", function () {
    // mettre USD et AUD en gris (sans readonly)
    document.getElementById("usd").style.backgroundColor = "#f4f4f4";
    document.getElementById("aud").style.backgroundColor = "#f4f4f4"; //couleur noire clair

    convertir("euro");
});