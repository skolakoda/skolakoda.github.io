---
title: Model ravnopravnih partnera
layout: lekcija-razvoj
permalink: /model-ravnopravnih-partnera
---

**Sustav građen modelu ravnopravnih partnera (*peer-to-peer*) sastoji se od velikog broja istovrsnih procesa, takozvanih partnera (*peer*).**

Jedan partner u pravilu radi na osobnom računalu jednog korisnika, no može po potrebi komunicirati s drugima preko mreže. Svi partneri obavljaju istu zadaću prema potrebama svojih korisnika. Koji put partner uspijeva samostalno obaviti svoju zadaću. No obično mu je potrebna pomoć, i tada on stupa u komunikaciju sa svojim susjedima u mreži. Tijekom te komunikacije, uključeni partneri privremeno igraju uloge klijenta odnosno poslužitelja. Drugom prilikom uloge će možda biti drukčije raspoređene.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/P2P-network.svg/580px-P2P-network.svg.png)

Arhitektura ravnopravnih partnera ilustrirana je slikom. Čvorovi na slici predstavljaju partnere, a spojnice pokazuju tko je kome susjed.

## Primjena

Na primjer, možemo zamišljati da je riječ o sustavu za pohranjivanje znanstvenih radova. Svaki znanstvenik pohranjuje radove na vlastitom računalu, no svoju zbirku stavlja na raspolaganje i drugima. Kad neki znanstvenik želi vidjeti neki rad, njegov partner najprije gleda da li ga ima na lokalnom disku, ako ga nema tada pita susjede, ako ga ni susjedi nemaju, oni pitaju svoje susjede, i tako dalje. Kad se konačno pronađe partner koji ima trženi rad, on stupa u neposrednu komunikaciju s polaznim partnerom, te mu omogućuje uvid. Za vrijeme te komunikacije polazni partner igra ulogu klijenta, a pronađeni partner igra ulogu poslužitelja.

Tehnologije ravnopravnih partnera uglavnom su se koristile za osobne svrhe, na primjer za dijeljenje glazbenih ili video sadržaja. Poznati primjeri su: Napster, BitTorrent i Gnutella. Ovakvi sustavi često su kršili ili zaobilazili autorska prava, pa su bili predmet sudskih sporova ili čak zabrana.

Sustavi internetske telefonije (VoIP) poput Skype također se mogu smatrati primjerima ravnopravnih partnera, gdje partner koji uspostavlja poziv privremeno preuzima ulogu klijenta, a partner koji prima poziv privremeno postaje poslužitelj.

## Ravnopravni partneri vs. distribuirani objekti

Model ravnopravnih partnera ima sličnosti s modelom distribuiranih objekata po tome što također zaobilazi ili prevladava uobičajenu podjelu procesa na klijente i poslužitelje. Ipak, između ova dva modela postoje i sljedeće razlike:

- Kod distribuiranih objekata sustav se sastoji od međusobno različitih dijelova; svaki od tih dijelova specijalizirao se za obavljanje jedne fiksirane uloge. Kod ravnopravnih partnera sustav se sastoji od istovrsnih dijelova; svaki od tih dijelova samo privremeno preuzima neku od uloga.
- Kod distribuiranih objekata dijelovi su relativno čvrsto integrirani pomoću *middleware*-a koji podržava paradigmu poziva udaljenih metoda. Kod ravnopravnih partnera ti partneri su puno labavije povezani, naime oni komuniciraju samo povremeno služeći se uobičajenim mrežnim protokolima i razmjenom poruka.

## Polu-centralizirana arhitektura

![](https://image.slidesharecdn.com/ch18-100907133306-phpapp01/95/ch18software-engineering-9-47-728.jpg?cb=1283866424)

U modelu ravnopravnih partnera nastoji se da sustav u što većoj mjeri funkcionira na decentralizirani način, samo kroz interakciju partnera bez ikakve središnje kontrole. Ipak, kod velikih mreža takav način rada postaje spor i neefikasan – lako se može desiti da se mreža zaguši velikom brojem repliciranih poruka ili redundantnim obradama istog upita. Tada se pribjegava polu-centraliziranoj arhitekturi, koja se donekle udaljava od izvorne partnerske ideje.

Polu-centralizirana arhitektura osim običnih partnera uvodi i **super-partnere** koji imaju sve informacije o mreži i služe kao posrednici u uspostavljanju veza između običnih partnera. Da bi jedan partner našao odgovarajućeg partnera za komunikaciju, on se obraća za pomoć super-partneru. Super-partner dojavljuje koji su drugi partneri na raspolaganju. Čim su obični partneri otkrili jedan drugoga, oni uspostavljaju neposrednu komunikaciju. Ovakvo rješenje koristi se na primjer u internetskoj telefoniji, gdje takozvani *media gateway controller* služi kao neka vrsta telefonske centrale pretvarajući telefonske brojeve u IP adrese.


Izvor: Robert Manger, *Softversko inženjerstvo (skripta)*, Zagreb, 2012.
