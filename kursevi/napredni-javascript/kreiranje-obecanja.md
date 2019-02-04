---
title: Kreiranje obećanja u Javascriptu
layout: lekcija-napredni-js
permalink: /kreiranje-obecanja
---

Osim što možemo koristiti funkcije koje vraćaju obećanja, možemo ih i sami praviti. Sintaksa je sledeća:

```js
const obecanje = new Promise((ispuni, odbij) => {
  if (/* postoji rezultat */) {
    ispuni(rezultat) // rešeno
  } else {
    odbij(razlog) // odbijeno
  }
})
```

Jedini parametar objekta `Promise` je povratna funkcija koja prima dve metode, poznate kao `resolve` i `reject`. Prvu pozivamo sa rezultatom, a drugu sa greškom kao argumentom.

## Primer: random obećanje

Na primer, možemo napraviti obećanje koje ima pola-pola šanse da se ispuni:

{:.ulaz}
```js
const obecanje = new Promise(function (razresi, odbij) {
  if (Math.random() > 0.5) {
    razresi("Ispunjeno")
  } else {
    odbij("Odbijeno")
  }
})

obecanje
  .then(rezultat => console.log(rezultat))
  .catch(greska => console.log(greska))
```

## Primer: odloženo obećanje

Primer obećanja koje nakon 1 sekund vraća poruku:

{:.ulaz}
```js
const obecanje = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('Ispunjeno'), 1000)
})

obecanje.then(data => console.log(data))
```

Kod ovog obećanja ne upravljamo greškom jer ono uvek uspeva.

## Primer: čitanje fajla

Asinhrono čitanje fajla u Node.js-u se vrši na sledeći način:

```js
const fs = require('fs')

fs.readFile('imena.txt', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data.toString())
  }
})
```

Od toga možemo kreirati obećanje na sledeći način:

```js
const fs = require('fs')

function citajPomocuObecanja(fajl) {
  return new Promise((resolve, reject) => {
    fs.readFile(fajl, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data.toString())
      }
    })
  })
}
```

Unutar povratne funkcije pozivamo metod `fs.readFile()`. Ako se fajl uspešno učita, prosleđujemo rezultat pomoću `resolve()`, a ako postoji greška, pozivamo `reject()`. 

Obećanje koje smo kreirali koristimo na sledeći način:

```js
citajPomocuObecanja('imena.txt')
  .then(text => console.log(text))
  .catch(error => console.error(error))
```
