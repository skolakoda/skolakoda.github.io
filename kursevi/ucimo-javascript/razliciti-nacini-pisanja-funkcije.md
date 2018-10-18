---
title: Različiti načini pisanja funkcije
layout: lekcija-js
permalink: /razliciti-nacini-pisanja-funkcije
---

**Postoji više načina da definišemo i koristimo funkcije u Javascriptu.**

## Funkcijski izraz (*function expression*)

Kod funkcijskog izraza prvo proglašavamo konstantu ili varijablu, kojoj zatim dodeljujemo anonimnu funkciju (primetite da posle ključne reči `function` nema naziva):

```js
const saberi = function(x, y) { 
  return x + y
} 
```

Kada koristimo funkcijski izraz, naš kod se izvršava liniju po liniju, i ne možemo koristiti funkciju pre nego što je definisana. Ukoliko pokušamo, dobićemo grešku:

{:.ulaz}
```js
console.log(saberi(33, 44))

const saberi = function(x, y) { 
  return x + y
} 
```

## Deklaracija funkcije (*function declaration*)

Deklaracija funkcije (*function declaration*) ili funkcijska naredba (*function statement*) ima sledeću sintaksu:

```js
function saberi(x, y) { 
  return x + y
} 
```

Kod deklaracije funkcije, **moguće je koristiti funkciju pre nego što je definisana**: 

{:.ulaz}
```js
console.log(saberi(33, 44))

function saberi(x, y) { 
  return x + y
} 
```

{:.uokvireno.ideja}
Javascript vrši dizanje (*hoisting*) svih deklaracija funkcija na vrh fajla, pre izvršenja programa.