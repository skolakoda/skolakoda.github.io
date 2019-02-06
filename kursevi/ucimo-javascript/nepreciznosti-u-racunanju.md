---
title: Nepreciznosti u računanju
layout: lekcija-js
permalink: /nepreciznosti-u-racunanju
---

**Uzrok mnogih nepreciznosti u računanju je ograničen broj u memoriji za smeštaj decimala nekog broja, usled čega je nužna nepreciznost, odnosno zaokruživanje.**

Nepreciznosti u računanju nisu specifičnost Javascripta, već su karakteristika gotovo svih programskih jezika, uključujući C, C++, Javu, Python i ostale. 

## Decimalni problem

### Sabiranje decimalnih brojeva

Nekada i najprostije računske operacije sa decimalnim brojevima mogu dati neočekivane rezultate, na primer:

{:.ulaz}
```js
const rezultat = 0.2 + 0.1

console.log(rezultat)
```

Ovo nepreciznost se može rešiti zaokruživanjem:

{:.ulaz}
```js
const rezultat = 0.2 + 0.1

console.log(rezultat.toFixed(1))
```

### Deljenje brojeva

Deljenje brojeva takođe može dati neočekivane rezultate, ukoliko je rezultat decimala:

{:.ulaz}
```js
const rezultat = 10 / 3

console.log(rezultat)
```

## Oktalni problem

Ukoliko broj počinje nulom, JS ga ne interpretira u dekadnom već u oktalnom brojčanom sistemu. Na primer:

{:.ulaz}
```js
const a = 012

console.log(a) // ispisuje 10
```

Objašnjenje: 12 u oktalnom sistemu je isto što i 10 u dekadnom.