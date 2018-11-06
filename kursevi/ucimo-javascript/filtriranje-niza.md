---
title: Filtriranje niza
layout: lekcija-js
permalink: /filtriranje-niza
---

**Metoda `filter` je jedna od najkorisnijih metoda za rad sa nizovima. Ona prima *callback* funkciju i vraća novi niz, nastao filtriranjem originalnog niza, po zadatom kriteriju.**

Ono što postižemo `filter` metodom možemo postići i `for` petljom sa uslovom unutar nje, ali filter metoda je za to namenjena.

## Filtriranje niza brojeva

{:.ulaz}
```js
const brojevi = [1, 4, 5, 6, 7, 8, 9, 0, 11, 2]

const brojeviVeciOd5 = brojevi.filter(x => x > 5)

const brojeviDeljiviSa3 = brojevi.filter(x => x % 3 == 0)

console.log(brojeviVeciOd5)
console.log(brojeviDeljiviSa3)
```

## Filtriranje niza reči

{:.ulaz}
```js
const imena = ["Ana", "Fadil", "Marija", "Ivana", "Marko"]

const imenaKojaPocinjuSaM = imena.filter(ime => ime.startsWith("M"))

console.log(imenaKojaPocinjuSaM)
```
