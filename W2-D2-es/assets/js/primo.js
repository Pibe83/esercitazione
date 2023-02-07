

var Aldo ='Aldo,';

let cliente = 'Cliente,';
//Es 2
const variabile = '3.14,';
//ES 2

//es1
var es2 = Aldo + '' + cliente + '' + variabile;
//es1

document.getElementById('concatena').innerHTML = Aldo +  cliente +  variabile ;
//Es 2
document.getElementById('concatena2').innerHTML = es2


//es3




var nome1 = 'Mario'

{
let nome1 = 'Carla'

document.getElementById('let').innerHTML = nome1;
document.getElementById('let2').innerHTML = nome1;
document.getElementById('let3').innerHTML = nome1;



}


document.getElementById('var').innerHTML = nome1;
document.getElementById('final').innerHTML = nome1;
document.getElementById('let2').innerHTML = nome1;

// esercizio4
var numero = 15;
var piu = numero+ numero;
var meno = numero - 5;

document.getElementById('iniziale').innerHTML  += numero;
document.getElementById('valore1').innerHTML  += piu + ','  + ++piu;
document.getElementById('valore2').innerHTML  += meno + ',' + --meno;
document.getElementById('valore3').innerHTML  += numero * 3 + ',';

document.getElementById('valore4').innerHTML  += numero / 3 + ',';
 
document.getElementById('valore5').innerHTML  += numero  + 'è un numero';


