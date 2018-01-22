---
title: "Primjer: klasa Kola"
layout: lekcija-java
permalink: /primer-klasa-kola
image: https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CPT-OOP-objects_and_classes.svg/800px-CPT-OOP-objects_and_classes.svg.png
---

![]({{page.image}})

**Pretpostavimo da želimo napisati program za simulaciju prometa koji bilježi prolazak vozila. Na svakom vozilu možemo promatrati svojstva kao što je brzina, maksimalna brzina i registarska oznaka.**

## Modelovanje klase

U objektno-orijentisanim jezicima koristimo klasu da bismo podatke spakovali u jedinstveni entitet:

```java
class Car {

  String licensePlate; // npr. "New York 543 A23"
  double speed;        // u kilometrima na sat
  double maxSpeed;     // u kilometrima na sat

}
```

Varijable `licensePlate`, `speed` i `maxSpeed` zovemo varijablama članovima ili atributima. Dok je klasa općenita zamisao (nacrt),  objekt je specifična instanca neke klase, sa konkretnim vrijednostima atributa.

## Kreiranje novih objekata

Da bismo kreirali konkretni object neke klase, odnosno instancirali klasu, koristimo ključnu riječ new iza koje slijedi poziv tzv. konstruktora klase. Pogledajmo kako bismo deklarirali i kreirali novu varijablu tipa `Car` koju ćemo nazvati `c`:

```java
Car c;
c = new Car();
```

Prva riječ, `Car`, određuje tip varijable `c`. Klase su tipovi, dodjeljujemo ih varijablama na isti način kao `int`, `char`, `double` itd. Znak jednakosti je operator pridruživanja, a riječ `new` je operator instanciranja.

Na kraju, primijetimo metodu `Car()`. Zagrade naznačuju da je to metoda, a ne tip podataka kao u prvom retku. To je konstruktor, metoda koja kreira novu instancu klase. Ako svoju klasu i ne snabdijete konstruktorima, kompajler će umetnuti svoj konstruktor bez argumenata.

Deklaraciju tipa i kreiranje instance obično pišemo u jednoj naredbi, npr.

```java
Car c = new Car();
```

## Pristup članovima objekta

Jednom kad ste kreirali novi objekt, potrebna vam je mogućnost pristupa njegovim članovima (varijablama i metodama). Za to ćete upotrijebiti separator pristupa, točku (`.`). Klasa `Car` ima tri atributa:

- `licensePlate`
- `speed`
- `maxSpeed`

Dakle, ako je `c` novi objekt tipa `Car`, on također ima tri odgovarajuće varijable:

- `c.licensePlate`
- `c.speed`
- `c.maxSpeed`

Koristite ih kao što biste koristili bilo koju drugu varijablu. Na primjer:

```java
Car c = new Car();

c.licensePlate = "New York A45 636";
c.speed = 70.0;
c.maxSpeed = 123.45;

System.out.println(c.licensePlate + " se krece brzinom od " + c.speed + "kilometara na sat.");
```

Separator `.` selektuje pojedinog člana (varijablu, kao u ovom primjeru, ali također i metodu) nekog objekta po njegovom imenu.

## Upotreba objekata u različoj klasi

Sljedeći program kreira novi primjerak automobila (objekta klase `Car`), dodjeljuje vrijednosti njegovim varijablama i ispisuje rezultat.

```java
class CarTest {

  public static void main(String args[]) {

    Car c = new Car();

    c.licensePlate = "New York A45 636";
    c.speed = 70.0;
    c.maxSpeed = 123.45;

    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed +
      "kilometara na sat.");    
  }

}
```

Ovaj program ne zahtijeva samo klasu `CarTest` nego također i klasu `Car`. Da biste ga mogli izvršiti, stavite klasu `Car` u datoteku `Car.java`, a klasu `CarTest` u datoteku `CarTest.java`. Obje datoteke neka budu u istom direktoriju. Kompilirajte obje datoteke na uobičajeni način i na kraju izvršite `CarTest`.

```
% javac Car.java
% javac CarTest.java
% java CarTest
New York A45 636 se krece brzinom od 70.0 kilometara na sat.
```

Primijetite da klasa `Car` nema `main()` metodu, dakle ne možete je “izvršiti”. Ona postoji jedino tako da je pozivaju drugi programi koji imaju `main()` metode.

Mnoge aplikacije koje ćete pisati koristit će više klasa. Uobičajeno je da se svaka klasa stavi u zasebnu datoteku. Uskoro ćete naučiti koristiti i pakete kako biste mogli organizirati svoje često korištene klase unutar različitih direktorija. Za sada držite sve datoteke sa izvornim programima (`*.java`) kao i one sa kompiliranim programima (`*.class`) unutar jednog direktorija. Iako smo kompilirali obje klase odvojeno, dovoljno bi bilo kompilirati samo klasu `CarTest` jer će kompajler već sam pronaći klasu `Car`.

## Inicijalne vrednosti atributa

Atributi mogu, i obično trebaju, imati inicijalne vrednosti. Klasu `Car` možemo preraditi da ima inicijalne vrednosti atributa. Sljedeći program kreira novi automobil i ispisuje inicijalne podatke (klase se pišu u odvojenim fajlovima, ali ovde ćemo ih staviti zajedno, radi lakšeg pokretanja):

{:.ulaz}
```java
class Car {

  String licensePlate = "";    // npr. "New York 543 A23"
  double speed        = 0.0;   // u kilometrima na sat
  double maxSpeed     = 120.0; // u kilometrima na sat

}

class CarTest2 {

  public static void main(String args[]) {

    Car c = new Car();

    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed + " kilometara na sat.");    
  }

}
```

Ukoliko pokrećete klase iz zasebnih fajlova, koraci su sledeći:

```
% javac Car.java
% javac CarTest.java
% java CarTest
 se krece brzinom od 0.0 kilometara na sat.
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
