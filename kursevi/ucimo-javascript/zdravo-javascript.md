---
title: Zdravo JS
layout: lekcija-js
permalink: /zdravo-javascript
---

Program Zdravo Svete, koji ispisuje pozdrav, u Javascriptu ima samo jednu liniju:

{:.ulaz}
```js
console.log("Zdravo Svete")
```

Zato je Javascript veoma pogodan jezika za učenje programiranja.

## Pokretanje JS programa

Javaskript fajlove možemo pokretati na dva načina:
* u pregledaču, tako što ih prikačimo za HTML stranicu
* putem Node.js komandne linije

Za početak, napravi novi fajl, sa ekstenzijom `.js`. U njega prekopiraj gornju liniju koda, s tim da možeš izmeniti tekst između navodnika.

Fajl možeš nazvati kako želiš, a mi ćemo ga nazvati `main.js`.

### Pokretanje u pregledaču

Da bismo pokrenuli js fajl u pregledaču, potrebno je da ga prikačimo na internet stranicu. 

Dakle, napravite još jedan fajl, pod nazivom `index.html`. U njega prekopirajte sledeću liniju:

```
<script src="main.js">
```

Ova linija uključuje main.js fajl u index.html fajl. Sada naša prazna stranica ima skriptu na sebi.

Otvori index.html stranicu u pregledaču (dovoljan je dvoklik na fajl).

Otvori konzolu pregledača (desni klik -> inspect element -> console tag). 

Ukoliko vidiš ispis "Zdravo Svete", znači da je sve dobro povezano. Svaka čast. 

### Pokretanje iz komandne linije
