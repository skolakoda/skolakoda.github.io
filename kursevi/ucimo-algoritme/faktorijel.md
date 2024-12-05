---
title: Faktorijel
layout: lekcija-algoritmi
permalink: /faktorijel
---

**Faktorijel** (označava se uzvičnikom `!`) je funkcija kojom se izračunava proizvod prirodnih brojeva od 1 do n. Za prirodni broj n, vrednost `n!` jednaka je proizvodu svih prirodnih brojeva od 1 do n.

## Rekurzivni algoritam

Funkcija faktorijel može se definisati na (primitivno) rekurzivan način:

- 0! = 1 (bazni slučaj)
- n! = n · (n - 1)! (rekurzivni korak)

Vrednost faktorijela se može izračunati korišćenjem petlje, ali i korišćenjem rekurzije:

{:.ulaz}
```js
function faktorijel(n) {
  if (n == 0) return 1
  return n * faktorijel(n-1)
}

console.log(faktorijel(5))
```

Ukoliko je argument funkcije, na primer, vrednost 5, onda se funkcija f poziva najpre za tu vrednost, a onda, rekurzivno, za vrednosti 4, 3, 2, 1, 0.

## Memorijski stek

![](/images/koncepti/algoritmi/faktorijel.jpg)

Prilikom svakog poziva funkcije u stek segmentu memorije stvara se novi stek okvir — stek okvir za novu instancu funkcije f. U ovim stek okvirima lokalna promenljiva n imaće redom vrednosti 5, 4, 3, 2, 1, 0. Sve instance funkcije f koriste isti primerak koda funkcije f (koji se nalazi u kôd segmentu). Stek okvir svake instance funkcije f „pamti“ dokle je ta instanca funkcije stigla sa izvršavanjem koda (kako bi izvršavanje moglo da bude nastavljeno od te tačke kada ta instanca funkcije ponovo postane aktivna).

## Složenost

Funkcija faktorijel ima složenost O(n). Pod pretpostavkom da nema prekoračenja, funkcija faktorijel je ispravna.


Izvor: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
