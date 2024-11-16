---
title: Dokumentacija programa
layout: lekcija-razvoj
permalink: /dokumentacija-programa
---

![](/images/fore/agile.png)

**Razvoj softvera ne svodi se samo na razvoj programa nego i na sastavljanje dokumenata koji prate te programe. Dokumentacija je sastavni i nezaobilazni dio onoga što softverski inženjeri proizvode.**

Nakon što je program testiran i verificiran, potrebno ga je dokumentirati. 

## Vrste dokumentacije

Dokumentacija programa sastoji se iz dva osnovna dijela:
- tehnička (ili sistemska) dokumentacija namijenjena je softverskim inženjerima ili članovima razvojnog
tima, opisuje zahtjeve, građu i funkcioniranje sistema, te olakšava sam razvoj softvera i njegovo kasnije održavanje.
- korisnička dokumentacija namijenjena je korisnicima, omogućuje im da koriste program, i opisuje postupak korištenja programa i njegove funkcije na razumljiv način.

### Tehnička dokumentacija

Tehnička dokumentacija se sastoji iz:
- opisa problema
- opisa modela i metode rješenja problema
- dijagrama toka i listinga programa (ako je tako ugovoreno)
- postupka instalacije programa
- postupka eksploatacije programa
- test primjera sa rezultatima

Primjeri dokumenata koji spadaju u sistemsku dokumentaciju:
- **Dokument o zahtjevima**. Opisuje zahtjeve na sistem, dakle što sistem treba raditi i uz koja ograničenja.
- **Dizajn sistema** (projektna dokumentacija). Nastaje kao rezultat oblikovanja sistema. Opisuje kako sistem treba biti građen, te kako treba raditi da bi obavio svoje funkcije.
- **Plan testiranja**. Sadrži primjere test podataka i odgovarajućih očekivanih rezultata. Služi nakon bilo kakve promjene programa za provjeru da li je sačuvana dotadašnja funkcionalnost programa.
- **Izvorni kod programa**, pisan u programskom jeziku i nadopunjen odgovarajućim komentarima. Nastaje kao rezultat implementacije sistema i na najizravniji način dokumentira sistem.

### Korisnička dokumentacija

Korisnička dokumentacija opisuje čemu program služi, kako se zadaju ulazni podaci, kako se interpretiraju rezultati i slično. Primjeri dokumenata koji spadaju u korisničku dokumentaciju:

- **Opis funkcija**. Namijenjen je osobama koje će odlučiti da li da se koristi taj sistem ili neki drugi. Daje se grubi opis što sistem može a što ne može raditi. Priloženi su primjeri, tabele i dijagrami. Ne objašnjavaju se operativni detalji.
- **Vodič za instalaciju**. Namijenjen je sistem-administratoru ili korisniku. Opisuje instalaciju sistema na zadanoj vrsti računala. Sadrži opis distribucijskog medija, definiciju minimalne hardverske i softverske konfiguracije potrebne za pokretanje sistema, proceduru instaliranja i podešavanja.
- **Uvodni priručnik**. Namijenjen je novim korisnicima. Daje neformalni uvod u sistem, te opisuje njegovu običnu upotrebu. Pisan je u formi tečaja, sadrži mnogo primjera, te uputa kako izbjeći uobičajene greške.
- **Referentni priručnik**. Namijenjen je iskusnim korisnicima. U potpunosti, na vrlo precizan način dokumentira sve funkcije sistema, sve oblike njegove upotrebe, sve greške koje mogu nastupiti. Nije u formi tečaja. Stil je formalan, struktura je stroga. Snalaženje u tekstu osigurano je preko indeksa pojmova.
- **Priručnik za administraciju**. Namijenjen je sistem-administratorima ili operatorima. Opisuje aktivnosti poput *backup*-a, upravljanja resursima, praćenja performansi, podešavanja rada, evidentiranja korisnika, postavljanja zaštite.

## Literatura

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi I*, Zagreb, 2005.
- Robert Manger, *Softversko inženjerstvo (skripta)*, Zagreb, 2012.
