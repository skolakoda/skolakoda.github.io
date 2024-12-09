---
title: Graf
layout: lekcija-strukture
permalink: /graf
image: https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Gabriel_graph.svg/600px-Gabriel_graph.svg.png
---

![]({{page.image}})

**Graf je nelinearna struktura podataka, koju čine čvorovi i veze između njih. Može predstavljati različite odnose između objekata, kao što su računarske mreže, društvene mreže, putevi na mapi i slično.**

Graf `G` sadrži dva konačna skupa: skup točaka `V`, koje nazivamo **čvorovima** (*nodes*) ili vrhovima (*vertices*), i skup linija povezivanja `E`, koje nazivamo **granama** ili ivicama (*edges*). Pri tome svaka ivica povezuje dva čvora.

```
G = (V, E)
```

<!-- ![](/images/koncepti/podaci/graf.webp) -->

Grafovi nam služe da neki pojam iz stvarnog svijeta pojednostavimo i svedemo na ono što je bitno za određeni problem. U većini slučajeva, najbitnije nam je predstaviti objekte i odnose između njih.

Proučavanjem grafova bavi se teorija grafova. **Za računalni prikaz grafova najpogodnije je koristiti matrice.**

## Elementi grafa

Graf je definisan skupom čvorova **V** (*vertex*) i skupom ivica **E** (*edges*). Na primer, određeni graf možemo zapisati pomoću sljedeća dva skupa:

```
Skup čvorova: V = { A, B, C, D, E, F, G }
Skup ivica: E = { AB, BC, CD, DE, EA, BE, AD, EF, EG, FG, FF }
```

Na kraju skupa vidimo ivicu FF, koja i počinje i završava se u čvoru F. Ivica koja počinje i završava se u istom čvoru naziva se **petlja**.

## Izvori

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
- [Uvod u teoriju grafova](http://boljiprogramer.com/napredno-programiranje/algoritmi-sa-grafovima/uvod-u-teoriju-grafova/)
