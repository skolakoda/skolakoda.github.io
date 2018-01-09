---
title: Ređanje hrpom (heapsort)
layout: lekcija-algoritmi
permalink: /redjanje-hrpom
---

![](https://upload.wikimedia.org/wikipedia/commons/f/fe/Heap_sort_example.gif)

"Heap" sortiranje pripada u familiju "selekcijskih" algoritama sortiranja. Takvi algoritmi sortiranja određuju prvo najveći (ili najmanji) element u listi te ga postavljaju na kraj (ili početak) liste, te na isti način nastavljaju sa ostatkom liste. "Heapsort" izvršava ovaj zadatak korištenjem [strukture podataka](/strukture-podataka) koja se zove gomila ili hrpa (eng. *heap*).

Struktura gomile je binarno stablo u kojem za svaki čvor vrijedi da je vrijednost u čvoru veća ili jednaka od vrijednosti svih njegovih sljedbenika. Lista se pretvara u gomilu, a korijenski čvor je sigurno najveći element liste. Korijenski čvor gomile se izuzima i stavlja se na kraj sortirane liste, tj. gomila se skraćuje za 1 element i ponovno podešava.

![](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

Izvor: N. Pavković, D. Marjanović, N. Bojčetić, Programiranje i algoritmi, skripta II, Zagreb, 2005.
