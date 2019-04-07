---
title: Samoizvršne anonimne funkcije
layout: lekcija-napredni-js
permalink: /samoizvrsne-anonimne-funkcije
---

**Samoizvršna anonimna funkcija** (*self-executing anonymous function*) ili **smesta pozvan funkcijski izraz** (*immediately invoked function expression*, skraćeno IIFE) je anonimna funkcija koja se izvršava odmah nakon što je definisana.

Samoizvršna anonimna funkcija je pre ES6 standarda služila za kreiranje lokalnog opsega i izbegavanje zagađenja globalnog imenskog prostora.

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

## Vraćanje vrednosti

Samoizvršna funkcija može da vrati vrednost po potrebi, na sledeći način:

```js
var rezultat = (function() {
  // telo funkcije
}())
```

Ovo se uglavom koristi za [modul obrazac](/javascript-obrazac-modul) u Javascriptu. Tako pravimo modul zatvorenog opsega, koji ima neke javne metode:

```js
const mathModule = (function() {

  /*** PRIVATNO ***/

  const MAX_SPEED = 256;
  let currentSpeed = 0;

  function toDegrees (angle) {
    return angle * (180 / Math.PI);
  }

  function toRadians (angle) {
    return angle * (Math.PI / 180);
  }

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

  /*** JAVNO ***/

  return {
    toDegrees: toDegrees,
    toRadians: toRadians
  };
})();
```

U slučaju vraćanja vrednosti ne moramo stavljati anonimnu funkciju između zagrada, one se mogu nalaziti i nakon funkcije:

```js
var rezultat = function() {
  // telo funkcije
}()
```

Ova sintaksa funkcioniše, ali može da izgleda zbunjujuće, jer, ako ne pročitate kraj funkcije, nećete znati da li je `rezultat` funkcija ili vraćena vrednost samoizvršne funkcije.

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
