---
title: Fibonačijev niz
layout: lekcija-algoritmi
author: damjan
permalink: /fibonacijev-niz
---

![](https://upload.wikimedia.org/wikipedia/commons/3/38/AureaFibonacci.jpg)

**Fibonačijev niz je niz brojeva u kome zbir prethodna dva daju vrednost narednog. Prva dva člana su 0 i 1. Niz je primećen u mnogim prirodnim pojavama, a nazvan je po italijanskom matematičaru Fibonačiju.**

## Fibonačijev niz u prirodi

Zanimljivi primeri Fibonačijevog niza nalaze se svuda u prirodi, možemo ga uočiti posmatrajući ljude, biljke, životinje. Posebno pravilan primer Fibonačijevog niza nalazi se u spiralnom obliku nautilus školjke.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/NautilusCutawayLogarithmicSpiral.jpg/635px-NautilusCutawayLogarithmicSpiral.jpg)

## Rekurzivna definicija

Rekurzija predstavlja definisanje problema uz pomoć samog tog problema. U matematici postoje mnogi primeri rekurzije, a najpoznatiji su Fibonačijevi brojevi koji se definišu na sledeći način:

`F(n) = F(n-1) + F(n-2)`

Ovaj izraz znači da se `n`-ti Fibonačijev broj izračunava kao zbir `n-1`-og i `n-2`-og Fibonačijevog broja, koji se opet izračunavaju na isti način. Konačno, u slučaju da je `n` jednako 1 ili 0, funkcija vraća `n`.

Dakle, Fibonačijev niz (0,1,1,2,3,5,8,13,...) može se definisati u vidu rekurzivne funkcije `F`:

```
F (0) = 0 i F (1) = 1 (bazni slučaj)
F (n) = F (n - 1) + F (n - 2) (rekurzivni korak)
```

## Rekurzivna implementacija

Funkcija za izračunavanje n-tog elementa Fibonačijevog niza može se rekurzivno implementirati na sledeći način:

{:.ulaz}
```js
function fib(n) {
  if (n == 0 || n == 1) return n
  return fib(n-1) + fib(n-2)
}

console.log(fib(15))
```

## Iterativna implementacija

Funkcija za traženje n-og fibonačijevog broja može biti i iterativno implementirana, pomoću petlje:

{:.ulaz}
```js
function fib(n) {
  const niz = [0, 1]
  for(let i = 2; i <= n; i++) {
    niz.push(niz[i-1] + niz[i-2])
  }
  return niz[n]
}

console.log(fib(15))
```

## Opasnost rekurzije

U funkcionalnim programskim jezicima eliminacija repne rekurzije je zagarantovana standardom jezika, što omogućuje korišćenje rekurzije umesto petlji.

Iako je rekurzivna definicija elegantnija, u jezicima koji nemaju eliminaciju repne rekurzije (*tail-call* optimizaciju) je nesrazmerno neefikasnija.

Sledi poređenje broja koraka za nalaženje 40-og fibonačijevog broja iterativno i rekurzivno u Javascriptu:

{:.ulaz}
```js
let brojac = 0

function nadjiFibonaci(n) {
  const niz = [0, 1]
  for(let i = 2; i <= n; i++) {
    brojac++
    niz.push(niz[i-1] + niz[i-2])
  }
  return niz[n]
}

function nadjiRekurzivno(n) {
  brojac++
  if (n < 3) return 1
  return nadjiRekurzivno(n-1) + nadjiRekurzivno(n-2)
}

console.log(`Iterativno: broj ${nadjiFibonaci(40)} nadjen u ${brojac} operacija.`)
brojac = 0
console.log(`Rekurzivno: broj ${nadjiRekurzivno(40)} nadjen u ${brojac} operacija.`)
```

U vreme pisanja ovog teksta, odnos broja koraka između iterativne i rekurzivne funkcije bio je **39 prema 204668309 (204 miliona) koraka!** Iako jezik u budućnosti može biti optimizovan za rekurzivne pozive, svakako treba biti veoma oprezan.


### Literatura

- Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
