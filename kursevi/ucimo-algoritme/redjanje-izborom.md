---
title: Ređanje izborom (<i>selection sort</i>)
layout: lekcija-algoritmi
permalink: /redjanje-izborom
---

![](https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif)

**Algoritam „sortiranje selekcijom“ u svakoj iteraciji nalazi određeni element i stavlja ga na svoje mesto.**

Najjednostaviji oblik algoritma je da u prvoj iteraciji pronađe najmanji element i postavi ga na prvo mesto, u drugoj iteraciji pronađe najmanji preostali element i stavi ga na drugo mesto, itd.

## Sled koraka

*Selection sort* je algoritam koji se može opisati u jednoj rečenici: „Ako niz ima više od jednog elementa, zameni početni element sa najmanjim elementom niza i zatim rekurzivno sortiraj rep (elemente iza početnog)“.

U iterativnoj implementaciji, niz se sortira tako što se u svakoj iteraciji na svoju poziciju dovodi sledeći po veličini element niza, tj. u `i`-toj iteraciji se `i`-ti po veličini element dovodi na poziciju `i`. Ovo se može realizovati tako što se pronađe pozicija `m` najmanjeg elementa od pozicije `i` do kraja niza i zatim se razmene element na poziciji `i` i element na poziciji `m`. Algoritam se zaustavlja kada se pretposlednji po veličini element dovede na pretposlednju poziciju u nizu.

Prikažimo rad algoritma na primeru sortiranja niza (5 3 4 2 1).

```
(5 3 4 2 1), i = 0, m = 4, razmena elemenata 5 i 1
(1 3 4 2 5), i = 1, m = 3, razmena elemenata 3 i 2
(1 2 4 3 5), i = 2, m = 3, razmena elemenata 4 i 3
(1 2 3 4 5), i = 3, m = 3, razmena elemenata 4 i 4
(1 2 3 4.5)
```

## Implementacija

Pozicija najmanjeg elementa u nizu `a`,  dužine `n`, počevši od pozicije `i` se može naći `poz_min` funkcijom. U tom slučaju, *selection sort* algoritam izgleda ovako:

{:.ulaz}
```js
function razmeni(a, i, j) {
  const tmp = a[i]; a[i] = a[j]; a[j] = tmp
}

function poz_min(a, n, i) {
  let m = i
  for (let j = i + 1; j < n; j++)
    if (a[j] < a[m])
      m = j
  return m
}

function selectionsort(a, n) {
  for (let i = 0; i < n - 1; i++)
    razmeni(a, i, poz_min(a, n, i))
  return a
}

const niz = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(selectionsort(niz, niz.length))
```

Ukoliko se ne koriste pomoćne funkcije, algoritam se može implementirati na sledeći način:

{:.ulaz}
```js
function selectionsort(a, n) {
  for (let i = 0; i < n - 1; i++) {
    let m = i
    for (let j = i + 1; j < n; j++)
      if (a[j] < a[m])
        m = j;
    [a[i], a[m]] = [a[m], a[i]]
  }
  return a
}

const niz = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(selectionsort(niz, niz.length))
```

Ponekad se sreće i naredna implementacija:

{:.ulaz}
```js
function selectionsort(a, n) {
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++)
      if (a[i] > a[j])
        [a[i], a[j]] = [a[j], a[i]]
  return a
}

const niz = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(selectionsort(niz, niz.length, 0))
```

Napomenimo da je ova implementacija znatno neefikasnija od prethodne (iako je kôd kraći) jer se u najgorem slučaju osim O(n^2) poređenja vrši i O(n^2) razmena. Zbog toga bi ovaj način implementacije algoritma trebalo izbegavati.

### Rekruzivna implementacija

Rekruzivna implementacija je donekle jednostavnija u slučaju da se umesto pomeranja najmanjeg elementa  na početak vrši pomeranje najvećeg na kraj:

{:.ulaz}
```js
function razmeni(a, i, j) {
  const tmp = a[i]; a[i] = a[j]; a[j] = tmp
}

function poz_max(a, n) {
  if (n == 1)
    return 0
  else {
    const m = poz_max(a, n-1)
    return a[m] > a[n-1] ? m : n-1
  }
}

function selectionsort(a, n) {
  if (n > 1) {
    razmeni(a, n-1, poz_max(a, n))
    selectionsort(a, n-1)
  }
  return a
}

const niz = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(selectionsort(niz, niz.length))

```

Naravno, moguća je i originalna varijanta, uz slanje dodatnog indeksa kroz rekurzivne pozive.

{:.ulaz}
```js
function razmeni(a, i, j) {
  const tmp = a[i]; a[i] = a[j]; a[j] = tmp
}

function poz_min(a, n, i) {
  if (i == n-1)
    return n-1
  else {
    const m = poz_min(a, n, i+1)
    return a[m] < a[i] ? m : i
  }
}

function selectionsort(a, n, i) {
  if (i < n - 1) {
    razmeni(a, i, poz_min(a, n, i))
    selectionsort(a, n, i+1)
  }
  return a
}

const niz = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(selectionsort(niz, niz.length, 0))
```

Početni poziv je u tom slučaju `selectionsort(a, n, 0)`.

Naglasimo da se korišćenjem naprednijih struktura podataka, ideje *selection sort* algoritma mogu iskoristiti da se dobije algoritam složenosti O(n log n) (tzv. *heap sort* algoritam koji koristi strukturu podataka poznatu kao *heap*).


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Matematički fakultet, Beograd, 2017.
