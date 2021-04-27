/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

/* var parola1 = prompt('inserisci una parola');
var parola2 = prompt('inserisci una parola diversa');

if (parola1.length > parola2.length){
    console.log(parola2);
    console.log(parola1);
}else if (parola1.length == parola2.length) {
console.log('le parole sono lunghe uguali');
} else {
    console.log(parola1);
    console.log(parola2);
}
 */

/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. (modificato)  */

var sequenzaNumerica = [];

for (var index = 0; index < 10; index++) {
   var num = prompt('inserisci un numero');
    sequenzaNumerica.push(num);
}

console.log(sequenzaNumerica);

var somma = 0;
for (var i = 0; i < sequenzaNumerica.length; i++) {
    
    somma += Number(sequenzaNumerica[i]);
}

console.log(somma);