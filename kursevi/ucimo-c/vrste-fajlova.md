---
title: Vrste fajlova
layout: lekcija-c
permalink: /vrste-fajlova
---

**Fajl ili datoteka je imenovano područje u sekundarnoj memoriji, najčešće tvrdom disku, koje služi za smještaj podataka.** Sa stanovišta operacijskog sustava, datoteka je složen objekt koji se obično sastoji od više povezanih fragmenata smještenih na različitim lokacijama u sekundarnoj memoriji. Kako operacijski sustav brine o svim detaljima rada s datotekama, C promatra datoteku posve funkcionalno kao cjelinu u koju je moguće upisati niz znakova ili ga iz nje pročitati.

U C-u je datoteka kontinuirani niz ili tok (en. *stream*) bajtova, koje je moguće dohvatiti individualno. Prilikom čitanja iz datoteke, tok bajtova je usmjeren od datoteke ka programu; program može čitati ulazni niz znak po znak. Kod pisanja, tok znakova ide od programa prema datoteci. Najmanja jedinica koja može biti pročitan ili upisana je jedan znak (bajt).

Ovakva apstraktna definicija omogućava da se tastatura i ekran tretiraju kao datoteke. S tastature je moguće samo čitati, dok je na ekran moguće samo pisati.

## Tekstualne i binarne datoteke

ANSI standard poznaje dvije vrste datoteka: tekstualne i binarne. Razlika među njima je u načinu na koji se interpretira sadržaj. 

**Binarna datoteka** je niz podataka tipa `char`. Budući da se svaki tip podatka u C-u (`int`, `double`, `struct` ...) može preslikati u niz vrijednosti tipa `char`, u binarnu je datoteku moguće upisati podatke onako kako su reprezentirani u računalu.

**Teksualna datoteka** je niz znakova podijeljenih u linije. Svaka linija sadrži nula ili više znakova, iza kojih slijedi znak za prijelaz u novi red `\n`. Tekstualne datoteke su namijenjene pohranjivanju tekstualnih podataka. Vidimo da pojam binarne datoteke odgovara prethodnoj definiciji datoteke kao niza znakova. Tekstualna datoteka je isto tako niz znakova, ali se interpretira na malo drugačiji način. 

Potreba za razlikovanjem izmedu tekstualnih i binarnih datoteka pojavila se stoga što različiti operacijski sustavi koriste različite načine označavanja kraja linije: programski jezik C označava kraj linije znakom `\n`. Pod operacijskim sustavom UNIX, znak za kraj linije je `\n` (kao i u
C-u) te stoga pod UNIX-om nema razlike izmedu binarne i tekstualne datoteke. Operacijski sustav MS-DOS kraj linije označava s dva znaka `\r\n`, dok npr. Macintosh koristi znak `\r`. Kada C otvori tekstualnu datoteku kreiranu pod MS-DOSom on će svaki par znakova `\r\n` pretvoriti u znak `\n`. Analogna se transformacija provodi s Macintoshovim tekstualnim datotekama.

Treba uočiti da C omogućava da danu datoteku promatramo kao binarnu ili tekstualnu prema našim potrebama, neovisno o tome da li datoteka sadrži tekstualne podatke ili ne. Tekstualnu datoteku formiranu npr. pod MS-DOS-om možemo otvoriti i kao tekstualnu i kao binarnu.


Izvor: M. Jurak, *Programski jezik C*, predavanja 2003/04.
