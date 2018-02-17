---
title: Metode
layout: lekcija-java
permalink: /java-metode
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/CPT-OOP-objects_and_classes_-_attmeth.svg/302px-CPT-OOP-objects_and_classes_-_attmeth.svg.png)

**Metode kažu što neki objekt radi.** Podaci ne znače mnogo ako ne možete s njima ništa napraviti. Zbog toga postoje metode. Dok atributi kazjuju što klasa jest, metode kazuju što ona čini. Atribute i metode zajednički nazivamo članovima klase.

Klase koje ste do sada upoznali imaju uglavnom samo `main()` metodu. Međutim, klase mogu imati mnogo metoda. Na primjer, klasu `Car` možemo snabdjeti metodom koja će simulirati vožnju maksimalnom brzinom:

```java
class Car {

  String licensePlate = "";    // npr. "New York 543 A23"
  double speed        = 0.0;   // u kilometrima na sat
  double maxSpeed     = 120.0; // u kilometrima na sat

  void floorIt() { // ubrzanje do maksimalne brzine
    this.speed = this.maxSpeed;  
  }

}
```

Atributi su ostali isti kao prije, ali sad je dodana metoda koju smo nazvali `floorIt()`. Počinje ključnom riječi `void` što je povratni tip te metode. Svaka metoda mora imati povratni tip koji može biti ili `void` ili neki tip podataka kao `int`, `byte`, `float`, `String`, ili klasa koju ste sami definirali. Povratni tip pokazuje vrstu vrijednosti koja će biti vraćena nakon što se pozvana metoda izvrši. Ako je povratni tip na primjer `int`, onda tu metodu možete koristiti svagdje gdje biste inače koristili varijablu tipa `int`. Ako je povratni tip `void`, metoda ne vraća nikakvu vrijednost.

Ime ove metode je `floorIt`, a iza njega slijede prazne zagrade. Kad bi ova metoda imala argumente, oni bi se naveli unutar tih zagrada. Tijelo metode nalazi se unutar vitičastih zagrada:

```java
this.speed = this.maxSpeed;
```

Primijetite da smo ispred imena varijabli članica koristili ključnu riječ `this`, kako bismo naznačili da su to varijable trenutno aktivnog objekta.

## Pozivanje metoda

Izvan klase `Car`, metodu `floorIt()` pozvat ćete navodeći ime objekta i separator `.`, kao što pokazuje sljedeći primjer:

{:.ulaz}
```java
class Car {

  String licensePlate = "";
  double speed        = 0.0;
  double maxSpeed     = 120.0;

  void floorIt() {
    this.speed = this.maxSpeed;  
  }

}

class CarTest3 {

  public static void main(String args[]) {

    Car c = new Car();

    c.licensePlate = "New York A45 636";
    c.maxSpeed = 123.45;

    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed + " kilometara na sat.");

    c.floorIt();

    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed + " kilometara na sat.");

  }

}
```

Izlaz:

```
New York A45 636 se krece brzinom od 0.0 kilometara na sat.
New York A45 636 se krece brzinom od 123.45 kilometara na sat.
```

Svaka metoda u Java programu mora, za razliku od C++ programa, pripadati nekoj klasi.

## Implicitni `this`

Unutar klase `Car` nije nužno dodavati imenima atributa prefiks `this.` jer se on podrazumijeva:

```java
class Car {

  String licensePlate = "";
  double speed        = 0.0;
  double maxSpeed     = 120.0;

  void floorIt() {
    speed = maxSpeed;  
  }

}
```

U početku, zbog jasnoće, preporučljivo je uvijek eksplicitno koristiti prefiks `this`, ali kasnije se od toga može i odustati.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
