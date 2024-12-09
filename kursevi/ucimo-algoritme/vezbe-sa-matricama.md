---
title: Algoritmi sa matricama
layout: lekcija-algoritmi
permalink: /vezbe-sa-matricama
---

Uobičajeni algoritmi u radu sa matricama.

### Zbir glavne dijagonale

Data je kvadratna matrica dimenzija n × n. Izračunaj zbir elemenata na glavnoj dijagonali (tzv. trag matrice).

{:.ulaz}
```js
const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

let sum = 0
for (let i = 0; i < 3; i++) {
  sum += matrica[i][i]
}

console.log(`Zbir elemenata na glavnoj dijagonali je ${sum}`)
```

### Najveći član glavne dijagonale

Pronađi indeks najvećeg elementa na glavnoj dijagonali kvadratne matrice dimenzija n × n.

{:.ulaz}
```js
const matrica = [
  [1, 3, 6, 14],
  [2, 6, 2, 12],
  [7, 1, 2, 72],
  [9, 1, 2, 71]
]
let maxI = 0

for(let i = 0; i < matrica.length; i++) {
  if (matrica[maxI][maxI] < matrica[i][i])
    maxI = i
}

console.log('Najveci broj je ' + matrica[maxI][maxI] + ' na indeksu ' + maxI)
```

### Aritmetička sredina sporedne dijagonale

![](/images/koncepti/matrice/sporedna-dijagonala.png)

Izračunaj aritmetičku sredinu elemenata na sporednoj dijagonali date kvadratne matrice.

{:.ulaz}
```js
const matrica = [
  [1, 2, 12, 4],
  [3, 9, 11, 8],
  [7, 10, 2, 5],
  [1, 6, 14, 3]
]
const n = matrica.length
let suma = 0

for(let i = 0; i < n; i++)
  suma += matrica[i][n - i - 1]

console.log('Aritmetička sredina sporedne dijagonale je ' + suma / n)
```

### Zbir članova iznad glavne dijagonale

![](/images/koncepti/matrice/matrica-iznad-dijagonale.png)

Za datu kvadratnu matricu, izračunaj zbir svih članova iznad glavne dijagonale, uključujući i one na njoj.

{:.ulaz}
```js
const matrica = [
  [1, 2, 12, 4],
  [3, 9, 11, 8],
  [7, 10, 2, 5],
  [1, 6, 14, 3]
]

const n = matrica.length
let suma = 0

for (let i=0; i<n; i++) {
  for (let j=i; j<n; j++) {
    suma += matrica[i][j]
  }
}
console.log(suma)
```

### Literatura

- M. Škarić, V. Radović, *Uvod u programiranje - Zbirka zadataka iz programskog jezika C*, Beograd, 2009.
