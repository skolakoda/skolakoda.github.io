---
title: Otkrivanje preseka linija
layout: lekcija-razvoj-igara
permalink: /presek-linija
---

**Kako saznati da li se dve linije, koje mogu biti zidovi u igrama, seku? Postavimo linearne jednačine za njih, povežemo ih u sistem linearnih jednačina, i rešimo matematički.**

## Linearne jednačine

Prave linije se mogu predstaviti linearnom jednačinom: 

```
y = ax + b
```

gde je

- `a`: nagib linije
- `b`: y osa za x = 0

Ako je `b = 0`, možemo koristiti uprošćeni oblik jednačine: `y = ax`.

![linearna-jednacina](/images/razvoj-igara/linearna-jednacina.png)

## Presek dve linije

Kada rešavamo sistem dve linearne jednačine, zapravo tražimo tačku preseka dve linije. Dve linije mogu da se:
- **seku u jednoj tački** ako imaju različit nagib (postoji jedno rešenje)
- **idu jedna preko druge** ako imaju isti nagib i presek y-ose (beskonačan skup rešenja)
- **idu paralelno** ako imaju isti nagib ali različit presek y-ose (nema rešenja)

![presek-linija](/images/razvoj-igara/presek-linija.png)

Jednostavan primera sistema dve linearne jednačine:

```
2x + y = 5
x - y = 1
```

Rešavanjem ovog sistema, dobijamo x = 2 i y = 3.

## Presek linije i ravni (*line–plane intersection*)

Zamislite brz metak i detekciju sudara sa relativno malom metom. Pošto je cilj mali, a metak neverovatno brz, može se desiti da se na uzastopnim kadrovima metak nađe sa suprotnih strana cilja. Ne postoji kadar u kojem je metak zaista unutar cilja.

Jedini način da se otkrije sudar jeste da se testira je li zrak presekao cilj.
