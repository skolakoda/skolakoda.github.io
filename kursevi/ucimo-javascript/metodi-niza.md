---
title: Metode niza u Javascriptu
layout: lekcija-js
permalink: /javascript-metodi-niza
---

**Nizovi u Javascriptu imaju mnoštvo ugrađenih metoda. Neke od metoda, poput `sort`, su mutatorske, jer menjaju izvorni niz, dok druge vraćaju novu vrednost, a ostavljaju izvorni niz nepromenjen.**

## `slice`

Metod `slice()` vraća podniz, bez modifikovanja izvornog niza. Prvi parametar je početni indeks, a drugi završni (oba indeksa se zasni­vaju na nuli). Na primer:

{:.ulaz}
```js
const niz = [1, 2, 3, 4, 5, 6, 7]

console.log(niz.slice(0, 1))
console.log(niz.slice(0, 2))
console.log(niz.slice (1, 3))

console.log(niz) // originalni niz nije isecen
```

Vidimo da nakon svih „isecanja“, izvorni niz ostaje isti.

## `splice` (mutatorska)

Metod `splice()` modifikuje izvorni niz, tako što uklanja podniz i vraća ga. Prva dva parametra su početni indeks i dužina (broj elemenata) podniza koji treba ukloniti:

{:.ulaz}
```js
const niz = [1, 2, 3, 4, 5, 6, 7]

console.log(niz.splice(1, 3))
console.log(niz)  // originalni niz je isecen
```

Metod `splice()` opciono prima dodatne parametre, radi popunjavanja praznine novim elementima:

{:.ulaz}
```js
const niz = [1, 2, 3, 4, 5, 6, 7]

console.log(niz.splice(1, 2, 100, 101, 102, 103))
console.log(niz)  // originalni niz je isecen i popunjen
```

## `find` i `findIndex`

Ranije je za pretraživa­nje elemenata niza bilo potrebno izvršiti iteraciju i uporediti svaki element sa vrednošću, jer nisu postojali ugrađeni metodi. Iako su funkcije `indexOf()` i `lastlndexOf()` bile korisne za pronalaženje jedne vrednosti, nije postojao način za pronalaženje elementa koji se zasniva na složenim uslovima.

Od verzije ES6, sledeći ugra­đeni metodi olakšavaju pretragu niza:

- `Array.prototype.find`
- `Array.prototype.findIndex`

Oba metoda prihvataju *callback* funkciju, koja postavlja predikatski uslov. Na primer:

{:.ulaz}
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numbers.find(n => n > 5))
console.log(numbers.findIndex(n => n > 5))
```

## `Array.from`

U verziji ES6 uveden je vrlo koristan metod za konvertovanje vrednosti nalik nizu i iterabilnih vrednosti u nizove. Vrednosti nalik nizu imaju svojstvo `length` i indeksirane elemente.

{:.ulaz}
```js
const ime = "Vatroslav"

console.log(Array.from(ime))
```
