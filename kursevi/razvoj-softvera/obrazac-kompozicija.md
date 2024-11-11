---
title: Kompozicija (projektni obrazac)
layout: lekcija-razvoj
permalink: /obrazac-kompozicija
redirect_from: /kompozicija
image: /images/koncepti/oop/composite-patter-tree.jpg
---

![]({{page.image}})

**Kompozitni obrazac (*composite pattern*) je strukturni obrazac koji omogućava tretiranje objekata i grupa objekata na isti način.** Koristi se za implementaciju hijerarhije gde se objekti i kompozicije tretiraju kao jedan objekat, pružajući fleksibilnost u radu sa rekurzivnim strukturama, poput stabla.

Tipične operacije uključuju `add`, `remove`, `display`, `find` i `group`.

Kompozitni obrazac radi sa dva tipa: komponentama (*component*) ili listovima (*leaf*) i kompozicijama (*composite*). Oba tipa implementiraju interfejs sa zajedničkim osobinama. Obično se operacije nad kompozicijama implementiraju tako što pozivaju ekvivalente operacije nad njihovim komponentama.

![](/images/koncepti/oop/composite_pattern.jpg)

## Upotreba

Mnogi su primeri aplikacija koje koriste grupisanje podataka, npr. aplikacije za puštanje muzike (iTunes, Winamp...) ili kreiranje foto albuma (Flickr ili iPhoto). Stavke se smeštaju u velike liste, koje se zatim na određeni način strukturiraju.

Ako posmatramo iPhoto, možemo videti da postoje različiti načini na koje možemo prikazivati slike koje su u njega unete: hronološki ili na osnovu oznaka (npr. letovanje). Jedna fotografija se može pojaviti u okviru više albuma. Kreiranje albuma stvara kompozitni objekat, koji ne uključuje stvarno kopiranje fotografija. Bitna osobina kompozitnog obrasca jeste da operacije koje se odnose na fotografije i albume fotografija treba da imaju ista imena i efekte, bez obzira na to da li se implementacije razlikuju. Npr. korisniku treba omogućiti da pogleda fotografiju, ali i da pogleda album (koji sadrži fotograrije).

## Primer u C#

Primer kompozitnog obrasca u jeziku C#:

```cs
class Program {
  interface IComponent {
    void Add(IComponent c);
    void Remove(IComponent c);
    void Display(int depth);
  }

  class Component: IComponent {
    private string name;
    public Component(string name) {
      this.name = name;
    }
    public void Add(IComponent c) {
      Console.WriteLine("Cannot add to a leaf");
    }
    public void Remove(IComponent c) {
      Console.WriteLine("Cannot remove from a leaf");
    }
    public void Display(int depth) {
      Console.WriteLine(new String('-', depth) + name);
    }
  }

  class Composite: IComponent {
    private List < IComponent > _children = new List<IComponent>();
    private string name;
    public Composite(string name) {
      this.name = name;
    }
    public void Add(IComponent c) {
      _children.Add(c);
    }
    public void Remove(IComponent c) {
      _children.Remove(c);
    }
    public void Display(int depth) {
      Console.WriteLine(new String('-', depth) + name);
      foreach(IComponent component in _children) {
        component.Display(depth + 2);
      }
    }
  }

  static void Main(string[] args) {
    // Create a tree structure
    Composite root = new Composite("root");
    root.Add(new Component("Leaf A"));
    root.Add(new Component("Leaf B"));
    Composite comp = new Composite("Composite X");
    comp.Add(new Component("Leaf XA"));
    comp.Add(new Component("Leaf XB"));
    root.Add(comp);
    root.Add(new Component("Leaf C"));
    // Add and remove a leaf
    Component leaf = new Component("Leaf D");
    root.Add(leaf);
    root.Remove(leaf);
    // Recursively display tree
    root.Display(1);
    // Wait for user
    Console.ReadKey();
  }
}
```

Prvo kreiramo interfejs `IComponent` koji sadrži metode `Add`, `Remove` i `Display`. Ove metode će implementirati i klasa `Component` koja predstavlja komponentu, i klasa `Composite` koja predstavlja kompoziciju. Klasa `Composite` sadrži kao atribut listu objekata tipa `IComponent` kako bi kreirala kolekciju.

## Literatura

- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
