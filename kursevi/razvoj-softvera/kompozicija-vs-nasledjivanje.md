---
title: Kompozicija umesto nasleđivanja
layout: lekcija-razvoj
permalink: /kompozicija-vs-nasledjivanje
image: /images/koncepti/oop/kompozicija-vs-nasledjivanje.jpg
---

![]({{page.image}})

**Kompozicija objekata (*object composition*) je princip softverskog dizajna gde se objekti prave kombinovanjem manjih nezavisnih objekata koji obavljaju specifične zadatke.** Umesto da klasa nasleđuje funkcije od roditeljske klase, ona koristi zasebne klasa (komponente) za postizanje željenog ponašanja.

## Karakteristike

- **Ima nešto** (*has-a*) umesto jeste nešto (*is-a*) odnos: Objekat poseduje druge objekte kao svoje komponente. Na primer, automobil ima motor.
- **Izolacija odgovornosti**: Funkcionalnosti se dele između raznih komponenti, koje rade nezavisno jedna od druge.
- **Fleksibilnost**: Ponašanje se može menjati dinamički tako što se zamenjuju komponente bez promene osnovne klase.
- **Ponovna upotrebljivost**: Komponente se mogu koristiti u različitim kontekstima i klasama.

## Primer: dizajniranje novih vozila

Zašto favorizovati kompoziciju u odnosu na nasleđivanje? Možda će primer pomoći. Recimo da imamo osnovnu klasu `Vehicle` i dve podklase:

```java
public abstract class Vehicle {
    public Vehicle() {}
    public void go() {
        System.out.println("Now I’m driving.");
    }
}

public class StreetRacer extends Vehicle {
    public StreetRacer() {}
}

public class FormulaOne extends Vehicle {
    public FormulaOne() {}
}
```

Pokretanjem obe klase dobijamo:  
```java
StreetRacer streetRacer = new StreetRacer();
FormulaOne formulaOne = new FormulaOne();
streetRacer.go();
formulaOne.go();

// Now I’m driving.
// Now I’m driving.
```

## Problem: dodavanje letelica

Sve je izgledalo dobro dok nismo dobili zahtev za helikoptere. Kreiramo klasu `Helicopter` koja nasleđuje `Vehicle`:  
```java
public class Helicopter extends Vehicle {
    public Helicopter() {}
}
```

Međutim, pokretanje helikoptera daje:  
```java
Helicopter helicopter = new Helicopter();
helicopter.go();

// Now I’m driving.
```

To nije ispravno. Helikopteri bi trebalo da „lete”, a ne da „voze”. Prosto rešenje je da nadjačamo metodu `go` u izvedenim klasama:

```java
public class Helicopter extends Vehicle {
    public Helicopter() {}
    public void go() {
        System.out.println("Now I’m flying.");
    }
}
```

Ali kada ima više podklasa i čestih promena, održavanje takvog koda postaje problematično, jer svaka promena zahteva menjanje više klasa.  

## Rešenje pomoću kompozicije: `ima` umesto `jeste`

Kada koristimo nasleđivanje (`je-nešto`), suočavamo se sa problemom širenja promena kroz više generacija klasa. Da bismo to izbegli, izdvajamo promenljive delove koda u samostalne objekte. Tako organizujemo kod oko zadataka, umesto da se oslanjamo na hijerarhije klasa. Ovi objekti (`ima-nešto`) omogućavaju nam da lako ažuriramo funkcionalnost bez potrebe za menjanjem osnovne strukture aplikacije.  

Primenjujući kompoziciju, izdvajamo logiku kretanja u posebne klase (strategije). Vozilo ima referencu na `MovementStrategy`, što omogućava delegiranje zadatka kretanja odgovarajućoj strategiji:  


```java
// odvajamo strategije kretanja
public interface MovementStrategy {
    void move();
}

public class DriveStrategy implements MovementStrategy {
    @Override
    public void move() {
        System.out.println("Now I’m driving.");
    }
}

public class FlyStrategy implements MovementStrategy {
    @Override
    public void move() {
        System.out.println("Now I’m flying.");
    }
}

public class JetFlyStrategy implements MovementStrategy {
    @Override
    public void move() {
        System.out.println("Now I’m flying at 200 mph.");
    }
}

// Vozilo referencira strategiju
public class Vehicle {
    private MovementStrategy movementStrategy;

    public Vehicle(MovementStrategy movementStrategy) {
        this.movementStrategy = movementStrategy;
    }

    public void setMovementStrategy(MovementStrategy movementStrategy) {
        this.movementStrategy = movementStrategy;
    }

    public void go() {
        movementStrategy.move();
    }
}

// razna vozila koriste razne strategije
public class Main {
    public static void main(String[] args) {
        Vehicle streetRacer = new Vehicle(new DriveStrategy());
        Vehicle formulaOne = new Vehicle(new DriveStrategy());
        Vehicle helicopter = new Vehicle(new FlyStrategy());
        Vehicle jet = new Vehicle(new JetFlyStrategy());

        streetRacer.go();  // Now I’m driving.
        formulaOne.go();   // Now I’m driving.
        helicopter.go();   // Now I’m flying.
        jet.go();          // Now I’m flying at 200 mph.
    }
}
```

U ovom primeru, kompozicija koristi obrazac strategije za postizanje rešenja. Kompozicija je širi princip, i može koristiti različite obrasce.

## Prednosti kompozicije

- **Fleksibilnost:** Način kretanja se može promeniti tokom izvršenja programa.  
- **Ponovna upotreba:** Strategije su izolovane i mogu se koristiti za različita vozila.  
- **Jednostavno održavanje:** Promene u logici kretanja vršimo samo u odgovarajućoj strategiji, bez uticaja na klase vozila.  

Ovime smo eliminisali zavisnost od hijerarhije i omogućili lakše prilagođavanje aplikacije budućim zahtevima.

## Literatura 
- Steve Holzner, *Design Patterns For Dummies*, 2006.