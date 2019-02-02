---
title: HTTP GET zahtev u Javascriptu
layout: lekcija-js
permalink: /javascript-get-zahtev
---

**HTTP GET zahtev je način da učitamo resurse preko mreže. Podrazumevano, HTTP zahtevi u Javascriptu su asinhroni, osim ako ne podesimo da budu sinhroni.** 

Asinhroni HTTP zahtevi doveli su do nastanka takozvanih Ajax aplikacija, kod kojih nije potrebno iznova učitavati celu stranicu. Pomoću JavaScripta možemo uputiti HTTP zahtev serveru, dobiti odgovor i ažurirati samo deo strane. Zahvaljujući tome, moguće je praviti web aplikacije nalik desktop aplikacijama.

## `XMLHttpRequest`

`XMLHttpRequest()` je objekat koji omogućava da šaljemo HTTP zahteve iz JavaScripta. Istorijski, prvo je uveden upregledač IE, a kasnije je implementiran i u drugim pregledačima.

Osnovni HTTP GET zahtev za učitavanje podataka bi izgledao ovako:

{:.ulaz}
```js
const http = new XMLHttpRequest()

http.open("GET", "https://api.lyrics.ovh/v1/shakira/waka-waka")
http.send()

http.onload = () => console.log(http.responseText)
```

Redosled je veoma bitan, npr. ako pozovemo `send` pre `open`, neće raditi. 

Format odgovora u ovom primeru je JSON string. Da bismo ga preveli u objekat, potrebno je uraditi `JSON.parse(http.responseText)`.

## Fetch metoda

Fetch API je noviji i unapređen način za asinhronu komunikaciju. Osnovni GET zahtev bi izgledao ovako:

{:.ulaz}
```js
fetch('https://api.lyrics.ovh/v1/shakira/waka-waka')
  .then(response => response.json())
  .then(json => console.log(json.lyrics))
```

Fetch funkcija pravi obećanje (*promise*), koje nakon što se razreši (kada odgovor stigne): 
- unutar prvog `then`-a pretvaramo u željeni format, 
- unutar drugog `then`-a možemo koristiti.

Ukoliko kao odgovor očekujemo tekst, onda koristimo metodu `response.text()`.
