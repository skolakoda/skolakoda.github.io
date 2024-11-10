---
title: Prototip (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-prototip
image: /images/koncepti/oop/prototype.png
---

![]({{page.image}})

**Prototip (*prototype pattern*) je projektni obrazac koji omogućava kreiranje novog objekta kloniranjem postojećeg, umesto ponovnim instanciranjem klase.**

Ovaj obrazac je naročito koristan kada je proces inicijalizacije objekta složen ili kreiranje novih instanci skupo u pogledu resursa. Neki objekti zahtevaju složene i dugotrajne začetne procese (npr. dovlačenje podataka iz baze, čitanje sa diska, izvođenje skupih proračuna), a kod kloniranja preskačemo ove procese, jer koristimo postojeći objekat kao osnovu, sa već izvršenom inicijalizacijom.

Na primer, ukoliko razvijamo igricu sa više nivoa. Svaki nivo je zasnovan na osnovnom nivou, sa nekim modifikacijama. U ovom slučaju možemo klonirati osnovni nivo za kreiranje narednog, kako bismo izbegli složenu inicijalizaciju. Nakon kloniranja, novi objekat prilagođavamo po potrebi. 

## Vrste kopiranja

Postoje dve vrste kopiranja objekata: 
- plitko kopiranje (*shallow copy*) kopira samo prvi nivo svojstava objekta. Ako original sadrži unutrašnje objekte, kopije će deliti iste reference na njih.
- duboko kopiranje (*deep copy*) kopira objekt zajedno sa svim njegovim ugrađenim strukturama (rekurzivno). Na ovaj način, kopija postaje nezavisna i promene u kopiji ne utiču na original.

## Primer plitkog kopiranja u JavaScript-u

Koristeći metodu [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign):

{:.ulaz}
```js
const original = { 
  name: 'Auto', 
  details: { color: 'plava' } 
}
const kopija = Object.assign({}, original)

// menjamo kopiju
kopija.name = 'Bicikl'
kopija.details.color = 'crvena'

console.log(original.name)
console.log(original.details.color) // promenjen original
```

Koristeći metodu [Object.create](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create), koja radi po principu prototipa:

{:.ulaz}
```js
const original = { 
  name: 'Auto', 
  details: { color: 'plava' } 
}
const kopija = Object.create(original)

// menjamo kopiju
kopija.name = 'Bicikl'
kopija.details.color = 'crvena'

console.log(original.name)
console.log(original.details.color) // promenjen original
```

## Primer dubokog kopiranja u JavaScript-u

Duboko kopiranje nije prirodno podržano u JavaScript-u, ali možemo ga postići uz pomoć biblioteka poput lodash ili pomoću JSON-a kada objekat nema metode:

{:.ulaz}
```js
const original = { name: 'Auto', details: { color: 'plava', motor: 'benzin' } }
const kopija = JSON.parse(JSON.stringify(original))

// menjamo kopiju
kopija.name = 'Bicikl'
kopija.details.color = 'crvena'

console.log(original.name)
console.log(original.details.color) // original nepromenjen
```

## Literatura

- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.