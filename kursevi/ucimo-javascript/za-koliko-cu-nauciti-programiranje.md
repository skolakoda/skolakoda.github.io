---
title: "Vežba: Za koliko ću naučiti programiranje?"
layout: lekcija-js
permalink: /vezba-koliko-ucenja
redirect_from: /za-koliko-cu-nauciti-programiranje
---

Prema [jednoj teoriji](https://en.wikipedia.org/wiki/Outliers_(book)), potrebno je 10 000 sati učenja u nekoj oblasti da postaneš ekspert. Polazeći od toga, recimo da je potrebno 2000 časova učenja da postaneš početnik.

Ono od čega zavisi brzina napredovanja jeste koliko sati dnevno u proseku učimo programiranje.

## Zadatak

Napiši program koji prima `satiUcenjaDnevno` kao unos, i na osnovu toga izračunava i ispisuje koliko nam je dana učenja potrebno da bismo postali početnik, i koliko nam je dana potrebno da bismo postali ekspert.

{:.ulaz.resenje}
```js
satiUcenjaDnevno = prompt('Koliko časova dnevno u proseku učiš programiranje?')

satiDoPocetnika = 2000
satiDoEksperta = 10000

danaDoPocetnika = satiDoPocetnika / satiUcenjaDnevno
danaDoEksperta = satiDoEksperta / satiUcenjaDnevno

console.log(`Potrebno je ${danaDoPocetnika} dana učenja da bi postao početnik.`)
console.log(`Potrebno je ${danaDoEksperta} dana učenja da bi postao ekspert.`)

```

## Unapređen zadatak

Recimo da osoba, nakon što postane junior, bude primljena na praksu ili počne da radi. Od tog trenutka, ona će programirati 8 sati dnevno. Izmeni program tako da uzmeš i to u obzir.

{:.ulaz.resenje}
```js
let satiUcenjaDnevno = 4
const satiDoPocetnika = 2000
const satiDoEksperta = 10000

const danaDoPocetnika = satiDoPocetnika / satiUcenjaDnevno
satiUcenjaDnevno = 8  // promena tempa

const danaOdPocetnikaDoEksperta = (satiDoEksperta - satiDoPocetnika) / satiUcenjaDnevno
const danaDoEksperta = danaDoPocetnika + danaOdPocetnikaDoEksperta

console.log("Potrebno je", danaDoPocetnika, "dana ucenja da bi postao pocetnik.")
console.log("Potrebno je", danaDoEksperta, "dana ucenja da bi postao ekspert.")

```
