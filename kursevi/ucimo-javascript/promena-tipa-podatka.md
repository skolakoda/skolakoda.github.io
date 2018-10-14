---
title: Promena tipa podatka u Javaskriptu
layout: lekcija-js
permalink: promena-tipa-podatka-u-javaskriptu
---

**U Javaskriptu tipove podataka možemo menjati iz jednog u drugi, pomoću ugrađenih metoda.**

## Primer: promena strune u broj

{:.ulaz}
```js
const sedam = '7'

console.log(Number(sedam))
```

Konverzija strune u broj se obavezno vrši prilikom korisničkog unosa brojeva, pošto je korisnički unos uvek string, bilo preko web stranice, bilo preko komandne linije.

## Primer: promena niza u strunu

{:.ulaz}
```js
const voce = ['banana', 'narandza', 'jabuka', 'kruska']

console.log(voce.toString())
```