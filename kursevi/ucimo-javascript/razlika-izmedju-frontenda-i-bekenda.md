---
title: Koja je razlika između frontenda i bekenda?
layout: lekcija-js
author: damjan
permalink: /razlika-izmedju-frontenda-i-bekenda
---

**Prednji kraj weba (*front-end*) je stranica u našem pregledaču, a zadnji kraj (*back-end*) mesto sa koga ta stranica dolazi.**

Stranica, naravno, u naš pregledač (*browser*) ne dolazi sama, već isključivo ako je pozovemo, to jest ako ukucamo njenu adresu ili kliknemo na link.

## Uređaj koji služi i uređaji koji su usluženi

![](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/800px-Client-server-model.svg.png)

Odnos back-enda i front-enda je zapravo odnos [servera i klijenta](https://en.wikipedia.org/wiki/Client%E2%80%93server_model).

Server je udaljeni računar na kome se nalazi naš sajt, koji se najčešće nalazi u Americi (oko 60% servera za srpske sajtove se nalaze u SAD, oko 30% u Evropi, i 10% u Srbiji). Server (ili služavnik) danonoćno služi podatke svim zainteresovanim uređajima - mobilnim telefonima, tabletima, računarima. Oni svi su njegovi klijenti.

Server je jedan, a klijenata je mnogo (za prosečan sajt je dovoljan jedan server). Ako nešto promenimo na klijentu (npr. boju pozadine u pregledaču), to vidimo samo mi, ali ako promenimo na serveru, to vide svi.

Računar na kom je postavljen server nema ekran, već samo kućište, i mora biti stalno upaljen kako naš sajt bio stalno dostupan klijentima. Poput ugostiteljskog radnika na vratima restorana, server dočekuje mušterije na određenom ulazu računara ([portu](https://en.wikipedia.org/wiki/Port_(computer_networking))), sluša njihove zahteve i služi im stranice koje su tražili. Sve to, naravno, radi poštujući [protokol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) lepog ponašanja na webu.

Bitno je naglasiti da klijent ne mora uvek biti Front-end. Neki serveri i sami mogu nastupati kao klijenti ka drugim serverima, tražeći od njih podatke i usluge.

## Lokalni server

Oni koji rade sa severom znaju da ne mora biti udaljen, može se nalaziti u istoj prostoriji, pa i na istom računaru kao klijentski program.

To zna da zbuni web developere. Kada na istom računaru pokrenemo i program koji servira i program koji čita stranice, teže razlikujemo ko služi a ko biva uslužen, i na kom se kraju izvršavaju naše skripte.

## Stalne i menjajuće stranice

![](https://cdn-images-1.medium.com/max/1349/1*XK_dfIrxW0UyoDy2Ja9z-A.png)

Stranica koju tražimo može unapred postojati na serveru, i mi je dobijamo takvu kakva je (*statična*, poput stranice knjige), ali može biti i iznova sastavljena za svakog posetioca ponaosob (*dinamična*). Tako na istoj adresi možemo gledati potpuno drugačiji sadržaj. Najpoznatiji primer je *facebook*, koji svakome prikazuje ono što želi da vidi. Dakle, sadržaj se *dinamički* kreira. Ovo se tradicionalno obavlja na serveru, ali može i u browseru.

***Za dinamičke strane važi Heraklitova izreka: "Ne možeš dva puta ući u istu reku."***

Ako sa servera dobijamo unapred kreirane stranice, onda server samo služi. Ali ako se sadržaj strane dinamički kreira od raznih podataka, onda ima programiranja na serverskoj strani. Primeri su spisak najčitanijih članaka (blog), ili video specifičan za našu zemlju (youtube), ili teme koje su individualno prilagođene (društvene mreže). Svi ti podaci se ogromnom brzinom prikupljaju sa raznih strana (najčešće iz baza podataka), filtriraju, obrađuju, međusobno slažu u smislenu celinu i tek onda šalju našem pregledaču.
