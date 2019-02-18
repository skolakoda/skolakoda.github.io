---
title: "Kako rade <i>callback</i> funkcije?"
layout: lekcija-napredni-js
permalink: /kako-rade-callback-funkcije
---

**Poznato je da možemo proslediti jednu funkciju drugoj kao argument.** Kako ovo radi? Funkcije u JavaScriptu su, u stvari, podaci, ali posebna vrsta podataka sa dve važne karakteristike:

- Sadrže kod.
- Mogu se izvršiti.

Pošto je funkcija kao i svaki drugi podatak, možemo je proslediti drugoj funkciji kao argument.

## Primer: Klasična povratna funkcija

U narednom primeru imamo glavnu funkciju, koja prima drugu funkciju kao parametar, a potom je izvršava.

{:.ulaz}
```js
function glavna(callback) {
  callback()  // izvršava prosledjenu funkciju
}

function x() {
  console.log("Ja sam funkcija x")
}

function y() {
  console.log("Ja sam funkcija y")
}

// pozivamo glavnu sa prosledjenim povratnim funkcijama
glavna(x)
glavna(y)
```

## Primer: Streličasta povratna funkcija

Umesto klasičnih možemo koristiti streličaste funkcije:

{:.ulaz}
```js
const glavna = callback => callback()

const x = () => console.log("Ja sam funkcija x")

const y = () => console.log("Ja sam funkcija y")

glavna(x)
glavna(y)
```

## Primer: Prosleđivanje vrednosti povratnoj funkciji

Glavna funkcija može proslediti argument povratnoj funkciji, na sledeći način:

{:.ulaz}
```js
function glavna(callback) {
  callback(42)
}

function sporedna(e) {
  console.log("Prosledjena mi je vrednost", e)
}

glavna(sporedna)
```

## Primer: Sabiranje rezultata povratnih funkcija

Prvo ćemo definisati dve jednostavne funkcije, koje vraćaju fiksne vrednosti. Potom ćemo napraviti treću, koja prihvata dve funkcije kao parametre, izvršava ih i vraća zbir onoga što one vrate. Konačno, prosledićemo dve konkretne funkcije trećoj, da ih ona izvrši:

```js
function funkcija1() {
  return 1
}

function funkcija2() {
  return 2
}

function izvrsiObe(a, b) {
  return a() + b ()
}

izvrsiObe(funkcija1, funkcija2)
```

Istu stvar možemo postići ako prosledimo anonimne funkcije kao parametre.