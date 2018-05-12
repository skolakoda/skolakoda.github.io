---
title: Matrice
layout: lekcija-racunarstvo
permalink: /matrice
image: /images/koncepti/podaci/matrica.png
---

![]({{page.image}})

***Matricu ili dvodimenzionalni niz možemo da zamislimo kao tabelu. Sastoji se od polja koja pripadaju redovima i kolonama, označenim indeksima.***

## Zapis matrice

U većini programskih jezika, matrice zapisujemo nizovima unutar nizova. Vrednostima pristupamo pomoću dva indeksa, od kojih prvi predstavlja red, a drugi kolonu:

{:.ulaz}
```js
const mapa = [
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
  [ 1, 0, 0, 2, 0, 1, 1, 1, 0, 1 ],
  [ 1, 0, 2, 0, 0, 0, 0, 1, 0, 1 ],
  [ 1, 0, 0, 0, 0, 1, 0, 1, 1, 1 ],
  [ 1, 0, 1, 1, 0, 0, 0, 0, 0, 1 ],
  [ 1, 0, 0, 1, 0, 1, 1, 1, 0, 1 ],
  [ 1, 1, 0, 1, 0, 0, 0, 1, 1, 1 ],
  [ 1, 0, 0, 1, 0, 1, 0, 0, 0, 3 ],
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
]

console.log(mapa[2][3])
```

## Alokacija memorije

Na primer u jeziku C, sledeća matrica smeštena u dvodimenzionalni niz

```c
int matrica[10][15]
```

bi rezervisala prostor za `10 * 15` odnosno 150 varijabli tipa `int`.

## Prolazak kroz matricu

Pošto za prolazak kroz niz treba jedna petlja, za prolazak kroz dvodimenzionalni niz potrebne su dve petlje, jedna unutar druge:

{:.ulaz}
```js
const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for (let i = 0; i < matrica.length; i++) {
  for (let j = 0; j < matrica[i].length; j++) {
    console.log(matrica[i][j])
  }
}
```

## Kvadratna matrica

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Las_filas_003.jpg/640px-Las_filas_003.jpg)

Matrice s istim brojem redova i kolona nazivaju se kvadratne. Kvadratne matrice imaju glavnu i sporednu dijagonalu. **Glavna dijagonala** počinje od prvog elementa prvog reda i završava se na poslednjem elementu poslednjeg reda. **Sporedna dijagonala** seče glavnu dijagonalu tako da prave slovo `X`.

### Ispis glavne dijagonale

Na glavnoj dijagonali kvadratne matrice nalaze se elementi za koje vredi `i == j`.

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

### Ispis sporedne dijagonale

Na sporednoj dijagonali nalaze se elementi za koje vredi `i + j == n - 1` (n je dužina matrice).

{:.ulaz}
```js
const matrica = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

for (let i = 0; i < matrica.length; i++) {
  for (let j = 0; j < matrica[i].length; j++) {
    if (i + j == matrica.length - 1) console.log(matrica[i][j])
  }
}
```

## Vežba: Trag matrice

Trag matrice je definisan kao zbir elemenata na glavnoj dijagonali.

Data je kvadratna matrica dimenzija n×n. Izračunati njen trag.
