---
title: "Vežba: interakcija instanci"
layout: lekcija-js
permalink: /vezba-interakcija-klasa
---

Vežba: implementiraj prenos sredstava sa računa pomoću klase.

Napravi klasu `Musterija` koja ima svojstva `ime` i `stanje`, i metodu `prenesiSredstva`, koja prima dva argumenta: `primalac` i `iznos`. Metoda treba da skida sredstva sa sopstvenog stanja i prebacuje na stanje primaoca.

{:.ulaz.resenje}
```js
class Musterija {
  constructor(ime, stanje) {
    this.ime = ime
    this.stanje = stanje
  }

  prenesiSredstva(primalac, iznos) {
    if (iznos > this.stanje) {
      return console.log("Nema toliko novca na računu.")
    }
    this.stanje -= iznos
    primalac.stanje += iznos
  }
}

const musterija1 = new Musterija("Pera Perić", 30000)
const musterija2 = new Musterija("Ana Stanić", 2000)

musterija2.prenesiSredstva(musterija1, 3000)
```

{:.ideja.uokvireno}
Prikači JS kod za HTML i pokreni ga u pregledaču. Uživo možeš instancirati više objekata i vršiti transakcije između njih.