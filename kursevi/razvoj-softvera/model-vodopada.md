---
title: Model vodopada
layout: lekcija-razvoj
permalink: /model-vodopada
---

**Model vodopada** (*waterfall model*) nastao je u ranim 70-tim godinama 20. stoljeća, kao neposredna analogija s procesima iz drugih inženjerskih struka (na primjer mostogradnja). Softverski proces je građen kao niz vremenski odvojenih aktivnosti, u skladu sa slikom.

![Vodopad model](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/600px-Waterfall_model.svg.png)

Model je dobio ime zbog oblika dijagrama. Vidimo da se aktivnosti odvijaju kao faze sekvencijalno jedna iza druge. Svaka faza daje neki rezultat koji „teče“ po vodopadu i predstavlja polazište za iduću fazu. Makar je na slici naznačena mogućnost povratka u raniju fazu (u slučaju naknadnog otkrivanja greške), ta mogućnost samo se iznimno koristi. Povratak je nepoželjan jer remeti normalni tijek procesa te izaziva kašnjenje.

**Prednosti** modela vodopada su sljedeće:
- Model omogućuje detaljno planiranje cijelog softverskog procesa i podjelu poslova na velik broj suradnika.
- Lagano se može utvrditi stanje u kojem se proces trenutno nalazi.
- Zato je model je dobro prihvaćen od menadžera.

**Mane** modela vodopada su sljedeće:
- Navedene faze u praksi je teško razdvojiti, pa dolazi do naknadnog otkrivanja grešaka i nepoželjnog vraćanja u prethodne faze.
- Zbog tendencije da se zbog poštovanja rokova u određenom trenutku „zamrzne“ pojedina faza, dešava se sustav nastavlja razvijati u nezadovoljavajućem obliku.
- Proces je spor, pa se može dogoditi da u trenutku puštanja u rad sustav već bude neažuran i zastario.

Zbog navedenih prednosti te unatoč navedenim manama, model često koristi u praksi. Model je pogodan onda kad treba razviti veliki sustav s relativno jednostavnim i jasnim zahtjevima uz pomoć velikog broja programera.


Izvor: Robert Manger, *Softversko inženjerstvo (skripta)*, Zagreb, 2012.
