---
title: Interakcija objekata u Javascriptu
layout: lekcija-js
permalink: /interakcija-objekata
---

Prost primer interakcije objekata u Javascriptu:

{:.ulaz}
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

console.log('Pocetna energija coveka: ' + covek.energija)
ork.napadni(covek)
ork.napadni(covek)
console.log('Trenutna energija coveka: ' + covek.energija)
```

{:.ideja.uokvireno}
Gornji kod možeš prekopirati u zaseban js fajl, prikačiti ga za HTML stranicu i otvoriti je u pregledaču. Sada iz konzole pregledača možeš direktno 
pozivati objekte i njihove metode, odnosno imati neku vrstu igre u realnom vremenu.

## Dobre prakse

U prostom primeru se interakcija objekata vršila tako što jedan objekt direktno menja vrednost atributa drugog objekta, odnosno smanjuje mu energiju. Dobra praksa je, međutim, da jedan objekat ne menja direktno svojstva drugog objekta, već za to koristi predviđene metode. 

Na primer, možemo napraviti metodu `smanjiEnergiju` na oba objekta, na sledeći način: 

{:.ulaz}
```js
const covek = {
  energija: 100,
    
  smanjiEnergiju(x) {
    this.energija -= x
  },

  napadni(neprijatelj) {
    neprijatelj.smanjiEnergiju(20)
  }
}
```

Bonus: unutar nje napraviti proveru da li je objekat mrtav, tako da ne može smanjivati energiju ispod nule.

{:.uokvireno}
Vidimo da kada god nešto promenimo na jednom objektu, moramo to isto menjati i na drugom, što vodi besmislenom duliranju koda. Srećom, postoje klase koje rešavaju taj problem.
