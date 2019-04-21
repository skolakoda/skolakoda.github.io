---
title: Generatori u Javascriptu
layout: lekcija-napredni-js
permalink: /javascript-generatori
---

**Obična funkcija se izvršava liniju po liniju, i zaustavlja kada se poslednja linija izvrši. Međutim, generator funkcija se može zaustaviti i nastaviti.**

Generator funkcija se može zaustaviti samo iznutra, pomoću ključne reči `yield`. Kada se zaustavi, može se ponovo pokrenuti izvana. Možemo zaustaviti i pokrenuti funkciju koliko puta želimo. Generator funkcije omogućavaju i dvosmerno prosleđivanje poruka. Kada zaustavimo funkciju pomoću `yield`, poruka se šalje van, a kada je ponovo pokrenemo, poruka se šalje nazad u funkciju.

Generatori imaju značajnu ulogu u asinhronom programiranju i mogu nam pomoći da pišemo kooperativne funkcije koje obavljaju više zadataka.

## Prost primer

Generator funkcije vraćaju iterator objekat. Zvezdica `*` nakon reči `function` označava generator:

{:.ulaz}
```js
function* brojac() {
  yield 1
  yield 2
}

const iterator = brojac()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().done)
```

Generator funkcija se ne izvršava kao obična, već vraća iterator objekat. Kada pozovemo `next()` sa iteratora, funkcija se izvršava do ključne reči `yield`. Kad ponovo pozovemo `next()`, izvršenje se nastavlja od mesta na kome je zaustavljeno. Kada se izvrši cela funkcija, svojstvo `done` postaje `true`. 

## Pauziranje petlje

Generator funkcija nam može poslužiti da pauziramo izvršenje petlje:

{:.ulaz}
```js
function* brojac() {
  for (let i = 0; i < 10; i++) {
    yield i
  }
}

const iterator = brojac()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().done)
```

## Beskonačna petlja

Ne moramo se plašiti beskonačne petlje u generator funkciji, jer se ona izvršava korak po korak:

{:.ulaz}
```js
function* brojac() {
  let i = 0
  while(true) {
    yield i++
  }
}

const iterator = brojac()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
