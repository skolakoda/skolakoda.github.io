---
title: Ređanje izborom (selection sort)
layout: lekcija-algoritmi
permalink: /redjanje-izborom
---

![](https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif)

**Ova metoda traži najmanji element u nesortiranom dijelu polja i stavlja ga na svoje mjesto.**

*Selection sort* je algoritam koji se može opisati u jednoj rečenici: „Ako niz ima više od jednog elementa, zameni početni element sa najmanjim elementom niza i zatim rekurzivno sortiraj rep (elemente iza početnog)“.

U iterativnoj implementaciji, niz se sortira tako što se u svakoj iteraciji na svoju poziciju dovodi sledeći po veličini element niza, tj. u `i`-toj iteraciji se `i`-ti po veličini element dovodi na poziciju `i`. Ovo se može realizovati tako što se pronađe pozicija `m` najmanjeg elementa od pozicije `i` do kraja niza i zatim se razmene element na poziciji `i` i element na poziciji `m`. Algoritam se zaustavlja kada se pretposlednji po veličini element dovede na pretposlednju poziciju u nizu.

### Primer

Prikažimo rad algoritma na primeru sortiranja niza (5 3 4 2 1).

```
(5 3 4 2 1), i = 0, m = 4, razmena elemenata 5 i 1
(1 3 4 2 5), i = 1, m = 3, razmena elemenata 3 i 2
(1 2 4 3 5), i = 2, m = 3, razmena elemenata 4 i 3
(1 2 3 4 5), i = 3, m = 3, razmena elemenata 4 i 4
(1 2 3 4.5)
```

Pozicija najmanjeg elementa u nizu `a`, dužine `n`, počevši od pozicije `i` se može naći narednom funkcijom.

```c
int poz_min(int a[], int n, int i) {
  int m = i, j;
  for (j = i + 1; j < n; j++)
    if (a[j] < a[m])
      m = j;
  return m;
}
```

U tom slučaju, selection sort algoritam izgleda ovako:

```c
void selectionsort(int a[], int n) {
  int i;
  for (i = 0; i < n - 1; i++)
    razmeni(a, i, poz_min(a, n, i));
}
```

Ukoliko se ne koriste pomoćna funkcije poz_min, algoritam se može implementirati na sledeći način:

```c
void selectionsort(int a[], int n) {
  int i;
  for (i = 0; i < n - 1; i++) {
    int m = i, j;
    for (j = i + 1; j < n; j++)
      if (a[j] < a[m])
        m = j;
    razmeni(a, i, m);
  }
}
```

Ponekad se sreće i naredna implementacija:

```c
void selectionsort(int a[], int n) {
int i, j;
for (i = 0; i < n; i++)
  for (j = i + 1; j < n; j++)
    if (a[i] < a[j])
      razmeni(a, i, j);
}
```

Napomenimo da je ova implementacija znatno neefikasnija od prethodne (iako je kôd kraći) jer se u najgorem slučaju osim O(n^2) poređenja vrši i O(n^2) razmena. Zbog toga bi, naravno, ovaj način implementacije algoritma trebalo izbegavati.

Rekruzivna implementacija je donekle jednostavnija u slučaju da se umesto dovođenja najmanjeg elementa  na početak vrši dovođenje najvećeg elementa na kraj.

```c
int poz_max(int a[], int n) {
  if (n == 1)
    return 0;
  else {
    int m = poz_max(a, n-1);
    return a[m] > a[n-1] ? m : n-1;
  }
}

void selectionsort(int a[], int n) {
  if (n > 1) {
    razmeni(a, n-1, poz_max(a, n));
    selectionsort(a, n-1);
  }
}
```

Naravno, moguća je i originalna varijanta, uz slanje dodatnog indeksa kroz rekurzivne pozive.

```c
int poz_min(int a[], int n, int i) {
  if (i == n-1)
    return n-1;
  else {
    int m = poz_min(a, n, i+1);
    return a[m] < a[i] ? m : i;
  }
}

void selectionsort(int a[], int n, int i) {
  if (i < n - 1) {
    razmeni(a, i, poz_min(a, n, i));
    selectionsort(a, n, i+1);
  }
}
```

Početni poziv je u tom slučaju `selectionsort(a, n, 0)`.

Naglasimo da se korišćenjem naprednijih struktura podataka, ideje selection sort algoritma mogu iskoristiti da se dobije algoritam složenosti O(n log n) (tzv. *heap sort* algoritam koji koristi strukturu podataka poznatu kao *heap*).


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
