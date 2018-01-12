---
title: Ista imena varijabli i metoda
layout: lekcija-java
permalink: /ista-imena-varijabli-i-metoda
---

Java čak dozvoljava da varijable i metode imaju ista imena tako dugo dok se razlikuju po listi argumenata i povratnom tipu. Npr. klasi `TwoDPoint`, koja sadrži attribute `x` i `y`, možemo dodati i istoimene pristupne (*accessor*) metode bez opasnosti od dvoznačnosti:

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
    void setX(double value) {
      this.x = value;
    }
    void x(double value) {
      this.x = value;
    }
    void setY(double value) {
      this.y = value;
    }
    void y(double value) {
      this.y = value;
    }
    double getX() {
      return this.x;
    }
    double x() {
      return this.x;
    }
    double getY() {
      return this.y;
    }
    double y() {
      return this.y;
    }
}
```

Sada možemo umjesto `setX(value)` koristiti `x(value)`, a umjesto `getX()` staviti `x()` i analogno za `y`. tako da `OriginPrinter` može izgledati i ovako:

```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.x(0.0);
    origin.y(0.0);
        System.out.println("(" + origin.x() + "," + origin.y() + ")");
  }
}
```

Još jednom:
```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
