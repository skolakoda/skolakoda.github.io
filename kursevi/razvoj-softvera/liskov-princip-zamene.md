---
title: Princip zamene Barbare Liskov
layout: lekcija-razvoj
permalink: /liskov-princip-zamene
---

**Liskov princip zamene (*Liskov substitution principle*) govori da bi trebalo omogućiti korišćenje bilo koje izvedene klase na mestu klase roditelja i da bi ta klasa trebala da se ponaša na isti način bez izmena.**

Ovaj princip je u skladu sa [otvoren/zatvoren principom](/otvoren-zatvoren-princip), jer osigurava da izvedena klasa ne utiče na ponašanje klase roditelja.

## Primer

Dat je primer principa zamene kod koga imamo tri klase: `Vehicle`, `Car` i `ElectricBus`. Klase `Car` i `ElectricBus` su nasleđene iz klase `Vehicle`:

```cs
class Vehicle {
  public virtual void startEngine() {
    Console.WriteLine("Start engine");
  }

  public virtual void accelerate() {
    Console.WriteLine("Accelerate");
  }
}

class Car: Vehicle {
  public override void startEngine() {
    engageIgnition();
    base.startEngine();
  }

  private void engageIgnition() {
    Console.WriteLine("Ignition procedure");
  }
}

class ElectricBus: Vehicle {
  public override void accelerate() {
    increaseVoltage();
    connectIndividualEngines();
    base.accelerate();
  }

  private void increaseVoltage() {
    Console.WriteLine("Electric logic");
  }

  private void connectIndividualEngines() {
    Console.WriteLine("Connection logic");
  }
}
```

Da bi pokazali da se izvedene klase mogu upotrebiti na istom mestu gde i klasa roditelj, možemo kreirati klasu `Program` sa `main` metodom:

```cs
class Program {
  static void go(Vehicle v) {
    v.startEngine();
    v.accelerate();
  }

  static void Main(string[] args) {
    Vehicle v = new Vehicle();
    Vehicle c = new Car();
    Vehicle e = new ElectricBus();

    go(v);
    go(c);
    go(e);
  }
}
```


Izvor: Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
