---
title: Flyweight (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-flyweight
image: /images/koncepti/oop/composite-patter-tree.jpg
---

<!-- ![]({{page.image}}) -->

**Flyweight (*leteći teret*) je strukturni obrazac koji omogućava smanjenje potrošnje memorije deljenjem zajedničkih objekata. Koristi se kada pravimo mnoštvo objekata sa istim svojstvima.**

Ovaj obrazac deli **nepromenljiva** stanja (*intrinsic state*) među instancama, dok **promenljiva** stanja (*extrinsic state*) prosleđuje prilikom kreiranja objekta. Kada je potrebno stvoriti objekat, proveravamo da li već postoji instanca tog intrizničnog stanja. Ako postoji, koristi se, a ne, kreira se nova i smešta u *flyweight factory*. 

## Delovi obrasca

Flyweight obrazac uglavnom ima sledeće delove:

- *Flyweight*: Interfejs ili apstraktna klasa koja definiše metodu koja koristi deljene podatke.
- *Concrete flyweight*: Konkretna implementacija *flyweight*-a koja čuva deljene podatke i implementira operacije koje se obavljaju na tim podacima.
- *Flyweight factory*: Fabrika koja kreira i upravlja deljenim instancama *flyweight* objekata, garantujući da se isti objekti koriste kad god je to moguće.

Implementacija se zavisno od jezika može razlikovati.

## Primer u JavaScript-u

Pravimo mnoštvo `AngyBird` objekata koje optimizujemo tako što dele istu instancu boje:

{:.ulaz}
```js
class Color {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }
}

class AngryBird {
  constructor(color) {
    this._color = color // objekat boje
  }

  get color() {
    return this._color
  }

  draw() {
    console.log(`Drawing AngryBird with color: ${this.color.name}`)
  }
}

class AngryBirdFactory {
  constructor() {
    this._flyweights = {} // čuva deljene instance
  }

  getColor(name) {
    if (!this._flyweights[name]) {
      this._flyweights[name] = new Color(name)
      console.log(`Creating new Color: ${name}`)
    }
    return this._flyweights[name]
  }

  getAngryBird(colorName) {
    const color = this.getColor(colorName)
    return new AngryBird(color)
  }
}

// upotreba
const angryBirdFactory = new AngryBirdFactory()

for (let i = 0; i < 20; i++) {
  const redBird = angryBirdFactory.getAngryBird('Red')
  redBird.draw()
}

for (let i = 0; i < 20; i++) {
  const blueBird = angryBirdFactory.getAngryBird('Blue')
  blueBird.draw()
}
```

## Literatura

- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.