---
title: Uvod u programski jezik C
layout: lekcija-c
permalink: /c-uvod
image: https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ken_Thompson_%28sitting%29_and_Dennis_Ritchie_at_PDP-11_%282876612463%29.jpg/959px-Ken_Thompson_%28sitting%29_and_Dennis_Ritchie_at_PDP-11_%282876612463%29.jpg
---

![Dennis Ritchie and Ken Thompson]({{page.image}})

**C je programski jezik opće namjene. Razvio ga je Dennis Ritchie sedamdestih godina prošlog stoljeća, za korišćenje na Unix sistemima, u *Bell Telephone Laboratories Inc*. Iako je napravljen za sistemsko programiranje, takođe se koristi i za programiranje aplikacija.**

C je tijesno je povezan s operativnim sistemom UNIX na kojemu je razvijen, jer su i sistem i većina programa koji rade na UNIX-u napisani baš u C-u. Jezik, ipak, nije vezan samo za jedan operativni sistem ili računalo; iako je nazvan "jezikom za sistemsko programiranje" zato što se koristi pri pisanju prevoditelja i operativnih sistema, podjednako se dobro koristi za programiranje u drugim područjima. Većina bitnih ideja C-a potječe od jezika BCPL. Utjecaj BCPL-a na C ostvaren je indirektno preko B jezika koji je 1970. napisao Ken Thompson za prvi UNIX sistem na [PDP-7](https://en.wikipedia.org/wiki/PDP-7) računalu. BCPL i B su jezici bez "tipova podataka". Nasuprot njemu, C nudi mnoštvo različitih tipova podataka.

### Tipovi podataka

**Osnovni tipovi** su znaci, cjelobrojne vrijednosti i vrijednosti iz područja realnih brojeva (vrijednosti s pomičnim zarezom) u više veličina. Uz to postoji hijerarhija **izvedenih tipova podataka** kreiranih pokazivačima, poljima, strukturama i unijama. Izrazi se sastoje od operatora i operanda; bilo koji izraz, uključujući i dodjelu vrijednosti ili pozivanje funkcije, može biti naredba. Pokazivači omogućuju nezavisnu adresnu aritmetiku.

### Kontrola toka

C nudi osnovne konstrukcije za kontrolu toka koje traže dobro strukturirani programi: grupiranje naredbi, donošenje odluka (`if-else`), izbor (`switch`), petlje s uvjetima na početku (`while`) i na kraju (`do`), te izlaz iz petlje prije kraja (`break`).

### Funkcije

**Funkcije** mogu vraćati vrijednosti osnovnih tipova, struktura, unija ili pokazivača. Bilo koja funkcija može se rekurzivno pozivati. Lokalne varijable su tipično "automatske" (gube vrijednost pri izlasku iz funkcije) ili se kreiraju svakim novim pozivanjem. Definicije funkcija ne moraju se umetati, a varijable se mogu deklarirati u blokovima. Funkcije C programa mogu se nalaziti u različitim izvornim datotekama koje se posebno prevode. Varijable mogu biti unutrašnje, vanjske (za koje se zna samo unutar jedne izvorne datoteke) ili dostupne cijelom programu (globalne).

Preprocesorska faza obavlja makrosupstitucije na izvornom tekstu programa, uključivanje ostalih izvornih datoteka i uvjetno prevođenje.

### Jezik niskog nivoa

**C je jezik relativno "niskog nivoa".** Ovakav epitet nije nedostatak, već govori da C radi s istim vrstama objekata s kojima rade i sama računala, a to su znakovi, brojevi i adrese. Ovi objekti se mogu kombinirati i premještati pomoću aritmetičkih i logičkih operatora kojima su opremljena postojeća računala.

C ne radi direktno sa složenim objektima kao što su nizovi znakova, skupovi, liste ili matrice. Ne postoje operacije koje obrađuju cijelu matricu ili niz, iako strukture mogu biti kopirane kao jedinka. C ne definira ni jednu drugu mogućnost memoriranja lokacija osim statičke definicije i discipline stoga, koja je omogućena lokalnim varijablama funkcija; ovdje nema nagomilavanja ili skupljanja nebitnih elemenata.

Pošto je **C relativno mali jezik**, dade se opisati na relativno malo prostora i naučiti brzo. Programer s punim pravom može očekivati lako učenje i razumijevanje korektne upotrebe cijelog jezika.

### Standard

Dugi niz godina, jedina definicija C-a je bio referentni priručnik prvog izdanja ove knjige. American National Standards Institute (ANSI) je 1983.god. osnovao udrugu koja se brine za modernu i cjelovitu definiciju C-a.

Standard se bazira na originalnom referentnom priručniku. Jezik je razmjerno malo mijenjan; jedan od ciljeva standarda je bio osigurati da većina postojećih programa ostane primjenjiva, ili, ako to ne uspije, prevoditelji moraju dati upozorenje o drugačijem načinu rada.

### Standardna biblioteka

Zbog toga što tipove podataka i kontrolnih struktura određenih C-om podržava veliki broj računala, radna biblioteka koja je snabdjevena vlastitim programima jest mala. Jedino se funkcije iz standardne biblioteke pozivaju eksplicitno, a i one se mogu zaobići. Te funkcije daju se napisati u C-u, te prenijeti s računala na računalo, osim onih koje neposredno oslikavaju konkretno računalo na kojemu se radi i njegov operativni sistem.

**Iako C odgovara mogućnostima većine računala, on je nezavisan od konkretne arhitekture računalskog sustava.** Sa malo pažnje lako je napisati prenosive programe, što znači programe koje možemo pokrenuti bez zahtjeva za sklopovskim promjenama. Standard čini sve aspekte prenosivosti eksplicitnim, a propisuje i skup konstanti koje karakteriziraju računalo na kojem se program vrti.

### Kontrola tipova

**C nije strogo tipiziran, ali kako se razvijao, njegova kontrola tipova je jačala.** Originalna definicija C-a ne odobrava, ali dopušta zamjenu pokazivača i cijelih brojeva; nakon dužeg razdoblja i to je riješeno, i standard zahtjeva točne deklaracije i jasne konverzije koje su činili dobri prevoditelji. Nove deklaracije funkcija su slijedeći korak u tom smjeru. Prevoditelji će upozoriti na većinu tipskih grešaka, mada ne postoji automatsko pretvaranje neusuglašenih tipova podataka. C ipak zadržava osnovnu filozofiju koju programeri poznaju; on samo zahtjeva jasno definiranje ciljeva.

C, kao i svaki drugi jezik ima svoje nedostatke. Neki operatori imaju pogrešan prioritet; neki dijelovi sintakse mogli bi biti bolji. Pored svega, C se dokazao kao jedan od najkorisnijih i najsadržajnijih za veliki broj različitih aplikacija.


Izvor: Brian Kernighan i Dennis Ritchie, *Programski jezik C*
