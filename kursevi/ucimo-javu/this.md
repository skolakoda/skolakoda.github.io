---
title: Skrivanje imena varijabli i ključna riječ this
layout: lekcija-java
permalink: /java-this
---

Pomoću ključne riječi `this` moguće je čak i argumentima konstruktora (ili bilo koje druge metode) davati ista imena kao varijablama. Npr.;

```java
  TwoDPoint(double x, double y) {
    this.x = x;
    this.y = y;    
  }
  void setX(double x) {
    this.x = x;
  }
```

Klasu `TwoDPoint` možemo, dakle preraditi ovako:

```java
class TwoDPoint {
    double x;
    double y;
    TwoDPoint(double x, double y) { // konstruktor sa dva argumenta
      this.x = x;
      this.y = y;    
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
    void setX(double x) {
      this.x = x;
    }
    void x(double x) {
      this.x = x;
    }
    void setY(double y) {
      this.y = y;
    }
    void y(double y) {
      this.y = y;
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

Kažemo da unutar metode, deklaracija lokalne varijable ili argumenta sa istim imenom kao neka *member* varijabla skriva ili zasjenjuje (*hides*) tu varijablu. Ona se može referencirati dodavanjem prefiksa `this`.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
