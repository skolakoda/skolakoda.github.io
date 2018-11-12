---
title: HTTP GET zahtev u Javascriptu
layout: lekcija-js
permalink: /javascript-get-zahtev
---

**HTTP GET zahtev je način da dobavimo resurse preko mreže.** 

Podrazumevano, HTTP zahtevi u Javascriptu su asinhroni, osim ako ne podesimo da budu sinhroni.

## HTTP zahtev

Osnovni HTTP GET zahtev bi izgledao ovako:

{:.ulaz}
```js
const http = new XMLHttpRequest()

http.open("GET", "https://api.lyrics.ovh/v1/shakira/waka-waka")
http.send()

http.onload = () => console.log(http.responseText)
```

Redosled je veoma bitan, npr. ako pozovemo `send` pre `open`, neće raditi. 

`http.responseText` je objekat pretvoren u string. Ukoliko želimo da ga vratimo u objekat, potrebno je uraditi `JSON.parse(http.responseText)`.

## Fetch metoda

Fetch API je noviji i unapređen način za asinhronu komunikaciju. Osnovni GET zahtev bi izgledao ovako:

{:.ulaz}
```js
fetch('https://api.lyrics.ovh/v1/shakira/waka-waka')
  .then(response => response.json())
  .then(json => console.log(json.lyrics))
```

Fetch funkcija pravi obećanje (*promise*), koje nakon što se razreši (kada odgovor stigne): 
- unutar prvog `then` poziva pretvaramo u željeni format, 
- unutar drugog `then`-a možemo koristiti.

Ukoliko kao odgovor očekujemo tekst, onda koristimo metodu `response.text()`.
