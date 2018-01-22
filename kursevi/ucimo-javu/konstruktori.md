---
title: Konstruktori u Javi
layout: lekcija-java
permalink: /java-konstruktori
---

**Konstruktori služe za instanciranje klasa, dakle kreiranje objekata koji su instance neke klase. To su posebne metode koje imaju isto ime kao njihova klasa i ne vraćaju nikakvu vrijednost.**

Konstruktor inicijalizira potrebne varijable i obavlja sve poslove koji su potrebni da bi se klasa pripremila za uporabu. Konstruktor ima uvijek isto ime kao pripadna klasa. Na primjer:

```java
Car c = new Car();
```

Ovdje je `Car()` konstruktor klase `Car`. Konstruktor se pravi tako da se napiše metoda koja ima isto ime kao klasa. Ako klasu ne snabdijemo konstruktorom, Java osigurava generički, bez argumenata.

Konstruktori nemaju povratnog tipa. Oni zapravo implicitno vraćaju instancu svoje klase.

## Konstruktor bez argumenata

Sljedeća metoda je konstruktor koji inicijalizira registarsku pločicu (`licensePlate`) na prazan string, brzinu (`speed`) na nulu, a maksimalnu brzinu (`maxSpeed`) na 120.0 km/h:

```java
Car() {
  this.licensePlate = "";
  this.speed  = 0.0;
  this.maxSpeed = 120.0;
}
```

## Konstruktori sa argumentima

Još bolje, možemo napisati konstruktor koji prima tri argumenta i koristi ih za inicijaliziranje odgovarajućih varijabli:

```java
Car(String licensePlate, double speed, double maxSpeed) {

  this.licensePlate = licensePlate;
  this.speed  = speed;
  if (maxSpeed > 0) this.maxSpeed = maxSpeed;
  else this.maxSpeed = 0.0;
  if (speed > this.maxSpeed) this.speed = this.maxSpeed;
  if (speed < 0) this.speed = 0.0;
  else this.speed = speed;

}
```

Ili možda želite da inicijalna brzina uvijek bude jedanaka nuli, a maksimalna brzina i registarska pločica specificirane argumentima:

```java
Car(String licensePlate, double maxSpeed) {

  this.licensePlate = licensePlate;
  this.speed  = 0.0;
  if (maxSpeed > 0) this.maxSpeed = maxSpeed;
  else this.maxSpeed = 0.0;

}
```

## Više konstruktora

**U jednoj klasi može biti i više konstruktora.** Svaki konstruktor zadaje po jedan način kreiranja objekata dane klase. Preradimo još jednom klasu `Car`, tako da u nju ugradimo sve ove konstruktore:

```java
class Car {

  String licensePlate;
  double speed;
  double maxSpeed;

  Car() {
    this.licensePlate = "";
    this.speed  = 0.0;
    this.maxSpeed = 120.0;
  }

  Car(String licensePlate, double speed, double maxSpeed) {

    this.licensePlate = licensePlate;
    this.speed  = speed;
    if (maxSpeed > 0) this.maxSpeed = maxSpeed;
    else this.maxSpeed = 0.0;
    if (speed > this.maxSpeed) this.speed = this.maxSpeed;
    if (speed < 0) this.speed = 0.0;
    else this.speed = speed;

  }

  Car(String licensePlate, double maxSpeed) {

    this.licensePlate = licensePlate;
    this.speed  = 0.0;
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

  // setter metoda za atribut licensePlate
  void setLicensePlate(String licensePlate) {
    this.licensePlate = licensePlate;
  }

  // setter metoda za atribut maxSpeed
  void setMaximumSpeed(double maxSpeed) {
    if (maxSpeed > 0) this.maxSpeed = maxSpeed;
    else this.maxSpeed = 0.0;
  }

  void floorIt() { // ubrzanje do maksimalne brzine
    speed = maxSpeed;  
  }

  void accelerate(double deltaV) { // ubrzanje za zadani deltaV

     this.speed = this.speed + deltaV;
     if (this.speed > this.maxSpeed) {
       this.speed = this.maxSpeed;
     }
     if (this.speed <  0.0) {
       this.speed = 0.0;
     }     

  }

}
```

## Uporaba konstruktora

Sljedeći program, `CarTest7`, koristi treći od navedenih konstruktora za inicijaliziranje objekata tipa `Car`.

```java
class CarTest7 {

  public static void main(String args[]) {

    Car c = new Car("New York A45 636", 123.45);

    System.out.println(c.getLicensePlate() + " se krece brzinom od " + c.getSpeed() + " kilometara na sat.");

    for (int i = 0; i < 15; i++) {
      c.accelerate(10.0);
      System.out.println(c.getLicensePlate() + " se krece brzinom od " + c.getSpeed() + " kilometara na sat.");
    }

  }

}
```

Primijetite da više ne morate voditi računa o atributima `licensePlate`, `speed` i `maxSpeed`. Sve što trebate znati je kako konstruirati novi primjerak klase `Car` i kako ispisati njegove podatke.

Postavlja se pitanje jesu li metode `setLicensePlate()` i `setMaximumSpeed()` zaista još potrebne kad se atributi `licensePlate` i `maxSpeed` postavljaju u konstruktorima. Odgovor ovisi o tome želimo li dopustiti njihovo mijenjanje jednom nakon što je objekt već kreiran. Klase koje ne dopuštaju promjenu atributa svojih objekata nakon što su kreirani, nazivaju se nepromjenjivima (*immutable*). String je primjer takve klase. Ne možete promijeniti njegove podatke, možete samo kreirati novi objekt tipa String.

## Ograničenja opsega vrijednosti

Mogućnost implementiranja ograničenja jedan je od razloga za davanje prednosti korištenju konstruktora i *setter* metoda pred direktnim dohvaćanjem varijabli. Na primjer, u klasi `Car` važno je osigurati da brzina nikad ne bude veća od propisane maksimalne brzine i da ni jedna ne bude manja od nule. Već smo to vidjeli u primjeru metode `accelerate()` koja, na način kako je napravljena, neće pridijeliti automobilu brzinu veću od propisane maksimalne brzine:

```java
void accelerate(double deltaV) {

   this.speed = this.speed + deltaV;
   if (this.speed > this.maxSpeed) {
     this.speed = this.maxSpeed;
   }
   if (this.speed < 0.0) {
     this.speed = 0.0;
   }

}
```

Takva se ograničenja mogu ugraditi i u konstruktore. Na primjer, sljedeći konstruktor (treći u nizu) klase `Car` osigurava da maksimalna brzina ne bude manja od nule.

```java
Car(String licensePlate, double maxSpeed) {

  this.licensePlate = licensePlate;
  this.speed  = 0.0;
  if (maxSpeed >= 0.0) {
    this.maxSpeed = maxSpeed;
  }
  else {
    maxSpeed = 0.0;
  }

}
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
