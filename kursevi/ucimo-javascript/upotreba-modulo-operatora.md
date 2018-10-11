---
title: Upotreba modulo operatora
layout: lekcija-js
permalink: upotreba-modulo-operatora
---

**Modulo operator `%` se koristi za izračunavanje ostatka deljenja.**

Na primer, ostatak od deljenja 5 / 2 se računa ovako:

```js
5 % 2
```

što iznosi 1.

## Otkrivanje je li paran ili neparan broj

Čest slučaj upotrebe modulo operatora je ispitivanje da li je neki broj paran ili neparan. Na primer, broj je paran ako nema ostatak kad se podeli sa dva, odnosno ako je njegov ostatak nula:

```js
x % 2 == 0
```

Isto tako, broj je neparan ako je njegov ostatak od deljenja sa dva jedinica:

```js
x % 2 == 1
```

Ili jednostavno ako nije nula:

```js
x % 2 != 0
```

Proverite sami za bilo koji broj:

{:.ulaz}
```js
x = 7
console.log("Da li je broj paran?")
console.log(x % 2 == 0)
```

## Primer: Koliko godina, meseci i dana?

Imamo određen broj dana, npr. 10.000, a želeli bismo da znamo koliko je to godina, meseci i dana. Modulo operator nam može pomoći da to izračunamo:

{:.ulaz}
```js
const ukupnoDana = 10000
const godina = Math.floor(ukupnoDana / 365)
let ostaloDana = ukupnoDana % 365
const meseci = Math.floor(ostaloDana / 30)
ostaloDana = ostaloDana % 30

const poruka = `${ukupnoDana} dana se sastoji od ${godina} godina, ${meseci} meseci i ${ostaloDana} dana.`
console.log(poruka)

```