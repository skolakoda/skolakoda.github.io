---
title: Ispitivanje tipa objekta
layout: lekcija-napredni-js
permalink: /ispitivanje-tipa-objekta
---

Kao što možemo videti, operator `typeof` vraća tip "objekat" i za niz:

{:.ulaz}
```js
// niz
const nizBrojeva = [1, 2, 3, 4, 5]
console.log(typeof nizBrojeva)

// objekat
const stolica = {
  brojNogu: 4,
  nova: false
}
console.log(typeof stolica)
```

Kako možemo razlikovati objekat i niz? Možemo da pozovemo metod `Object.prototype.toString()` na željenom objektu. Dobićemo naziv klase koja se koristi za kreiranje objekta:

{:.ulaz}
```js
const nizBrojeva = [1, 2, 3, 4, 5]
const stolica = {
  brojNogu: 4,
  nova: false
}

console.log(Object.prototype.toString.call(nizBrojeva))
console.log(Object.prototype.toString.call(stolica))
```

Možemo takođe ispitati DOM elemente na isti način:

```js
Object.prototype.toString.call(document.body) // [object HTMLBodyElement]
```

Neophodno je pozvati metod `toString()`, koji je definisan u prototipu konstruk­tora `Object`. Ako pozovemo metodu niza `toString()`, dobićemo drugačiji rezultat, prilagođen za specifičnu namenu.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
