---
title: Apstraktne klase
layout: lekcija-java
permalink: /java-abstract
---

![](http://www.itrelease.com/wp-content/uploads/2011/05/picture-abstract-class-UML-Diagram.gif)

**Apstraktne klase ne mogu imati instance. U hijerarhiji nasljeđivanja, one se koriste isključivo kao nadklase, tj. iz nje se izvode klase koje dijele zajednički dizajn. Izvedene klase, koje mogu imati instance, se nazivaju konkretnim klasama.**

Apstraktna klase se definira dodavanjem ključne riječi `abstract` nakon specifikatora pristupa, npr.:

```java
public abstract class MotorVehicle {}
```

Apstraktne klase se ne mogu instancirati. Pokušaj instanciranja:

```java
MotorVehicle m = new MotorVehicle();
```

dat će pogrešku kod kompilacije:

```
MotorVehicleTest.java:5: MotorVehicle is abstract; cannot be instantiated
    MotorVehicle m = new MotorVehicle();
                     ^
```

Klasa `MotorVehicle` je zapravo tipičan primjer klase koja treba biti apstraktna. Ideja generičkog vozila nije realna. Realno je raditi s automobilima, kamionima, motociklima i ostalim objektima raznih podklasa od `MotorVehicle`, ali ne i sa objektima apstraktne klase.

Apstraktne klase imaju apstraktne metode.

## Apstraktne metode

Apstraktna metoda ima deklaraciju, ali ne i implementaciju. Drugim riječima, nedostaje joj tijelo metode. Tijelo apstraktne metode se implementira u podklasama.

Apstraktna metoda može postojati jedino unutar apstraktne klase ili interfejsa.

## Implementacija

Npr. apstraktna klasa `MotorVehicle` mogla bi imati apstraktnu metodu `fuel()`:

```java
public abstract class MotorVehicle {

  public abstract void fuel();

}
```

Potklase izvedene iz apstraktne klase, da bi mogle imati svojih instanci, moraju implementirati svaku deklarisanu metodu. Primjerice, klasa `Car` bi metodu `fuel()` mogla implementirati punjenjem spremnika benzinom. Klasa `EighteenWheelerTruck` mogla bi je implementirati punjenjem spremnika diesel gorivom. Klasa `ElectricCar` bi je implementirati punjenjem električnom strujom.

### Izvori
- Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
- *Programski jezik Java*, Bilješke sa predavanja Muzafera Saračevića, Novi Pazar, 2015.
