---
title: Vežba sa kartama
layout: lekcija-strukture
permalink: /vezba-sa-kartama-stek
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Kaartspel_van_Edgar_van_Haelst.jpg/640px-Kaartspel_van_Edgar_van_Haelst.jpg)

Potrebno je simulirati sledeće poteze sa kartama. Na početku, u ruci imamo ceo špil dok na stolu ne stoji ni jedna karta. U jednom krugu možemo ili da uzmemo bilo koju kartu iz špila i stavimo je na vrh gomile na stolu ili pogledamo kartu sa vrha gomile i uklonimo je.

Analizom problema možemo zaključiti da su nam za gomilu na stolu dovoljne 3 metode: jedna da ubacuje element u skup, druga da javi koji je element poslednji ubačen, i treća da izbacuje poslednje ubačeni element. Struktura steka rešava ovaj problem.

Primetimo da sve pomenute metode imaju vremensku složenost O(1).

### Rešenje u JS-u

{:.ulaz}
```js
class Stog {
    constructor() {
      this.niz = []
    }

    dodaj(el) {
        this.niz.push(el)
    }

    ukloni(){
        return this.niz.pop()
    }

    pogledajZadnju() {
      return this.niz[this.niz.length - 1]
    }
}

const spil = ["A♥", "K♠", "Q♦", "J♣"]
const gomila = new Stog()

const odigrajKartu = karta => {
  const index = spil.indexOf(karta)
  spil.splice(index, 1)
  gomila.dodaj(karta)
}

odigrajKartu("A♥")
odigrajKartu("K♠")

console.log("Gornja karta:", gomila.pogledajZadnju()) 
console.log("Uklonjena karta:", gomila.ukloni())
console.log("Gornja karta nakon uklanjanja:", gomila.pogledajZadnju()) 
```

### Literatura

- N. Pavković, D. Marjanović, N. Bojčetić, *Programiranje i algoritmi II*, Zagreb, 2005.
- [Petlja.org](https://petlja.org/BubbleBee/r/Lectures/strukture-podataka-1), *Strukture podataka*
