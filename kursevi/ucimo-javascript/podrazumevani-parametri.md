---
title: Podrazumevani parametri funkcije
layout: lekcija-js
permalink: /podrazumevani-parametri
---

**Funkcije mogu imati opcione parametre, koji imaju podrazumevanu vrednost.**

## Primer

Sledeća funkcija ima opcioni parametar `ime`, koji ima podrazumevanu vrednost `'gost'`. Dakle, možemo je pozivati sa argumentom ili bez njega:

{:.ulaz}
```js
function pozdrav(ime = 'gost') {
  console.log('Zdravo korisniče ' + ime)
}

pozdrav('Ana')
pozdrav()
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/ElXcmfi0-Lg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
