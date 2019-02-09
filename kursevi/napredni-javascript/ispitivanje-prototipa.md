---
title: Ispitivanje prototipa
layout: lekcija-napredni-js
permalink: /ispitivanje-prototipa
---

**Postoji više načina da ispitamo koji objekat je korišten kao prototip novokreiranog objekta.**

## `isPrototypeOf()`

Svi objekti imaju metod `isPrototypeOf()`, koji odgovara da li se određeni objekat koristi kao prototip drugog. Na primer, imamo objekat `majmun`:

```js
const majmun = {
  hrana: 'banane',
  dise: 'vazduh'
}
```

Onda napravimo konstruktorsku funkciju `Covek()` i postavimo `prototype` da ukazuje na objekat `majmun`:

```js
function Covek(ime) {
  this.ime = ime
}

Covek.prototype = majmun
```

Kada kreiramo novi objekat pomoću konstruktorske funkcije `Covek`, njegov prototip će biti `majmun`, što možemo proveriti pomoću metode `isPrototypeOf()`:

{:.ulaz}
```js
const majmun = {
  hrana: 'banane',
  dise: 'vazduh'
}

function Covek(ime) {
  this.ime = ime
}

Covek.prototype = majmun

const darvin = new Covek('Darvin')
console.log(majmun.isPrototypeOf(darvin))
```

## `Object.getPrototypeOf()`

Do prototipskog objekta možemo doći pomoću metode `Object.getPrototypeOf()`, na sledeći način:

{:.ulaz}
```js
const majmun = {
  hrana: 'banane',
  dise: 'vazduh'
}

function Covek(ime) {
  this.ime = ime
}
Covek.prototype = majmun

const darvin = new Covek('Darvin')

console.log(Object.getPrototypeOf(darvin) === majmun)
console.log(Object.getPrototypeOf(darvin).hrana)
```

U prastarim okruženjima (pre ES5), koja nemaju metod `Object.getPrototypeOf()`, možemo da koristimo specijalno svojstvo `__proto__` u istu svrhu:

```js
darvin.__proto__=== majmun // true
```

Svojstvo `__proto__` se izbacuje iz upotrebe, pa se preporučuje upoterba `Object.getPrototypeOf()`.

{:.uokvireno.ideja}
Imajte na umu da svojstvo `__proto__` nije isto što i `prototype`, jer prvo je svojstvo instance, a drugo konstruktor funkcije.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
