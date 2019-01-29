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

Da bismo u konstruktoru izvedene klase koristili rezervisanu reč `this`, moramo prethodno pozvati konstruktor nadklase pomoću `super()`. Na primer, sledeći deo koda neće biti izvršen:

```js
class Base {}

class Derive extends Base {
  constructor(name) {
    this.name = name // 'this' nije dozvoljeno pre super ()
  }
}
```

Za izvedene klase podrazumevani konstruktor je sledeći:

```js
constructor(...args) {
  super(...args)
}
```
