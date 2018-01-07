---
title: Tipovi podataka
layout: lekcija-racunarstvo
permalink: /tipovi-podataka
image: /images/koncepti/podaci/binarni.jpg
---

![]({{page.image}})

**Tip podatka** je oznaka za skup vrijednosti i operacije koje se mogu obaviti na tom skupu vrijednosti. Programski jezici implicitno ili eksplicitno podržavaju jedan ili više tipova podatka. Tipovi podataka zapravo djeluju kao ograničenja u programima koja se statički ili dinamički provjeravaju.

Tipovi podataka koje podržavaju pojedini programski jezici međusobno se razlikuju. Osnovni tipovi zajednički su većini programskih jezika koji se najčešće koriste, a razlike u definiranju istih tipova podataka u različitim programskim jezicima nisu velike.

**Osnovna ideja uvođenja tipova podataka je davanje značenja nečemu što je u konačnici zapravo samo niz bitova.** Za računalo svaka vrijednost je jednostavno samo skup bitova, u hardveru nema razlikovanja između memorijske adrese, koda instrukcije, znakova, cijelih brojeva i decimalnih brojeva. Tip podatka govori nam kako treba tretirati taj niz bitova.

Programi se mogu promatrati i kao niz operacija koje se izvode na podacima, tako da je ishodišno pitanje programiranja opis i strukturiranje podataka.

## Tip i obrada podatka

Ulazni podaci nisu jedini, jer niz podataka nastaje i za vrijeme obrade, postoje u memoriji i kasnije se nigdje ne vide. Zato možemo postaviti tri osnovne skupine podataka koje će postojati:

* ulazni podaci
* unutarnji podaci programa
* izlazni podaci

Svaki podatak koji se obrađuje u nekom programu treba definirati i povezati tj. strukturirati u povezane cjeline (strukture podataka) kako bi jednostavno radili s njima.

Računalu je potrebno dati potpunu definiciju podataka kako bi se kontrolirale operacije nad njima: aritmetičke operacije dopuštene su nad brojevima, skupovne operacije nad elementima skupa itd. Tip podataka određuje i dozvoljene vrijednosti koje pojedini objekt može poprimiti, kao i skup dozvoljenih operacija. To ujedno ima i utjecaja na način pohrane podataka.

## Tipovi i strukture

Prema svojstvima, podaci mogu biti tipa:
* cijeli broj
* realni broj
* logička varijabla
* znakovno polje
...

Podatke možemo povezati u sledeće strukture:
<!-- Sa stajališta struktura, podatke možemo povezati u: -->
* nizove (koji predstavljaju matematičke vektore i matrice)
* skupove
* slogove
* datoteke
...

## Primitivni tipovi

![](//csharpcorner.mindcrackerinc.netdna-cdn.com/UploadFile/3d39b4/data-types-in-json/Images/JSON-represents-six-data-types.jpg)

**Primitivni tipovi podataka**, za razliku od kompozitnih, su tipovi koje programski jezik nudi kao osnovne gradbene elemente. Ovisno o jeziku i implementaciji,
primitivni tipovi mogu ili nemoraju imati "jedan prema jedan" korespondenciju sa objektima u računalnoj memoriji. Primitivni tipovi poznati su i kao osnovni ili ugrađeni tipovi (eng. *built-in types*).

Tipični primitivni tipovi podataka uključuju:
* **niz znakova**: character, char, string
* **cijeli broj**, sa nekoliko različitih područja vrijednosti: integer, int, short, long
* **decimalni broj**, sa nekoliko različiti preciznosti: float, real, single, double, double precision
* **logički** (boolean), ima vrijednosti istinu ili laž
* **referenca** ili **pokazivač** (eng. *pointer*), sadrži memorijsku adresu nekog drugog objekta

Ovdje je potrebno naglasiti razliku između preciznosti (*precision*) i točnosti (*accuracy*). Preciznost broja određena je dužinom riječi procesora (32 ili 64 bita). Preciznost se iskazuje brojem prvih važećih točnih znamenki, a točnost je bliskost stvarnoj (nepoznatoj) vrijednosti. Za dovoljnu točnost potrebna je adekvatna preciznost, ali preciznost ne implicira automatski točnost jer su iskazane znamenke mogle nastati na temelju npr. pogrešnog mjerenja.

## Tipovi i programski jezici

Neke od ključnih značajki programskih jezika:
* da li su deklaracije tipa podatka obavezne ili neobavezne
* da li su ograničenog dosega unutar programske jedinice (procedure, modula, bloka) ili ne?

Izvor: N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi I*, Zagreb, 2005.
