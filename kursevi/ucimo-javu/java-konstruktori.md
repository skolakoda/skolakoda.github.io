---
title: Konstruktori u Javi
layout: lekcija-java
permalink: /java-konstruktori
---

Konstruktori služe za instanciranje klasa, dakle kreiranje objekata koji su instance neke klase. To su posebne metode koje imaju isto ime kao njihova klasa i ne vraćaju nikakvu vrijednost. Npr.:

```java
class TwoDPoint {
    double x;
    double y;
    TwoDPoint(double xvalue, double yvalue) { // konstruktor sa dva argumenta
      this.x = xvalue;
      this.y = yvalue;    
    }
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

U jednoj klasi može biti i više konstruktora. Svaki konstruktor zadaje po jedan način kreiranja objekata dane klase.
```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint(0.0, 0.0);
        System.out.println("(" + origin.x() + "," + origin.y() + ")");
  }
}
```

Izlaz:
```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
