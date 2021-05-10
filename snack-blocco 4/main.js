/* Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10 */

var Palla = {
    nome: 'palla',
    peso: 10
};

/* Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla. */

//Palla.peso = Number(prompt('cambia il peso della palla'));
//console.log(Palla);

/* Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D ) */

var TriangoloRettangolo = {
    base: 2,
    altezza: 2,
}

TriangoloRettangolo.ipotenusa = Math.sqrt(Math.pow(TriangoloRettangolo.base,2) + Math.pow(TriangoloRettangolo.altezza,2));

console.log(TriangoloRettangolo.ipotenusa);

TriangoloRettangolo.perimetro = TriangoloRettangolo.base + TriangoloRettangolo.altezza + TriangoloRettangolo.ipotenusa;
TriangoloRettangolo.area = (TriangoloRettangolo.base * TriangoloRettangolo.altezza) / 2;

console.log(TriangoloRettangolo);
