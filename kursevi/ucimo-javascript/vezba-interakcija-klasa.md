---
title: "Vežba: prenos sredstava pomoću klase"
layout: lekcija-js-frontend
permalink: /vezba-interakcija-klasa
---

Implementiraj prenos sredstava pomoću klase. Napravi klasu `Musterija` koja ima svojstva `ime` i `stanje`, i metodu `prenesiSredstva`, koja prima dva argumenta: `primalac` i `iznos`. Metoda treba da skida sredstva sa sopstvenog stanja i prebacuje na stanje primaoca.

Za početak je dovoljno da kod radi u konzoli, odnosno da se putem konzole mogu instancirati objekti i prebacivati sredstva međusobno.

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
    console.log("Sredstva su uspešno prebačena.")
  }
}

const musterija1 = new Musterija("Pera Perić", 30000)
const musterija2 = new Musterija("Ana Stanić", 2000)

musterija2.prenesiSredstva(musterija1, 3000)
```

## Napredna vežba

Napravi korisnički interfejs. Potrebno je da korisnici mogu praviti nove objekte i prenositi sredstva sa računa na račun, putem web stranice.

{:.html-ulaz.resenje}
```html
<!DOCTYPE html>

<label>Ima i prezime: <input type="text" id="novo-ime"></label>
<label>Stanje: <input type="number" id="novo-stanje"></label>
<button id="kreator-dugme">Napravi mušteriju</button>

<div id="okvir"></div>

<script>
const novoIme = document.getElementById('novo-ime')
const novoStanje = document.getElementById('novo-stanje')
const kreatorDugme = document.getElementById('kreator-dugme')
const okvir = document.getElementById('okvir')

const musterije = []
let brojac = 1602231000

class Musterija {
  constructor(ime, stanje) {
    this.ime = ime ? ime : "Anonimus"
    this.stanje = Number(stanje)
    this.brojRacuna = ++brojac
    this.render()
    musterije.push(this)
  }

  prenesiSredstva(iznos, brojRacuna) {
    const primalac = musterije.find(musterija => musterija.brojRacuna == brojRacuna)
    if (iznos > this.stanje) {
      return alert("Nema toliko novca na računu.")
    }
    this.stanje -= iznos
    primalac.stanje += iznos
    this.renderAll()
  }

  renderAll() {
    okvir.innerHTML = ''
    musterije.map(musterija => musterija.render())
  }

  render() {
    const div = document.createElement('div')
    const ime = document.createElement('h3')
    const brojRacuna = document.createElement('p')
    const stanje = document.createElement('p')
    const primalac = document.createElement('input')
    const iznos = document.createElement('input')
    const dugme = document.createElement('button')

    primalac.placeholder = "broj računa primaoca"
    primalac.type = "number"
    iznos.type = "number"
    iznos.placeholder = "traženi iznos"
    ime.innerText = this.ime
    brojRacuna.innerText = "Broj računa: " + this.brojRacuna
    stanje.innerText = "Stanje: " + this.stanje
    dugme.innerText = "Prebaci"
    dugme.addEventListener("click", () => this.prenesiSredstva(Number(iznos.value), primalac.value))

    div.appendChild(ime)
    div.appendChild(brojRacuna)
    div.appendChild(stanje)
    div.appendChild(iznos)
    div.appendChild(primalac)
    div.appendChild(dugme)
    okvir.appendChild(div)
  }
}

kreatorDugme.addEventListener('click', () => new Musterija(novoIme.value, novoStanje.value))

new Musterija("Pera Perić", 30000)
new Musterija("Ana Stanić", 2000)
new Musterija("Sima Simić", 100)
</script>
```
