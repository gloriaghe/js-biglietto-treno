// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

//chiedi km da percorrere
const kmUtente = parseInt (prompt ("quanti km devi percorrere?"));
    console.log(kmUtente);

//chiedi età
const etaUtente = parseInt (prompt ("Qual è la tua età?"));
    console.log(etaUtente);


const costoKm = 0.21;

let prezzo = kmUtente * costoKm;


//calcolo prezzo
if (etaUtente < 18){
    const scontoMin = ((costoKm / 100) * 80) ;
    prezzo = kmUtente * scontoMin;
      console.log(prezzo);
} else if (etaUtente > 64){
    const scontoOver = ((costoKm / 100) * 60) ;
    prezzo = kmUtente * scontoOver;
      console.log(prezzo);
} 

// prezzo finale all'utente

document.getElementById("prezzosuHTML").innerHTML = "Il prezzo totale è di &euro; " + prezzo.toFixed(2);  


//BONUS

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

if (risultato === "minorenne"){
    document.getElementById("sconto-spiegato").innerHTML = "Il prezzo che ti è stato applicato è comprensivo di uno sconto del 20% in quanto minorenne"
} else if (risultato === "over"){
    document.getElementById("sconto-spiegato").innerHTML = "Il prezzo che ti è stato applicato è comprensivo di uno sconto del 40% in quanto over 65"
} else {
    document.getElementById("sconto-spiegato").innerHTML = "Purtoppo non hai diritto a nessuno sconto non essendo nè minorenne nè over 65."
 }