---
title: Tri tačke u Javascriptu
layout: lekcija-napredni-js
permalink: /javascript-spread-i-rest
---

**Tri tačke u Javascriptu (`...`) mogu biti operator razdvajanja (*spread*) ili parametar ostatka (*rest*).**

Operator razdvajanja razdvaja jednu složenu strukturu u više činilaca. Parametar ostatka spaja zasebne argumente funkcije u niz.

## Operator razdvajanja (*spread*)

Operator razdvajanja značajno olakšava rad sa nizovima u JavaScriptu. Ranije, da bismo kreirali niz od drugog niza, morali smo koristiti metode `push`, `splice` i `concat`. Sa operatorom za razdvajanje možemo razdvojiti niz na sastavne delove i njegove članove staviti u novi niz:

{:.ulaz}
```js
var radniDani = ['ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak']
var vikend = ['subota', 'nedelja']
var sedmica = [...radniDani, ...vikend]
console.log(sedmica)
```

Takođe, pomoću operatora za razdvajanje možemo proslediti članove niza funkciji, koja ih prima zasebno:

{:.ulaz}
```js
const brojevi = [2, 3, 7]

function saberi(a, b, c) {
  return a + b + c
}

console.log(saberi(...brojevi))
```

Operator razdvajanja se takođe može koristiti za kopiranje i kombinovanje objekta:

```js
const original = { a: 1, b: 2 }
const kopija = { ...original, c: 3 }  // { a: 1, b: 2, c: 3 }
```

## Parametar ostatka (*rest*)

Parametar ostatka omogućuje da funkciji prosledimo proizvo­ljan broj parametara, a da ih ona primi u vidu niza. Stavljanjem tri tačke (`...`) pre parametra označavamo para­metar ostatka:

{:.ulaz}
```js
function saberi(...brojevi) {
  return brojevi.reduce((ukupno, n) => ukupno + n)
}

console.log(saberi(2, 3, 7, 6, 5, 9))
```

Ako funkcija prima više parametara, parametar ostatka mora biti poslednji.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)