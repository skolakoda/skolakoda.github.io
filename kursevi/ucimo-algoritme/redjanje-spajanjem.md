---
title: Ređanje spajanjem (<i>merge sort</i>)
layout: lekcija-algoritmi
permalink: /redjanje-spajanjem
---

![](https://upload.wikimedia.org/wikipedia/commons/c/c5/Merge_sort_animation2.gif)

**Sortiranje spajanjem je algoritam koji prvo deli niz na manje podnizove, dok svaki ne ostane sa samo jednim elementom, a zatim ih spaja u sortiranom redosledu, dok ne kreira potpuno sortirani niz.**

Algoritam koristi pristup “podeli pa vladaj”, koja problem rešava deobom na manje delove, sve dok ga ne redukuje na osnovni slučaj koji rešava direktno. 

## Spajanje

Dva već sortirana niza se mogu objediniti u treći sortirani niz samo jednim prolaskom kroz nizove, odnosno u linearnom vremenu `O(m + n)`, gde su `m` i `n` dužine nizova.

```c
void merge(int a[], int m, int b[], int n, int c[]) {
  int i, j, k;
  i = 0, j = 0, k = 0;
  while (i < m && j < n)
    c[k++] = a[i] < b[j] ? a[i++] : b[j++];
  while(i < m) c[k++] = a[i++];
  while(j < n) c[k++] = b[j++];
}
```

U prikaznoj implementaciji, paralelno se prolazi kroz nizove `a` dužine `m` i `b` dužine `n`. Promenljiva `i` čuva tekuću pozicija u nizu `a`, dok promenljiva `j` čuva tekuću poziciju u nizu `b`. Tekući elementi se porede i manji se upisuje u niz `c` (na tekuću poziciju `k`), pri čemu se napreduje samo u nizu iz kojeg je taj manji element uzet. Postupak se nastavlja dok se ne stigne do kraja jednog od nizova. Kada se kraći niz isprazni, eventualni preostali elementi iz dužeg niza se nadovezuju na kraj niza `c`.

## Koraci

![](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

*Merge sort* algoritam deli niz na dve polovine (čija se dužina razlikuje najviše za 1), rekurzivno sortira svaku od njih, i zatim spaja sortirane polovine. Za spajanje sortiranih polovina je neophodan pomoćni niz. Slučaj izlaza iz rekurzije je jednočlani niz. 

Funkicija `mergesort_` sortira deo niza `a[l, d]`, uz korišćenje niza `tmp` kao pomoćnog:

```c
void mergesort_(int a[], int l, int d, int tmp[]) {
  if (l < d) {
    int i, j;
    int n = d - l + 1, s = l + n/2;
    int n1 = n/2, n2 = n - n/2;

    mergesort_(a, l, s-1, tmp);
    mergesort_(a, s, d, tmp);
    merge(a + l, n1, a + s, n2, tmp);

    for (i = l, j = 0; i <= d; i++, j++)
      a[i] = tmp[j];
  }
}
```

Promenljiva `n` čuva broj elemenata koji se sortiraju u okviru ovog rekurzivnog poziva, a promenljiva `s` čuva središnji indeks u nizu između `l` i `d`. Rekurzivno se sortira `n1 = n/2` elemenata između pozicija `l` i `s-1` i `n2 = n - n/2` elemenata između pozicija `s` i `d`. Nakon toga, sortirani podnizovi se objedinjuju u pomoćni niz `tmp`. Primetimo na ovom mestu korišćenje pokazivačke aritmetike. Adresa početka prvog sortiranog podniza koji se objedinjava je `a+l`, dok je adresa početka drugog `a + s`.

Pomoćni niz se može pre početka sortiranja dinamički alocirati i koristiti kroz rekurzivne pozive.

```c
void mergesort(int a[], int n) {
  int* tmp = (int*)malloc(n*sizeof(int));
  if (tmp == NULL) {
    printf("Nedovoljno memorije.\n");
    return;
  }
  mergesort_(a, 0, n-1, tmp);
  free(tmp);
}
```

## Složenost

Rekurentna jednačina koja opisuje složenost je T (n) = 2 · T (n/2) + O(n) te je složenost O(n log n).

## Literatura

* Esmir Pilav i Zoran Jasak, *Algoritmi i programiranje, materijal za vježbe*, Prirodno matematički fakultet, Univerzitet u Tuzli, 2013.
* Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
