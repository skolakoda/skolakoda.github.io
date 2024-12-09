---
title: Uvod u grafove
layout: lekcija-strukture
permalink: /teorija-grafova
---

![](/images/koncepti/podaci/graf.webp)

**Graf je struktura koju čine čvorovi i linije između njih (ivice ili grane). Graf može predstavljati različite vrste odnosa između objekata, kao što su mreže, društvene mreže, putevi na mapi i slično.**

Proučavanjem grafova bavi se teorija grafova.

Grafom možemo predstaviti npr. gradove i puteve između njih, računare povezane u mrežu i slično. Dakle, grafovi nam služe da neki pojam iz stvarnog svijeta pojednostavimo i svedemo na ono što je bitno za određeni problem. U većini slučajeva, najbitnije nam je predstaviti objekte i odnose između njih.

## Elementi grafa

Graf je definisan skupom čvorova **V** (engl. *vertex*) i skupom ivica **E** (engl. *edges*). Na primer, određeni graf možemo zapisati pomoću sljedeća dva skupa:

```
Skup čvorova: V = { A, B, C, D, E, F, G }
Skup ivica: E = { AB, BC, CD, DE, EA, BE, AD, EF, EG, FG, FF }
```

Na kraju skupa vidimo ivicu FF, koja i počinje i završava se u čvoru F. Ivica koja počinje i završava se u istom čvoru naziva se **petlja**.

## Vrste i podvrste grafova

Graf koji nema petlje i višestruke grane između istih čvorova naziva se **jednostavan graf**, dok se graf koji ima petlje ili višestruke grane naziva **opšti graf**. 

Graf u kojem postoji bar jedan put od svakog čvora do bilo kojeg drugog čvora naziva se **povezan graf**. 

### Potpun graf

![Potpun graf](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Complete_graph_K7.svg/200px-Complete_graph_K7.svg.png)

**Potpun graf** je najgušći jednostavan graf (sa najvećim mogućim brojem grana), tj. koji ima granu između svaka dva čvora. Ako želimo da izračunamo broj grana nekog potpunog grafa koristimo formulu `E = V * (V – 1) / 2`, gdje je `E` traženi broj grana, a `V` broj čvorova u tom grafu. 

Algoritam koji kreira kompletan graf, odnosno sve moguće veze za data čvorove:

{:.ulaz}
```js
const povezi = cvorovi => {
  const grane = []
  for (let i = 0; i < cvorovi.length; i++)
    for (let j = 0; j < cvorovi.length; j++)
      if (j > i)
        grane.push([cvorovi[i], cvorovi[j]])

  return grane;
}

const cvorovi = ['A', 'B', 'C']
console.log(povezi(cvorovi))
```

### Stablo

![Stablo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Tree_graph.svg/200px-Tree_graph.svg.png)

Sa druge strane, najređe povezan graf naziva se **stablo**. Dakle, stablo je povezani graf koji ima minimalan mogući broj grana. Ako stablo ima V čvorova, broj grana u njemu je `E = V – 1`. 

### Nepovezan graf

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/UndirectedDegrees.svg/280px-UndirectedDegrees.svg.png)

Svaki povezani graf sastoji se obavezno iz samo jedne povezane komponente, dok se svaki **nepovezan graf** sastoji iz više povezanih komponenti. Na primer, neki graf se sastoji iz dvije grupe čvorova (dvije povezane komponente), ali između njih ne postoji nikakva grana koja ih spaja.

Karakteristika povezanih grafova je da iz svakog čvora postoji barem jedan put do bilo kojeg drugog čvora, dok je kod nepovezanih grafova iz nekih čvorova nemoguće stići do nekih drugih. 

## Izvori

- [Uvod u teoriju grafova](http://boljiprogramer.com/napredno-programiranje/algoritmi-sa-grafovima/uvod-u-teoriju-grafova/)
