---
title: Matrice
layout: lekcija-algoritmi
permalink: /matrice
image: /images/koncepti/podaci/matrica.png
---

![]({{page.image}})

**Matrica ili dvodimenzionalni niz je niz čiji su elementi jednodimenzionalni nizovi.**

Matricu možemo predstaviti kao tabelu koja ima `m` redova i `n` kolona, sa ćelijama označenim indeksima. Na primer, matricu veličine a[3][4] bi tabelarno predstavili na sledeći način:

![](https://petljamedia.blob.core.windows.net/root/Media/Default/Kursevi/uvod-u-programiranje/nedelja_08/matrica.png)

## Zapis matrice

U većini programskih jezika, matrice zapisujemo nizovima unutar niza. Vrednostima pristupamo pomoću dva indeksa, od kojih prvi predstavlja red, a drugi kolonu. Sledi zapis matrice u jeziku Javascript:

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

U jeziku C, dvodimenzionalni nizovi se mogu inicijalizovati slično kao jednodimenzionalni, dodelom vrednosti svim elementima na sledeći način:

```c
int matrica[3][4] = {
    {0, 1, 2, 3} ,    /*  inicijalizacija reda sa indeksom 0 */
    {4, 5, 6, 7} ,    /*  inicijalizacija reda sa indeksom 1 */
    {8, 9, 10, 11}    /*  inicijalizacija reda sa indeksom 2 */
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

## Kvadratna matrica

![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Las_filas_003.jpg/640px-Las_filas_003.jpg)

Matrice s istim brojem redova i kolona nazivaju se kvadratne. Kvadratne matrice imaju glavnu i sporednu dijagonalu. **Glavna dijagonala** počinje od prvog elementa prvog reda i završava se na poslednjem elementu poslednjeg reda. **Sporedna dijagonala** seče glavnu dijagonalu tako da prave slovo `X`.

### Ispis glavne dijagonale

Na glavnoj dijagonali kvadratne matrice nalaze se elementi za koje vredi `i == j`. Naivni algoritam za ispis glavne dijagonale, sa petljom unutar petlje (`n^2`), ovako bi izledao u Javascriptu:

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

Optimalan algoritam za ispis glavne dijagonale, sa samo jednim prolaskom (`n`), bio bi:

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

### Ispis sporedne dijagonale

Na sporednoj dijagonali nalaze se elementi za koje vredi `i + j == n - 1` (n je dužina matrice). Skup i naivan algoritam za ispis sporedne dijagonale, bi ovako izledao u Javascriptu:

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

## Vežba: zbir glavne dijagonale

Trag matrice je definisan kao **zbir elemenata na glavnoj dijagonali**.

Data je kvadratna matrica dimenzija n × n. Izračunati njen trag. Rešenje je dato u jeziku C.

{:.ulaz.resenje}
```c
#include <stdio.h>

int matrica[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

main() {
  int i, sum = 0;
  for (i = 0; i < 3; i++) {
      sum += matrica[i][i];
  }
  printf ("Zbir elemenata na glavnoj dijagonali je %d\n", sum);
}
```
