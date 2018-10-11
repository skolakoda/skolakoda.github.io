---
title: Opseg važenja varijabli u Javaskriptu
layout: lekcija-js
author: damjan
permalink: /opseg-vazenja-varijabli-u-javaskriptu
---

`let` i `const` imaju svoj opseg važenja, odnosno važe samo u bloku u kom su definisane. Njihov opseg važenja je omeđen vitičastim zagradama `{ ... }`

Stare varijable (`var`) su bile omeđene samo opsegom funkcije, a mogle su važiti i izvan bloka u kome su definisane. Za razliku od njih, `let` i `const` ne mogu važiti izvan vitičastih zagrada.

{:.ulaz}
```js
const a = 10;
// b je unutar bloka
{
  const b = 20;
}

console.log(a)  // a je dostupno
console.log(b)  // b je nedostupno i izbacuje grešku
```

Nakon uvođenja ES standarda 2015, upotreba `let` i `const` se preporučuje jer vrednosti ne cure u vanjski opseg.

{:.ideja.uokvireno}
Svakoj globalnoj varijabli možeš pristupiti iz konzole pregledača. Na primer, ako u fajlu postoji globalna varijabla `ime`, otvori web stranicu, otvori konzolu, u konzoli ukucaj `ime` i ispisaće ti se vrednost varijable. Ovo može biti i bezbednosni rizik, jer bilo ko može čitati, pa čak i menjati globalne promenljive.