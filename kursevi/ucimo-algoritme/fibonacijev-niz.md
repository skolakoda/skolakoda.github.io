---
title: Fibonačijev niz
layout: lekcija-algoritmi
permalink: /fibonacijev-niz
---

![](https://upload.wikimedia.org/wikipedia/commons/3/38/AureaFibonacci.jpg)

**Fibonačijev niz je niz brojeva u kome zbir prethodna dva daju vrednost narednog. Prva dva člana su 0 i 1. Niz je primećen u mnogim prirodnim pojavama, a nazvan je po italijanskom matematičaru Fibonačiju.**

## Fibonačijev niz u prirodi

Zanimljivi primeri Fibonačijevog niza nalaze se svuda u prirodi, možemo ga uočiti posmatrajući ljude, biljke, životinje. Posebno pravilan primer Fibonačijevog niza nalazi se u spiralnom obliku nautilus školjke.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NautilusCutawayLogarithmicSpiral.jpg/635px-NautilusCutawayLogarithmicSpiral.jpg)

## Rekurzivna funkcija

Fibonačijev niz (0,1,1,2,3,5,8,13,...) može se definisati u vidu rekurzivne funkcije `F`:

- F (0) = 0 i F (1) = 1 (bazni slučaj)
- za n > 1 važi: F (n) = F (n − 1) + F (n − 2) (rekurzivni korak)

Funkcija za izračunavanje n-tog elementa Fibonačijevog niza može se implementirati na sledeći način:

{:.ulaz}
```js
function fib(n) {
  if (n == 0 || n == 1) return n
  return fib(n-1) + fib(n-2)
}

console.log(fib(15))
```

Literatura: Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
