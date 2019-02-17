---
title: "Kako rade <i>callback</i> funkcije?"
layout: lekcija-js
permalink: /kako-rade-callback-funkcije
---

**Možemo definisati dve funkcije, i proslediti jednu drugoj kao argument.** 

## Prost primer: Klasična sintaksa

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

## Prost primer: Streličasta sintaksa

Umesto klasičnih možemo koristiti streličaste funkcije:

{:.ulaz}
```js
const glavna = callback => callback()

const x = () => console.log("Ja sam funkcija x")

const y = () => console.log("Ja sam funkcija y")

glavna(x)
glavna(y)
```

## Prosleđivanje vrednosti povratnoj funkciji

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
