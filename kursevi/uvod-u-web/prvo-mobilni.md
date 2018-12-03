---
title: Prvo mobilni dizajn
layout: lekcija-html
permalink: /prvo-mobilni
---

**Prvo mobilni (*mobile first*) web dizajn daje prednost mobilnim uređajima.**

Sve više posetilaca na sajtove dolazi sa mobilnih uređaja. Usled toga, pretraživač Google lošije rangira stranice koje nisu prilagođene za mobilne uređaje.

Uvek prvo pišemo CSS za mobilne uređaje. To je osnovni stil, bez ikakvih medija upita. Telefoni su mali i nemaju mnogo prostora za nepotrebne dodatke. Tu prikazujemo sadržaj koji je posetiocima zaista potreban. Nakon što stilizujemo stranicu za mobilne uređaje, dodajemo medija upite za ostale ekrane.

## Kratki saveti za mobilni dizajn

Postoji nekoliko stavki koje treba imati na umu:

- Ograničite dizajn na jedan stubac. Mobilini ekran je uzan i nema smisla deliti sadržaj u više kolona.
- Sakrijte navigaciju. Na malom ekranu nema mesta da navigacija sve vreme bude prikazana, dovoljno je da se prikaže dodirom na ikonicu.
- Smanjite veličinu fajlova, posebno slika. Stranicu koja se predugo učitava neće niko posetiti. Pritom, mnogi korisnici mobilnih uređaja imaju ograničeni prenos podataka.
- Ograničite dužinu URL adrese. Unos dugačke URL adrese u telefonu je komplikovan, pa neki to neće raditi.
- Testirajte sajt na što više pravih uređaja.

## Šta traže mobilni posetioci?

Pre­gledanje weba na mobilnim telefonima se razlikuje od pregledanja na računarima. Mobilni posetioci tačno znaju šta traže i kada to pronađu, preduzeće neku radnju. Oni koriste mobilne uređaje da bi pristupili lokalnim informaci­jama, pratili novosti ili kupili proizvode i usluge.

Korisnici mobilnih uređaja su orijentisani na zadatke. Oni obično posećuju stranice zbog određenog razloga. Ako ne obave planiran zadatak, brzo će potražiti drugi sajt. Potrudite se da im obezbedite ono što žele što je moguće brže i lakše. Na primer, korisno je da sajt resto­rana odmah prikaže adresu mobilnim posetiocima, jer neko ko gleda taj sajt na telefonu verovatno traži dobro mesto za ručak.

## Neka linkovi budu dodirljivi

Na mobilnim uređajima ljudi dodiruju stranice. Ako je teško dodirnuti link, to može izazvati frustracije. Korisnike će najviše frustrirati sledeće:

- ako su linkovi preblizu, posetilac može dodirnuti pogrešnu stavku.
- ako su linkovi prekratki, teški su za dodir.
- ako se linkovi pomeraju (na primer dodajemo sadržaj iznad linka), posetilac može dotaći što nije želeo.

## Koristite mogućnosti uređaja

Kao prvo, telefon služi za telefoniranje. Stoga, učinite telefonske brojeve na sajtu funkcionalnim. Pozivanje dodirom se postiže na sledeći način:

```html
<a href="tel:+381641234567">Pozovite nas</a>
```

Primetite protokol `tel` umesto `http`. Kada posetioci dodirnu link telefonu, biće upitani da li žele da uspostave poziv. A računari mogu da se povežu sa Skajpom i sličnim programima.

Takođe, možemo napraviti link pomoću kojeg bi nam posetioci slali SMS poruke:

```html
<a href="sms:+381641234567">Pošaljite SMS</a>
```

Kada posetilac dodirne link, otvoriće mu se aplikacija za poruke, zajedno sa telefonskim brojem primaoca.

## Isprobajte sajt na pravom uređaju

Iako ste verovatno isprobali stranicu na smanjenom pregledaču ili simulatoru, neophodno je sve proveriti i na mobilnom uređaju. Da li sajt radi? Da li je jednostavan za korišćenje? Da li možemo lako dodirnuti linkove i navigaciju? Ako radi kod nas, pitajmo još ljudi kako radi na njihovim uređajima.

### Izvori

* Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.
