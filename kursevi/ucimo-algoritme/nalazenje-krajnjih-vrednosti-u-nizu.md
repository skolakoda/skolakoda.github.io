---
title: Nalaženje krajnjih vrednosti niza
layout: lekcija-algoritmi
permalink: /nalazenje-krajnjih-vrednosti-u-nizu
---

**Jednim prolaskom niza možemo naći njegove krajnje vrednosti: najmanju, najveću, donajmanju i donajveću vrednost.**

Složenost svih ovih algoritama je 0(n).

## Nalaženje najmanjeg broja

{:.ulaz}
```js
const brojevi = [2, 3, 4, 5, 44, -2, -33, 33, 11, 22, 33, 44, 2, 3, 4]

let najmanji = Infinity

for (const broj of brojevi) {
  if (broj < najmanji) {
    najmanji = broj
  }
}

console.log("Najmanji broj:", najmanji)
```

## Nalaženje najvećeg broja

{:.ulaz}
```js
const brojevi = [2, 3, 4, 5, 44, -2, -33, 33, 11, 22, 33, 44, 2, 3, 4]

let najveci = -Infinity

for (const broj of brojevi) {
  if (broj > najveci) {
    najveci = broj
  }
}

console.log("Najveci broj:", najveci)
```

## Nalaženje dva najmanja broja

Nalaženje najmanjeg i donajmanjeg broja u nizu (da nisu isti):

{:.ulaz}
```js
const brojevi = [2, 3, 4, 5, 44, -2, -33, 33, 11, 22, 33, 44, 2, 3, 4]

let najmanji = Infinity   // može i brojevi[0]
let donajmanji = Infinity // može i brojevi[0]

for (const broj of brojevi) {
  if (broj < najmanji) {
    donajmanji = najmanji
    najmanji = broj
  } else if (broj < donajmanji && broj !== najmanji) {
    donajmanji = broj
  }
}

console.log(najmanji, donajmanji)
```

## Nalaženje dva najveća broja

Uz manju modifikaciju, možemo naći i dva najveća broja u nizu:

{:.ulaz}
```js
const brojevi = [2, 3, 4, 5, 44, -2, -33, 33, 11, 22, 33, 44, 2, 3, 4]

let najveci = -Infinity
let donajveci = -Infinity

for (const broj of brojevi) {
  if (broj > najveci) {
    donajveci = najveci
    najveci = broj
  } else if (broj > donajveci && broj !== najveci) {
    donajveci = broj
  }
}

console.log(najveci, donajveci)
```
