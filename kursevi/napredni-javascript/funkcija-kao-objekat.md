---
title: Funkcija kao objekat
layout: lekcija-napredni-js
permalink: /javascript-funkcija-kao-objekat
---

**U Javascriptu, funkcije su zapravo objekti, koji imaju svojstva i metode kao i ostali objekti. Ono što ih razlikuje od ostalih objekata je što se funkcije mogu pozivati.**

## Ugrađena svojstva funkcije

Kao i drugi objekti, funkcije imaju svojstvo `constructor` koje sadrži reference na konstruktor funkciju `Function()`:

{:.ulaz}
```js
function funkcija(a) {
  return a
}

console.log(funkcija.constructor)
```

Funkcije sadrže i svojstvo `length`, koje sadrži broj parametara koji funkcija očekuje:

{:.ulaz}
```js
function funkcija(a, b, c) {
  return a + b + c
}

console.log(funkcija.length)
```

## Ugrađeni metodi funkcije

Objekti funkcije, kao potomci najvišeg nadređenog objekta, dobijaju podrazumevane metode, kao što je `toString()`. Kada se metod `toString()` pozove na funkciji, vraća izvorni kod:

{:.ulaz}
```js
function funkcija(a, b, c) {
  return a + b + c
}

console.log(funkcija.toString())
```

Ako pozovemo metodu `toString()` na nekoj ugrađenoj funkciji, dobićemo `[native code]`, umesto tela funkcije, odnosno nećemo moći da vidimo izvorni kod.

## Literatura

- MDN, [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
