---
title: Kvadratna matrica
layout: lekcija-strukture
permalink: /kvadratna-matrica
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Las_filas_003.jpg/640px-Las_filas_003.jpg)

Matrice s istim brojem redova i kolona nazivaju se kvadratne. Kvadratne matrice imaju glavnu i sporednu dijagonalu. **Glavna dijagonala** počinje od prvog elementa prvog reda i završava se na poslednjem elementu poslednjeg reda. **Sporedna dijagonala** seče glavnu dijagonalu tako da prave slovo `X`.

## Ispis glavne dijagonale

Na glavnoj dijagonali kvadratne matrice nalaze se elementi za koje vredi `i == j`. 

### Naivna implementacija

Naivni algoritam za ispis glavne dijagonale, sa petljom unutar petlje, ima složenost `O(n²)`:

{:.ulaz}
```js
const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for (let i = 0; i < matrica.length; i++) {
  for (let j = 0; j < matrica[i].length; j++) {
    if (i == j) console.log(matrica[i][j])
  }
}
```

### Optimalna implementacija

Optimalan algoritam za ispis glavne dijagonale, sa samo jednim prolaskom, ima složenost `O(n)`:

{:.ulaz}
```js
const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for(let i = 0; i < matrica.length; i++)
  console.log(matrica[i][i])
```

## Ispis sporedne dijagonale

Na sporednoj dijagonali nalaze se elementi za koje vredi `i + j == n - 1` (n je dužina matrice). 

### Naivna implementacija

Skup i naivan algoritam za ispis sporedne dijagonale, bi ovako izledao u Javascriptu:

{:.ulaz}
```js
const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
const n = matrica.length

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i + j == n - 1) console.log(matrica[i][j])
  }
}
```

### Optimalna implementacija

Optimalan algoritam, sa samo jednim prolaskom, bio bi:

{:.ulaz}
```js
const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
const n = matrica.length

for(let i = 0; i < n; i++)
  console.log(matrica[i][n - i - 1])
```
