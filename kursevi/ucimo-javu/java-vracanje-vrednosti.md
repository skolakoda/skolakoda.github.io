---
title: Vraćanje vrijednosti iz metoda
layout: lekcija-java
permalink: /java-vracanje-vrednosti
---

Još jednom ćemo klasi `TwoDPoint` dodati novu metodu za ispis, `getAsString()` koja za razliku od prethodne dvije ima povratni tip (*return type*) i vraća vrijednost tipa String.

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
    String getAsString() {
      return "(" + this.x + "," + this.y + ")";
    }
}
```

Zato sad ovu metodu možemo koristiti na svim mjestima gdje bi inače došla vrijednost tipa String, npr:

```java
String s = origin.getAsString();
System.out.println(s);
```

Ili, još bolje:

```java
System.out.println(origin.getAsString());
```

Sada možemo još jednom preraditi klasu `OriginPrinter`:

```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.x = 0.0;
    origin.y = 0.0;
    System.out.println(origin.getAsString());
  }
}
```

Imamo:

```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
