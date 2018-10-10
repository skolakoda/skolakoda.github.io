---
title: Upotreba modulo operatora
layout: lekcija-js
permalink: upotreba-modulo-operatora
---

Modulo operator `%` se koristi za izračunavanje ostatka. 

Na primer, ostatak od deljenja 5 / 2 (što iznosi 1) se računa ovako:

```js
5 % 2
```

## Primer

Imamo 10.000 dana, a želeli bismo da znamo koliko je to godina, meseci i dana. 

{:.ulaz}
```js
const ukupnoDana = 10000
const godina = ukupnoDana / 365
let ostaloDana = ukupnoDana % 365
const meseci = ostaloDana / 30
ostaloDana = ostaloDana % 30

console.log(`${ukupnoDana} dana se sastoji od ${Math.floor(godina)} godina, ${Math.floor(meseci)} meseci i ${ostaloDana} dana.`)

```