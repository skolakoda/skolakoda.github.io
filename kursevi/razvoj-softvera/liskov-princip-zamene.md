---
title: Princip zamene Barbare Liskov
layout: lekcija-razvoj
permalink: /liskov-princip-zamene
---

**Liskovljev princip zamene (*Liskov substitution principle*) kaže treba biti moguće koristiti bilo koju nasleđenu klasu umesto roditelja, a da aplikacija radi na isti način.**

Liskovljev princip je u skladu sa [otvoreno-zatvorenim principom](/otvoren-zatvoren-princip), jer osigurava da izvedena klasa ne menja ponašanje roditelja.

## Primer

U sledećem primeru imamo roditeljsku klasu `Vozilo` i nasleđene klase `Kola` i `Trolejbus`:

```cs
class Vozilo {
  public virtual void pokreniMotor() {
    Console.WriteLine("Pokrece motor");
  }

  public virtual void ubrzaj() {
    Console.WriteLine("Ubrzava");
  }
}

class Kola: Vozilo {
  public override void pokreniMotor() {
    ukljuciPaljenje();
    base.pokreniMotor();
  }

  private void ukljuciPaljenje() {
    Console.WriteLine("Ukljucuje paljenje");
  }
}

class Trolejbus: Vozilo {
  public override void ubrzaj() {
    povecajNapon();
    connectIndividualEngines();
    base.ubrzaj();
  }

  private void povecajNapon() {
    Console.WriteLine("Povecava napon");
  }

  private void connectIndividualEngines() {
    Console.WriteLine("Connection logic");
  }
}
```

Da bi pokazali da se izvedene klase mogu upotrebiti na istom mestu gde i klasa roditelj, možemo kreirati klasu `Program` sa `main` metodom:

```cs
class Program {
  static void kreni(Vozilo v) {
    v.pokreniMotor();
    v.ubrzaj();
  }

  static void Main(string[] args) {
    Vozilo v = new Vozilo();
    Vozilo k = new Kola();
    Vozilo t = new Trolejbus();

    kreni(v);
    kreni(k);
    kreni(t);
  }
}
```


Izvor: Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
