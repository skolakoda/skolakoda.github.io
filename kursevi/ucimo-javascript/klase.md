---
title: Klase u Javascriptu
layout: lekcija-js
permalink: /javascript-klase
---

**Klasa je kalup za pravljenje novih objekata. Stil programiranja u kome se kod organizuje u klase, naziva se objektno-orjentisano programiranje.**

Pre uvođenja klasa u Javascript, u tu svrhu su se koristile konstruktorske funkcije.

## Primer: klasa Junak

U Javascriptu, možemo "ručno" praviti objekte, na sledeći način:

{:.ulaz}
```js
const covek = {
  energija: 100,

  napadni(neprijatelj) {
    neprijatelj.energija -= 20
  }
}

const ork = {
  energija: 100,

  napadni(neprijatelj) {
    neprijatelj.energija -= 20
  }
}

console.log('Pocetna energija orka: ' + ork.energija)
covek.napadni(ork)
covek.napadni(ork)
console.log('Trenutna energija orka: ' + ork.energija)
```

Međutim, možemo napraviti zajedničku klasu, na osnovu koje ćemo instancirati nove objekte:

{:.ulaz}
```js
class Junak {
  constructor() {
    this.energija = 100
  }
  
  napadni(neprijatelj) {
    neprijatelj.energija -= 20
  }
}

const covek = new Junak()
const ork = new Junak()

console.log('Pocetna energija coveka: ' + covek.energija)
ork.napadni(covek)
ork.napadni(covek)
console.log('Trenutna energija coveka: ' + covek.energija)
```

Objekti napravljeni na osnovu klase zovu se **instance**.

{:.uokvireno.ideja}
Po pravilu, naziv klase se piše velikim slovom, što je konvencija koje se drže razni jezici.

## `constructor` metoda

U telu klase se mogu nalaziti samo metode. Ako želimo da dodamo neko svojstvo, kao što je `energija`, to moramo učiniti unutar predviđenog `constructor` metoda.

Konstruktor je specijalni metod koji se koristi za inicijalizaciju objekta kojeg kreiramo pomoću klase. Klasa može imati samo jedan konstruktor.
