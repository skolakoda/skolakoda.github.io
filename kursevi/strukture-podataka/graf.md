---
title: Graf
layout: lekcija-strukture
permalink: /graf
image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Gabriel_graph.svg/600px-Gabriel_graph.svg.png
---

![]({{page.image}})

**Struktura grafa također je nelinearna struktura podataka.**

Graf `G` sadrži dva konačna skupa: skup točaka `V`, koje nazivamo **čvorovima** ili vrhovima (*nodes* ili *vertices*), i skup linija povezivanja `E`, koje nazivamo **granama** ili bridovima (*edges*). Pri tome svaki brid povezuje dva čvora.

```
G = (V, E)
```

## Vrste grafova

**Usmjereni graf** `G = (V, E)` je graf u kojem svaki brid `e = (i,j)` ima smjer od "inicijalne točke" (čvora) do "terminalne točke" (čvora). Pod uvjetom da su suprotnih smjerova, u usmjerenom grafu mogu postojati dva brida koja povezuju iste čvorove.

Graf `G` je **povezan** ako i samo ako postoji jednostavna putanja između bilo koja dva čvora u `G`.

Ako svakom bridu grafa pripada neki podatak, takav graf se naziva **označenim**. Ako su bridovima grafa pridružene pozitivne numeričke vrijednosti, onda se takav graf naziva **težinski** ili graf sa težinskim faktorima.

![](https://upload.wikimedia.org/wikipedia/commons/a/a9/UCS_graph.jpg)

**Za računalni prikaz grafova najpogodnije je koristiti matrice.**


Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
