---
title: Apstraktne metode i klase
layout: lekcija-java
permalink: /java-abstract
---

**Java dozvoljava da neke metode i klase budu deklarirane kao apstraktne `abstract`.**

## Apstraktne metode

Apstraktna metoda nije stvarno implementirana u klasi nego samo deklarirana. Tijelo takve metode se onda implementira u podklasama.

Apstraktna metoda mora biti dio apstraktne klase.

## Apstraktne klase

Apstraktna klase se definira dodavanjem ključne riječi `abstract` nakon specifikatora pristupa, npr.:

```
public abstract class MotorVehicle
```

Apstraktne klase se ne mogu instancirati. Pokušaj instanciranja:

```
MotorVehicle m = new MotorVehicle();
```

dat će pogrešku kod kompilacije:

```
MotorVehicleTest.java:5: MotorVehicle is abstract; cannot be instantiated
    MotorVehicle m = new MotorVehicle();
                     ^
```

Klasa `MotorVehicle` je zapravo tipičan primjer klase koja treba biti apstraktna. Ideja generičkog vozila nije realna. Realno je raditi s automobilima, kamionima, motociklima i ostalim objektima raznih podklasa od MotorVehicle, ali ne i sa objektima apstraktne klase.

## Implementacija

Apstraktna metoda ima deklaraciju, ali ne i implementaciju unutar promatrane klase. Drugim riječima, nedostaje joj tijelo metode. Može postojati jedino unutar apstraktne klase ili tzv. interfejsa. Npr. klasa MotorVehicle mogla bi imati apstraktnu metodu `fuel()`:

```
public abstract void fuel();
```

Klasa `Car` bi, primjerice, ovu metodu mogla prekriti/implementirati metodom `fuel()` koja predstavlja punjenje spremnika benzinom. Klasa `EighteenWheelerTruck` mogla bi je prekriti metodom `fuel()` koja predstavlja punjenje spremnika diesel gorivom. Klasa `ElectricCar` bi je prekrila metodom `fuel()` koja predstavlja punjenje električnom strujom.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
