---
title: Opseg važenja varijabli u Javaskriptu
layout: lekcija-js
author: damjan
permalink: /opseg-vazenja-varijabli-u-javaskriptu
---

**Sve varijable u Javascriptu imaju svoj opseg važenja. Ukoliko njihov opseg važenja nije omeđen, podrazumevano se nalaze u globalnom imenskom prostoru.**

`let` i `const` važe samo u bloku u kom su definisane. Njihov opseg važenja je omeđen vitičastim zagradama `{ }`. Stare varijable `var` su omeđene samo opsegom funkcije, a važe izvan svih drugih blokova u kojima su definisane. Za razliku od njih, `let` i `const` ne mogu važiti izvan vitičastih zagrada. 

Nakon ovođenja ES6 standarda, upotreba `let` i `const` se preporučuje jer vrednosti ne izlaze u vanjski opseg.

## Primer: važenje opsega bloka

{:.ulaz}
```js
// a je u globalnom prostoru
const a = 10

// b je unutar bloka
{
  const b = 20
}

console.log(a)  // a je dostupno
console.log(b)  // b je nedostupno i izbacuje grešku
```

## Primer: nevaženje opsega bloka

Stare promenljive `var` možemo zatvoriti samo u opseg funkcije, inače ignorišu sve druge blokove (petlje, uslove i sl.). U sledećem primeru vidimo da `var` ignoriše vitičaste zagrade:

{:.ulaz}
```js
{
  var b = 20
}

console.log(b)  // b je dostupno
```

## Primer: ponovno proglašenje promenljive unutar bloka

Pokušaj da pogodiš šta će biti ispis, kada imamo dve promenljive pod istim imenom:

{:.ulaz}
```js
let ime = "Vatroslav"

{
  let ime = "Jaroslava"
}

console.log(ime)
```

Dve istoimene varijable proglašene su u dva različita opsega, a čitamo onu iz spoljnjeg.

## Primer: ponovna dodela vrednosti unutar bloka

Pokušaj opet da pogodiš ispis, kada smo izbacili proglašenje varijable u unutrašnjem opsegu:

{:.ulaz}
```js
let ime = "Vatroslav"

{
  ime = "Jaroslava"
}

console.log(ime)
```

Ovde imamo jednu varijablu proglašenu u spoljašnjem opsegu, a izmenjenu u unutrašnjem. Moguće je pristupiti spoljnjim varijablama iz unutrašnjeg opsega, ali ne i obratno.

## Globalne promenljive

Globalne promenljive su sve one koje nisu ni u jednom opsegu. Dobra je praksa smanjiti broj globalnih promenljivih na minimum, da bismo izbegli sukob naziva iz različitih skripti.

{:.ideja.uokvireno}
Svakoj globalnoj varijabli možeš pristupiti iz konzole pregledača. Na primer, ako u fajlu postoji globalna varijabla `ime`, otvori web stranicu, otvori konzolu, u konzoli ukucaj `ime` i ispisaće ti se vrednost varijable. Ovo može biti i bezbednosni rizik, jer bilo ko može čitati, pa čak i menjati globalne promenljive.