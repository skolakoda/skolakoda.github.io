---
title: Klase u Javascriptu
layout: lekcija-js
permalink: /javascript-klase
---

Umesto da imamo dva objekta, sa potpuno istim svojstvima i metodama, poput:

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
```

Možemo napraviti zajedničku klasu, na osnovu koje ćemo instancirati neograničen broj novih objekata (objekti napravljeni na osnovu klase se zovu instance):

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

**Objašnjenje**: u telu klase se mogu nalaziti samo metode. Ako želimo da dodamo neko svojstvo, kao što je `energija`, to moramo učiniti unutar predviđenog `constructor` metoda.
