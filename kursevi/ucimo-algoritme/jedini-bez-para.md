---
title: Jedini broj bez para
layout: lekcija-algoritmi
permalink: /jedini-bez-para
---

Algoritam za nalaženje usamljenog broja u nizu parova:

{:.ulaz}
```js
const jedini_u_nizu = niz => niz.reduce((acc, n) => acc ^ n)

console.log(jedini_u_nizu ([3, 4, 3, 5, 5]))
```

## Objašnjenje

Algoritam koristi XOR operaciju (oznaku `^`) kako bi pronašla jedini broj koji se ne ponavlja u nizu. Evo kako funkcioniše:

- `reduce` se koristi da prolazi kroz sve elemente niza, počinjući sa početnom vrednošću `acc` (akumulator).
- XOR operacija (`^`) se koristi između `acc` i svakog broja `n` u nizu. XOR ima specifične osobine:
  - `x ^ x = 0` (broj XOR-ovan sa samim sobom daje 0),
  - `x ^ 0 = x` (broj XOR-ovan sa 0 ostaje nepromenjen).
  
Kao rezultat, svi brojevi koji se ponavljaju će se poništiti međusobno (XOR sa sobom daje 0), a na kraju će ostati samo jedini koji se ne ponavlja.
