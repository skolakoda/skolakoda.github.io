---
title: Dodavanja Javascripta na stranicu
layout: lekcija-js
permalink: /dodavanje-javascripta
image: /images/jezici/moderni-js.gif
---

**Osnovni način dodavanja Javascripta na web stranicu je korišćenje `<script/>` taga. Ovaj element, koji je uvela kompanija Netscape, postao je deo HTML 3.2 specifikacije.**

Postoje dva načina za korišćenje `<script/>` elemenata:
- direktnim pisanjem Javascripta unutar `script` taga (*inline* kod);
- preko `src` atributa koji uključuje zasebnu datoteku.

U Školi koda ćemo, po pravilu, uključivati Javascript kao zaseban fajl.

## Kreiranje novog foldera

Prvo, napravi novi folder u kome će stajati svi fajlovi koje kreiramo.

## Kreiranje html fajla

Napravi novi fajl, pod nazivom `index.html`. 

Ekstenzija html označava da je u pitanju internet stranica. Za sada je ova stranica prazna.

## Krairanje js fajla

Program koji ispisuje pozdrav u Javascriptu ima samo jednu liniju. Zato je Javascript veoma pogodan jezika za učenje programiranja.

Napravi novi fajl, sa ekstenzijom `.js`. U njega prekucaj sledeću liniju koda, s tim da možeš izmeniti tekst između navodnika: 

```js
console.log("Zdravo Svete!")
```

Fajl možeš nazvati kako želiš, a mi ćemo ga nazvati `main.js`. 

## Uključenje js fajla u HTML

Da bismo pokrenuli js fajl u pregledaču, potrebno je da ga prikačimo na web stranicu. U HTML fajl prekucaj sledeću liniju, koja dodaje `<script>` oznaku sa `src` atributom ka odgovarajućem js fajlu:

```html
<script src="main.js"></script>
```

Ova linija uključuje `main.js` fajl u `index.html` fajl. Sada naša prazna stranica ima skriptu na sebi.

Prilikom učitavanja, pregledač zaustavlja render HTML stranice kada pristupi `<script>` tagu. Tek pošto učita Javascript iz eksterne datoteke, nastavlja renderovanje. Ako imamo više elemenata unutar HMTL stranice, veoma je važno gde se postavlja `<script/>` tag na stranici - kod se podrazumevano učitava i izvršava redosledom kojim je dodat.

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
