---
title: Imenovani izvoz i uvoz
layout: lekcija-napredni-js
permalink: /imenovani-izvoz-i-uvoz
---

**U svakom modulu možemo imati više imenovanih izvoza, koje potom možemo uvoziti u druge module.**

## Izvoz (`export`)

U sledećem primeru iz fajla `helpers.js` izvozimo konstantu, funkciju i klasu pomoću naredbe `export`. Postoji i jedna funkcija koju ne izvozimo, već služi za internu upotrebu:

```js
// ---------------- helpers.js -------------------

export const port = 8080

export function startApp(port) {
  // ...
}

export class User {
  // ...
}

function log() {
  // ...
}
```

## Uvoz (`import`)

Sada drugi Javascript fajl može da može da uveze bilo šta izvezeno iz modula `helpers.js`. Na primer:

```js
// -------------- app.js------------------

import {port, startApp} from './helpers.js'

startApp(port)
```

Možemo i sve odjednom da uvezemo, na sledeći način:

```js
import * from './helpers.js'
```

## Liste izvoza

Umesto da svaku stvar koju želimo da izvezemo iz modula označavamo rečju `export`, možemo da napišemo listu svih elemenata koje želimo da izvezemo iz modula, na sledeći način:

```js
const port = 8080

function startApp(port) {
  // ...
}

class User {
  // ...
}

function log() {
  // ...
}

export {port, startApp, User}
```

U istoj modulu možemo da kombinujemo listu izvoza i zaseban `export`, ali jedan naziv možemo da izvezemo samo jednom.

## Alijasi

Postoje slučajevi kada može doći do sukoba naziva. Na primer, uvozimo dve funkcije `random` iz dva različita modula. U takvim slučajevima možemo da uvedemo alijase na sledeći način:

```js
import {random as stringRand} from "../lib/string"
import {random as mathRand} from "../lib/math"
```

Po istom principu, možemo da izmenimo nazive prilikom izvoza:

```js
function saberi() {
  // ...
}

function pomnozi() {
  // ...
}

export {
  saberi as add,
  pomnozi as multiply
}
```
