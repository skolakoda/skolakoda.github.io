---
title: Simulacija fizike u igrama
layout: lekcija-razvoj-igara
permalink: /simulacija-fizike-u-igrama
---

Simulacija fizike se poziva u glavnoj petlji igre. Razvijanje robusnog fizičkog pogona je teško, ali u nekim slučajevima izgradnja jednostavnog fizičkog pogona je dobar izbor. Pritom, usavršavanje veština u matematici, fizici i programiranju su odlični razlozi za pokušaj takvog projekta.

## Fizički pogon

Fizički pogon nam pomaže da uradimo dve veoma važne stvari u igri:

* otkriva sudare između predmeta igre (*collision detection*)
* simulira sile i pokret predmeta nakon sudara (*collision response*)

Prost fizički pogon radi na sledeći način:

* kači (nevidljivi) fizički predmet za predmete igre
* ažurira fiziku za svaki kadar
* otkriva i odgovara na sudare
* vraća izračunate podatke o položaju za svaki kadar
