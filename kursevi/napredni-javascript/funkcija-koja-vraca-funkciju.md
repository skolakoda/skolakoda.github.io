---
title: Funkcije koja vraćaju funkcije
layout: lekcija-napredni-js
permalink: /funkcija-koja-vraca-funkciju
---

**U Javascriptu, funkcija može da vrati vrednost bilo kog tipa, a to može biti i funkcija.**

## Funkcija unutar funkcije

Poznato je da možemo ugnezditi funkciju unutar druge funkcije. Na primer:

```js
function spoljnja() {
  function unutrasnja() {
    // telo unutrasnje funkcije
  }
}
```

Ovde važi klasično pravilo opsega - unutrašnja funkcija deluje unutar spoljnje, te ima pristup njenim varijablama i argumentima. Međutim, spoljnja funkcija nema pristup varijablama unutrašnje.

Međutim, osim što funkciju možemo staviti unutar druge, nju možemo i vratiti iz druge funkcije.

## Funkcija koja vraća funkciju

Napravićemo funkciju koja prima jedan argument i vraća funkciju koja prima drugi argument, a druga funkcija vraća zbir oba argumenta:

```js
function dodaj(x) {
  return function(y) {
    return y + x
  }
}
```

Funkciju koja vraća funkciju možemo koristiti na dva načina. Možemo je pozvati sa dva para zagrada i proslediti argumente i spoljnjoj i unutrašnjoj funkciji:

```js
dodaj(9)(10) // pozivamo spoljnju pa unutrašnju funkciju
```

Ili možemo prvo pozvati spoljnju funkciju i njen rezultat (unutrašnju funkciju) smestiti u varijablu, nakon čega po imenu varijable pozivamo unutrašnju funkciju:

```js
const dodaj3 = dodaj(3)
dodaj3(4)  // pozivamo unutrašnju funkciju
```

## Ceo primer

Ceo prethodni primer bi izgledao ovako:

{:.ulaz}
```js
function dodaj(x) {
  return function(y) {
    return y + x
  }
}

console.log(dodaj(9)(10))
const dodaj3 = dodaj(3)
console.log(dodaj3(4))
```

## Streličasta sintaksa

Prethodni primer pomoću streličaste sintakse može da se napiše na sledeći način:

```js
const dodaj = x => y => y + x
```

Ovde takođe imamo spoljnu funkciju koja prima argument `x` i unutrašnju funkciju `y => y + x`.

Vidimo da je zbog implicitnog vraćanja vrednosti sintaksa značajno kraća i manje očigledna.

## Stvarna upotreba

Funkcije koje vraćaju funkcije se u Javascriptu često koriste. Jedan primer je funkcija `connect` iz `react-redux` biblioteke:

```js
connect(mapStateToProps)(App)
```

## Literatura

- Shelley Powers, *Naučite JavaScript* ([probno poglavlje](https://www.knjizara.hr/detalji_proizvoda.776647dde2de4ab9836a80545db56350.naucite-javascript.aspx)), Zagreb 2010.
- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
