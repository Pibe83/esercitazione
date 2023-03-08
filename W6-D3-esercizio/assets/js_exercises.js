/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
let myself = "David";

/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla']
console.log (pets);

/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.

*/

pets.push("Wolf")
console.log(pets);


/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/

pets.pop("Wolf");
console.log(pets);

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


let firstPet = pets.shift(); // Rimuove primo elemento dall'array e lo assegna alla variabile firstPet
pets.push(firstPet); // Aggiunge l'elemento firstPet (cioè quello rimosso in precedenza) alla fine dell'array
console.log(pets); 




/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/

for (let i = 0; i < pets.length; i++) {
    if (pets[i].startsWith("c")) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const licensePlateNumber = ["AB9C123", "D99F456", "GHI00w789"];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlateNumber[i]; // si aggiunge una nuova proprietà licensePlate con un valore preso dall'array licensePlateValues.
}

console.log(cars);

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

function addCar(brand, model, color, licensePlate, trims){ //prendo i parametri

const newCar = {brand, model, color,licensePlate, trims};//creo nuovo oggetto
cars.push(newCar) // inserisco nuovo oggetto
return cars.length //nuova lunghezza array

}

const newLength = addCar("Toyota", "Yaris","black", "JKL012",'life', 'style', 'r-line' );  //nuovo oggetto
console.log(cars); // stampa l'array aggiornato
console.log(newLength); // stampa la nuova lunghezza dell'array cars




/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
const justFirstTrims = []
// inserisci la tua funzione qui

/*function extractFirstTrims(cars) {
    const justFirstTrims = [];
  
    for (const car of cars) {
      const trims = car.trims;
      if (Array.isArray(trims) && trims.length > 0) {
        justFirstTrims.push(trims[0]);
      }
    }
  
    return justFirstTrims;
  }*/
  

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];  // iterare attraverso l'array "cars"
    if (car.color.length <= 4) { // controllo la lunghezza della proprietà "color"
      console.log('Fizz');
    } else {
      console.log('Buzz');
    }
  }


/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.

*/

const filteredCars = cars.filter(car => car.trims.length > 2); // verifica se la lunghezza dell'array trims dell'oggetto car è maggiore di 2

console.log(filteredCars);

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
