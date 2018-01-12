---
title: Metode
layout: lekcija-java
permalink: /java-metode
---

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

## Prenošenje argumenata u metodu

Dodat ćemo klasi `TwoDPoint` još jednu metodu za ispis.

```java
class TwoDPoint {
    double x;
    double y;
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
    void print(int n) {
      for (int i = 0; i < n; i++) {
        System.out.println("(" + this.x + "," + this.y + ")");
      }
    }
}
```

Primijetite da su tu dvije različite `print()` metode. Jedna prihvaća argument, druga ne. To je dozvoljeno dok god lista argumenata razrješuje ovu dvosmislenost. To se naziva *overloading*. Metoda `System.out.println()` također je primjer overloaded metode. Metoda `main(String[] args)` je *non-overloaded* metoda koja ima polje Stringova kao argumente.

```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.x = 0.0;
    origin.y = 0.0;
    origin.print();
    origin.print(5);
  }
}
```

Izlaz:

```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
(0.0,0.0)
(0.0,0.0)
(0.0,0.0)
(0.0,0.0)
(0.0,0.0)
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
