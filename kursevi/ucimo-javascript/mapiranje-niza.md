---
title: Mapiranje niza
layout: lekcija-js
permalink: /mapiranje-niza
---

**Metoda `map` služi za mapiranje svake vrednosti niza za novu vrednost, po zadatom kriteriju.**

Ona prima *callback* funkciju kao argument, a vraća novi niz mapiran na osnovu prosleđene funkcije.

## Mapiranje brojeva

{:.ulaz}
```js
const brojevi = [44, 55, 66, 11, 3, 34, 6, 7]

const kvadriraniBrojevi = brojevi.map(x => x * x)

console.log(kvadriraniBrojevi)
```

## Mapiranje vrednosti u HTML tagove

```js
const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]

const tagovi = imena.map(ime => (`
  <div>
    <h3>${ime}</h3>
  </div>
`))
```

U ovom primeru koristimo *template literals* sintaksu za višelinijske strune.

## Iteracija pomoću `map`

Iako joj to nije glavna namena, `map` metoda se ponekad koristi za iteraciju:

{:.ulaz}
```js
const imena = ["Dajana", "Marija", "Damjan", "Mirko", "Ana", "Mirko", "Dajana", "Milena", "Darko"]

imena.map((ime, i) => {
  console.log(ime)
  console.log(i)
})
```

Za razliku od petlje, map metodu ne možemo samovoljno zaustaviti, jer je njen posao **mapiranje** svake vrednosti za novu vrednost. 