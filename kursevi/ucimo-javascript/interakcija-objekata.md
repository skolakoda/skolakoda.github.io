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
Gornji kod možeš prekopirati u zaseban js fajl, prikačiti ga za HTML stranicu i otvoriti u pregledaču. Sada iz konzole pregledača možeš direktno 
pozivati objekte i njihove metode, odnosno imati neku vrstu igre u realnom vremenu.

## Dobre prakse

U prostom primeru se interakcija vrši tako što jedan objekt direktno menja vrednost atributa drugog objekta, odnosno smanjuje mu energiju. Dobra praksa je, međutim, da objekat ne menja direktno svojstva drugog objekta, već za to koristi predviđene metode. 

Na primer, možemo dodati metodu `smanjiEnergiju` na oba objekta, nakon čega je pozivamo u `napadni` metodi: 

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

Menjanje atributa preko metoda nam omogućuje da vršimo različite provere. Sada unutar metode `smanjiEnergiju` možemo napraviti proveru da li je objekat mrtav, da ne može smanjivati energiju ispod nule.

{:.uokvireno}
Vidimo da kada god nešto promenimo na jednom objektu, moramo to isto menjati i na drugom, što vodi besmislenom dupliranju koda. Srećom, postoje klase koje rešavaju taj problem.
