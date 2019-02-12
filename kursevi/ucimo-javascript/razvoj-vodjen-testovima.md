---
title: Razvoj vođen testovima
layout: lekcija-js
permalink: /razvoj-vodjen-testovima
image: /images/koncepti/razvoj-vodjen-testovima.png
---

![]({{page.image}})

**Razvoj vođen testovima** (*Test Driven Development*, **TDD**) je proces razvoja softvera gde se zahtevi prvo prevode u specifične test slučajeve, nakon čega pišemo softver koji će proći testove. Ovo je suprotno tome da se razvija softver koji prvo nije prošao testove.

Razvoj vođen testovima je prvobitno uveden kao deo meto­dologije ekstremnog programiranja. Ideja je da u kratkim repetitivnim ciklusima fokus bude na pisanju test slučajeva. Ciklus je sledeći:

- Dodajemo test slučaj za određenu jedinicu koda u skladu sa specifikacijama.
- Pokrećemo testove da bismo proverili da je novi test slučaj neuspešan (trebalo bi da je neuspešan, zato što još uvek ne postoji implementacija).
- Pišemo kod koji će zadovoljiti novi test slučaj. Ovaj kod još uvek nije optimizovan ni refaktorisan.
- Ponovo pokrećemo testove i proveravamo da li prolaze. Nakon ovog koraka, bićemo sigurni da novi kod ne pravi grešku.
- Refaktorišemo kod da bismo se uverili da je nova jedinica optimizovana.

Ovi koraci se ponavljaju za svaki novi kod koji dodamo.

## Razvoj vođen ponašanjem

**Razvoj vođen ponašanjem** (*Behavior Driven Development*, **BDD**) je nastavak razvoja vođenog testovima. Uvodi se standardni jezik za pisanje test slučajeva, koji omogućava da se u poslovanju i inženjerstvu koristi ista terminologija. 

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
