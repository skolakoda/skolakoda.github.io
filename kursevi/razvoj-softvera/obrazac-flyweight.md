---
title: Flyweight (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-flyweight
image: /images/koncepti/oop/flyweight.png
---

![]({{page.image}})

**Flyweight (*mušičja težina*) je strukturni obrazac koji omogućava smanjenje potrošnje memorije deljenjem zajedničkih objekata. Koristi se kada pravimo mnoštvo objekata sa istim svojstvima.**

Ovaj obrazac deli **nepromenljiva** stanja (*intrinsic state*) među instancama, dok **promenljiva** stanja (*extrinsic state*) prosleđuje prilikom kreiranja objekta. Kada je potrebno stvoriti objekat, proveravamo da li već postoji instanca tog intrizničnog stanja. Ako postoji, koristi se, a ne, kreira se nova i smešta u *flyweight factory*. 

## Delovi obrasca

Flyweight obrazac uglavnom ima sledeće delove:

- *Flyweight*: Interfejs ili apstraktna klasa koja definiše metodu koja koristi deljene podatke.
- *Concrete flyweight*: Konkretna implementacija *flyweight*-a koja čuva deljene podatke i implementira operacije koje se obavljaju na tim podacima.
- *Flyweight factory*: Fabrika koja kreira i upravlja deljenim instancama *flyweight* objekata, garantujući da se isti objekti koriste kad god je to moguće.

Implementacija se zavisno od jezika može razlikovati.

## Primer u JS-u

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
const factory = new AngryBirdFactory()

for (let i = 0; i < 20; i++) {
  const redBird = factory.getAngryBird('Red')
  redBird.draw()
}

for (let i = 0; i < 20; i++) {
  const blueBird = factory.getAngryBird('Blue')
  blueBird.draw()
}
```

## Primer u C#

Ekvivalenti primer u C#, koji koristi *flyweight* obrazac za optimizaciju memorije:

```cs
using System;
using System.Collections.Generic;

class Color
{
    public string Name { get; }

    public Color(string name)
    {
        Name = name;
    }
}

class AngryBird
{
    public Color Color { get; }

    public AngryBird(Color color)
    {
        Color = color;
    }

    public void Draw()
    {
        Console.WriteLine($"Drawing AngryBird with color: {Color.Name}");
    }
}

class AngryBirdFactory
{
    private readonly Dictionary<string, Color> _flyweights = new Dictionary<string, Color>();

    public Color GetColor(string name)
    {
        if (!_flyweights.ContainsKey(name))
        {
            _flyweights[name] = new Color(name);
            Console.WriteLine($"Creating new Color: {name}");
        }
        return _flyweights[name];
    }

    public AngryBird GetAngryBird(string colorName)
    {
        return new AngryBird(GetColor(colorName));
    }
}

class Program
{
    private static readonly string[] colors = { "Red", "Blue", "Green", "Yellow", "Pink" };

    static void Main()
    {
        var factory = new AngryBirdFactory();

        // kreira po 20 ptica svake boje
        for (int i = 0; i < 20; i++)
        {
            AngryBird redBird = factory.GetAngryBird("Red");
            redBird.Draw();
        }

        for (int i = 0; i < 20; i++)
        {
            AngryBird blueBird = factory.GetAngryBird("Blue");
            blueBird.Draw();
        }
    }
}
```

## Literatura

- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.