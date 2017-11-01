---
title: Binarni brojevi
layout: lekcija-uvod
permalink: /binarni-brojevi
image: http://www.wikihow.com/images/d/d5/Convert-Binary-to-Octal-Number-Step-11.jpg
---

![]({{page.image}})

Binarni brojni sistem koristi samo dve cifre: 0 i 1. Binarni sistem je pogodan za računare zbog tehnologije njihove izrade i Bulove algebre na kojoj se zasnivaju.

## Prevođenje binarnog broja u dekadni

Slično kao kod običnih (dekadnih) brojeva, vrednost svake cifre zavisi od njene pozicije. Kod dekadnih brojeva svaka leva cifra vredi desetostruko, a kod binarnih dvostruko.

Na primer, cifre binarnog broja `10011` imaju sledeće vrednosti:

šesnaestice | osmice | četvice | dvice | jedinice
------------|--------|---------|-------|---------
1 | 0 | 0 | 1 | 1

Tako, binarni broj `10011` zapravo ima sledeću vrednost:

```
1 x 2^4 + 0 x 2^3 + 0 x 2^2 + 1 x 2^1 + 1 x 2^0
1 x 16  + 0 x 8   + 0 x 4   + 1 x 2   + 1 x 1
= 19
```

Potrebno je samo svakoj cifri binarnog broja pridužiti njenu vrednost zavisno od pozicije i sabrati.

## Prevođenje dekadnog broja u binarni

Obrnute konverzija, iz dekadnog u binarni oblik se može izvršiti sledećim postupkom:

1. Broj koji se konvertuje podeliti sa 2.
2. Rezultat deljenja zapisati ispod broja koji se konvertuje.
3. Ostatak pri deljenju (koji može biti samo 0 ili 1) zapisati sa strane.
4. Ponoviti korake 1 - 3 sve dok rezultat deljenja ne bude jednak 0.
5. Ostatke pri deljenju (nule i jedinice) poredjati jedne za drugim u redosledu od poslednjeg do prvog izračunatog ostatka.

Gornji postup ilustrujmo na primeru konverzije broja 213 u binarni oblik:

```
213 podeljeno sa 2 daje rezultat 106 i ostatak 1
106 podeljeno sa 2 daje rezultat 53 i ostatak 0
 53 podeljeno sa 2 daje rezultat 26 i ostatak 1
 26 podeljeno sa 2 daje rezultat 13 i ostatak 0
 13 podeljeno sa 2 daje rezultat 6 i ostatak 1
  6 podeljeno sa 2 daje rezultat 3 i ostatak 0
  3 podeljeno sa 2 daje rezultat 1 i ostatak 1
  1 podeljeno sa 2 daje rezultat 0 i ostatak 1
```

Dakle, 213 dekadno je isto što i 11010101 binarno.

## Malo istorije

Inače, binarni brojevi su odavno poznati mnogim kulturama. Između ostalog, nalaze se u drevnoj kineskoj Knjizi promena (Ji đing), napisanoj oko 1000. godina pre naše ere. Kinezi su za jedinicu koristili punu liniju, a za nulu isprekidanu. Pokušajte prevesti brojeve sa drevnih simbola:

![](/images/koncepti/podaci/i-ching-binary.jpg)

Delovi teksta su preuzeti iz skripte: dr Milan Popović, *Osnove programiranja*
