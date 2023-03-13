

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petNameame = petName;                      //* Creo OGGETTO-lo Stampo-il timbro
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }


    sameOwner(otherPet) {
        return this.owner === otherPet.owner  //*invoco il metodo sameowner dell'oggetto my pet e gli passo l'oggetto Otherpet

    }                                         //  gli do un argomento da comparare
}

//* creo due animali

let myPet = new Pet('Bati', 'David', 'Cane', 'Maremmano')
let otherPet = new Pet('Sandy', 'David', 'Gatto', 'Siamese')



console.log(myPet.sameOwner(otherPet)) // Output True




function addPet() {
    
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;//prendo i valori del campo form
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

   
    const pet = new Pet(petName, ownerName, species, breed);// creo un istanza di un nuovo oggetto e gli passo argomenti


    const petList = document.getElementById("petList");
    const li = document.createElement("li");//Creo un nuovo elemento HTML li
    li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - proprietario: ${pet.ownerName}`;//la proprietà textContent dell'elemento li viene impostata utilizzando una stringa di testo che rappresenta l'oggetto 
    petList.appendChild(li);//l'elemento li viene aggiunto come figlio dell'elemento petList utilizzando il metodo appendChild(), in modo che sia visualizzato come un elemento della lista sulla pagina HTML.

   
    document.getElementById("petName").value = "";
    document.getElementById("ownerName").value = "";
    document.getElementById("species").value = "";
    document.getElementById("breed").value = "";
}
