---
title: Model ravnopravnih partnera
layout: lekcija-web
permalink: /model-ravnopravnih-partnera
---

![](/images/koncepti/web/P2P-network.png)

**Model ravnopravnih partnera (eng. *peer-to-peer*, skraćeno P2P) je mrežni model u kojem čvorovi ("vršnjaci") direktno komuniciraju jedni s drugima bez potrebe za centralnim serverom.** 

Svaki čvor može istovremeno biti i klijent i server, omogućujući deljenje resursa, podataka ili usluga. Primeri uključuju torrent mreže, blockchain i razmenu fajlova.

Jedan partner u pravilu radi na računaru jednog korisnika, no može po potrebi komunicirati s drugima preko mreže. Svi partneri obavljaju istu zadaću prema potrebama svojih korisnika. Nekad partner uspijeva samostalno obaviti svoju zadaću. No obično mu je potrebna pomoć, i tada on stupa u komunikaciju sa susjedima u mreži. Tijekom te komunikacije, uključeni partneri privremeno igraju uloge klijenta i poslužitelja. Drugom prilikom uloge će možda biti drukčije raspoređene.

## Primjena

Na primjer, možemo ga koristiti za sustav za pohranjivanje znanstvenih radova. Svaki znanstvenik pohranjuje radove na vlastitom računalu, no svoju zbirku stavlja na raspolaganje i drugima. Kad neki znanstvenik želi vidjeti neki rad, njegov partner najprije gleda da li ga ima na lokalnom disku, ako ga nema tada pita susjede, ako ga ni susjedi nemaju, tada pita dalje. Kad se konačno pronađe partner koji ima traženi rad, on stupa u neposrednu komunikaciju s polaznim partnerom, te mu omogućuje uvid. Za vrijeme te komunikacije polazni partner igra ulogu klijenta, a pronađeni partner ulogu poslužitelja.

Tehnologije ravnopravnih partnera često se koriste za dijeljenje glazbenih ili video sadržaja. Ovakvi sustavi nekad su kršili ili zaobilazili autorska prava, pa su bili predmet sudskih sporova ili čak zabrana.

Internet telefonija (*Voice over Internet Protocol*, skraćeno **VoIP**) poput Skype također je primjer ravnopravnih partnera, gdje partner koji uspostavlja poziv preuzima ulogu klijenta, a partner koji prima poziv privremeno postaje poslužitelj.

## Model distribuiranih objekata

Model ravnopravnih partnera ima sličnosti s modelom distribuiranih objekata po tome što također ukida uobičajenu podjelu procesa na klijente i poslužitelje. Ipak, između ova dva modela postoje i sljedeće razlike:

- Kod distribuiranih objekata sustav se sastoji od međusobno različitih dijelova; svaki od tih dijelova specijalizirao se za obavljanje jedne fiksirane uloge. Kod ravnopravnih partnera sustav se sastoji od istovrsnih dijelova; svaki od tih dijelova samo privremeno preuzima neku od uloga.
- Kod distribuiranih objekata dijelovi su relativno čvrsto integrirani pomoću *middleware*-a koji podržava paradigmu poziva udaljenih metoda. Kod ravnopravnih partnera ti partneri su puno labavije povezani, naime oni komuniciraju samo povremeno služeći se uobičajenim mrežnim protokolima i razmjenom poruka.

## Polu-centralizirana arhitektura

![](/images/koncepti/web/polu-centralizirana-arhitektura.jpg)

U modelu ravnopravnih partnera nastoji se da sustav funkcionira decentralizirano, kroz interakciju partnera bez središnje kontrole. Ipak, kod velikih mreža takav način rada postaje spor i neefikasan – lako se može desiti da se mreža zaguši velikom brojem repliciranih poruka ili redundantnim obradama istog upita. Tada se pribjegava polu-centraliziranoj arhitekturi, koja se donekle udaljava od izvorne partnerske ideje.

Polu-centralizirana arhitektura osim običnih partnera uvodi i **super-partnere** koji imaju sve informacije o mreži i služe kao posrednici u uspostavljanju veza između običnih partnera. Da bi jedan partner našao odgovarajućeg partnera za komunikaciju, on se obraća za pomoć super-partneru. Super-partner dojavljuje koji su partneri na raspolaganju. Čim partneri otkriju jedan drugoga, uspostavljaju neposrednu komunikaciju. Ovakvo rješenje koristi se na primjer u internetskoj telefoniji, gdje takozvani *media gateway controller* ima ulogu telefonske centrale pretvarajući telefonske brojeve u IP adrese.

## Literatura

- Robert Manger, *Softversko inženjerstvo (skripta)*, Zagreb, 2012.
