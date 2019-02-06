---
title: Provera tipa u Javaskriptu
layout: lekcija-js
permalink: javaskript-typeof
---

**Provera tipa podatka u Javaskriptu vrši se pomoću `typeof` operatora.**

## Prosti tipovi

{:.ulaz}
```js
// logicki (bulov) tip
const jelOtvoreno = true
console.log(typeof jelOtvoreno)

// broj
const dnevniPazar = 30000
console.log(typeof dnevniPazar)

// tekst odnosno struna
const pozdrav = "Dobro jutro komšija"
console.log(typeof pozdrav)
```

## Složeni tipovi

{:.ulaz}
```js
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

Možemo videti da `typeof` operator vraća "objekat" i za niz. [Ispitivanje tipa objekta](/ispitivanje-tipa-objekta) deo je [naprednog Javascripta](/kursevi/napredni-javascript/).
