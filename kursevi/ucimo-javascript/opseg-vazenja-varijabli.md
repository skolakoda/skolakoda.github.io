---
title: Opseg važenja varijabli u Javaskriptu
layout: lekcija-js
author: damjan
permalink: /opseg-vazenja-varijabli-u-javaskriptu
---

**Sve varijable u Javascriptu imaju svoj opseg važenja. Ukoliko njihov opseg važenja nije omeđen, podrazumevano se nalaze u globalnom imenskom prostoru.**

`let` i `const` važe samo u bloku u kom su definisane. Njihov opseg važenja je omeđen vitičastim zagradama `{ }`. Stare varijable (`var`) su omeđene samo opsegom funkcije, a mogu važiti i izvan bloka u kome su definisane. Za razliku od njih, `let` i `const` ne mogu važiti izvan vitičastih zagrada. 

Nakon ovođenja ES6 standarda, upotreba `let` i `const` se preporučuje jer vrednosti ne cure u vanjski opseg.

## Primer 1

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

## Primer 2

Pokušaj da pogodiš šta će biti ispis u narednom primeru, gde imamo dve promenljive pod istim imenom:

{:.ulaz}
```js
let ime = "Vatroslav"

{
  let ime = "Jaroslava"
}

console.log(ime)
```

Pokušaj opet da pogodiš ispis, kada smo izbacili proglašenje nove varijable u unutrašnjem opsegu:

{:.ulaz}
```js
let ime = "Vatroslav"

{
  ime = "Jaroslava"
}

console.log(ime)
```

**Objašnjenje**: u prvom slučaju imamo dve varijable proglašene u dva različita opsega, a u drugom jednu varijablu proglašenu u globalnom opsegu, a izmenjenu u lokalnom. Dakle, moguće je pristupiti spoljnjim varijablama u unutrašnjem opsegu, ali ne i obratno.

{:.ideja.uokvireno}
Svakoj globalnoj varijabli možeš pristupiti iz konzole pregledača. Na primer, ako u fajlu postoji globalna varijabla `ime`, otvori web stranicu, otvori konzolu, u konzoli ukucaj `ime` i ispisaće ti se vrednost varijable. Ovo može biti i bezbednosni rizik, jer bilo ko može čitati, pa čak i menjati globalne promenljive.