---
title: Tipovi podataka u Javaskriptu
layout: lekcija-js
permalink: tipovi-podataka-u-javaskriptu
---

**U Javascriptu se tip podatka ne mora eksplicitno navesti u vreme proglašenja varijable, već se on prećutno određuje na osnovu dodeljene vrednosti.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/T0VLAWelSUA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

U Javascriptu postoji 7 tipova podataka:

- šest prostih tipova:
  - broj (*number*)
  - struna (*string*)
  - logički tip (*boolean*)
  - null
  - undefined
  - symbol (novo u ECMAScript 6)
- i objekat (*object*), koji označava sve složene strukture, uključujući funkciju, niz, mapu i skup.

## Provera tipa podatka (`typeof`)

Tip podatka neke vrednosti možemo proveriti pomoću `typeof` operatora, na sledeći način:

{:.ulaz}
```js
/* PROSTI TIPOVI */

// logicki (bulov) tip
const jelOtvoreno = true
console.log(typeof jelOtvoreno)

// broj
const dnevniPazar = 30000
console.log(typeof dnevniPazar)

// tekst odnosno struna
const pozdrav = 'Dobro jutro komšija'
console.log(typeof pozdrav)

/* SLOZENI TIPOVI */

// niz
const nizBrojeva = [1, 2, 3, 4, 5]
console.log(typeof nizBrojeva)

// objekat
const stolica = {
  brojNogu: 4,
  nova: false,
  opis: "Drvena stolica sa naslonom"
}
console.log(typeof stolica)
```
