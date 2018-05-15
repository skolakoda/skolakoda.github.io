---
title: Povezana lista  (<i>linked list</i>)
layout: lekcija-algoritmi
permalink: /povezana-lista
image: /images/koncepti/podaci/povezana-lista.jpg
---

![]({{page.image}})

**Povezana lista je linearna struktura elemenata u kojoj je redoslijed određen pokazivačima.**

Svaki element (čvor) povezane liste sastoji se od dva dijela:
- podatka
- pokazivača koji sadrži adresu slijedećeg čvora u listi

Zadnji čvor sadrži tzv. “null” pokazivač koji označava kraj liste. Lista sadrži posebni pokazivač koji sadrži adresu prvog čvora u listi.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/640px-Singly-linked-list.svg.png)

## Razlika povezane liste i niza

Za razliku od polja (niza), svaki element liste sadrži pokazivač na slijedeći element. Pošto pokazivač sadrži adresu slijedećeg elementa u listi, sukcesivni elementi liste ne moraju biti spremljeni u sukcesivnom nizu memorijskih lokacija. Na taj način fizički redoslijed memorijskih lokacija nema nikakav utjecaj na redoslijed elemenata u listi. Za razliku od polja, vrlo jednostavno je dodavanje i brisanje elemenata iz liste.

![](http://interactivepython.org/runestone/static/pythonds/_images/idea2.png)

## Algoritam obilaska

Algoritam operacije “pristupa i obrade” svih elemenata povezane liste (eng. *traversing*):

1. Postavi pokazivač na početak
2. Ponavljaj korake 3 i 4 dok je pokazivač različit od “null”
3. Pristupi elementu liste i izvrši željenu obradu
4. Postavi pokazivač na slijedeći element

## Primjer: dodavanje elementa

Na slici 5 shematski je prikazano dodavanje elementa u povezanu listu. Prije dodavanja novog elementa čvor A pokazuje na slijedeći čvor B. Nakon umetanja novog čvora između čvorova A i B, čvor A pokazuje na novi čvor N, a čvor N pokazuje na čvor B.

![](/images/koncepti/podaci/dodavanje-u-listu.png)

Na sličan način, mijenjanjem lokacije na koju pokazuje pokazivač realizira se i brisanje elementa iz povezane liste.


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
