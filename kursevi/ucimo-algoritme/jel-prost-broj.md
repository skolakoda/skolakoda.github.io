---
title: Algoritam za određivanje prostog broja
layout: lekcija-algoritmi
author: damjan
permalink: /jel-prost-broj
---

**Algoritam za određivanje prostog broja je li broj prost (deljiv samo sa 1 i samim sobom).**

Algoritam ima sledeće bazne slučajeve:
- Ako je `broj < 2`, nije prost jer prosti brojevi počinju od 2.
- Ako je `broj == 2`, vraća `true` jer je 2 jedini paran prost broj.
- Ako je `broj % 2 == 0` (paran i nije 2), vraća `false`.

Petlja za proveru:
- Počinje od 3 i ide do √broj (matematički nije potrebno proveravati delioce veće od √broj).
- Proverava samo neparne brojeve (`i += 2`), jer parne možemo unapred eliminisati.

## Implementacija u JS-u

{:.ulaz}
```js
function jelProst(broj) {
  if (broj < 2) return false
  if (broj == 2) return true
  if (broj % 2 == 0) return false

  for (let i = 3; i * i <= broj; i += 2)
    if (broj % i == 0) return false
  return true
}

// upotreba
console.log(jelProst(2))
console.log(jelProst(17))
console.log(jelProst(35))
```

## Efikasnost

- Složenost je **O(√n)** jer proverava delioce do kvadratnog korena broja.
