---
title: Kule Hanoja
layout: lekcija-algoritmi
permalink: /kule-hanoja
image: https://upload.wikimedia.org/wikipedia/commons/0/07/Tower_of_Hanoi.jpeg
---

![]({{page.image}})

**Hanojske kule je matematička igra koju je sastavio francuski matematičar Eduard Lukas 1883. godine, nadahnut indijskom legendom.**

Prema legendi, sveštenici treba da prenesu kulu od 64 zlatna diska sa jednog mesta na drugo, disk po disk, tako da veći uvek bude ispod a manji iznad, koristeći jedno privremeno mesto za spuštanje. Rečeno je da će se, pre nego što sveštenici završe svoj zadatak, hram rasuti u prah i svet nestati.

## Problem

Problem kula Hanoja glasi ovako: date su tri kule i na prvoj od njih `n` diskova opadajuće veličine; zadatak je prebaciti sve diskove sa prve na treću kulu (koristeći i drugu) ali tako da nikada nijedan disk ne stoji iznad manjeg.

Lako možeš probati da rešiš ovu zagonetku. Ne trebaju ti nikakvi diskovi ni štapovi, dovoljna je gomila knjiga ili nekoliko komada papira.

## Rešenje

![](https://upload.wikimedia.org/wikipedia/commons/6/60/Tower_of_Hanoi_4.gif)

Iterativno rešenje ovog problema je veoma kompleksno, a rekurzivno prilično jednostavno: ukoliko je `n = 0`, nema diskova koji treba da se prebacuju; inače:

- prebaci (rekurzivno) n-1 diskova sa polazne na pomoćnu kulu (korišćenjem dolazne kule kao pomoćne),
- prebaci najveći disk sa polazne na dolaznu kulu i, konačno,
- prebaci (rekurzivno) n - 1 diskova sa pomoćne na dolaznu kulu (korišćenjem polazne kule kao pomoćne).

![](https://petljamedia.blob.core.windows.net/root/Media/Default/Problem/Primer.png)

Legenda:

- A: polazna kula
- B: pomoćna kula
- C: dolazna kula

## Implementacija

U nastavku je program koji nam ispisuje potrebne korake:

{:.ulaz}
```js
function kule(n, polazna, dolazna, pomocna) {
  if (n == 0) return
  kule(n - 1, polazna, pomocna, dolazna)
  console.log(`Prebaci disk sa kule ${polazna} na kulu ${dolazna}`)
  kule(n - 1, pomocna, dolazna, polazna)
}

kule(3, 'A', 'C', 'B')
```

## Broj koraka

Da bi premestili kulu sa jednog mesta na drugo, potrebno je **2<sup>n</sup> - 1** koraka (`n` je broj diskova). Dakle, za legandarnu kulu od 64 diska trebalo bi 2<sup>64</sup> - 1, odnosno oko 18.446.744.073.709.552.000 koraka. Ako bi svaki korak trajao samo jednu sekundu, premeštanje zlatne kule bi trajalo 590 milijardi godina – daleko više od starosti čitavog sunčevog sistema.

Očigledno se u slagalici krije više nego što izgleda na prvi pogled.

### Literatura

- Predrag Janičić i Filip Marić, *PROGRAMIRANJE 2, Osnove programiranja kroz programski jezik C*, Beograd, 2017.
- [Problem Solving with Algorithms and Data Structures using Python](http://interactivepython.org/runestone/static/pythonds/Recursion/TowerofHanoi.html)
