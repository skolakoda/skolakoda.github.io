---
title: Komanda (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-komanda
redirect_from: /komanda
---

![](https://refactoring.guru/images/patterns/content/command/command-comic-1.png)

**Komanda (*command pattern*) razdvaja onog ko zahteva akciju od onog ko je izvršava.** Komandni obrazac omogućava da se akcije ili komande smeste u objekat, omogućujući njihovo fleksibilno izvršenje, poništenje ili odlaganje. Na taj način se olakšava rukovanje akcijama, uključujući i vraćanje na prethodno stanje.

Analogija komandnog obrasca iz stvarnog života bila bi poručivanja hrane u restoranu.

## Opcije

Komandni obrazac omogućava da se komande tretiraju kao objekti. Na taj on podržava:
- dodavanje nove komande bez menjanja postojećeg koda.
- poništenje (*undo*) i ponovo izvršenje (*redo*) komande.
- odlaganje komandi za kasnije izvršenje.
- smeštanje zahteva u redove, logovanje i odbijanje zahteva
- slanje zahteva ka različitim objektima
- kreiranje transakcija višeg nivoa od primitivnih operacija

<!-- ![](https://upload.wikimedia.org/wikipedia/commons/b/bf/Command_pattern.svg) -->

## Literatura

- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.