---
title: Iteracija generatora u Javascriptu
layout: lekcija-napredni-js
permalink: /javascript-iteracija-generatora
---

**Generator funkcije se prilagođavaju ponašanju iterabli, pa se mogu koristiti za iteraciju.**

Generator funkciju možemo iterirati pomoću `for...of` petlje:

{:.ulaz}
```js
function* logger() {
  yield 'a'
  yield 'b '
}

for (const i of logger()) {
  console.log(i)
}
```

## Pretvaranje generatora u niz

Operator proširivanja može da se koristi za pretvaranje iterabli u nizove. Na primer:

{:.ulaz}
```js
function* logger() {
  yield 'a'
  yield 'b'
}

const niz = [...logger()]
console.log(niz)
```

Takođe, sa generatorima možemo da upotrebimo sintaksu destrukturiranja na sledeći način:

{:.ulaz}
```js
function* logger() {
  yield 'a'
  yield 'b'
}

const [x, y] = logger()
console.log(x, y)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
