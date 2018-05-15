---
title: Fibonačijev niz
layout: lekcija-algoritmi
permalink: /fibonacijev-niz
---

![](https://upload.wikimedia.org/wikipedia/commons/3/38/AureaFibonacci.jpg)

**Fibonačijev niz je niz brojeva u kome zbir prethodna dva daju vrednost narednog. Prva dva člana su 0 i 1. Niz je primećen u mnogim prirodnim pojavama, a nazvan je po italijanskom matematičaru Fibonačiju.**

## Rekurzivna definicija

U matematičkom smislu rekurzija predstavlja definisanje problema uz pomoć samog tog problema. U matematici postoji veliki broj primera rekurzije, a najpoznatiji su Fibonačijevi brojevi koji se definišu na sledeći način:

`F(n) = F(n-1) + F(n-2)`

Ovaj izraz znači da se `n`-ti Fibonačijev broj izračunava kao zbir `n-1`-og i `n-2`-og Fibonačijevog broja, koji se opet izračunavaju na isti način kao `n`-ti broj. U slučaju da je `n` 1 ili 0, funkcija vraća `n`.

Dakle, Fibonačijev niz (0,1,1,2,3,5,8,13,...) može se definisati u vidu rekurzivne funkcije `F`:

- F (0) = 0 i F (1) = 1 (bazni slučaj)
- F (n) = F (n − 1) + F (n − 2) (rekurzivni korak)

## Implementacija

Funkcija za izračunavanje n-tog elementa Fibonačijevog niza može se implementirati na sledeći način:

{:.ulaz}
```js
function fib(n) {
  if (n == 0 || n == 1) return n
  return fib(n-1) + fib(n-2)
}

console.log(fib(15))
```

## Fibonačijev niz u prirodi

Zanimljivi primeri Fibonačijevog niza nalaze se svuda u prirodi, možemo ga uočiti posmatrajući ljude, biljke, životinje. Posebno pravilan primer Fibonačijevog niza nalazi se u spiralnom obliku nautilus školjke.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NautilusCutawayLogarithmicSpiral.jpg/635px-NautilusCutawayLogarithmicSpiral.jpg)


Literatura: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
