---
title: Iteracija niza u Javascriptu
layout: lekcija-js
permalink: /js-iteracija-niza
---

U Javascriptu, možemo vršiti iteraciju niza na više načina. Glavni načini su preko naredbe `for`, kao i preko metoda `map()` i `forEach()`.

## Primer sa naredbom `for`

{:.ulaz}
```js
const imena = ["dajana", "marija", "damjan", "mirko", "ana", "mirko", "dajana", "milena", "darko"]

for (let i = 0; i < imena.length; i++) {
  console.log(imena[i])
  console.log(i)
}
```

## Primer sa `map` metodom

{:.ulaz}
```js
const imena = ["dajana", "marija", "damjan", "mirko", "ana", "mirko", "dajana", "milena", "darko"]

imena.map((ime, i) => {
  console.log(ime)
  console.log(i)
})
```

## Izbegavanje bespotrebnog vrtenja

Bitna razlika između različitih načina iteracije je što pomoću naredbe `for` možemo izbeći bespotrebno vrtenje, za razliku od `map` metode:

{:.ulaz}
```js
const brojevi = [3, 4, 6, 6, 7, 8, 9, 11, 22, 23, 77]
const trazeniBroj = 7

console.log("Pocinje for: ")

for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] == trazeniBroj) {
    console.log("Nasao sam broj", trazeniBroj)
    break
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