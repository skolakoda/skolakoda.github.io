---
title: Objekti u Javascriptu
layout: lekcija-js
permalink: /javascript-objekti
---

**U širem smislu, objekat je svaki složen podatak u Javascriptu (uključujući funkcije i nizove). U užem smislu, objekat je struktura sastavljena od parova ključeva i vrednosti.**

Na primer:

```js
const bicikl = {
  brojTockova: 2,
  proizvodjac: "Sportiko",
  elektricni: true
}
```

Postoje dva načina za pristup svojstvu objekta:
- pomoću uglastih zagrada - na primer, `bicikl['proizvodjac']`
- pomoću tačke - na primer, `bicikl.proizvodjac`

Notacija tačke je jednostavnija za čitanje i pisanje, ali se ne može uvek koristiti. Ako naziv svojstva objekta nije validan naziv promenljive (npr. ima razmak), moramo koristiti uglaste zagrade.

## Upotreba reči `this`

Objekat može sadržati funkcije, koje se onda nazivaju metode. Ključna reč `this` unutar metode ukazuje na njenog vlasnika, odnosno objekat kojem metoda pripada:

{:.ulaz}
```js
const covek = {
  name: 'Aragorn',
  kaziIme () {
    console.log('Moje ime je ' + this.name)
  }
}

covek.kaziIme()
```

Dakle, kada koristimo rezervisanu reč `this`, mi ukazujemo na „ovaj objekat“.

## Referenciranje objekta

Kada objekat dodelimo drugoj promenljivoj, mi pravimo novi pokazivač ka istom objektu, a ne kopiju. Zato, kad menjamo referencu, zapravo menjamo original. Na primer:

{:.ulaz}
```js
const original = {
  brojac: 1
}
const kopija = original // zapravo ne kopira objekat

kopija.brojac = 100
console.log(original.brojac) // original je izmenjen
```

Isto se dešava kada objekat prosledimo funkciji:

{:.ulaz}
```js
const original = {
  brojac: 100
}

function reset(obj) {
  obj.brojac = 0
}

reset(original)
console.log(original.brojac) // original je izmenjen
```

## Kopiranje objekta

Ako želimo da dubinski prekopiramo objekat, a ne samo da napravimo novu referencu, možemo koristiti destruktuiranje. Na primer:

{:.ulaz}
```js
const original = {
  brojac: 1
}
const kopija = {...original} // dubinski kopira objekat

kopija.brojac = 100
console.log(original.brojac) // original je neizmenjen
```

## Poređenje objekata

Kada upoređujemo objekte, dobićemo `true` samo ako uporedimo dve reference na isti objekat. Ako uporedimo dva različita objekta koji sadrže ista svojstva, rezultat će biti `false`. Na primer:

{:.ulaz}
```js
const zuta = {rasa: 'pas'}
const sparki = {rasa: 'pas'}

console.log(sparki == zuta)
```

Međutim, ako kreiramo novu promenljivu i dodelimo joj postojeći objekat, ona onda ukazuje na isti objekat:

{:.ulaz}
```js
const sparki = {rasa: 'pas'}
const mojPas = sparki

console.log(mojPas === sparki)
```

U ovom slučaju `mojPas` je `sparki`, zato što obe promeljive pokazuju na isti objekat u memoriji.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.