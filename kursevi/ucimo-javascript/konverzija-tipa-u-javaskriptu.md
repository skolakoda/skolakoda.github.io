---
title: Promena tipa podatka u Javaskriptu
layout: lekcija-js
permalink: konverzija-tipa-u-javaskriptu
---

**Neke tipove podataka možemo menjati iz jednog u drugi.**

Da bismo eksplicitno konvertovali podatke iz jednog tipa u drugi, možemo da koristimo ugrađene funkcije za konverziju tipa. To su `Number()`, `Boolean()` i `String()`.

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

console.log(String(voce))
```