---
title: HTTP POST zahtev u Javascriptu
layout: lekcija-js
permalink: /javascript-post-zahtev
---

**HTTP POST zahtev je standardan način da pošaljemo resurse preko mreže.** 

Podrazumevano, HTTP zahtevi u Javascriptu su asinhroni.

## HTTP zahtev

Kada upućujemo POST zahtev, neophodno je poslati odgovarajući format podataka, koji server očekuje. U protivnom, POST zahtev neće biti primljen. Naš API prima dva formata: `json` i `urlencoded`.

### POST `json` format

POST zahtev za slanje `json` formata izgleda ovako:

{:.ulaz}
```js
const podaci = {
  naziv: 'Prohujalo sa vihorom',
  godina: '1939',
  slika: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Gone_With_The_Wind_1967_re-release.jpg'
}

const http = new XMLHttpRequest()
http.open('POST', 'https://baza-filmova.herokuapp.com/dodaj-film/')
http.setRequestHeader('Content-type', 'application/json')
http.onload = () => console.log(http.responseText)
http.send(JSON.stringify(podaci))
```

Redosled je veoma bitan, npr. ako pozovemo `send` pre `open`, neće raditi. 

### POST `urlencoded` format

POST zahtev za slanje `urlencoded` formata izgleda ovako:

{:.ulaz}
```js
const naziv = 'Prohujalo sa vihorom'
const godina = '1939'
const slika = 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Gone_With_The_Wind_1967_re-release.jpg'

const http = new XMLHttpRequest()
http.open('POST', 'https://baza-filmova.herokuapp.com/dodaj-film/')
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
http.onload = () => console.log(http.responseText)
http.send(`naziv=${naziv}&godina=${godina}&slika=${slika}`)
```

## Fetch POST metoda

Fetch API je noviji način asinhrone mrežne komunikacije. Osnovni POST zahtev za slanje `json` formata izgleda ovako:

{:.ulaz}
```js
const podaci = {
  naziv: 'Prohujalo sa vihorom',
  godina: '1939',
  slika: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Gone_With_The_Wind_1967_re-release.jpg'
}

fetch('https://baza-filmova.herokuapp.com/dodaj-film', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(podaci)
  })
  .then(res => res.text())
  .then(text => console.log(text))
```

Fetch funkcija pravi obećanje (*promise*), koje nakon što se razreši (bude poslato i odgovor servera stigne): 
- unutar prvog `then` poziva pretvaramo u željeni format, 
- unutar drugog `then`-a možemo koristiti.

{:.uokvireno}
Ukoliko kao odgovor očekujemo `json` format, onda koristimo metodu `res.json()`.
