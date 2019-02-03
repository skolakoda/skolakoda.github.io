---
title: Ugnježdene petlje
layout: lekcija-js
permalink: /ugnjezdene-petlje
---

**Petlje se mogu ugnezditi jedna u drugu. Ugnježdene petlje su potrebne svaki put kada radimo sa nečim što ima kolone i redove (grid, matrica, tabela...).**

## Primer

Sledeći program crta 12 kolona i 6 redova zvezdica:

{:.ulaz}
```js
const brojKolona = 12
const brojRedova = 6

let rezultat = ''
for (let i = 0; i < brojRedova; i++) {
  for (let j = 0; j < brojKolona; j++) {
    rezultat += '* '
  }
  rezultat += '\n'
}

console.log(rezultat)
```
