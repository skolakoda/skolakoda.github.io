---
title: Problem vizantijskih generala
layout: lekcija-blockchain
permalink: /problem-vizantijskih-generala
---

***Problem vizantijskih generala je definisan još davne 1982 godine i ilustruje problematiku komunikacije preko posrednika koji nisu pouzdani.***

Onda kada raspodelimo glavnu knjigu koja sadrži sve transakacije, nastaje još jedan problem koji je definisan u informatici i teoriji igara — alegorija po nazivom “Problem vizantijskih generala”.

Određen broj ljudi koji održava mrežu može da odluči da promeni nešto u svoju korist. Na tom problemu su kriptografi i programeri radili tri decenije na teorijskom nivou. Istovremeno, ekonomisti možda i duže jer se on tiče dva veća problema u velikim sistemima: razmene informacija i podsticaja agenata u problemu principala i agenta.

## Problem

![](https://www.mojafirma.rs/wp-content/uploads/2017/12/napad.jpg)

**Zamislimo veliku srednjevekonu vojsku koja je opkolila grad, sa mnogo divizija i generala na čelu tih divizija.** Oni moraju da postignu konsenzus kada da izvedu koordinisani napad na grad. Nijedan od generala ne može da vidi ostale, niti glavnog generala. Mogu da komuniciraju samo preko glasnika, što nas dovodi do problema razmene informacija.

Pritom, nisu svi generali lojalni vojsci. Neki od generala su izdajnici plaćeni od neprijateljske strane i ne žele da se konsenzus između lojalnih postigne. Lojalni generali žele da napadnu grad, ali potrebna im je istovremena većina. Dakle, potreban je način da svi lojalni generali odluče na isti način o napadu, a da manji broj izdajica ne natera lojalne da uvaže loš plan. Lojalni generali će postupiti kako se očekuje u skladu sa algoritomom, dok će izdajnici postupiti kako god oni žele.

Problem vizantijskih generala prikazuje izazov postizanja konsenzusa u raspodeljenim, decentralizovanim sistemima u kojima:

- ne postoji dobar protok informacija i
- postoje protivnici sistema.

### Problem sa generalima izdajicama

Zamislimo da vizantijski generali opsedaju neprijateljski grad i da treba da se dogovore oko zajedničkog plana akcije. Da bi napad uspeo, potrebno je da svi napadnu u isto vreme. Ako neki od generala ne izvrše napad u dogovoreno vreme, veoma je verovatno da napad neće uspeti. Pošto se generali nalaze na različitim lokacijama oko grada, ne mogu se uživo dogovarati, već komuniciraju preko kurira. Ovde imamo dva potencijalna problema. Prvi problem je ako su neki od generala izdajnici. Oni će namerno sabotirati dogovor i preko svojih kurira slati informacije tako da i među poštenim generalima izazovu konfuziju.

### Problem sa glasnicima izdajicama

U jednostavnijem scenariju, svi generali su pošteni, ali nisu svi kuriri pošteni. Da još dodatno pojednostavimo slučaj, zamislimo da imamo 3 generala i svaki general po 2 kurira (kao na slici 2), pri čemu svaki šalje po jednog kurira svakom od svojih kolega. U ovom primeru, jedan od kurira prvog generala je izdajnik i on namerno trećem generalu prenosi pogrešnu poruku. Prvi i drugi general misle da je dogovor postignut i kreću u napad. Treći general dobija drugačije poruke od svojih kolega i zbog toga ne napada jer smatra da nije postignut dogovor. Umesto cele vojske, u napad kreće 2/3 vojske i to znatno umanjuje šanse za pobedu.

![](https://www.mojafirma.rs/wp-content/uploads/2017/12/generali.jpg)

Na ovom jednostavnom primeru smo videli da je dovoljno da je samo 1 od 6 kurira izdajnik da bi šanse za uspeh napada značajno smanjile. U većim i kompleksnijim sistemima, broj učesnika (a često i broj izdajnika) ja značajno veći, što samo dodatno komplikuje situaciju.

## Bitcoin rešenje

**Pretpostavimo sada da su generali iz alegorije učesnici raspodeljene mreže koja je bazirana na blockchainu.**

Glasnici su način komunikacije u okviru mreže. Cilj većine, odnosno lojalnih, jeste da odluče da li da se neka informacija unosi u raspodeljenu bazu podataka odnosno da li je tačna ili ne. Lojalni generali su učesnici sistema koji žele da mreža funkcioniše prihvatanjem samo tačnih informacija. Izdajnici su bilo koji učesnici koji žele da falsifikuju informacije ili unesu netačne infromacije u bazu podataka.

Bitcoin predstavlja rešenje ovog problema jer daje podsticaj i nagrađuje dobro ponašanje i čini veoma skupim potez da se principal (mreža) napadne, za šta su uzgred nagrade male.

Algoritam onda mora da garantuje da bez obzira na to šta izdajnici urade, lojalni generali neće samo postići konsenzus, nego će se složiti oko najboljeg rešenja u interesu većine. Bitcoin je stoga sistem visoko otporan na vizantijsku manu (*[Byzantine fault tolerant](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance)*).

Posledica ovoga je da blockchain sistemi omogućavaju razmenu bilo kog digitalnog dobra od jednog korisnika na internetu do drugog na siguran i bezbedan način, jer omogućavaju decentralizovani konsenzus. To može biti digitalni novac, ugovor, dokaz o vlasništvu nad fizičkim dobrima, hartije od vrednosti…

Istovremeno, ovi sistemi mogu da predstavljaju registar jedinstvenih i trajnih podataka, kao što su na primer identiteti. Ova dobra i funkcije predstavljaju osnovne strukture svih ekonomskih, pravnih i političkih sistema i definišu odnose između individua, zajednica, organizacija i nacija.


### Izvori
- Nikola Milinković, *[Uvod u Blockchain](https://startit.rs/uvod-u-blockchain/)*, Startit, 2017.
- Aleksandar Matanović, *[Šta je to blokčein i kako radi? ](https://www.mojafirma.rs/magazin/sta-je-to-blokcein-blockchain-i-kako-radi/)*, Mojafirma, 2017.
