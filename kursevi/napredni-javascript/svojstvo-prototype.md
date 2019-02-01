---
title: "Svojstvo <code>prototype</code>"
layout: lekcija-napredni-js
permalink: /svojstvo-prototype
---

**Funkcije u JavaScriptu su zapravo objekti, koji sadrže metode i svojstva.** 

Neke od metoda su `call()`, `apply()` i `bind()`, a svojstva su `length`, `constructor` i `prototype`. Svojstvima funkcije možemo pristupiti na isti način kao svojstvima objekta. Na primer:

{:.ulaz}
```js
function kvadriraj(a, b) {
  return a * b
}

console.log(kvadriraj.length) // broj argumenata
console.log(kvadriraj.constructor)
```

Inicijalna vrednost svojstva `prototype` je prazan objekat. To je kao kada bismo sami dodali:

```js
kvadriraj.prototype = {}
```

Prazan prototipski objekat možemo proširiti svojstvima i metodima. On nema uticaja na samu funkciju, ali se koristi ako je pozovemo kao konstruktor.

## Proširenje prototipa konstruktorske funkcije

Recimo da imamo konstruktorsku funkciju `Junak()`:

```js
function Junak(ime, rasa) {
  this.ime = ime
  this.rasa = rasa
}
```

Ne moramo odmah u konstruktor funkciji pobrojati sva svojstva i metode objekta, već ih možemo naknadno dodati preko svojstva `prototype`, na sledeći način:

```js
Junak.prototype.energija = 100
Junak.prototype.predstaviSe = function () {
  return 'Ja sam ' + this.rasa + ' ' + this.ime
}
```

Svi metodi i svojstva koje smo dodali u svojstvo `prototype` postaju dostupni čim krei­ramo novi objekat pomoću konstruktora.

```js
const gimli = new Junak('Gimli', 'patuljak')
gimli.ime // "Gimli"
gimli.rasa // "patuljak"
gimli.predstaviSe() // "Ja sam patuljak Gimli"
gimli.energija // 100
```

Važno je napomenuti da je svojstvo `prototype` „živo“, jer svi objekti dele isti `prototype` objekat po referenci. Znači možemo da modifikujemo `prototype` u bilo kom trenutku, pa će svi objekti prepoznati promene. Na primer, možemo naknadno dodati novo svojstvo preko `prototype`:

```js
Junak.prototype.ziv = true
```

Iako je objekat `gimli` kreiran pre nego što je definisano svojstvo `ziv`, ipak će mu imati pristup:

```js
gimli.ziv // true
```

## Ceo primer

{:.ulaz}
```js
function Junak(ime, rasa) {
  this.ime = ime
  this.rasa = rasa
}

Junak.prototype.energija = 100
Junak.prototype.predstaviSe = function () {
  return 'Ja sam ' + this.rasa + ' ' + this.ime
}

const gimli = new Junak('Gimli', 'patuljak')

console.log(gimli.ime)
console.log(gimli.rasa)
gimli.predstaviSe()
console.log(gimli.energija)

Junak.prototype.ziv = true
console.log(gimli.ziv)
```

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
