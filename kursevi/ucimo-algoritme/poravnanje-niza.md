---
title: Poravnanje niza
layout: lekcija-algoritmi
permalink: /poravnanje-niza
---

**Rekurzivni algoritam je posebno zgodan za poravnanje nizova neznane dubine.**

## Rekurzivno poravnanje niza

{:.ulaz}
```js
function poravnaj(niz) {
  const nadovezan = [].concat(...niz)
  return nadovezan.some(Array.isArray) ? poravnaj(nadovezan) : nadovezan
}

console.log(poravnaj([1, [2, 3, 4], [5, [[6]]]]))
```

## Rekurzivno poravnanje niza pomoću reduce

{:.ulaz}
```js
const poravnaj = (...argumenti) => argumenti.reduce((niz, el) =>
  niz.concat(Array.isArray(el) ? poravnaj(...el) : el)
, [])

console.log(poravnaj(1, [2, 3], 4, 5, [6, [7]]))
console.log(poravnaj('a', ['b', 2], 3, null, [[4], ['c']]))
```
