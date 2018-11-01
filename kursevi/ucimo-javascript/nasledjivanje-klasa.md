---
title: Nasleđivanje klasa u Javascriptu
layout: lekcija-js
permalink: /javascript-nasledjivanje-klasa
---

**Ako je zajednička klasa previše opšta, možemo napraviti specifičnije klase koje je nasleđuju i proširuju, pomoću ključne reči `extends`.**

## Primer: dodavanje i menjanje metoda

U narednom primeru, imamo osnovnu klasu Junak i dve nasleđene klase Ork i Covek. Klasa Ork redefiniše metodu `pozdrav`, a klasa Covek dodaje novu metodu `hodaj`. Izvedene klase zadržavaju ista svojstva:

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
  
  napadni(neprijatelj) {
    neprijatelj.energija -= 5
    if (neprijatelj.energija <= 0) console.log('Neprijatelj je mrtav.')
  }
}

class Ork extends Junak {
  pozdrav() {
    console.log(`Rgaah ja ${this.ime} jesam!`)
  }
}

class Covek extends Junak {
  hodaj() {
    console.log('hodam')
  }
}


const ork1 = new Ork('Juruk')
ork1.pozdrav()

const ork2 = new Ork('Grokar')
ork2.pozdrav()

const covek1 = new Covek('Boromir')
covek1.pozdrav()
covek1.hodaj()

ork1.napadni(covek1)
console.log("Energija je sada", covek1.energija)
```

## Primer: dodavanje novih svojstava

Ukoliko želimo da dodamo nova svojstva nasleđenim klasama, to činimo unutar predviđene `constructor` metode. Pre nego što dodamo novi atribut izvedenoj klasi, moramo pozvati konstruktor osnovne klase pomoću metode `super()` i proslediti mu potrebne argumente:

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

class Covek extends Junak {
  constructor(ime) {
    super(ime)
    this.bojaKoze = "narandzasta"
  }
}

class Ork extends Junak {
  constructor(ime) {
    super(ime)
    this.bojaKoze = "zelena"
  }
}

const covek = new Covek("Artur")
console.log(covek.bojaKoze)
const ork = new Ork("Grundak")
console.log(ork.bojaKoze)
```