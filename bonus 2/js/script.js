// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

//chiedi km da percorrere
const kmUtente = parseInt (prompt ("quanti km devi percorrere?"));
    console.log(kmUtente);

//chiedi età
const etaUtente = parseInt (prompt ("Qual è la tua età?"));
    console.log(etaUtente);

//calcolo età
let risultato;
    //minorenne
if (etaUtente < 18){
    risultato = "minorenne";
    console.log(risultato);
    //over 65
} else if (etaUtente > 64) {
    risultato = "over";
    console.log(risultato);

    //tutti gli altri
} else {
    risultato = "altri";
    console.log(risultato);

}

let prezzo;

const costoKm = 0.21;

//calcolo sconto minori
const scontoMin = ((costoKm / 100) * 80) ;
console.log(scontoMin);

//calcolo sconto over
const scontoOver = ((costoKm / 100) * 60) ;
console.log(scontoOver);

//calcolo prezzo
if (risultato === "minorenne"){
    prezzo = kmUtente * scontoMin;
      console.log(prezzo);
} else if (risultato === "over"){
    prezzo = kmUtente * scontoOver;
      console.log(prezzo);
} else {
     prezzo = kmUtente * costoKm;
       console.log(prezzo);
 }

 //decimali

 let decimali = prezzo.toFixed(2);
    console.log(decimali);


// prezzo finale all'utente

document.getElementById("prezzosuHTML").innerHTML = "Il prezzo totale è di &euro; " + decimali;  


//BONUS

if (risultato === "minorenne"){
    document.getElementById("sconto-spiegato").innerHTML = "Il prezzo che ti è stato applicato è comprensivo di uno sconto del 20%"
} else if (risultato === "over"){
    document.getElementById("sconto-spiegato").innerHTML = "Il prezzo che ti è stato applicato è comprensivo di uno sconto del 40%"
} else {
    document.getElementById("sconto-spiegato").innerHTML = "Purtoppo non hai diritto a nessuno sconto."
 }