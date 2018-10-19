---
title: Iteracija niza u Javascriptu
layout: lekcija-js
permalink: /js-iteracija-niza
---

U Javascriptu, možemo iterirati niz na više načina. Glavni način je preko naredbe `for`, ali takođe možemo koristiti metode `map()` i `forEach()`.

## Primer sa naredbom `for`

{:.ulaz}
```js
const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]

for (let i = 0; i < imena.length; i++) {
  console.log(imena[i])
  console.log(i)
}
```

## Primer sa `map` metodom

{:.ulaz}
```js
const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]

imena.map((ime, i) => {
  console.log(ime)
  console.log(i)
})
```

## Izbegavanje bespotrebnog vrtenja

Map metodu ne možemo samovoljno zaustaviti, jer njen posao je **mapiranje** svake vrednosti za novu vrednost, a iteracija je samo sredstvo da to uradi. Za razliku od `map` metode, pomoću naredbe `for` možemo izbeći bespotrebno vrtenje:

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

console.log("\nPocinje map: ")

brojevi.map(broj => {
  if (broj == trazeniBroj) {
    console.log("Nasao sam broj", trazeniBroj)
    return  // ne zaustavlja iteraciju
  }
  console.log(broj)
})
```

Kada se radi sa velikim nizovima podataka, ova razlika je presudna.