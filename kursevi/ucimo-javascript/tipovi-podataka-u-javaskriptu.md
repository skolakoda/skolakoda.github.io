---
title: Tipovi podataka u Javaskriptu
layout: lekcija-js
permalink: tipovi-podataka-u-javaskriptu
---

**U Javascriptu se tip podatka ne mora eksplicitno navesti u vreme proglašenja varijable, već se on prećutno određuje na osnovu dodeljene vrednosti.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/T0VLAWelSUA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prosti tipovi

JavaScript ima sledeće proste (primitivne) tipove podataka:

- broj (*number*), može biti ceo ili decimalni
- struna (*string*), sadrži znakove u navodnicima, npr. "Zdravo Svete"
- logička ili Bulova vrednost (*boolean*), može biti tačno (`true`) ili netačno (`false`)
- `null`, koristi se da predstavi nepostojeću vrednost
- `undefined`, za vrednost promenljivih koje su deklarisane ali im još nije dodeljena vrednost (i za povratnu vrednost funkcija koje ne vraćaju vrednost)
- simbol (*symbol*) (novo u ECMAScript 6)

### Broj

Osnovni tip podataka „broj“ može da uskladišti pozitivne i negativne cele brojeve, decimalne brojeve (sa pokretnim zarezom), heksadecimalne brojeve, oktalne brojeve, eksponente i specijalne brojeve - `NaN`, `Infinity` i `-Infinity`.

### Simbol

`Symbol` je neka vrsta enumerisanog tipa, čija su najvažnija svojstva jedinstvenost i neponovljivost. Simbol se ne svodi na string od koga je napravljen, tako da ne postoje dva ista simbola:

{:.ulaz}
```js
const simbol1 = Symbol('burger')
const simbol2 = Symbol('burger')

console.log(simbol1 === simbol2)
```

## Složeni tip objekat

Pored prostih tipova, postoji složeni tip objekat (*object*), koji označava sve složene strukture, uključujući funkciju, niz, mapu i skup.
