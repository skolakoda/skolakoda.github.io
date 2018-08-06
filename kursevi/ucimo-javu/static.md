---
title: Statičke varijable i metode
layout: lekcija-java
permalink: /java-static
---

**Atribut ili metoda u Java programu može biti deklarirana kao `static`. To znači da pripada klasi, a ne pojedinačnom objektu.**

Kad neki objekt iz klase promijeni vrijednost statičke varijable, onda se ta vrijednost promijenila za sve objekte u klasi. Na primjer, pretpostavite da klasa `Car` class sadrži atribut `speedLimit` koji je postavljen na 112 kph. To će vrijediti za sve automobile. Ako se to promijeni za jedan automobil, promijenit će se za sve. To je tipična statička varijabla.

Metode su najčešće statičke ako ne modificiraju ni jednu nestatičku varijablu (varijablu instance) niti ne poziva nestatičke metode. To je uobičajeno u računskim metodama, kao što je računanje kvadratnog korijena koja samo računa korijen iz svojih argumenata i vraća vrijednost. Jedan od načina prepoznavanja da metoda treba biti statička je ako ona ne koristi ključnu riječ `this`.

## Statičke varijable

Statička varijabla je varijabla klase, ona pripada klasi (samoj klasi), a ne nekom objektu (instanci klase).

{:.ulaz}
```java
class Point {
    double x;
    double y;
    static double xorigin = 0.0;
    static double yorigin = 0.0;
}

class PointPrinter {
  public static void main (String [] args) {
    System.out.println("Ishodiste je u tocki (" +
      Point.xorigin + ", " + Point.yorigin + ")");
  }
}
```

Pokretanje:
```
% javac Point.java
% javac PointPrinter.java
% java PointPrinter
Ishodiste je u tocki (0.0, 0.0)
```

Primijetite da za ispis statičkih varijabli nije bilo potrebno kreirati konkretni objekt. Varijablama klase pristupa se pomoću imena klase, a ne pomoću imena referentne varijable.

## Metode

Metode kažu što neki objekt radi.

```java
class TwoDPoint {
    double x;
    double y;
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
}
```

Primijetite da se ključna riječ `this` koristi kako bi se iznutra referencirala varijabla koja pripada istoj klasi. Sada možemo preraditi program `OriginPrinter` ovako:

```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.x = 0.0;
    origin.y = 0.0;
    origin.print();
  }
}
```

Obrada:
```
% javac OriginPrinter.java
% java OriginPrinter
(0.0, 0.0)
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
