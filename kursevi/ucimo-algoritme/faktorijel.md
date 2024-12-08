---
title: Faktorijel
layout: lekcija-algoritmi
permalink: /faktorijel
---

**Faktorijel** (označava se uzvičnikom `!`) je funkcija kojom se izračunava proizvod prirodnih brojeva od 1 do n. Za prirodni broj n, vrednost `n!` jednaka je proizvodu svih prirodnih brojeva od 1 do n.

Vrednost faktorijela se može izračunati korišćenjem petlje ili korišćenjem rekurzije.

## Iterativni algoritam

{:.ulaz}
```js
function faktorijel(n) {
  let total = 1
  for (let i = 1; i <= n; i++) {
    total *= i
  }
  return total
}

console.log(faktorijel(5))
```

## Rekurzivni algoritam

Funkcija faktorijel može se definisati na (primitivno) rekurzivan način:

- 0! = 1 (bazni slučaj)
- n! = n · (n - 1)! (rekurzivni korak)

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

Prilikom svakog poziva funkcije u stek memoriji stvara se novi stek okvir za tu instancu funkcije. U tim stek okvirima lokalna promenljiva `n` imaće redom vrednosti 5, 4, 3, 2, 1, 0. Stek okvir svake instance „pamti“ dokle je funkcija stigla sa izvršavanjem, kako bi se ono moglo nastaviti kada instanca ponovo postane aktivna.

## Složenost

Funkcija faktorijel ima složenost O(n).

## Izvori

- Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
