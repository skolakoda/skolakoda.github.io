---
title: Binarni brojevi
layout: lekcija-c
permalink: /binarni-brojevi
image: /images/koncepti/podaci/1-plus-1.png
---

![]({{page.image}})

***Binarni (dvojni) brojni sistem koristi samo dve cifre: 0 i 1. Binarni sistem je pogodan za računare zbog tehnologije njihove izrade i Bulove algebre na kojoj se zasnivaju.***

Naime, u računarskim sistemima postoji česta potreba za opisivanjem stanja kada „ima signala“ ili „nema signala“, neki uređaj je „uključen“ ili „isključen“, podatak je „raspoloživ“ ili „nije raspoloživ“ i slično, što se efikasno može predstaviti binarnim vrednostima 0 i 1.

## Prevođenje binarnog broja u dekadni

Slično kao kod običnih (dekadnih) brojeva, vrednost svake cifre zavisi od njene pozicije. Kod dekadnih brojeva svaka leva cifra vredi desetostruko, a kod binarnih dvostruko.

Na primer, cifre binarnog broja `10011` imaju sledeće vrednosti:

šesnaestice | osmice | četvorke | dvojke | jedinice
------------|--------|---------|-------|---------
1 | 0 | 0 | 1 | 1

Tako, binarni broj `10011` zapravo ima sledeću vrednost:

```
1 * 2^4 + 0 * 2^3 + 0 * 2^2 + 1 * 2 + 1
1 * 16  + 0 * 8   + 0 * 4   + 1 * 2 + 1
= 19
```

Potrebno je samo svakoj cifri binarnog broja pridužiti njenu vrednost zavisno od pozicije i sabrati.

## Prevođenje dekadnog broja u binarni

Neprestano deli broj sa dva i zapisuj ostatak. Kada pročitaš ostatke s dna nagore dobićeš binarni broj.

Na primer, uzmimo broj 22:

```
22 / 2 = 11 ostatak 0
11 / 2 = 5  ostatak 1
5  / 2 = 2  ostatak 1
2  / 2 = 1  ostatak 0
1  / 2 = 0  ostatak 1
```

Dakle, binarni zapis je 10110.

## Malo istorije

Inače, binarni brojevi su odavno poznati mnogim kulturama. Između ostalog, nalaze se u drevnoj kineskoj Knjizi promena (Ji đing), napisanoj oko 1000. godina pre naše ere. Kinezi su za jedinicu koristili punu liniju, a za nulu isprekidanu. Pokušajte prevesti brojeve sa drevnih simbola:

![](/images/koncepti/podaci/i-ching-binary.jpg)

### Literatura

- dr Milan Popović, *Osnove programiranja (skripta)*
- dr Violeta Tomašević, *Osnovi računarske tehnike*, Beograd, 2009.
