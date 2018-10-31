title: Klase u Javascriptu
layout: lekcija-js
permalink: /javascript-klase
---

Umesto da imamo dva objekta, sa potpuno istim svojstvima i metodama, poput:

```js
const covek = {
  energija: 100,
  napadni(neprijatelj) {
    neprijatelj.energija -= 20
  }
}

const ork = {
  energija: 100,
  napadni(neprijatelj) {
    neprijatelj.energija -= 20
  }
}
```

Možemo napraviti zajedničku klasu na osnovu koje ćemo praviti, odnosno instancirati neograničen broj novih objekata:

{:.ulaz}
```js
class Junak {
  constructor() {
    this.energija = 100
  }
  
  napadni(neprijatelj) {
    neprijatelj.energija -= 20
  }
}

const covek = new Junak()
const ork = new Junak()

console.log('Pocetna energija coveka: ' + covek.energija)
ork.napadni(covek)
ork.napadni(covek)
console.log('Trenutna energija coveka: ' + covek.energija)
```
