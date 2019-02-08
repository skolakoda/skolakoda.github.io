---
title: Statički metodi
layout: lekcija-napredni-js
permalink: /javascript-staticki-metodi
---

**Statički metodi su funkcije koje se nalaze na klasi, a ne na objektu instanci.**

Statički metodi se označavaju ključnom rečju `static`. Pozivaju se samo preko klase:

{:.ulaz}
```js
class Covek {
  static pozdrav() {
    console.log('Zdravo svima!')
  }
}

// statični metod je na klasi
Covek.pozdrav()

// nije na instanci
const mika = new Covek()
mika.pozdrav()  // mika.pozdrav is not a function
```

Statički metodi se koriste za kre­iranje pomoćnih funkcija, uglavnom u OOP jezicima poput Jave, gde funkcije ne mogu postojati samostalno. U Javascriptu nisu neophodni, ali koriste se za organizaciju koda.
