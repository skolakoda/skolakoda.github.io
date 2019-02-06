---
title: Konverzija tipa u Javaskriptu
layout: lekcija-js
permalink: konverzija-tipa-u-javaskriptu
---

**Neke tipove podataka možemo menjati iz jednog u drugi.**

Da bismo eksplicitno konvertovali podatke iz jednog tipa u drugi, možemo da koristimo ugrađene funkcije za konverziju tipa. To su `Number()`, `Boolean()` i `String()`.

## Promena strune u broj

{:.ulaz}
```js
const sedam = '7'

console.log(Number(sedam))
```

Konverzija strune u broj se obavezno vrši prilikom korisničkog unosa brojeva, pošto je korisnički unos uvek string, bilo preko web stranice, bilo preko komandne linije.

## Promena niza u strunu

{:.ulaz}
```js
const voce = ['banana', 'narandza', 'jabuka', 'kruska']

console.log(String(voce))
```

## Promena u bulovu vrednost

Prevođenje bilo koje vrednosti u bulovu se eksplicitno vrši pomoću funkcije `Boolean()`. Većina vrednosti se konvertuje u `true`, osim **lažnih vrednosti**, koje se konvertuju u `false`:

- prazan string `""`
- prazna vrednost (`null`)
- nedefinisana vrednost (`undefined`)
- broj `0`
- broj `NaN`

Sve druge vrednosti su istinite (pretvaraju se u `true`), uključujući:

- `"0"`
- `" "`
- `"false"`

Možeš proveriti:

{:.ulaz}
```js
console.log(Boolean(""))
console.log(Boolean(" "))
console.log(Boolean(0))
console.log(Boolean("0"))
console.log(Boolean("false"))
```