---
title: Filtriranje niza
layout: lekcija-js
permalink: /filtriranje-niza
---

**Metoda `filter` je jedna od najkorisnijih metoda za rad sa nizovima.**

Ona prima *callback* funkciju kao parametar i vraća novi niz, nastao filtriranjem originalnog niza, po zadatom kriteriju. Povratna funkcija prima trenutni član niza, a vraća Bulovu vrednost, na osnovu koje `filter` filtrira. 

Ono što postižemo `filter` metodom možemo postići i `for` petljom sa uslovom unutar nje, ali filter metoda je za to namenjena.

## Filtriranje niza brojeva

U narednom primeru filtriramo brojeve veće od pet:

{:.ulaz}
```js
const brojevi = [1, 4, 5, 6, 7, 8, 9, 0, 11, 2]

const filtrirano = brojevi.filter(x => x > 5)

console.log(filtrirano)
```

## Filtriranje niza reči

U narednom primeru filtriramo imena koja počinju sa M:

{:.ulaz}
```js
const imena = ["Ana", "Fadil", "Marija", "Ivana", "Marko"]

const filtrirano = imena.filter(ime => ime.startsWith("M"))

console.log(filtrirano)
```
