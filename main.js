/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

var parola1 = prompt('inserisci una parola');
var parola2 = prompt('inserisci una parola diversa');

if (parola1.length > parola2.length){
    console.log(parola1);
}else if (parola1.length == parola2.length) {
console.log('le parole sono lunghe uguali');
} else {
    console.log(parola2);
}