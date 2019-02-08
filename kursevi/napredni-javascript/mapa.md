---
title: "Mapa u Javascriptu"
layout: lekcija-napredni-js
permalink: /javascript-mapa
---

**Mapa (*Map*) je kolekcija koja omogućuje brz pristup vrednostima. Mapa omogućava da se proizvoljne vrednosti koriste kao ključevi, i zadržava redosled kojim su elementi dodati.**

## Primer

Novu mapu kreiramo pomoću konstruktora. Pomoću metoda `set()` unosimo ključ i vrednost. Metod `get()` vraća vrednost na osnovu ključa, ili `undefined` ako unos ne postoji.

{:.ulaz}
```js
const mapa = new Map()
mapa.set('beograd', 11000)
console.log(mapa.get('beograd'))
```

Drugi pomoćni metodi koji mogu da se koriste u mapama su sledeći:

{:.ulaz}
```js
const mapa = new Map()
mapa.set('beograd', 11000)
mapa.set('resnik', 11231)
console.log(mapa.size)

mapa.delete('beograd')
console.log(mapa.has('beograd'))
```

## Popunjavanje

Možemo da inicijalizujemo sa nizom nizova u formatu `[kljuc, vrednost]`:

```js
const mapa = new Map([
  ['beograd', 11000],
  ['rakovica', 11090],
  ['resnik', 11231]
])
```

Možemo i da ulančimo metod `set()`, radi kompaktnije sintakse:

```js
const mapa = new Map().set(11000, 'beograd').set(11090, 'rakovica').set(11231, 'resnik')
```

U mapi možemo da koristimo bilo koju vrednost kao ključ, uključujući i objekat.

## Iteracija

Mapu ne možemo direktno iterirati, ali postoje tri metoda (`keys()`, `values()` i `entries()`) kojima od mape pravimo iterator, koji potom možemo iterirati petljom `for of`. 

### Metod `keys()`

Metod `keys()` pravi iterablu od ključeva mape na sledeći način:

{:.ulaz}
```js
const mapa = new Map([
  ['beograd', 11000],
  ['rakovica', 11090],
  ['resnik', 11231]
])

for (const kljuc of mapa.keys()) {
  console.log(kljuc)
}
```

### Metod `values()`

Slično, metod `values()` pravi iterablu od vrednosti mape:

{:.ulaz}
```js
const mapa = new Map([
  ['beograd', 11000],
  ['rakovica', 11090],
  ['resnik', 11231]
])

for (const vrednost of mapa.values()) {
  console.log(vrednost)
}
```

### Metod `entries()`

Metod `entries()` pravi iterator od unosa mape u vidu `[kljuc, vrednost]` parova:

{:.ulaz}
```js
const mapa = new Map([
  ['beograd', 11000],
  ['rakovica', 11090],
  ['resnik', 11231]
])

for (const unos of mapa.entries()) {
  console.log(unos[0], unos[1])
}
```

Kod može biti još kraći ako upotrebimo destrukturiranje:

{:.ulaz}
```js
const mapa = new Map([
  ['beograd', 11000],
  ['rakovica', 11090],
  ['resnik', 11231]
])

for (const [kljuc, vrednost] of mapa){
  console.log(kljuc, vrednost)
}
```

## Konvertovanje mape u niz

Operator proširivanja (`...`) može biti koristan da konvertujemo ključeve mape u niz:

{:.ulaz}
```js
const mapa = new Map([
  ['beograd', 11000],
  ['rakovica', 11090],
  ['resnik', 11231]
])

const kljucevi = [...mapa.keys()]
console.log(kljucevi)
```

Pošto su mape iterabilne, možemo konvertovati celu mapu u niz pomoću operatora proširivanja:

{:.ulaz}
```js
const mapa = new Map([
  ['beograd', 11000],
  ['rakovica', 11090],
  ['resnik', 11231]
])

const niz = [...mapa]
console.log(niz)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
