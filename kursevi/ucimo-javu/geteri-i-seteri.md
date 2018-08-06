---
title: Geter i seter metode u Javi
layout: lekcija-java
permalink: /java-geteri-i-seteri
---

## Setter metode

Setter metode, poznate i kao mutator metode, postavljaju vrijednosti varijabli (obično privatnih) unutar klase. Ove metode u pravilu primaju argumente, a vraćaju `void`. Setter metode uobičajeno koriste `this.` za referenciranje atributa i dodjeljivanje vrijednosti iz istoimenog argumenta. Na primjer:

{:.ulaz}
```java
class Car {

  String licensePlate = "";
  double speed        = 0.0;
  double maxSpeed     = 120.0;

  // setter metoda za atribut licensePlate
  void setLicensePlate(String licensePlate) {
    this.licensePlate = licensePlate;
  }

  // setter metoda za atribut maxSpeed
  void setMaximumSpeed(double maxSpeed) {
    if (maxSpeed > 0) this.maxSpeed = maxSpeed;
    else this.maxSpeed = 0.0;
  }

  void accelerate(double deltaV) {
    this.speed = this.speed + deltaV;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }

}

/* Primjer uporabe setera */

class CarTest5 {

  public static void main(String args[]) {

    Car c = new Car();
    c.setLicensePlate("New York A45 636");
    c.setMaximumSpeed(123.45);

    c.accelerate(10.0);
    System.out.println(c.licensePlate + " se krece brzinom od " + c.speed + " kilometara na sat.");
  }

}
```

## Getter metode

**Metode koje samo vraćaju vrijednost nekog atributa nazivaju se *getter* ili *accessor* metode.**

Često je korisno da metoda vraća vrijednost. To se radi pomoću naredbe `return` na završetku metode, te naznakom povratnog tipa na početku. Povratni tip mora odgovarati deklariranom tipu u potpisu.

Na primjer, metoda `getLicensePlate()` vraća vrednost atributa `licensePlate` onome tko je metodu pozvao. Signatura `String` nam kaže da metoda vraća strunu (tekst) i ne traži nikakve argumente:

{:.ulaz}
```java
class Car {

  String licensePlate = "";
  double speed        = 0.0;
  double maxSpeed     = 120.0;

  void setLicensePlate(String licensePlate) {
    this.licensePlate = licensePlate;
  }

  void setMaximumSpeed(double maxSpeed) {
    if (maxSpeed > 0) this.maxSpeed = maxSpeed;
    else this.maxSpeed = 0.0;
  }

  // getter (accessor) metode

  String getLicensePlate() {
    return this.licensePlate;
  }

  double getMaxSpeed() {
    return this.maxSpeed;
  }

  double getSpeed() {
    return this.speed;
  }

  void accelerate(double deltaV) {
    this.speed = this.speed + deltaV;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }

}

/* Primjer uporabe getera */

class CarTest6 {

  public static void main(String args[]) {

    Car c = new Car();
    c.setLicensePlate("New York A45 636");
    c.setMaximumSpeed(123.45);

    for (int i = 0; i < 15; i++) {
      c.accelerate(10.0);     
      System.out.println(c.getLicensePlate() + " se krece brzinom od " + c.getSpeed() + " kilometara na sat.");
    }

  }

}
```

Primijetite da više nema direktnog pristupa atributima!

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
