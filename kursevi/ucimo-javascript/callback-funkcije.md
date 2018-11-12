---
title: "Povratne funkcije (<i>callback</i>)"
layout: lekcija-js
permalink: /callback-funkcije
---

**Povratna funkcija je funkcija koja se prosleđuje drugoj funkciji kao argument.**

Glavna funkcija izvršava povratnu funkciju, koju prima kao parametar.

Povratne funkcije su često anonimne.

## Prost primer: Klasična sintaksa

U narednom primeru imamo glavnu funkciju, koja prima drugu funkciju kao parametar, a potom je izvršava.

{:.ulaz}
```js
function glavna(callback) {
  callback()  // izvršava prosledjenu funkciju
}

function x() {
  console.log("Ja sam kolbek x")
}

function y() {
  console.log("Ja sam kolbek y")
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

const x = () => console.log("Ja sam kolbek x")

const y = () => console.log("Ja sam kolbek y")

glavna(x)
glavna(y)
```

## Primeri upotrebe

### Događaji

Anonimne povratne funkcije se često prosleđuju događajima, na primer:

{:.ulaz}
```js
document.body.addEventListener('click', function() {
  document.body.style.backgroundColor = '#dedede'
})
```

Anonimnu funkciju iz gornjeg primera možemo imenovati na sledeći način:

{:.ulaz}
```js
function promeniBoju() {
  document.body.style.backgroundColor = '#dedede'
}

document.body.addEventListener('click', promeniBoju)
```

Ukoliko povratna funkcija prima parametar, moramo je pozvati na sledeći način (ugnježdenu unutar anonimne funkcije):

{:.ulaz}
```js
function promeniBoju(boja) {
  document.body.style.backgroundColor = boja
}

document.body.addEventListener('click', function() {
  promeniBoju('#ededed')
})
```

### Filtriranje

Povratne funkcije se takođe prosleđuju `filter`, `map` i sličnim metodama:

{:.ulaz}
```js
const brojevi = [1, 4, 5, 6, 7, 8, 9, 0, 11, 2]
const filtrirano = brojevi.filter(x => x > 5)
console.log(filtrirano)
```

Anonimnu streličastu *callback* funkciju možemo imenovati na sledeći način:

{:.ulaz}
```js
const brojevi = [1, 4, 5, 6, 7, 8, 9, 0, 11, 2]
const jelVeceOdPet = x => x > 5

const filtrirano = brojevi.filter(jelVeceOdPet)
console.log(filtrirano)
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
