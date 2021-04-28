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

/* var sequenzaNumerica = [];

for (var index = 0; index < 10; index++) {
   var num = prompt('inserisci un numero');
    sequenzaNumerica.push(num);
}

console.log(sequenzaNumerica);

var somma = 0;
for (var i = 0; i < sequenzaNumerica.length; i++) {
    
    somma += Number(sequenzaNumerica[i]);
}

console.log(somma); */


/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa */

/* var invitati = ['Andrea','Luca','Mario','Elisa','Karol','Pippo','Francesco','Berto'];

var userName = prompt('inserisci il tuo nome');
messaggio = 'non sei nell\'elenco';
for (let index = 0; index < invitati.length; index++) {
    if (userName==invitati[index]){
        messaggio = 'Benvenuto, puoi partecipare alla festa';
        
    }
    
}
 console.log(messaggio); */

 /* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.  */

/* var sequenzaNumericaDispari = [];

for (var index = 0; index < 6; index++) {
   var num = prompt('inserisci un numero');
   if ( num % 2 != 0){
       sequenzaNumericaDispari.push(num);
    }
}

console.log(sequenzaNumericaDispari); */

/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */


var listaN = [];

var N = parseInt(prompt('inserisci un numero'));

for (let i = 0; i < N; i++) {
    listaN[i]= Math.pow((i+1),3);
    
}
console.log(listaN);