/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
let first = 2;
let second = 2; 
function crazySum(a,b) {
    if (a === b) {
        console.log((a + b)*3 )
    } else {
        console.log(a + b)
    }
}
crazySum(first, second)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
let numero = 100;
function boundary(num) {
    if (num >= 20 && num <= 200 || num === 400) {
        console.log(true)
    } else {
        console.log(false)
    }
}    
boundary(numero)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
let inputString = 'EPICODE';
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed)
}
reverseString(inputString);
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

  
  

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
let numero = 9;
let randomArray = [];
function giveMeRandom(n) {
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 11);
        randomArray.push(randomNumber);
    }
    console.log(typeof.randomArray)
}
giveMeRandom(numero)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
let latoUno = 10;
let latoDue = 40;
function area(l1, l2) {
    console.log("area rettangolo è: " + l1*l2)
}
area(latoUno, latoDue)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/*
let numero = 20
function crazyDiff(a) {
    if ((a-19)>19) {
        console.log("Questa è la differenza moltiplicata per 3: " + (a-19)*3)
    } else {
        console.log("Questa è la differenza: " + (a-19))
    }
}
crazyDiff(numero)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*
let myChar = "codeina"
function codify(str) {
    let prova = str.slice(0,4)
    if (prova === "code") {
        console.log(str)
    } else {
        console.log("code" + str)
    }
}
codify(myChar)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*
let numero = 21;
function check3and7(num) {
    if (num % 3 == 0 || num % 7 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}
check3and7(numero)
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*
let myChar = "Ciao";
function cutString(str) {
    console.log(str.slice(1, -1))
}
cutString(myChar)
*/