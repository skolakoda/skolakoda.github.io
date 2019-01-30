---
title: Nasleđivanje klasa u Javascriptu
layout: lekcija-js
permalink: /javascript-nasledjivanje-klasa
---

**Nasleđivanje predstavlja jedan od načina za ponovnu upotrebu postojećeg koda.**

Ako je osnovna klasa previše opšta, možemo napraviti izvedenu klasu koja je nasleđuje čitav njen kod, i proširuju njenu funkcionalnost, pomoću ključne reči `extends`.

## Dodavanje metoda

U narednom primeru, imamo osnovnu klasu Junak i izvedenu klasu Covek. Klasa Covek dodaje novu metodu `povlacenje`, a pritom zadržava sva svojstva i metode osnovne klase:

{:.ulaz}
```js
class Junak {
  constructor(ime) {
    this.ime = ime
    this.energija = 100
  }
  
  napadni(neprijatelj) {
    neprijatelj.energija -= 5
    if (neprijatelj.energija <= 0) console.log('Neprijatelj je mrtav.')
  }
}

class Covek extends Junak {
  povlacenje() {
    console.log('Povlacenje!')
  }
}

const juruk = new Junak('Juruk')
const boromir = new Covek('Boromir')
juruk.napadni(boromir)
console.log("Energija je sada", boromir.energija)
boromir.povlacenje()
```

## Redefinisanje metoda (polimorfizam)

U narednom primeru, imamo osnovnu klasu Junak i izvedenu klasu Ork, koja redefiniše metodu `pozdrav`:

{:.ulaz}
```js
class Junak {
  constructor(ime) {
    this.ime = ime
    this.energija = 100
  }
  
  pozdrav() {
    console.log(`Moje ime je ${this.ime}`)
  }
}

class Ork extends Junak {
  pozdrav() {
    console.log(`Rgaah ja ${this.ime} jesam!`)
  }
}

const juruk = new Ork('Juruk')
juruk.pozdrav()

const grokar = new Ork('Grokar')
grokar.pozdrav()

const boromir = new Junak('Boromir')
boromir.pozdrav()
```

Mogućnost pozivanja istog metoda sa različitih objekata, koji reaguju na sebi svojstven način, naziva se **polimorfizam**.

## Dodavanje svojstava

Ukoliko želimo da dodamo novo svojstvo izvedenoj klasi, to činimo unutar predviđene `constructor` metode. Pre nego što dodamo novo svojstvo, moramo pozvati konstruktor osnovne klase pomoću metode `super()`, i proslediti mu potrebne argumente:

{:.ulaz}
```js
class Junak {
  constructor(ime) {
    this.ime = ime
    this.energija = 100
  }
}

class Ork extends Junak {
  constructor(ime) {
    super(ime)
    this.bojaKoze = "zelena"
  }
}

const grundak = new Ork("Grundak")
console.log(grundak.bojaKoze)
```