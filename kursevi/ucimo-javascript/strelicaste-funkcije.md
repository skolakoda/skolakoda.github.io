---
title: "Streličaste (<i>arrow</i>) funkcije"
layout: lekcija-js
permalink: /strelicaste-funkcije
---

**Streličaste (<i>arrow</i>) funkcije su kraći način pisanja funkcija u Javascriptu. One su posebno zgodne za kratke, jednolinijske funkcije.**

Za razliku od tradicionalnih funkcija, streličaste funkcije nemaju svoj `this`.

## Jednolinijske streličaste funkcije

Tradicionalno, funkcijski izraz pišemo ovako:

```js
const saberi = function (x, y) {
  return x + y
}
```

Isti funkcijski izraz, napisan streličastom sintaksom, bi izgledao ovako:

```js
const saberi = (x, y) => x + y
```

Ako streličasta funkcija ima samo jedan parametar, onda zagrada oko parametra nije potrebna:

```js
const pozdrav = ime => 'Zdravo korisniče ' + ime
```

{:.uokvireno.ideja}
Jednolinijske streličaste funkcije automatski umeću `return` naredbu, tako da je ne moramo pisati.

## Višelinijske streličaste funkcije

Ukoliko streličasta funkcija ima više linija, onda je `return` naredba neophodna, zajedno sa vitičastim zagradama oko tela funkcije:

```js
const saberi = (x, y) => {
  const rezultat = x + y
  return rezultat
}
```
