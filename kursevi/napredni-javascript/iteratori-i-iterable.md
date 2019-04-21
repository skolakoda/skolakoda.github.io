---
title: Iteratori i iterable u Javascriptu
layout: lekcija-napredni-js
permalink: /javascript-iteratori-i-iterable
---

**Iterabla je svaka iterabilna struktura, poput niza i strune, koja implementira ponašanje iteracije. Iterable možemo koristiti u `for...of` petlji.**

Ponašanje iteracije se implementira pomoću iteratora.

## Iteratori

Iterator je objekat koji ima poseban metod `next()`, koji vraća objekat sa dva svojstva - `value` i `done`. Nakon što pomoću `next()` završimo iteriranje svih vrednosti kolekcije, svojstvo `done` postaje istinito.

Naredna funkcija prima niz i vraća iterator, koji kao vrednosti koristi članove niza:

{:.ulaz}
```js
function praviIterator(niz) {
  let i = 0

  return {
    next() {
      if (i < niz.length) return {
        value: niz[i++], 
        done: false
      }
      return {done: true}
    }
  }
}

const iterator = praviIterator(['Zdravstvuj', 'svete'])

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().done)
```

Vrednostima iteratora se pristupa tako što više puta pozivamo metod `next()`, koji vraća objekat sa svojstvima `value` i `done`. Po završetku iteracije, `done` postaje `true`.

## Iterable

Iterabla je objekat koji implementira ponašanje iteracije. Iterable možemo koristiti u petlji `for...of`. Ugra­đeni tipovi, kao nizovi i strune, su iterable. Svaki objekat postaje iterabilan kada: 
1. Ima metod pod ključem `[Symbol. iterator]`. 
2. Koji vraća iterator objekat sa metodom `next()`. 

Na primer:

{:.ulaz}
```js
const iterabla = {
  0: 'Zdravo',
  1: 'svete' ,
  2 : 'iteratora',
  duzina: 3,

  [Symbol.iterator]() {
    let index = 0
    return {
      next: () => {
        const value = this[index]
        const done = index++ === this.duzina
        return { value, done }
      }
    }
  }
}

for (const i of iterabla)
  console.log(i)
```

Pošto ovaj objekat sadrži metod `[Symbol.iterator]` (napravljen pomoću izraču­natih svojstava), on je iterabilan, odnosno prati iterabilni protokol. Ovaj objekat možemo koristi u `for...of` petlji.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
