---
title: Jedinični testovi
layout: lekcija-js
permalink: /jedinicni-testovi
---

Za veće aplikacije, dobra strategija testira­nja je neophodna. Važno je da testiramo sve funkcije koda koje nisu jednostavne da bismo osigurali sledeće dve stavke:

- **Postojeći kod treba da se ponaša u skladu sa specifikacijama.** Prednost koda pokrivenog testovima je u tome što nema grešaka. Testni slučajevi, koji napisani pametno da pokriju glavne funkci­onalnosti, predstavljaju dobar indi­kator ukupnog kvaliteta koda.
- **Novi kod ne sme da prekine ponašanje definisano specifikacijama.** Nasleđene sisteme je teško održavati. Kada refaktorišemo veliku bazu koda koja nam je nepoznata, pravićemo greške ukoliko kod nije pokriven testovima. Kada je testovima i kada nešto izmenimo, odmah ćemo videti postoji li problem.

## Testiranje jedinica koda

Test slučajevi se obično odnose na testiranje osnovnih jedinica koda. Jedinica koda je logička jedinica koja predstavlja ponašanje, a može biti funkcija, klasa, modul i slično. Ona treba da se poziva pomoću javnog interfejsa i da se testira zasebno.

Test jedinice koda može da izvrši sledeće radnje:
- da testira jednu logičku funkciju
- da se pokrene bez određenog redosleda izvršenja
- da uvek vraća isti rezultat za isti unos.

Martin Fowler predlaže [piramidu testiranja](http://martinfowler.com/bliki/TestPyramid.html), koja se zasniva na jediničnim (*unit*) testovima, kako bismo postigli maksimalnu pokrivenost koda.

![](/images/koncepti/piramida-testiranja.png)

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
