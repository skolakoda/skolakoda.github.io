---
title: Konstruktorske funkcije
layout: lekcija-napredni-js
permalink: /konstruktor-funkcije
---

**Konstruktorske funkcije su, pre uvođenja klasa, bile jedini način za pisanje objektno-orjentisanog Javascripta.**

Sintaksa je sledeća:

{:.ulaz}
```js
function Heroj() {
  this.zanimanje = 'ratnik'
}

const covek = new Heroj()

console.log(covek.zanimanje)
```

Da bismo kreirali objekat pomoću konstruktor funkcije, koristimo `new` operator. 

## Prihvatanje parametara

Konstruktorske funkcije mogu primati parametre. Na primer, možemo dodati parametar `ime` i dodeliti ga svojstvu `ime`. Na taj način možemo kreirati više različitih objekata pomoću istog konstruktora:

{:.ulaz}
```js
function Heroj(ime) {
  this.ime = ime
  this.zanimanje = 'ratnik'
}

const heroj1 = new Heroj('Aragorn')
const heroj2 = new Heroj('Boromir')

console.log(heroj1.ime)
console.log(heroj2.ime)
```

{:.uokvireno.ideja}
Po pravilu, naziv konstruktora treba pisati velikim slovom. To je konvencija da bismo konstruktore razlikovali od običnih funkcija.

## Dodavanje metoda

{:.ulaz}
```js
function Heroj(ime) {
  this.ime = ime
  this.zanimanje = 'ratnik'

  this.pozdrav = function () {
    console.log("Zdravo ja sam " + this.ime + " i ja sam " + this.zanimanje)
  }
}

const heroj = new Heroj('Aragorn')
heroj.pozdrav()
```

## Česte greške

Ako pozivamo funkciju koja je namenjena da bude konstruktor, a izostavimo operator `new`, to tehnički nije greška. Međutim, nećemo dobiti očekivani rezultat:

```js
const heroj = Heroj('Aragorn')
typeof heroj // "undefined"
```

Šta se desilo ovde? Nema operatora `new`, pa novi objekat nije kreiran. Konstruktor je pozvan kao obična funkcija, a pošto nema naredbe `return`, implicitno vraća `undefined`.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
