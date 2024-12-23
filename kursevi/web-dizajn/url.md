---
title: URL, jedinstvena adresa resursa
layout: lekcija-html
permalink: /url
image: /images/koncepti/web/url.png
---

![]({{page.image}})

**URL je skraćenica za jedinstveni lokator resursa (*uniform resource locator*) na internetu.**

Svaki sajt, svaka stranica i svaki resurs na sajtu imaju jedinstvenu URL adresu. Na primer, kada neko kaže da posetimo sajt [https://petlja.org](https://petlja.org), dao nam je URL.

URL obezbeđuje uni­verzalni i konzistentni način za pristupanje informacijama. Sam URL nosi informacije o protokolu, nazivu domena, lokaciji fajla na serveru i mnoge druge detalje.

## Delovi URL-a

Glavni delovi URL adrese su:

```
protokol://poddomen.domen/putanja/ime-fajla#fragment
```

### Protokol

Protokol je način na koji klijent pristupa serveru. Ako se u URL adresi nalazi `http`, pregledač će pokušati da koristi protokol za prenos hiperteksta da bi komunicirao sa serverom. Server mora podržavati navedeni protokol da bi link radio. Dakle, ako koristimo `ftp` da bismo se povezali sa `www.example.com`, link neće raditi ako server ne podržava protokol za prenos podataka.

Neki od najpoznatijih protokola su:
- `file` – fajl na lokalnom hard disku
- `http` – protokol za prenos hiperteksta
- `https` – sigurni http, sa zaštitom podataka
- `ftp` – protokol za prenos podataka
- `mailto` – email adresa
- `tel` – telefon

Isti server može podržati više proto­kola, na primer:

{:.uvuceno}
[https://cs.brown.edu/](https://cs.brown.edu/)

{:.uvuceno}
[ftp://ftp.cs.brown.edu/](ftp://ftp.cs.brown.edu/)

To je jedan računar koji nudi dve različite informacione usluge, a pregledač će koristiti različite metode povezivanja za svaku od njih.

### Domen

Ime domena (*domain name*) je osnovno ime sajta, poput [skolakoda.github.io](https://skolakoda.github.io). To je internet adresa servera koji služi fajlove. Računari na mreži zapravo koriste IP adrese, a nazivi domena su uvedeni zbog lakšeg pamćenja. Dakle, istoj adresi možemo pristupiti na dva načina, preko imena domena i preko IP adrese:

{:.uvuceno}
[google.com](https://www.google.com/)

{:.uvuceno}
[216.58.197.78](http://216.58.197.78)

### Port

Opciono, nakon naziva domena može biti naveden broj kapije ili porta. Broj porta ukazuje pregledaču da treba da uspostavi vezu na određenom ulazu. Broj porta će raditi jedino ako je server pokrenut na tom portu. Ako server sluša podrazumevani port, možemo izostaviti broj porta. 

U slučaju da navodimo broj porta, on ide posle naziva domena, ali pre putanje, na primer:

```
http://moj-sajt.com:1550/radovi/baza-filmova.html
```

Ako adresa ne sadrži port, pregledač će pokušati da se poveže sa podrazumevanim portom za dati protokol. Za `http` je podrazumevani port 80, pa su linkovi http://skolakoda.github.io:80 i http://skolakoda.github.io isti.

### Putanja

Putanja (*path*) vodi do određenog foldera ili fajla na poslužitelju. Formira se u odnosu na korenski direktorij servera, koji se obeležava kosom crtom `/`. Na primer, sledeća putanja ukazuje da se u korenu servera nalazi folder `tehnopolis` u kome se nalazi fajl `internet.php`:

{:.uvuceno}
[https://www.b92.net/tehnopolis/internet.php](https://www.b92.net/tehnopolis/internet.php)

Bitno je napomenuti da ne ukazuje svaka putanja na foldere i fajlove na serveru. Mnoge serverske aplika­cije prave "ulepšane", ljudski čitljive putanje, koje koriste samo kao identifikator.

### Ime fajla

Ime fajla (*filename*) pokazuje na određeni fajl unutar navedenog direktorija. Na većini servera, ako ne navedemo ime fajla, podrazumeva se `index.html`. Naredne dve adrese su ekvivalentne:

{:.uvuceno}
[https://skolakoda.github.io/](https://skolakoda.github.io/)

{:.uvuceno}
[https://skolakoda.github.io/index.html](https://skolakoda.github.io/index.html)

Ako indeksni fajl nedostaje, neki serveri će izlistati sadržaj direktorija, a neki poslati poruku sa greškom 404.

### Upit

Nakon putanje, adresa može sadržati upit, koji počinje znakom pitanja. Upis se sastoji od parova naziva i vrednosti odvojenih ampersandom (`&`), a koji između sebe imaju znak jednakosti. Na primer:

{:.uvuceno}
[https://www.b92.net/tehnopolis/internet.php?yyyy=2018&mm=12&nav_id=1477865](https://www.b92.net/tehnopolis/internet.php?yyyy=2018&mm=12&nav_id=1477865)

Navedeni upit ima sledeće parametre:

```
yyyy=2018
mm=12
nav_id=1477865
```

URL upit se ne koristi u čistom HTML-u, već za veb aplikacije.

### Fragment

Završni deo URL adrese naziva se fragment ili unutrašnji link, a sledi nakon tarabe (`#`). Na primer:

{:.uvuceno}
[https://en.wikipedia.org/wiki/Belgrade#History](https://en.wikipedia.org/wiki/Belgrade#History)

Unutrašnji link vodi do samog HTML elementa koji ima odgovarajući `id`. 

## Literatura

* Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
* Laura Lemay, Rafe Colburn, Jennifer Kyrnin, *HTML5, CSS3 i JavaScript za razvoj veb strana*, Beograd, 2016.
