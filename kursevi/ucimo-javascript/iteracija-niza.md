---
title: Iteracija niza u Javascriptu
layout: lekcija-js
permalink: /js-iteracija-niza
---

U Javascriptu, možemo iterirati niz na više načina. Glavni način je preko naredbe `for`, ali takođe možemo koristiti metode `map()` i `forEach()`.

## `for` petlja

{:.ulaz}
```js
const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]

for (let i = 0; i < imena.length; i++) {
  console.log(i)
  console.log(imena[i])
}
```

## Izbegavanje bespotrebnog vrtenja

Pomoću naredbe `break` možemo izbeći bespotrebno vrtenje nakon što smo našli traženi član:

{:.ulaz}
```js
const brojevi = [3, 4, 6, 6, 7, 8, 9, 11, 22, 23, 77]
const trazeniBroj = 7

console.log("Pocinje for: ")

for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] == trazeniBroj) {
    console.log("Nasao sam broj", trazeniBroj)
    break // zaustavlja iteraciju
  }
  console.log(brojevi[i])
}
```

Kada se radi sa velikim nizovima podataka, ova tehnika je presudna.
