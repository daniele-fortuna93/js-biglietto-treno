// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// Richiesta km da percorrere e controllo dati inseriti
var km = parseInt(prompt("Inserisca la distanza da percorrere in km."));
if ( isNaN(km)) {
  alert("Per favore inserisca un valore numerico.");
  km = parseInt(prompt("Inserisca la distanza da percorrere in km."));
}

// Richiesta eta e controllo dati inseriti
var eta = parseInt(prompt("Inserisca la sua età."));
if ( isNaN(eta)) {
  alert("Per favore inserisca un valore numerico.");
  eta = parseInt(prompt("Inserisca la sua età."));
}

// Prezzo biglietto senza sconto
var costoBiglietto = km * 0.21;

// Ulteriore controllo dati inseriti dall'utente e applicazione sconto
if ( isNaN(km) || isNaN(eta) ){
  alert("Mi dispiace i dati inseriti sono errati, ricarica la pagina.");
  costoBiglietto = "Non è stato possibile calcolare il costo del biglietto.";
} else if ( eta > 65) {
  costoBiglietto ="Grazie alla tariffa Over65, il costo del biglietto è: " + (Math.round((costoBiglietto - ( (costoBiglietto * 40) / 100)) *100) / 100) + "€";
} else if ( eta < 18) {
  costoBiglietto ="Grazie alla tariffa Under18, il costo del biglietto è: " + (Math.round((costoBiglietto - ( (costoBiglietto * 20) / 100)) *100) / 100) + "€";
} else {
  costoBiglietto = "il costo del biglietto è: " + costoBiglietto + "€";
}
  document.getElementById('biglietto').innerHTML = costoBiglietto;
