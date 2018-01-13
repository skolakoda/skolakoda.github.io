---
title: Obećanja u Javascriptu
layout: lekcija-napredni-js
author: damjan
permalink: /obecanja
---

**Obećanja su uvedena u Javascript sa ciljem da reše tzv. *callback* pakao, odnosno da bismo povratnim podacima upravljali bez dodatnih nivoa gnježdenja.**

## Novo obećanje

Novo obećanje pravimo i pozivamo na sledeći način:

{:.ulaz}
```js
const obecanje = new Promise(
  callback => setTimeout(() => callback('ispunjeno'), 800)
)

obecanje.then(data => console.log(data))
```

## Povezana obećanja

Kada pravimo povezana obećanja, prvo pravimo funkciju koja vraća novi [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) objekat, a potom [asinhronu funkciju](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) koja se nadovezuje na nju:

{:.ulaz}
```js
const obecaj = () => new Promise(callback => setTimeout(() => callback('ispunjeno'), 800))

const obecajOpet = async () => 'kazem opet: ' + await obecaj()

obecaj().then(data => console.log(data))
obecajOpet().then(data => console.log(data))
```

## Sva obećanja

Metoda [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) prima niz obećanja, te nakon njihovog razrešenja ima dostupan niz podataka:

{:.ulaz}
```js
const obecanje1 = new Promise(callback => setTimeout(() => callback('ok'), 800))
const obecanje2 = new Promise(callback => setTimeout(() => callback('vazi'), 400))
const obecanje3 = new Promise(callback => setTimeout(() => callback('ispunjeno'), 200))

Promise.all([obecanje1, obecanje2, obecanje3]).then(
  podaci => console.log(podaci)
)
```
