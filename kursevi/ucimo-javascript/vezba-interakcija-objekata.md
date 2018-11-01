---
title: "Vežba: interakcija objekata"
layout: lekcija-js
permalink: /vezba-interakcija-objekata
---

Vežba: implementiraj prenos sredstava sa računa pomoću objekata.

Napravi dva objekta `musterija1` i `musterija2`, koji imaju svojstva `ime` i `stanje`, i metodu `prenesiSredstva`, koja prima dva argumenta: `primalac` i `iznos`. Metoda treba da skida sredstva sa sopstvenog stanja i prebacuje na stanje primaoca.

{:.ulaz.resenje}
```js
const musterija1 = {
  ime: "Pera Perić",
  stanje: 30000,

  prenesiSredstva(primalac, iznos) {
    if (iznos > this.stanje) {
      return console.log("Nema toliko novca na računu.")
    }
    this.stanje -= iznos
    primalac.stanje += iznos
  }
}

const musterija2 = {
  ime: "Ana Stanić",
  stanje: 2000,

  prenesiSredstva(primalac, iznos) {
    if (iznos > this.stanje) {
      return console.log("Nema toliko novca na računu.")
    }
    this.stanje -= iznos
    primalac.stanje += iznos
  }
}

musterija2.prenesiSredstva(musterija1, 3000)
```
