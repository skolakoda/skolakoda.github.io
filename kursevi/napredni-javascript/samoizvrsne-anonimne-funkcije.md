---
title: Samoizvršne anonimne funkcije
layout: lekcija-napredni-js
permalink: /samoizvrsne-anonimne-funkcije
---

**Samoizvršna anonimna funkcija (*self-executing anonymous function*) ili smesta pozvan funkcijski izraz (*immediately invoked function expression*, IIFE) je funkcija koja se izvršava odmah nakon što je definisana.**

Samoizvršna anonimna funkcija je jezički idiom u Javascriptu kojim pravimo lokalni opseg i izbegavamo zagađenje globalnog imenskog prostora.

## Pozivanje anonimne funkcije

Do sada smo anonimne funkcije uglavnom koristili za povratne pozive. Postoji još jedan način primene anonimne funkcije - pozivanje odmah nakon što se definiše:

{:.ulaz}
```js
(function() {
  console.log('Anonimna funkcija radi')
})()
```

Ova sintaksa može delovati čudno, ali samo smeštamo funkcijski izraz unutar zagrada, iza kojih se nalazi drugi par zagrada. Drugi par zagrada je poziv anonimne funkcije, i tu možemo proslediti argumente:

{:.ulaz}
```js
(function (ime) {
  console.log('Zdravo ' + ime)
})('Mile')
```

Postoji više načina da izvršimo anonimnu funkciju. Npr, možemo prvi par zagrada zatvoriti na kraju koda:

{:.ulaz}
```js
(function () {
  console.log('Anonimna funkcija radi')
}())
```

Takođe, možemo koristiti `void` operator i onda ne moramo zatvarati anonimnu funkciju u zagrade:

{:.ulaz}
```js
void function() {
  console.log('Anonimna funkcija radi')
}()
```

## Opseg bloka kao alternativa

Ranije su se samopozivajuće anonimne funkcije koristile da zatvorimo promenljive u opseg: 

{:.ulaz}
```js
(function () {
  var ime = "Aragorn"
})()

console.log(ime)
```

U verziji ES6 je uveden opseg bloka za `let` i `const`, što je umnogome smanjilo potrebu za pravljenjem opsega pomoću anonimnih funkcija:

{:.ulaz}
```js
{
  let ime = "Aragorn"
}

console.log(ime)
```

## Literatura

- MDN, [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
