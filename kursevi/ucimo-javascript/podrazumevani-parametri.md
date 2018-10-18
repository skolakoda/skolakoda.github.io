---
title: Podrazumevani parametri funkcije
layout: lekcija-js
permalink: /podrazumevani-parametri
---

Funkcija može imati parametre koji nisu obavezni, odnosno koji imaju podrazumevanu vrednost, ukoliko im se ne prosledi.

Na primer:

{:.ulaz}
```js
function pozdrav(ime = 'gost') {
  return 'Zdravo korisniče ' + ime
}

pozdrav('Ana')
pozdrav()
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/ElXcmfi0-Lg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
