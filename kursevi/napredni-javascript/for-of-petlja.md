---
title: "For of petlja u Javascriptu"
layout: lekcija-napredni-js
permalink: /javascript-for-of-petlja
---

**Petlja `for... of` služi za iteraciju iterabilnih kolekcija, kao što su nizovi, strune, mape i skupovi**. 

Na primer:

{:.ulaz}
```js
const niz = ['a', 'b', 'c']

for (const element of niz) {
  console.log(element)
}
```

I strune, koje su zapravo niz zna­kova, podržavaju `for...of` petlju. Na primer:

{:.ulaz}
```js
for (const znak of "Zdravo") {
  console.log(znak)
}
```

{:.uokvireno}
Petlja `for...of` ne podržava objekte, jer oni nisu iterabilne kolekcije.

## Razlika između `for in` i `for of`

Kod niza, `for...in` petlja iterira samo indekse, dok `for...of` iterira vrednosti:

{:.ulaz}
```js
const niz = ['a', 'b', 'c']

console.log('stampa indekse')
for (const i in niz) {
  console.log(i)
}

console.log('stampa vrednosti')
for (const i of niz) {
  console.log(i)
}
```

`For...in` petlja prvenstveno služi da iterira ključeve objekta. 

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
