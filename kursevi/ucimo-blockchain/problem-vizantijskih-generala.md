---
title: Problem vizantijskih generala
layout: lekcija-blockchain
permalink: /problem-vizantijskih-generala
---

***Onda kada raspodelimo glavnu knjigu koja sadrži sve transakacije, nastaje još jedan problem koji je definisan u informatici i teoriji igara — alegorija po nazivom “Problem vizantijskih generala”.***

Određen broj ljudi koji održava mrežu može da odluči da promeni nešto u svoju korist. Na tom problemu su kriptografi i programeri radili tri decenije na teorijskom nivou. Istovremeno, ekonomisti možda i duže jer se on tiče dva veća problema u velikim sistemima: razmene informacija i podsticaja agenata u problemu principala i agenta.

## Problem

**Zamislimo veliku srednjevekonu vojsku koja je opkolila grad, sa mnogo divizija i generala na čelu tih divizija.** Oni moraju da postignu konsenzus kada da izvedu koordinisani napad na grad. Nijedan od generala ne može da vidi ostale, niti glavnog generala. Mogu da komuniciraju samo preko glasnika, što nas dovodi do problema razmene informacija.

Pritom, nisu svi generali lojalni vojsci. Neki od generala su izdajnici plaćeni od neprijateljske strane i ne žele da se konsenzus između lojalnih postigne. Lojalni generali žele da napadnu grad, ali potrebna im je istovremena većina. Dakle, potreban je način da svi lojalni generali odluče na isti način o napadu, a da manji broj izdajica ne natera lojalne da uvaže loš plan. Lojalni generali će postupiti kako se očekuje u skladu sa algoritomom, dok će izdajnici postupiti kako god oni žele.

Problem vizantijskih generala prikazuje izazov postizanja konsenzusa u raspodeljenim, decentralizovanim sistemima u kojima:

- ne postoji dobar protok informacija i
- postoje protivnici sistema.

## Bitcoin rešenje

**Pretpostavimo sada da su generali iz alegorije učesnici raspodeljene mreže koja je bazirana na blockchainu.**

Glasnici su način komunikacije u okviru mreže. Cilj većine, odnosno lojalnih, jeste da odluče da li da se neka informacija unosi u raspodeljenu bazu podataka odnosno da li je tačna ili ne. Lojalni generali su učesnici sistema koji žele da mreža funkcioniše prihvatanjem samo tačnih informacija. Izdajnici su bilo koji učesnici koji žele da falsifikuju informacije ili unesu netačne infromacije u bazu podataka.

Bitcoin predstavlja rešenje ovog problema jer daje podsticaj i nagrađuje dobro ponašanje i čini veoma skupim potez da se principal (mreža) napadne, za šta su uzgred nagrade male.

Algoritam onda mora da garantuje da bez obzira na to šta izdajnici urade, lojalni generali neće samo postići konsenzus, nego će se složiti oko najboljeg rešenja u interesu većine. Bitcoin je stoga visoko *[Byzantine fault tolerant](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance)* sistem (otporan na vizantijsku manu).

Posledica ovoga je da blockchain sistemi omogućavaju razmenu bilo kog digitalnog dobra od jednog korisnika na internetu do drugog na siguran i bezbedan način, jer omogućavaju decentralizovani konsenzus. To može biti digitalni novac, ugovor, dokaz o vlasništvu nad fizičkim dobrima, hartije od vrednosti…

Istovremeno, ovi sistemi mogu da predstavljaju registar jedinstvenih i trajnih podataka, kao što su na primer identiteti. Ova dobra i funkcije predstavljaju osnovne strukture svih ekonomskih, pravnih i političkih sistema i definišu odnose između individua, zajednica, organizacija i nacija.


Izvor: Nikola Milinković, *[Uvod u Blockchain](https://startit.rs/uvod-u-blockchain/)*, Startit, 2017.
