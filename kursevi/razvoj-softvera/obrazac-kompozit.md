---
title: Kompozit (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-kompozit
redirect_from: /obrazac-kompozicija
image: /images/koncepti/oop/composite-patter-tree.jpg
---

![]({{page.image}})

**Kompozit (*composite pattern*) je projektni obrazac koji omogućuje sastavljanje objekata u strukturu stabla, te tretiranje objekata i kompozitnih objekata na isti način.** 

Kompozitni obrazac pruža fleksibilnost u radu sa rekurzivnim strukturama, koje predstavljaju hijerarhije. Operacije nad kompozitima se implementiraju pozivanjem ekvivalentnih operacija nad njihovim komponentama. Tipične operacije uključuju `add`, `remove`, `display`, `find` i `group`. 

Mnoge aplikacije, posebno igre, implementiraju kompozitni obrazac za raznorodne kolekcije podataka. 

## Delovi 

Kompozitni obrazac ima sledeće delove: 
- **komponenta** (*component*), apstraktna klasa ili interfejs koji definiše zajedničke metode koje moraju implementirati listovi i kompoziti.
- **list** (*leaf*), pojedinačni objekt koji nema podkomponente.
- **kompozit** (*composite*), složeni objekat koji ima podkomponente (listove ili druge kompozite).

<!-- ![](/images/koncepti/oop/composite_pattern.jpg) -->

## Upotreba

Kompozitni obrazac treba primeniti kada se grupa objekata ponaša kao jedan objekt, ili kada je model aplikacije predstavljen kao stablo. 

Mnogi su primeri aplikacija koje koriste grupisanje stavki, npr. aplikacije za puštanje muzike ili kreiranje foto albuma. Foto album je zapravo kompozitni objekat. Operacije koje se odnose na fotografije i albume fotografija treba da imaju ista imena i efekte, bez obzira da li se implementacije razlikuju. Npr. korisniku treba omogućiti da pogleda fotografiju, ali i album koji sadrži fotografije, a takođe i da ih obriše.

Kompozitni obrazac koristi se u igrama za upravljanje hijerarhijom objekata. Primer može biti nivo igre, koji može imati podnivoe, drveće, napitke, neprijatelje i slično. Ukupna struktura podataka se može opisati kao hijerarhija, sa svakim elementom koji je ili prost ili kompozit. Čuvanje svih podataka u jednoj strukturi čini pretraživanje lakšim. Tako možemo pristupati primitivima i kompozitima korišćenjem standardnog interfejsa.

## Primer u C#: proizvodi i kutije

![](https://refactoring.guru/images/patterns/diagrams/composite/problem-en.png)

Imamo dva tipa objekata: `Proizvod` i `Kutija`. Kutija može sadržati proizvode ali i manje kutije, koje opet mogu sadržati proizvode i manje kutije, itd. Sistem za poručivanje koristi ove klase da odredi ukupnu cenu:

```cs
using System;
using System.Collections.Generic;
using System.Linq;

// komponenta
public abstract class Item
{
    public abstract decimal GetPrice();
}

// list
public class Product : Item
{
    public string Name { get; set; }
    public decimal Price { get; set; }

    public Product(string name, decimal price)
    {
        Name = name;
        Price = price;
    }

    public override decimal GetPrice()
    {
        return Price;
    }
}

// kompozit
public class Box : Item
{
    private List<Item> items = new List<Item>();

    public void Add(Item item)
    {
        items.Add(item);
    }

    public override decimal GetPrice()
    {
        return items.Sum(item => item.GetPrice());
    }
}

// upotreba
public class Program
{
    public static void Main()
    {
        var product1 = new Product("Laptop", 1000);
        var product2 = new Product("Smartphone", 500);
        var product3 = new Product("Headphones", 150);

        var box1 = new Box();
        box1.Add(product1);
        box1.Add(product2);

        var box2 = new Box();
        box2.Add(product3);

        var mainBox = new Box();
        mainBox.Add(box1);
        mainBox.Add(box2);

        Console.WriteLine("Ukupna cena: " + mainBox.GetPrice());
    }
}
```

## Primer u JS-u: proizvodi i kutije

{:.ulaz}
```js
// component
class Item {
  getPrice() {
    throw new Error('getPrice() must be implemented')
  }
}

// leaf
class Product extends Item {
  constructor(name, price) {
    super()
    this.name = name
    this.price = price
  }

  getPrice() {
    return this.price
  }
}

// composite
class Box extends Item {
  constructor() {
    super()
    this.items = []
  }

  add(item) {
    this.items.push(item)
  }

  getPrice() {
    return this.items.reduce((acc, item) => acc + item.getPrice(), 0)
  }
}

// upotreba
const product1 = new Product('Laptop', 1000)
const product2 = new Product('Smartphone', 500)
const product3 = new Product('Headphones', 150)

const box1 = new Box()
box1.add(product1)
box1.add(product2)

const box2 = new Box()
box2.add(product3)

const mainBox = new Box()
mainBox.add(box1)
mainBox.add(box2)

console.log('Ukupna cena: ' + mainBox.getPrice())
```

## Primer u C++: Nivo igre

Klasa `Level` predstavlja ceo nivo, a `LevelItem` primitivne entitete unutar nivoa: napitke, predmete koje igrač može uzeti i sl. Na osnovu toga, funkcija `main` kreira hijerarhiju `MiddleEarth` sa dva podnivoa (`Moria` i `TheShire`) te mnoštvo stvorenja i napitaka u svakoj zoni.

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class LevelItem {
public:
    virtual ~LevelItem() {}
    virtual float LifePoints() = 0;
    virtual int NumEnemies() = 0;
    virtual void Add(LevelItem*) {}
    virtual void Remove(LevelItem*) {}
};

class Potion : public LevelItem {
public:
    Potion(const string& name) : _name(name) {}
    float LifePoints() override { return 50.0; } // Primer vrednosti
    int NumEnemies() override { return 0; }

private:
    string _name;
};

class CompositeItem : public LevelItem {
public:
    CompositeItem(const string& name) : _name(name) {}

    float LifePoints() override {
        float total = 0;
        for (auto item : _items)
            total += item->LifePoints();
        return total;
    }

    int NumEnemies() override {
        int total = 0;
        for (auto item : _items)
            total += item->NumEnemies();
        return total;
    }

    void Add(LevelItem* item) override {
        _items.push_back(item);
    }

    void Remove(LevelItem* item) override {
        auto it = std::find(_items.begin(), _items.end(), item);
        if (it != _items.end()) {
            _items.erase(it);
        }
    }

private:
    string _name;
    vector<LevelItem*> _items;
};

class Enemy : public CompositeItem {
public:
    Enemy(const string& name) : CompositeItem(name) {}
    float LifePoints() override { return 100.0; } // Primer vrednosti
    int NumEnemies() override { return 1; }
};

class SubLevel : public CompositeItem {
public:
    SubLevel(const string& name) : CompositeItem(name) {}
};

int main() {
    CompositeItem* MiddleEarth = new CompositeItem("Middle Earth");
    SubLevel* TheShire = new SubLevel("The Shire");
    SubLevel* Moria = new SubLevel("Mines of Moria");
    MiddleEarth->Add(TheShire);
    MiddleEarth->Add(Moria);

    Enemy* Nazgul = new Enemy("Nazgul");
    Enemy* NazgulRider = new Enemy("Nazgul Rider");
    Enemy* NazgulSteed = new Enemy("Nazgul Steed");
    Nazgul->Add(NazgulRider);
    Nazgul->Add(NazgulSteed);
    TheShire->Add(Nazgul);
    Enemy* Balrog = new Enemy("Balrog");
    Moria->Add(Balrog);
    Potion* Lembas = new Potion("Lembas");
    TheShire->Add(Lembas);

    cout << "The number of monsters in Middle Earth is " << MiddleEarth->NumEnemies() << endl;
    cout << "The life points for the monsters are " << MiddleEarth->LifePoints() << endl;
}
```

## Literatura

- The Gang of Four, *Design Patterns: Elements of Reusable Object-Oriented Software*, 1994.
- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.