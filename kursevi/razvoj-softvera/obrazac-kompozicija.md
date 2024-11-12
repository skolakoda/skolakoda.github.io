---
title: Kompozicija (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-kompozicija
image: /images/koncepti/oop/composite-patter-tree.jpg
---

![]({{page.image}})

**Kompozicija (*composite pattern*) je strukturni obrazac koji omogućava tretiranje objekata i kompozicija na isti način i pruža fleksibilnost u radu sa rekurzivnim strukturama, poput stabla.**

Kompozitni obrazac ima sledeće delove: 
- komponenta (*component*), apstraktna klasa ili interfejs koji definiše zajedničke metode koje moraju implementirati listovi i kompozicije.
- list (*leaf*), pojedinačni objekt koji nema podkomponente.
- kompozicija (*composite*), složeni objekat koji ima podkomponente (listove ili druge kompozicije).

Obično se operacije nad kompozicijama implementiraju tako što pozivaju ekvivalente operacije nad njihovim komponentama. Tipične operacije uključuju `add`, `remove`, `display`, `find` i `group`. 

<!-- ![](/images/koncepti/oop/composite_pattern.jpg) -->

## Upotreba

Kompozitni obrazac se primenjuje tamo gde je model aplikacije predstavljen kao stablo. 

Mnogi su primeri aplikacija koje koriste grupisanje stavki, npr. aplikacije za puštanje muzike ili kreiranje foto albuma. Kreiranje albuma stvara kompozitni objekat. Operacije koje se odnose na fotografije i albume fotografija treba da imaju ista imena i efekte, bez obzira da li se implementacije razlikuju. Npr. korisniku treba omogućiti da pogleda fotografiju, ali i da pogleda album koji sadrži fotografije, a takođe i da ih obriše.

## Primer

![](https://refactoring.guru/images/patterns/diagrams/composite/problem-en.png)

Zamislimo da imamo dva tipa objekata: Proizvodi i Kutije. Kutija može da sadrži nekoliko proizvoda, ali i manje kutije. Manja kutija takođe može da sadrži proizvode i još manje kutije, itd. Treba da napravimo napravite sistem za poručivanje koji koristi ove klase, kako bismo odredili ukupnu cenu.

## Primer u C#

Primer kompozitnog obrasca u jeziku C#:

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

// kompozicija
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

## Primer u JavaScript-u

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

## Literatura

- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
- Angelina Njeguš, *Obrasci projektovanja softvera*, Univerzitet Singidunum, Beograd, 2023.