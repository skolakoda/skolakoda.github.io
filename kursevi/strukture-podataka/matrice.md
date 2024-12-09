---
title: Matrica
layout: lekcija-strukture
permalink: /matrice
image: /images/koncepti/podaci/matrica.png
---

![]({{page.image}})

**Matrica ili grid je tabelarna struktura podataka u kojoj se najčešće nalaze brojevi. Naziva se i dvodimenzionalnim nizom, jer su njeni elementi jednodimenzionalni nizovi.**

Matricu možemo predstaviti kao tabelu koja ima `m` redova i `n` kolona, sa ćelijama označenim indeksima. 

## Zapis matrice

U većini programskih jezika, matrice zapisujemo nizovima unutar niza. Vrednostima pristupamo pomoću dva indeksa, od kojih prvi predstavlja red, a drugi kolonu. 

### Zapis matrice u Javaskriptu

{:.ulaz}
```js
const mapa = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 2, 1],
  [1, 0, 2, 0, 1],
  [1, 1, 1, 1, 1],
]

console.log(mapa[2][3])
```

### Zapis matrice u C

U jeziku C, dvodimenzionalni nizovi se mogu inicijalizovati slično kao jednodimenzionalni, dodelom vrednosti svim elementima na sledeći način:

```c
int matrica[3][4] = {
    {0, 1, 2, 3} ,
    {4, 5, 6, 7} ,
    {8, 9, 10, 11}
};
```

Pošto su elementi niza opet nizovi, imamo ugnježdene vitičaste zagrade.

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
