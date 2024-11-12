---
title: Flyweight (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-flyweight
image: /images/koncepti/oop/composite-patter-tree.jpg
---

<!-- ![]({{page.image}}) -->

**Flyweight (*leteća težina*) je strukturni obrazac koji omogućava smanjenje potrošnje memorije deljenjem zajedničkih objekata. Koristi se kada pravimo veliki broj sličnih objekata.**

Flyweight obrazac koristi tehniku deljenja objekata. On deli **nepromenljive** podatke (*intrinsic state*) među instancama, dok **promenljive** podatke (*extrinsic state*) stavlja izvan objekta, omogućavajući da se objekti stvaraju bez dupliranja nepromenljivih podataka.

## Kako radi?

Kada je potrebno stvoriti objekat, proveravamo da li već postoji instanca sa istim *intrinsic state*. Ako postoji, koristi se ta instanca, a ako ne, kreira se nova i smešta u *flyweight factory*. Klijent prosleđuje podatke koji se razlikuju između objekata kao *extrinsic state* pri svakom pozivu.

Delovi obrasca:
- **Flyweight**: Apstraktna klasa koja definiše metodu za obavljanje rada, gde se razlikuju unutrašnji i spoljašnji podaci.
- **ConcreteFlyweight**: Konkretna implementacija flyweight objekta, koja čuva samo **intrinsic state**.
- **FlyweightFactory**: Fabrika koja stvara i čuva instance **ConcreteFlyweight** objekata. Ona održava kolekciju objekata i omogućava njihovo deljenje.
- **Client**: Klijent koristi flyweight objekte, prosleđujući **extrinsic state** prilikom svakog poziva.

## Primer implementacije u JavaScript-u

Pretpostavimo da želimo da kreiramo aplikaciju koja prikazuje grafičke oblike na ekranu. Iako možemo imati mnogo objekata poput krugova, kvadrata i drugih oblika, mnogi od njih mogu imati iste karakteristike (kao što su boja ili tip).

```js
// Flyweight
class Shape {
  draw(extrinsicState) {
    throw new Error("draw() must be implemented");
  }
}

// ConcreteFlyweight
class Circle extends Shape {
  constructor(radius, color) {
    super();
    this.radius = radius;  // intrinsic state (deljeno)
    this.color = color;    // intrinsic state (deljeno)
  }

  draw(extrinsicState) {
    console.log(`Drawing a ${this.color} circle of radius ${this.radius} at position (${extrinsicState.x}, ${extrinsicState.y})`);
  }
}

// FlyweightFactory
class ShapeFactory {
  constructor() {
    this.shapes = {};
  }

  getCircle(radius, color) {
    const key = `${radius}-${color}`;
    if (!this.shapes[key]) {
      this.shapes[key] = new Circle(radius, color);
    }
    return this.shapes[key];
  }
}

// Client code
const shapeFactory = new ShapeFactory();

const circle1 = shapeFactory.getCircle(5, "red");
const circle2 = shapeFactory.getCircle(5, "red");
const circle3 = shapeFactory.getCircle(10, "blue");

circle1.draw({x: 10, y: 20});
circle2.draw({x: 20, y: 30});
circle3.draw({x: 30, y: 40});
```

## Literatura

- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.