---
title: Tipovi podataka
layout: lekcija-strukture
permalink: /tipovi-podataka
image: /images/koncepti/podaci/binarni.jpg
---

![]({{page.image}})

**Tip podatka** je oznaka za skup vrijednosti, i operacije koje se mogu obaviti na tom skupu vrijednosti. Programski jezici implicitno ili eksplicitno podržavaju tipove podatka. 

Tipovi podataka koje podržavaju pojedini programski jezici međusobno se razlikuju. Osnovni tipovi zajednički su većini programskih jezika, a razlike u definiciji tih tipova u različitim jezicima nisu velike.

Programi se mogu promatrati i kao niz operacija koje se izvode na podacima, tako da je ishodišno pitanje programiranja opis i strukturiranje podataka. 

<!-- Tipovi podataka zapravo djeluju kao ograničenja u programima koja se statički ili dinamički provjeravaju. -->

## Tretiranje na osnovu tipa

<!-- Možemo postaviti tri osnovne skupine podataka koje postoje u programu:

* ulazni podaci
* unutarnji podaci programa
* izlazni podaci -->

**Tip podatka daje značenje nečemu što je u konačnici samo niz bitova.** U hardveru nema razlikovanja između pokazivača, koda instrukcije, znakova, cijelih brojeva ili decimalnih brojeva. Tip podatka govori nam kako treba tretirati taj niz bitova.

Sve podatke koji se obrađuju u programu treba odrediti i povezati u struktuirane cjeline (strukture podataka) kako bi jednostavno radili s njima. Računalu je potrebno dati definiciju podataka kako bi se kontrolirale operacije nad njima: aritmetičke operacije dopuštene su nad brojevima, skupovne operacije nad elementima skupa itd. Tip podataka određuje i dozvoljene vrijednosti koje se mogu poprimiti, kao i skup dozvoljenih operacija. To ujedno utiče i na način pohrane podataka.

## Prosti i složeni tipovi

![](/images/koncepti/podaci/tipovi-podataka.jpg)

**Primitivni tipovi podataka** su oni koje programski jezik nudi kao osnovne gradivne elemente. Ovisno o jeziku, primitivni tipovi mogu imati jedan na jedan odnos sa memorijskom lokacijom.

Prosti ili primitivni tipovi podataka zajednički većini jezika su:

- bulova vrednost (`boolean`, `bool`).
- ceo broj (`integer`, `int`)
  - kraći ceo broj (`short`)
  - duži ceo broj (`long`)
- broj sa pomičnim zarezom (`float` za kraće, `double` za duže brojeve)
- karakter (`character`, `char`)

Primitivni tipovi se organizuju u **složene tipove** ili **strukture podataka**. Neke od standardnih su:
- niz (*array*)  
- skup (*set*)
- objekat (*object*)  
- rečnik ili mapa (*dict*, *map*)

Neki tipovi podataka se značajno razlikuju među jezicima. Npr. *string* je negde niz karaktera, a negde prost tip.

Preciznost broja određena je dužinom riječi procesora (32 ili 64 bita).

## Izvori

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi I*, Zagreb, 2005.
