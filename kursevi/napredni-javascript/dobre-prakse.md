---
title: Dobre prakse pisanja Javascripta
layout: lekcija-napredni-js
permalink: /javascript-dobre-prakse
---

**Dobre prakse pisanja Javascripta** nam pomažu da organizujemo kod (npr. imenski prostor), poboljšamo performanse (npr. asinhrono učitavanje) i nadoknadimo mogućnosti koje nedostaju (npr. privatna svojstva).

**UPDATE**: Tekst je pisan davno a jezik se brzo razvija, pa su neke prakse zastarele a neke još uvek aktuelne.

## Razdvajanje briga

Kao što i vrapci znaju, tri gradivna bloka veb stranice su:

- sadržaj (HTML)
- prezentacija (CSS)
- ponašanje (JavaScript)

To znači sledeće:
- za stilove imamo zaseban CSS fajl, ne menjamo ih direktno u HTML-u.
- za ponašanje imamo zaseban JS fajl, ne pišemo skripte u HTML-u.

## Asinhrono učitavanje JavaScripta

Jedan način na koji možete da sprečite JavaScript datoteke da blokiraju stranicu je da ih učitate asinhrono, pomoću `defer` ili `async` atributa. Ako niste sigurni koji, `defer` je sigurica:

```html
<script defer src="main.js"></script>
```

## Imenski prostor

Globalne promenljive treba izbegavati da bismo smanjili mogućnost sukoba naziva. Možemo smanjiti broj globalnih naziva, tako što ćemo iz zatvoriti u imenski prostor. Ideja je jednostavna - kreiraćemo jedan globalni objekat i sve promenljive i funkcije nakačiti na njega. Ovo je praksa koju koriste mnoge JS biblioteke.

Na primer, kreiramo globalni objekat `MYAPP` (prethodno proverivši da li on već postoji):

```js
const MYAPP = MYAPP || {}
```

Sada, umesto da pravimo globalnu funkciju `uradiNesto`, možemo dodati metodu na `MYAPP`:

```js
MYAPP.uradiNesto = function(){
  // telo funkcije
}
```

## Konfiguracioni objekat

Konfiguracioni objekat je obrazac pogodan za funkcije koja primaju mnogo parametara. Funkcija sa više od tri parametra nije prak­tična, zato što moramo pamtiti redosled parametara, a još je gore kada su neki opcioni. Umesto mnogo parametara, možemo koristiti jedan objekat, čija svojstva su u stvari parametri. 

Prednosti upotrebe ovog obrasca su sledeće:
- Redosled parametara nije važan.
- Možemo lako preskočiti parametre koje ne želimo da postavimo.
- Lako možemo dodati više opcionih konfiguracionih atributa.
- Kod postaje čitljiviji, zato što su svojstva objekta prisutna kod pozivanja, zajedno sa nazivima.

## Privatna svojstva i metodi

Mnogi OO jezici imaju sledeće modifikatore pristupa:

- `public` - Svi korisnici objekta mogu da pristupe svojstvu ili metodu.
- `private` - Samo objekat može da pristupi svojstvu.
- `protected` - Samo objekti koji nasleđuju određeni objekat mogu da pristupe svojstvu.

JavaScript nema posebnu sintaksu za označavanje privatnih svojstava i metoda, ali možemo koristiti [zatvorenost](/javascript-zatvorenost) unutar funkcije da postignemo isti nivo zaštite.

### Privilegovani metodi

Privilegovani metodi (termin je smislio Douglas Crockford) su javni metodi koji mogu da pristupe privatnim metodima i svojstvima. Oni se ponašaju kao „most“ da bi neke privatne funkcije postale dostupne, ali na kontrolisani način, i "upakovane" u privilegovani metod.

## Samoizvršne funkcije

[Samoizvršne anonimne funkcije](/samoizvrsne-anonimne-funkcije) su još jedan obrazac koji pomaže da se očisti globalni prostor, umetanjem koda u anonimnu funkciju koja će odmah biti izvršena. Zahvaljujući tome, sve promenljive unutar funkcije su lokalne, a uništavaju se kada se funkcija izvrši (ukoliko nisu deo `closure`). Na primer:

```js
(function () {
  // sav kod se pise ovde...
}())
```

## Moduli

Kombinacijom nekoliko prethodnih obrazaca dobija se obrazac modula. Koncept modula u programiranju je pogodan, jer omogućava da pišemo zasebne delove ili biblioteke i da ih kombinujemo po potrebi, baš kao delove slagalice. Obrazac modula sadrži:
- imenske prostore za smanjivanje sukoba naziva između modula
- direktnu funkciju koja omogućava privatnu oblast važenja i inicijalizaciju
- privatna svojstva i metode

{:.ideja.uokvireno}
Verzija ES5 nema ugrađeni koncept modula. Međutim, verzija ES6 podržava module pa se ovaj obrazac sve manje koristi.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.