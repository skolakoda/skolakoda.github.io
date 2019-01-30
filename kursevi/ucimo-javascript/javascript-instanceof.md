---
title: Provera nasleđivanja
layout: lekcija-js
permalink: /javascript-instanceof
---

**Nekad je potrebno proveriti da li je objekat instanca određene klase, kao i na osnovu koje klase je kreiran.**

## Operator `instanceof`

Pomoću operatora `instanceof`, možemo proveriti da li objekat nasleđuje određenu klasu:

{:.ulaz}
```js
class Junak {}
class Hobit extends Junak {}

const bilbo = new Hobit()

console.log(bilbo instanceof Hobit)
console.log(bilbo instanceof Junak)
console.log(bilbo instanceof Object)
```

Svaki objekat u Javascriptu je instanca `Object` konstruktora, koji se nalazi na vrhu hijerarhije nasleđivanja.

## Svojstvo `constructor`

Kada se objekat kreira, u pozadini mu se dodeljuje svojstvo `constructor`, koje pokazuje na klasu pomoću koje je kreiran. Na primer:

{:.ulaz}
```js
class Patuljak {}

const gimli = new Patuljak()

console.log(gimli.constructor)
```

Pošto svojstvo `constructor` sadrži referencu na klasu, možemo pozvati tu klasu da bismo napravili novi objekat. Kao kada bismo rekli: „Ne zanima me kako je objekat kreiran, ali hoću još jedan takav“:

{:.ulaz}
```js
class Patuljak {}

const gimli = new Patuljak()
const gloin = new gimli.constructor()

console.log(gloin instanceof Patuljak)
```

## Krajnji predak

Za svaki objekat kreiran bez neke određene klase, konstruktor je `Object`, koji se nalazi na vrhu hijerarhije nasleđivanja:

{:.ulaz}
```js
const covek = {}

console.log(covek.constructor)
```