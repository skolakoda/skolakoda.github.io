---
title: Čuvanje podataka
layout: lekcija-strukture
permalink: /cuvanje-podataka
---

**Računari za čuvanje svih vrsta podataka koriste samo cifre 0 i 1.** Bilo da se radi o elektronskim, magnetnim ili optičkim komponentama, tehnologija računara koristi samo dva stanja. 

Na primer, ukoliko između dve tačke postoji napon viši od određenog praga, onda se smatra da tom paru tačaka odgovara vrednost 1, inače mu odgovara 0. Takođe, polje hard diska može biti ili namagnetisano što odgovara vrednosti 1 ili razmagnetisano što odgovara vrednosti 0. Slično, laserski zrak na površini kompakt diska „buši rupice“, pa polje koje nije izbušeno predstavlja vrednost 0, a ono koje jeste izbušeno predstavlja 1.

## Bit i bajt

![](/images/koncepti/podaci/bit-bajt.png)

Svi podaci unutar računara se sastoje od 0 i 1. Osnovna memorijska ćelija je bit. Naziv dolazi otuda što se u njoj pamti jedna binarna cifra (*binary digit*). Kad 8 bitova povežemo u celinu dobijamo jedan bajt.

U jedan bajt možemo smestiti jednu od 256 mogućih kombinacija 0 i 1. Na primer neko ASCII slovo ili jednu od RGB boja nekog piksela. Svaki bit u bajtu ima svoju adresu (od 0 do 7), te svakom možemo individualno pristupati i menjati ga.

## Računarska memorija

Ima više načina da se tehnološki realizuje računarska memorija – poluprovodnici, magnetni materijali, optički materijali. Od poluprovodnika se najčešće prave RAM i ROM memorije, od magnetnih materijala hard diskovi, a od optičkih CD i DVD diskovi.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/MT4C1024-HD.jpg/640px-MT4C1024-HD.jpg)

Kod kompjutera razlikujemo dve osnovne vrste memorije:
- [RAM](https://en.wikipedia.org/wiki/Random-access_memory) i [ROM](https://en.wikipedia.org/wiki/Read-only_memory), u kojima se podacima pristupa preko adresa bajtova;
- disk memorije (magnetni i optički), u kojima su podaci smešteni u fajlove, a pristupa im se čitanjem fajlova deo po deo (čitanjem se prebacuju u RAM, a onda im se pristupa).

Kod diskova je uobičajna podela memorijskog prostora na foldere (direktorijume), uređene u hijerarhiju. Osnovni sadržač podataka na diskovima je fajl (datoteka). Obzirom da su fajlovi veoma dugački nizovi bajtova, pojedinačnim bajtovima se ne pristupa direktno, već se fajl čita deo po deo, pa se onda u učitanom delu pronalaze podaci koje treba koristiti ili menjati.

### Literatura

* Milan Popović, *Osnove programiranja (skripta)*
* Filip Marić, Predrag Janičić, *Programiranje 1: Osnove programiranja kroz programski jezik C*, Beograd, 2015.

Priredio: Damjan Pavlica
