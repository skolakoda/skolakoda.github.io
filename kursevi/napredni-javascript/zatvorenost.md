---
title: Zatvorenost (<i>closure</i>)
layout: lekcija-napredni-js
permalink: /javascript-zatvorenost
redirect_from: /javascript-zatvaranje
---

**Zatvorenost (*closure*) se stvara kada unutrašnja funkcija zadrži vezu sa opsegom važenja spoljašnje funkcije, i nakon što spoljašnja vrati svoj rezultat.**

Opseg važenja funkcije se uglavnom uništava nakon što se funkcija izvrši, osim ako se desi nešto što će ga održati. Zatvorenost je blisko povezana sa [opsegom važenja](/opseg-vazenja-varijabli-u-javaskriptu) i [funkcijama koje vraćaju funkcije](/funkcija-koja-vraca-funkciju) u Javascriptu.

## Primer: Brojač

{:.ulaz}
```js
// spoljasnja funkcija inicijalizuje brojac i vraca unutrasnju funkciju
function spoljasnja() {
  let brojac = 1
  return function() {
    return brojac++
  }
}

// konstanti je dodeljen rezultat poziva spoljasnje funkcije (tj. unutrasnja funkcija)
const unutrasnja = spoljasnja()

// unutrasnja funkcija povecava brojac iz roditeljskog opsega, i nakon što je roditeljska funkcija završena
console.log(unutrasnja())
console.log(unutrasnja())
```

{:.uokvireno.ideja}
**Kako ovo radi?** Zar ne bi trebalo da se, kada funkcija završi, sva memorija potrošena za njene lokalne varijable oslobodi automatskim sakupljanjem otpada? Da, kad funkcija završi, opseg se oslobađa jer više nije potreban. Međutim, u slučaju unutrašnje funkcije koja je vraćena i dodeljena varijabli, opseg unutrašnje funkcije pripaja se spoljnjoj funkciji, koja ostaje aktivna.

## Primer: Pozdrav

{:.ulaz}
```js
function napraviPozdrav(ime){
    const tekst = 'Zdravo ' + ime
    return function() {
      console.log(tekst)
    }
}

const pozdrav1 = napraviPozdrav('Darko')
const pozdrav2 = napraviPozdrav('Azra')
pozdrav1()
pozdrav2()
```

Ovde unutrašnja funkcija takođe nastavlja da ima pristup varijabli `tekst` iz spoljašnje funkcije, i nakon što je ona završena.

## Primer: Zaštićena varijabla

Čest primer korišćenja zatvorenosti je kreiranje geter i seter funkcija, za uzimanje i postavljanje zaštićene vrednosti. Na primer, možemo "sakriti" promenljivu unutar funkcije, i napraviti dve dodatne funkcije za učitavanje i postavljanje njene vrednosti. Geter i seter funkcije moramo staviti unutar istog opsega u kom je promenljiva `zasticeno`. Zatvoreni opseg pravimo pomoću [samoizvršne anonimne funkcije](/samoizvrsne-anonimne-funkcije):

{:.ulaz}
```js
let getValue, setValue

(function () {
  let zasticeno = 0

  getValue = function () {
    return zasticeno
  }

  setValue = function (v) {
    if (typeof v === "number"){ // provera tipa pre dodele vrednosti
      zasticeno = v
    }
  }
}())

console.log(getValue())
setValue(123)
console.log(getValue())
```

Funkcije `setValue()` i `getValue()` proglašavamo kao globalne, da bi bile dostupne, dok promenljiva `zasticeno` ostaje lokalna i nepristupačna.

## Literatura

- Ved Antani, Stojan Stefanov, *Objektno-orjentisan JavaScript*, Beograd, 2017.
