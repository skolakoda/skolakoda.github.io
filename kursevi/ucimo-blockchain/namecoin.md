---
title: Namecoin
layout: lekcija-blockchain
permalink: /namecoin
---

**Namecoin je također kriptovaluta, no to je zapravo sustav koji koristi blockchain tehnologiju, kod kojeg kriptovaluta ima sekundarnu ulogu.**

Namecoin je nastao od Bitcoina, i kao kriptovaluta ima identične karakteristike poput Bitcoina, zapravo te dvije valute koriste jednak programerski kod u pozadini. S druge strane, Namecoin predstavlja distribuiranu platformu za registraciju, koja podržava zapise ključ-vrijednost oblika. Korisnici na takav blockchain mogu zapisati informacije poput email adresa, kriptografskih ključeva, SSL certifikata, digitalnih potpisa datoteka (takvi potpisi omogućuju identifikaciju i verifikaciju sadržaja računalnih datoteka) i još mnogo toga. 

Najvažnija uloga Namecoina blockchaina je održavanje skupa zapisa registriranih domenskih imena (eng. *domain-name*), baš poput distribuiranog sustava za registraciju domenskih imena koje koristi Internet. Namecoin sustav, s vršnom domenom naziva `.bit`, se koristi kao alternativa postojećoj centraliziranoj [*Domain Name System*](/sistem-imena-domena) (DNS) aplikaciji. 

## Sustav domenskih imena

Kao što smo vidjeli, DNS poslužiteljima upravljaju velike organizacije i vlade država. One mogu zlorabiti svoju moć tako da cenzuriraju i nadziru naše korištenja interneta.

Namecoin je, uz pomoć blockchain tehnologije koju koristi, imun na ovakve probleme. Umjesto klijent-poslužitelj modela, za građu DNS sustava Namecoin koristi decentralizirani model ravnopravnih partnera. Baze podataka, koje povezuje simbolička imena računala s IP adresama, u ovom slučaju nisu u vlasništvu neke organizacije ili vlade, već takve zapise svaki čvor u sustavu samostalno održava pomoću blockchaina. Blockchain tehnologija omogućava da konzistentnost tih zapisa i nemogućnost mijenjanja istih. 

Nabrojimo neke prednosti decentraliziranog DNS sustava u odnosu na prije opisani centralizirani: 

- Registracija domene znatno je jeftinija, korištenjem decentraliziranog sustava temeljenog na blockchain tehnologiji. 
- Decentralizirani sustav poštuje privatnost korisnika. Sustav ne zahtijeva od korisnika pružanje identiﬁkacijskih podataka koje kasnije može koristiti protiv njih. Na primjer, kod centraliziranog DNS sustava vlada ima mogućnost kontrole neovisnih medija. 
- Vlade ili organizacije mogu blokirati ili oduzeti ime nekoj regularnoj domeni, blockchain tehnologija to onemogućava. 
- Novac potrošen na registraciju domene korisnika pomaže pri održavanje i daljnjem razvoju drugih decentraliziranih javnih usluga. 
- Decentralizirani DNS sustav omogućuje postojanje vršne domena koje nije u ničijem vlasništvu (`.bit` domena). Dokle god postoje čvorovi u mreži koji obavljaju ulogu DNS poslužitelja, svi ostali korisnici imaju pristup bilo kojoj domeni po hijerarhiji nižoj od `.bit` domene. Takvi čvorovi su zapravo blockchain partneri. Čak i gašenjem poslužitelja niže hijerarhijske razine, vlasti ne mogu nametnuti pravila i utjecati na rad domene najviše razine.

## Kriptovaluta

Namecoin kriptovaluta (oznaka NMC) je dio Namecoin sustava. Koristi se za plaćanje naknade za registraciju i prijenos imena. Namecoin sustav podržava nekoliko vrsta transakcija, čija je svrha pohranjivanje podataka u blockchain. Na cijenu transakcije dodaje se i naknada od 0.005 NMC. Ograničenje na ukupan broj izdanih NMC-ova je 21 milijun, a kreiranjem svakog novog bloka rudar je nagrađen s 50 novonastalih jedinica kriptovalute Namecoin.

Tablica transakcija u Namecoin sustavu:

Naziv | Cijena | Opis 
------|--------|------
name_new | 0.01 NMC | Omogućuje korisniku da se predbilježi za neku domenu 
name_firstupdate | 0 NMC | Transakcija registrira ime i čini ga javnim 
name_update | 0 NMC | Omogućuje mijenjanje ili obnavljanje domene


Izvor: Domina Hozjan, [*Blockchain (diplomski rad)*](https://zir.nsk.hr/islandora/object/pmf%3A779/datastream/PDF/view), Prirodoslovno–matematički fakultet, Zagreb, 2017.
