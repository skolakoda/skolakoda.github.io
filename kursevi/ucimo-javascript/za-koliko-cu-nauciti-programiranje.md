---
title: "Vežba: Za koliko ću naučiti programiranje?"
layout: lekcija-js
permalink: /za-koliko-cu-nauciti-programiranje
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