---
title: Princip zamene Barbare Liskov
layout: lekcija-principi
permalink: /liskov-princip-zamene
---

**Liskovljev princip zamene (*Liskov substitution principle*) nalaže da sve klase budu zamenjive svojim naslednicama, odnosno da je moguće koristiti naslednu klasu mesto roditelja, bez promene u radu programa.** I da upotreba proširenog metoda umesto roditeljskog ne menja rad programa.

Liskovljev princip je u skladu sa [otvoreno-zatvorenim principom](/otvoren-zatvoren-princip), jer osigurava da izvedena klasa ne menja ponašanje izvornih metoda.

## Primer

U sledećem C# primeru imamo roditeljsku klasu `Vozilo` i izvedene klase `Kola` i `Trolejbus`:

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

Sledeći program pokazuje da sve tri klase možemo upotrebiti na isti način:

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


## Loš primer 

U ovom JS primeru, imamo osnovnu klasu `Dokument` i podklasu `TajniDokument`, koja ne može biti zamena za roditelja jer menja osnovnu funkcionalnost:

{:.ulaz}
```js
class Dokument {
  constructor(sadržaj) {
    this.sadržaj = sadržaj
  }

  prikaziSadržaj() {
    console.log(this.sadržaj)
  }
}

class TajniDokument extends Dokument {
  prikaziSadržaj(lozinka) {
    if (this.autentifikuj(lozinka)) {
      this.prikaziSadržaj()
    } else {
      console.log("Pogrešna lozinka")
    }
  }

  autentifikuj(lozinka) {
    return false
  }
}

const dokument = new Dokument("Sadržaj dokumenta.")
const tajniDokument = new TajniDokument("Sadržaj dokumenta.")

dokument.prikaziSadržaj()         // ispisuje: Sadržaj dokumenta.
tajniDokument.prikaziSadržaj()    // ispisuje: Pogrešna lozinka
```

Ovde vidimo, kad roditeljsku klasu zamenimo sa klasom naslednicom program ne radi na isti način, dakle Liskovljev princip zamene nije ispoštovan.

### Izvori
- Zdravko Ivanković i Dejan Lacmanović, *Softversko inženjerstvo 2 (skripta)*, Tehnički fakultet Mihajlo Pupin, Zrenjanin
