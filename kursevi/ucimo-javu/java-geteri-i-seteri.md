---
title: Geter i seter metode u Javi
layout: lekcija-java
permalink: /java-geteri-i-seteri
---

## Setter metode

Također poznate i kao “mutator” metode, ove metode samo postavljaju vrijednosti varijabli (obično privatnih) unutar klase.

{:.ulaz}
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
    void setY(double value) {
      this.y = value;
    }
}
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.setX(0.0);
    origin.setY(0.0);
    System.out.println(origin.getAsString());
  }
}
```

Imamo opet:
```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
```

## Getter metode

Također poznate i kao *accessor* metode, ove metode samo vraćaju vrijednosti varijebli unutar klase.

{:.ulaz}
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
    void setY(double value) {
      this.y = value;
    }
    double getX() {
      return this.x;
    }
    double getY() {
      return this.y;
    }
}
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.setX(0.0);
    origin.setY(0.0);
        System.out.println("(" + origin.getX() + "," + origin.getY() + ")");
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
