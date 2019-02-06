---
title: Nizovi u Javascriptu
layout: lekcija-js
permalink: /javascript-nizovi
---

**Niz je, jednostavno, lista (sekvenca) vrednosti. Umesto da koristimo jednu promenljivu za čuvanje jedne vrednosti, možemo da koristimo jednu promenljivu za čuvanje velikog broja vrednosti.**

## Pravljenje niza

Da bismo deklarisali konstantu koja sadrži prazan niz, možemo da koristimo prazne uglaste zagrade:

```js
const niz = []
```

Da bismo napravili niz koji sadrži tri elementa, možemo napisati sledeće:

```js
const niz = [1, 2, 3]
```

Nizovi mogu da sadrže sve vrste vrednosti:

```js
const a = [1, "two", false, null, undefined]
```

## Pristupanje elementu

Elementi niza su indeksirani rednim brojevima, počev od nule. Prvi element ima indeks 0, drugi 1 i tako dalje. Da bismo pristupili elementu niza, navodimo indeks unutar uglastih zagrada:

{:.ulaz}
```js
const niz = [1, 2, 3]

console.log(niz[0])
console.log(niz[1])
```

Preko indeksa možemo i ažurirati vrednost elementa niza. U narednom primeru ažu­riran je treći element, pod indeksom 2:

{:.ulaz}
```js
const niz = [1, 2, 3]
niz[2] = 5

console.log(niz)
```

## Dodavanje elementa

Ako dodamo novi element putem indeksa, a ostavimo prazninu u nizu, na mestu praznine ostaje vrednost `undefined`. Na primer:

{:.ulaz}
```js
const niz = [1, 2, 3]
niz[6] = 7

console.log(niz)
```

Ispravan način da dodamo novi element na kraj niza je preko metode `push`:

{:.ulaz}
```js
const niz = [1, 2, 3]
niz.push(7)

console.log(niz)
```

## Struna kao niz znakova

Zanimljivo da možemo koristiti notaciju niza da bismo pristupili pojedinačnim znakovima unutar stringa:

{:.ulaz}
```js
const ime = 'Ana'

console.log(ime[0])
console.log(ime[1])
console.log(ime[2])
```
