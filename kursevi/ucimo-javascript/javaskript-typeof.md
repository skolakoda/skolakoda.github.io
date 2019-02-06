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

Kao što možemo videti, operator `typeof` vraća "objekat" i za niz. 

## Ispitivanje tipa objekta (napredno)

Kako možemo razlikovati objekat i niz? Napredno rešenje je da upotrebimo metod `Object.prototype.toString()`. Dobićemo naziv klase koja se koristi za kreiranje određenog objekta:

{:.ulaz}
```js
const nizBrojeva = [1, 2, 3, 4, 5]
const stolica = {
  brojNogu: 4,
  nova: false,
  opis: "Drvena stolica sa naslonom"
}

console.log(Object.prototype.toString.call(nizBrojeva)) // [object Array]
console.log(Object.prototype.toString.call(stolica)) // [object Object]
```

Neophodno je pozvati metod prototipa `toString()`, koji je definisan u prototipu konstruk­tora `Object`. Ako pozovemo metodu niza `toString()`, dobićemo drugačiji rezultat, redefinisan za specifičnu namenu.

Možemo takođe ispitati DOM elemente na isti način:

```js
Object.prototype.toString.call(document.body) // [object HTMLBodyElement]
```