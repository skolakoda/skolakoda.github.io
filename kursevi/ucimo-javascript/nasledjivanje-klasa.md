---
title: Nasleđivanje klasa u Javascriptu
layout: lekcija-js
permalink: /javascript-nasledjivanje-klasa
---

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
