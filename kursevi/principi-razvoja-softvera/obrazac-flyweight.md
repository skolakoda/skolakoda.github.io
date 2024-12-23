---
title: Flyweight (projektni obrazac)
layout: lekcija-principi
permalink: /obrazac-flyweight
image: /images/koncepti/oop/flyweight.png
---

![]({{page.image}})

**Mušičja težina (*flyweight*) je dizajn obrazac koji se koristi za smanjenje potrošnje memorije i optimizaciju performansi u situacijama kada imamo veliki broj objekata koji dele zajedničke podatke.**

U razvoju igara ovaj obrazac omogućava stvaranje hiljada predmeta koji dele zajedničke karakteristike (kao što su tekstura i geometrija), dok se instanciraju samo podaci koji se razlikuju (kao što je pozicija).

Ovaj obrazac deli suštinska (*intrinsic*) stanja među instancama, dok sporedna (*extrinsic*) stanja prosleđuje prilikom kreiranja objekta. Kada je potrebno stvoriti objekat, proveravamo da li već postoji instanca tog intrizničnog stanja. Ako postoji, koristi se, a ne, kreira se nova i smešta u *flyweight factory*. 

## Delovi obrasca

Obrazac mušičje težine se uglavnom implementira uz pomoć sledećih komponenti:

- *Flyweight* - apstrakcija koja definiše interfejs.
- *Concrete flyweight* - konkretna implementacija flyweight objekta koji čuva zajedničke podatke.
- *Flyweight factory* - fabrika koja upravlja stvaranjem i deljenjem *flyweight* objekata, vraćajući postojeći objekat ako već postoji.

Implementacija se zavisno od jezika može razlikovati.

## Primer u C++: šuma stabala

![](/images/koncepti/flyweight-trees.png)

Potrebno je da u igri imamo šumu stabala. Svako je jedinstveno, ali obzirom da ih ima mnogo, to predstavlja ogroman problem za računarske resurse. Zato koristimo dve klase, radi uštede resursa: 
- `TreeModel` za zajedničke podatke, kao što su mesh, tekstura kore i tekstura lišća.
- (`Tree`) za instancirane podatke, kao što su pozicija, veličina i širina.

Sada svako stablo deli isti model, a samo specifična svojstva (pozicija, veličina) zauzimaju memoriju:

```cpp
#include <iostream>
#include <vector>
#include <memory>

class TreeModel {
public:
    // zajednički podaci (mesh, textures)
    TreeModel(const std::string& mesh, const std::string& barkTexture, const std::string& leavesTexture)
        : mesh_(mesh), barkTexture_(barkTexture), leavesTexture_(leavesTexture) {}

    void render() {
        std::cout << "Rendering tree with mesh: " << mesh_ << ", bark texture: " << barkTexture_
                  << ", and leaves texture: " << leavesTexture_ << std::endl;
    }

private:
    std::string mesh_;
    std::string barkTexture_;
    std::string leavesTexture_;
};

class Tree {
public:
    Tree(std::shared_ptr<TreeModel> model, float x, float y, float height, float width)
        : model_(model), x_(x), y_(y), height_(height), width_(width) {}

    void render() {
        model_->render();
        std::cout << "At position (" << x_ << ", " << y_ << "), size (" << height_ << ", " << width_ << ")\n";
    }

private:
    std::shared_ptr<TreeModel> model_;
    float x_, y_, height_, width_;
};

int main() {
    // kreiranje zajedničkog modela
    auto treeModel = std::make_shared<TreeModel>("TreeMesh", "BarkTexture", "LeavesTexture");

    // kreiranje stabala koja dele zajednički model, ali imaju različite parametre
    std::vector<Tree> forest;
    forest.emplace_back(treeModel, 10.0f, 20.0f, 15.0f, 5.0f);
    forest.emplace_back(treeModel, 50.0f, 60.0f, 12.0f, 6.0f);
    forest.emplace_back(treeModel, 100.0f, 120.0f, 18.0f, 4.0f);

    // renderovanje svih stabala
    for (auto& tree : forest) {
        tree.render();
    }

    return 0;
}
```

![](/images/koncepti/flyweight-tree-model.png)

## Primer u JS-u: Angry Birds

Pravimo mnoštvo `AngryBird` objekata koje optimizujemo tako što dele istu instancu boje:

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

## Primer u C#: Angry Birds

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

- Robert Nystrom, *Game Programming Patterns*, 2014.
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.