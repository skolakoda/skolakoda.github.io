---
title: Nasleđivanje klasa u Javascriptu
layout: lekcija-js
permalink: /javascript-nasledjivanje-klasa
---

**Ako je zajednička klasa previše opšta, možemo napraviti specifičnije klase koje je nasleđuju i proširuju, pomoću ključne reči `extends`.**

## Primer: dodavanje metoda

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

## Primer: redefinisanje metoda

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

## Primer: dodavanje svojstava

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