---
title: "<code>Promise.all()</code>"
layout: lekcija-napredni-js
permalink: /niz-obecanja
---

**Često je potrebno učitati podatke sa raznih URL adresa, te pokrenuti program kad se sve učita.**

Možemo da krei­ramo obećanja za svaki poziv i koristimo ih pojedinačno, ili da upotrebimo metod [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), koji prima niz obećanja, te nakon njihovog razrešenja daje niz rezultata. Sintaksa je sledeća:

```js
Promise.all([obecanje1(), obecanje2()])
  .then(nizRezultata => {
    // koristimo niz rezultata
  })
  .catch(err => {
    // upravljamo greškom
  })
```

## Primer

{:.ulaz}
```js
const obecanje1 = new Promise(callback => setTimeout(() => callback('ok'), 800))
const obecanje2 = new Promise(callback => setTimeout(() => callback('vazi'), 400))
const obecanje3 = new Promise(callback => setTimeout(() => callback('ispunjeno'), 200))

Promise.all([obecanje1, obecanje2, obecanje3]).then(
  rezultati => console.log(rezultati)
)
```
