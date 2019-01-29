---
title: "Ključna reč <code>super</code> u Javascriptu"
layout: lekcija-js
permalink: /javascript-super
---

Rezervisana reč `super` se može koristiti na tri načina:

- `super(a, b)` da bismo pozvali konstruktor nadređene klase.
- `super.nekaMetoda()` da bismo pozvali metodu nadređene klase.
- `super.nekoSvojstvo` da bismo pristupili svojstvu nadređene klase.

## Poziv konstruktora nadklase

Da bismo u konstruktoru izvedene klase koristili reč `this`, moramo prethodno pozvati konstruktor nadklase pomoću metode `super()`. Na primer, sledeći deo koda neće biti izvršen:

{:.ulaz}
```js
class Junak {
  constructor(ime) {
    this.ime = ime
    this.energija = 100
  }
}

class Ork extends Junak {
  constructor(ime) {
    this.bojaKoze = "zelena"
  }
}

const grundak = new Ork("Grundak")
```

Sledeći kod će raditi, jer pozivamo roditeljski konstruktor pomoću `super()`, pre nego što upotrebimo `this`:

{:.ulaz}
```js
class Junak {
  constructor(ime) {
    this.ime = ime
    this.energija = 100
  }
}

class Ork extends Junak {
  constructor(ime) {
    super(ime)
    this.bojaKoze = "zelena"
  }
}

const grundak = new Ork("Grundak")
console.log(grundak.bojaKoze)
```

## Podrazumevani konstruktor

Ukoliko nemamo konstruktor u izvedenoj klasi, podrazumevani konstruktor je sledeći:

```js
constructor(...args) {
  super(...args)
}
```

Zapravo, samo prosleđuje roditelju sve argumente koje primi.