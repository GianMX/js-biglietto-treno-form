// GENERA BUTTON action times
var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener( 'click',
function() {
// INSERT YOUR DATA
  var inputEta = document.getElementById("fascia-eta");
  var eta = inputEta.value;
  var inputNome = document.getElementById("nome-utente");
  var nomeUtente = inputNome.value;
  var inputKm = document.getElementById("km");
  var percorrenza = parseInt(inputKm.value);
  var prezzoAlKilometro = 0.21;
  var prezzoBiglietto = prezzoAlKilometro * percorrenza;
  var offerta = "Tariffa Standard"
// WHAT IF ? QUOTE SELECTOR BASE ON ETA
    if (eta == "minorenne") {
     prezzoBiglietto = (prezzoBiglietto * 0.80);
     offerta = "Sconto Minorenne";
    } else if (eta == "over65") {
     prezzoBiglietto = (prezzoBiglietto * 0.60);
     offerta = "Sconto Anzianità";
}
// RANDOM NUMBER GENERATOR FOR CARROZZA AND CP
var carrozza = Math.floor(Math.random() * 9) +1;
var cp = Math.floor(Math.random() * (100000 - 90000 + 1 )) + 90000;
// TICKET GENERATOR INFO
document.getElementById('nome-passegero').innerHTML = nomeUtente;
document.getElementById('offerta').innerHTML = offerta;
document.getElementById('costo-biglietto').innerHTML = prezzoBiglietto.toFixed(2) + '&euro;';
document.getElementById('carrozza').innerHTML = carrozza;
document.getElementById('codice-cp').innerHTML = cp;
// REMOVE HIDDEN ON BIGLIETTO AND ADD SHOW
var bigliettoDiv = document.getElementById('biglietto');
bigliettoDiv.classList.remove('hidden');
bigliettoDiv.classList.add('show');
 }
);
// UNDONE ACTION WITH BTN ANNULLA
var buttonAnnulla = document.getElementById('annulla');
buttonAnnulla.addEventListener( 'click',
  function() {
    document.getElementById('nome-passegero').innerHTML = '';
    document.getElementById('offerta').innerHTML = '';
    document.getElementById('costo-biglietto').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice-cp').innerHTML = '';
    document.getElementById('km').value = '';
    document.getElementById("fascia-eta").value = '';
    document.getElementById("nome-utente").value = '';
// REMOVE SHOW ON BIGLIETTO AND ADD HIDDEN
    var bigliettoDiv = document.getElementById('biglietto')
    bigliettoDiv.classList.remove('show');
    bigliettoDiv.classList.add('hidden');
  }
);
