---
title: Uvod u AJAX tehniku
layout: lekcija-js
permalink: /ajax-tehnika
image: images/koncepti/web/sinhroni-restoran.gif
---

**AJAX znači asinhroni Javaskript i XML**:
- **asinhroni**, zato što program ne čeka odgovor HTTP zahteva, već nastavlja izvršenje dok ne stigne odgovor, koji okida događaj;
- **JavaScript**, zato što se zahtevi kreiraju pomoću JavaScripta;
- **XML**, zato što je ranije XML bio popularan format za razmenu podataka. Danas uglavnom koristimo [JSON](/json-format), običan tekst ili već pripremljen HTML.

Asinhroni HTTP zahtevi, poznati kao AJAX pozivi, su standarni način mrežne komunikacije u Javascriptu. AJAX služi da putem Javascripta dobavimo podatke i dinamički ažuriramo HTML, bez ponovnog učitavanja stranice. To je osnovna tehnika za razvoj jednostraničnih aplikacija.

HTML obrasci podržavaju GET i POST zahteve, ali isključivo sinhrono, što zahteva ponovno učitavanje stranice.

## Istorijska pozadina

1990-ih, dobavljanje novih podataka zahtevalo je ponovno učitavanje HTML stranice sa servera. Zbog svake male izmene stranica bila ponovo učitana, a sav sadržaj opet poslat. Ovo je dodatno opterećivalo servere.

Početkom 2000-ih, sve više je rastao značaj pozadinskih HTTP zahteva prema serveru. Rani primer ove tehnike su Google sugestije. Dok korisnik kuca, program u pozadini dobavlja sugestije sa servera i prikazuje ih, bez osveženja stranice. 2005. godine dizajner Džesi Džejms Garet (*Jesse James Garret*) skovao je termin AJAX. AJAX je zapravo nov način primene postojećih tehnologija. 

Glavni podsticaj razvoju AJAX tehnike je pomeranje težišta upotrebe aplikacija sa desktopa na web. Ovo je izazvalo porast kompleknosti web aplikacija, što se nije moglo rešavati starim tehnikama.

## Sinhroni vs. asinhroni zahtevi

![]({{page.image}})

Razlika izmenu sinhronih i asinhronih zahteva se često objašnjava poređenjem sa kelnerom u restoranu.

Kod **sinhronih zahteva**, kelner ne prima novu narudžbinu dok ne završi već primljenu. Dakle, on će primiti jednu narudžbinu, zatražiće od kuvara da spremi jelo, kada jelo bude spremno poslužiće ga gostima, i tek nakon toga primiti novu narudžbinu. 

Kod **asinhronih zahteva**, kelner neprestano prima nove narudžbine i prosleđuje ih kuvaru, a jela služi onim redom kako pristužu od kuvara. Neka jela su kasnije naručena, ali im treba manje da se pripreme, dok su neka ranije naručena, ali se duže kuvaju. 

U stvarnosti, kelner je Javascript, kuvar je server, a jela su podaci. Dakle, možemo uputiti nov zahtev tek nakon što podaci stignu, sekvencijalno, ili možemo neprestano upućivati nove zahteve i prikazivati podatke kako koji stigne, asinhrono.

## Nedostaci klasičnih aplikacija

Glavni nedostaci klasičnih web aplikacija, koji rade po sinhronom principu *klikni-čekaj-osveži*, su sledeći:
- Stranica se ponovno učitava i za najmanju akciju korisnika
- Korisnik mora da čeka ponovno učitavanje strane
- Gubitak podataka prilikom ponovnog učitavanja stranice
- Spor odgovor na korisničke akcije

## Nedostaci AJAX aplikacija

AJAX aplikacije rešavaju neke od nedostataka klasičnih aplikacija, ali stvaraju i niz novih problema:

- dinamički HTML kreiran pomoću AJAX-a često ne bude registrovan u istoriji pregledača, tako da dugme „nazad“ ne radi. Ovo se obično rešava dodavanjem unutrašnje veze u URL (deo posle `#`)
- dinamičko renderovanje otežava SEO, odnosno čuvanje i indeksiranje stranica.
- dinamičko ažuriranje stranice može da bude loše korisničko iskustvo, ako stalno umeće nov i premeće stari sadržaj stranice.
- rezultati asinhronih HTTP zahteva ne stižu redom. Na primer, dok korisnik kuca u polje za pretragu, sugestije mogu stizati zbrkanim redom.
