---
title: Prekrivanje metoda (overriding)
layout: lekcija-java
permalink: /java-prekrivanje-metoda
---

Pretpostavimo da se, nakon što je klasa `Car` dovršena i koristi se u raznim programima, ukaže potreba za isto takvom klasom u kojoj će maksimalna brzina biti ograničena na 70 mph.

Prva reakcija bi bila prepraviti klasu `Car` uvođenjem ograničenja za sve automobile, no to bi dovelo do problema u svim programima koji je već koriste jer oni pretpostavljaju da takvog ograničenja nema.
Drugo rješenje bilo bi napraviti potpuno novu klasu. Nedostatak je što biste nakon toga svaku uočenu pogrešku u klasi `Car` morali popravljati i u novoj klasi, a isto tako ako biste htjeli klasi `Car` dodati neku metodu, morali biste to činiti na dva mjesta. U tradicionalnim jezicima, pa i u jeziku C, to bi ipak bilo jedino razumno rješenje.

U Javi, međutim, taj problem ćete riješiti uvođenjem nove klase, nazovimo je `SlowCar`, koja će od klase `Car` sve jednostavno naslijediti, a eksplicitno uvesti samo dodatno ograničenje na maksimalnu brzinu.

Bit će potrebno prilagoditi dva mjesta na kojima se brzina može mijenjati, dakle konstruktor i metoda `accelerate()`. Konstruktor će imati novo ime jer mora biti nazvan prema svojoj klasi, a metoda `accelerate()` bit će **prekrivena** ili **pregažena** (*overridden*). To znači da će podklasa imati metodu sa istim potpisom kao i odgovarajuća metoda u nadklasi.

```java
public class SlowCar extends Car {

  private static final double speedLimit = 112.65408; // kph == 70 mph

  public SlowCar(String licensePlate, double speed, double maxSpeed,
   String make, String model, int year, int numberOfPassengers, int numDoors) {

    super(licensePlate, speed, maxSpeed, make, model, year,
     numberOfPassengers, numDoors);
    if (speed > speedLimit) this.speed = speedLimit;

  }

  public void accelerate(double deltaV) { // ubrzanje za zadani deltaV

     this.speed = this.speed + deltaV;
     if (this.speed > this.maxSpeed) {
       this.speed = this.maxSpeed;
     }
     if (this.speed > speedLimit) {
       this.speed = speedLimit;
     }

     if (this.speed <  0.0) {
       this.speed = 0.0;
     }     

  }

}
```

Primijetimo da ovdje nemamo ostale metode iz nadklase `Car`, jer su sve naslijeđene. Jedino je tu metoda `accelerate()` koja nije ista kao istoimena metoda u nadklasi, tj. ona je prekriva. Konstruktor mora pozvati odgovarajući konstruktor iz nadklase, pomoću ključne riječi `super`.

Naravno, osim prekrivanja metoda (i varijabli) iz nadklase, podklasa uvijek može dodavati i svoje vlastite metode (i varijable).


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
