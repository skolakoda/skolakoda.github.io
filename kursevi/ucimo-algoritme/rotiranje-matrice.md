---
title: Rotiranje matrice
layout: lekcija-algoritmi
permalink: /rotiranje-matrice
---

**Matrice možemo rotirati na različite načine. Najčešće rotacije su za 90, 180 i 270 stepeni, u smeru kazaljke na satu.**

## Rotiranje matrice za 90 stepeni

Ovaj algoritam rotira 2D matricu (niz nizova) za 90 stepeni u smeru kazaljke na satu:

{:.ulaz}
```js
const rotiraj = matrica => 
  matrica.map((red, i) => 
    matrica.map(red => red[i]).reverse())

const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(rotiraj(matrica))
```

## Rotiranje matrice za 180 stepeni

{:.ulaz}
```js
const rotiraj180 = matrica => 
  matrica.map(red => red.reverse()).reverse()

const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(rotiraj180(matrica))
```

## Rotiranje matrice za 270 stepeni (-90)

{:.ulaz}
```js
const rotiraj270 = matrica => 
  matrica[0].map((_, indeksKolone) => 
    matrica.map(red => red[indeksKolone])).reverse()

const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(rotiraj270(matrica))
```
