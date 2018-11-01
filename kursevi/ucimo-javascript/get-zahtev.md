---
title: HTTP GET zahtev u Javascriptu
layout: lekcija-js
permalink: /javascript-get-zahtev
redirect_from: /ajax-pozivi
---

AJAX pozivi su standarni način asinhrone mrežne komunikacije u Javascriptu. 

## HTTP zahtev

Osnovni HTTP GET zahtev bi izgledao ovako:

{:.ulaz}
```js
const http = new XMLHttpRequest()

http.open("GET", "https://api.lyrics.ovh/v1/shakira/waka-waka")
http.send()

http.onload = () => console.log(http.responseText)
```

`http.responseText` je stringifikovan JSON (objekat na koji je primenjena metoda `JSON.stringify()`). Ukoliko želimo da ga vratimo u objekat, potrebno je uraditi `JSON.parse(http.responseText)`.

Takođe, redosled je veoma bitan, npr. ako pozovemo `send` pre `open`, neće raditi. 

## Fetch metoda

Fetch API je noviji i unapređen način za asihnronu komunikaciju. Osnovni GET zahtev bi izgledao ovako:

{:.ulaz}
```js
fetch('https://api.lyrics.ovh/v1/shakira/waka-waka')
  .then(response => response.json())
  .then(json => console.log(json.lyrics))
```

Fetch funkcija pravi obećanje (*promise*), koje nakon što se razreši (kada odgovor stigne), unutar prvog `then` poziva pretvaramo u željeni format, a unutar drugog `then`-a možemo koristiti.

Ukoliko kao odgovor očekujemo tekst, onda koristimo metodu `response.text()`.

{:.uokvireno}
