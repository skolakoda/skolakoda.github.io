---
title: Razlika između podatka i informacije
layout: lekcija-racunarstvo
permalink: /razlika-podaci-informacije
---

***Ponekad se podatak i informacija koriste kao sinonimi, iako nisu. Podatak predstavlja neku vrednost (niz simbola) van konteksta i bez značenja. Informacija je podatak sa značenjem.***

## Kontekst podataka određuje značenje

Na primer, recimo da imamo sledeću listu brojeva:
```
24.56, 21.94, 27.23, 30.61
```
Značenje ovih brojeva zavisi od konteksta u kojem se koriste. Oni mogu predstavljati prosečne temperature tokom nekog perioda, ali isto tako mogu predstavljati i cenu nekog proizvoda. Dakle, možemo napisati kompjuterski program koji ih tretira kao temperature. Neki drugi program ih može tretirati kao cene. Tako, zapravo sam program određuje kontekst podataka.

## Obrada podataka stvara informaciju

Obrada podataka je proces kojim se podaci transformišu, tako da se od početnog skupa (ulaznih) podataka dobije novi (izlazni) skup podataka.

Tako se recimo mogu sabrati visine niza osoba, pa kada se takav zbir podeli sa brojem osoba u nizu dobijamo informaciju o prosečnoj visini. Može se reći da smo obradom podataka o visinama dobili jednu novu informaciju. Zapravo svaka obrada podataka ima za cilj dobijanje nove informacije koja je “sakrivena” u sirovim podacima.

Proces obrade podataka možemo slikovito prikazati sledećim dijagramom:

![](/images/koncepti/podaci/obrada-podataka.png)

Izvor: dr Milan Popović, *Osnove programiranja (skripta)*
