
// Ottengo il valore precedente del contatore dalla sessionStorage, se esiste
let count = sessionStorage.getItem('count') || 0;

// Ottengo il campo di testo in cui visualizzare il contatore
let counterDisplay = document.getElementById('counter');

// Aggiorno il valore del contatore e salvalo nella sessionStorage ogni secondo
setInterval(() => {
  count++;
  sessionStorage.setItem('count', count);
  counterDisplay.textContent = count;
}, 1000);
