



const nameInput = document.getElementById('nameInput');
const saveButton = document.getElementById('saveButton'); // Ottengo i riferimenti agli elementi HTML
const deleteButton = document.getElementById('deleteButton');
const savedName = document.getElementById('savedName');


saveButton.addEventListener('click', function() {  // Aggiungo un evento click al pulsante "Salva"
 
  const name = nameInput.value; // Prendo il valore dall'input field
  
  localStorage.setItem('savedName', name); // Salvo il valore su localStorage
  
  savedName.innerText = name;  // stampo e aggiorno il valore mostrato sopra l'input field
});


deleteButton.addEventListener('click', function() {   // Aggiungo un evento click al pulsante "Cancella"
  
  localStorage.removeItem('savedName'); // Rimuovo il valore da localStorage
  
  savedName.innerText = ''; // Rimuovo il valore mostrato sopra l'input field
});


const savedNameValue = localStorage.getItem('savedName'); // Ritorno un valore salvato su localStorage
if (savedNameValue) {
  
  savedName.innerText = savedNameValue;   // Se c'è un valore, lo mostriamo sopra l'input field
}
