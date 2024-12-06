---
title: Pokretanje Javascripta u pregledaču
layout: lekcija-js
permalink: /pokretanje-javascripta-u-pregledacu
---

**Osnovni način dodavanja Javascripta na web stranicu je korišćenje `<script/>` taga. Ovaj element, koji je uvela kompanija Netscape, postao je deo HTML 3.2 specifikacije.**

Postoje dva načina za korišćenje `<script/>` elemenata:
- direktnim pisanjem Javascripta unutar `script` taga (*inline* kod);
- preko `src` atributa koji uključuje zasebnu datoteku.

U Školi koda ćemo, po pravilu, uključivati Javascript kao zaseban fajl.

## Napravi novi folder

Prvo, napravi novi folder za tvoje fajlove. Prilikom imenovanja foldera koristi mala slova, a umesto razmaka koristi srednju crtu, npr. `novi-sajt`. Ova konvencija je standard imenovanja fajlova i foldera na webu.

U folder stavi `main.js` fajl [Zdravo svete](/zdravo-javascript).

## Napravi html fajl

U istom folderu gde je Javascript, napravi novi fajl pod nazivom `index.html`. 

Ekstenzija html označava da je u pitanju internet stranica. Za sada je ova stranica prazna.

## Uključi js fajl u HTML

Pregledač ne može direktno interpretirati js fajlove, već samo html. Da bismo pokrenuli JS u pregledaču, potrebno je da ga prikačimo na web stranicu. 

U HTML fajl prekucaj sledeću liniju:

```html
<script src="main.js"></script>
```

Ova linija pravi `<script>` tag sa `src` atributom ka odgovarajućem js fajlu, odnosno uključuje `main.js` fajl u `index.html`. Sada naša prazna stranica ima skriptu na sebi.

Prilikom učitavanja, pregledač zaustavlja render HTML stranice kada pristupi `<script>` tagu. Tek pošto učita Javascript iz eksterne datoteke, nastavlja renderovanje. Kada imamo više elemenata unutar HMTL stranice, veoma je važno gde se postavlja `<script/>` tag - kod se podrazumevano učitava i izvršava redosledom kojim je dodat.

## Otvori stranicu u pregledaču

Otvori `index.html` stranicu u pregledaču (dovoljan je dvoklik na fajl).

Otvori konzolu pregledača (desni klik -> Inspect -> Console tab). 

Ukoliko vidiš ispis "Zdravo Svete", znači da je sve dobro povezano. Svaka čast. 

## Prednosti zasebnog js fajla

Dobra praksa je koristiti zasebne Javascript fajlove iz nekoliko razloga:

- Mnogo su jednostavniji za održavanje u odnosu na skripte čiji se kod piše u HTML-u, posebno ako imate isti kod na više stranica (prilikom ažuriranja je dovoljno promeniti samo jednu datoteku).

- Zasebne skripte pregledač kešira isto kao slike i stilove. Pregledač preuzima fajl samo jednom i koristi ga na svim narednim stranicama koje ga uključuju. To povećava performanse, jer pregledač ne mora da preuzme isti kod više puta.

## Atributi `<script/>` taga

Neki od važnijih atributa `<script/>` elementa su:

- `src`: opcioni atribut. Sadrži eksternu datoteku sa skriptom koji će se izvršavati.

- `type`: opcioni atribut. Sadrži jezik koji se koristi, obično `"text/javascript"`. Svi pregledači pretpostavljaju da se koristi Javascript ukoliko vrednost  nije navedena.

- `async`: opcioni atribut. Dozvoljava učitavanje skripte u pozadini, bez blokiranja stranice. Skripta se izvršava onog trenutka kada je učitana, ne čekajući ostale elemente. Asinhrone skripte se izvršavaju bez obzira na redosled na stranici.

- `defer`: opcioni atribut. Dozvoljava učitavanje skripte u pozadini, bez blokiranja stranice. ali skripta se izvršava nakon što se učita HTML dokument. Skripte sa defer atributom se izvršavaju redom kojim su navedene.

- `charset` : opcioni atribut. Kodiranje karaktera eksterne datoteke, koja je definisana pomoću src atributa. Ovaj atribut se retko koristi.
