---
title: Stanje (projektni obrazac)
layout: lekcija-principi
permalink: /obrazac-stanja
image: /images/koncepti/oop/Basic-States.webp
---

![]({{page.image}})

**Stanje (*state pattern*) je softverski obrazac koji omogućava objektu da menja ponašanje zavisno od svog unutrašnjeg stanja.** Objekat će izgledati kao da menja svoju klasu.

Obrazac stanja implementira mašinu stanja na objektno-orijentisan način. Obično pojedinačne klase stanja nasleđuje `State`, a prelazi između stanja se implementira na osnovu metoda definisanih u nadklasi.

Obrazac stanja može biti čistiji način za kontrolu ponašanja objekta bez korišćenja mnoštva uslova, što poboljšava održavanje. Ovaj obrazac je veoma popularan u razvoju igara i drugim oblastima. 

Obrazac stanja ima sličnosti sa modelom strategije.

## Karakteristike

- **Promena ponašanja**: objekti mogu menjati ponašanje zavisno od svog stanja. Umesto zamršenih uslova za upravljanje različitim stanjima, ovaj obrazac koristi podklase koje predstavljaju različita stanja.
- **Enkapsulacija stanja**: svako stanje je predstavljeno kao klasa koja implementira zajednički interfejs, što omogućava da se enkapsulira pripadajuća logika i smanji složenost glavnog objekta.
- **Prelazak između stanja**: Objekat može lako prelaziti između različitih stanja pozivajući metode definisane u interfejsu. Ovo omogućava dinamičko menjanje ponašanja objekta bez promene njegove strukture.

## Upotreba u igrama

Bazična veštačka inteligencija u igrama se implementira pomoću obrasca stanja. AI uglavnom ima nekoliko stanja koje smisleno menja, kao što su napadanje, lutanje, bežanje. Svako stanje može imati svoju `update()` metodu i druge potrebne podatke (npr. lika koji juri, oblast kojom luta, itd.).

## Primer

![](/images/koncepti/oop/state-machine.jpg)

Uzmimo automat za prodaju pića. Automat može biti u različitim stanjima, kao što su "bez novca", "sa novcem", "prodaja". Svako od ovih stanja ima svoje ponašanje kada korisnik izvrši određenu akciju (npr. umetanje novca, izbor pića). Umesto da se koristi kompleksna logika za upravljanje svim mogućim slučajevima, svako stanje sadrži specifičnu logiku za to stanje.

## Primer u JS-u

{:.ulaz}
```js
class State {
  insertMoney() { console.log("Nije dozvoljeno u ovom stanju"); }
  selectDrink() { console.log("Nije dozvoljeno u ovom stanju"); }
}

class NoMoney extends State {
  insertMoney() { 
    console.log("Novac ubačen"); 
    return new HasMoney(); 
  }
}

class HasMoney extends State {
  selectDrink() { 
    console.log("Piće izabrano"); 
    return new Dispensing(); 
  }
}

class Dispensing extends State {
  constructor() { 
    super(); 
    console.log("Izdavanje pića..."); 
  }
  
  insertMoney() { 
    console.log("Čekaj trenutak"); 
  }
}

class VendingMachine {
  constructor() { 
    this.state = new NoMoney(); 
  }

  setState(state) { 
    this.state = state; 
  }

  insertMoney() { 
    this.setState(this.state.insertMoney()); 
  }
  
  selectDrink() { 
    this.setState(this.state.selectDrink()); 
  }
}

const machine = new VendingMachine();
machine.insertMoney();
machine.selectDrink();
```

## Primer u Python-u

```py
class State:
    def insert_money(self, machine): print("Akcija nije dozvoljena")
    def select_drink(self, machine): print("Akcija nije dozvoljena")

class NoMoney(State):
    def insert_money(self, machine): 
        print("Novac ubačen")
        machine.state = HasMoney()

class HasMoney(State):
    def select_drink(self, machine): 
        print("Piće izabrano")
        machine.state = Dispensing()

class Dispensing(State):
    def __init__(self): print("Izdavanje pića...")

class VendingMachine:
    def __init__(self): self.state = NoMoney()
    def insert_money(self): self.state.insert_money(self)
    def select_drink(self): self.state.select_drink(self)

machine = VendingMachine()
machine.insert_money()  # Novac ubačen
machine.select_drink()  # Piće izabrano
```

## Primer u C#

```cs
using System;

public abstract class State {
    public virtual void InsertMoney(VendingMachine machine) => Console.WriteLine("Akcija nije dozvoljena");
    public virtual void SelectDrink(VendingMachine machine) => Console.WriteLine("Akcija nije dozvoljena");
}

public class NoMoney : State {
    public override void InsertMoney(VendingMachine machine) {
        Console.WriteLine("Novac ubačen");
        machine.SetState(new HasMoney());
    }
}

public class HasMoney : State {
    public override void SelectDrink(VendingMachine machine) {
        Console.WriteLine("Piće izabrano");
        machine.SetState(new Dispensing());
    }
}

public class Dispensing : State {
    public Dispensing() => Console.WriteLine("Izdavanje pića...");
}

public class VendingMachine {
    private State state = new NoMoney();
    public void SetState(State newState) => state = newState;
    public void InsertMoney() => state.InsertMoney(this);
    public void SelectDrink() => state.SelectDrink(this);
}

public class Program {
    public static void Main() {
        var machine = new VendingMachine();
        machine.InsertMoney(); // Novac ubačen
        machine.SelectDrink(); // Piće izabrano
    }
}
```

## Literatura
- The Gang of Four, *Design Patterns: Elements of Reusable Object-Oriented Software*, 1994.