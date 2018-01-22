---
title: Atributi
layout: lekcija-java
permalink: /java-atributi
---

**Atributi ili svojstva opisuju što klasa jest.**

## Atributi i lokalne varijable

```java
class Car {

  String licensePlate = "";    // member variabla
  double speed;       = 0.0;   // member variabla
  double maxSpeed;    = 120.0; // member variabla

  boolean isSpeeding() {
    double excess;             // lokalna variabla
    excess = this.maxSpeed - this.speed;
    if (excess < 0) return true;
    else return false;
  }

}
```

Kada unutar metode imamo lokalne varijable, kao `excess`, on ne mogu biti referencirane izvan metode. S druge strane, varijable `licensePlate`, `speed` i `maxSpeed` pripadaju klasi `Car`. Definirane su izvan bilo koje metode, ali unutar klase i nazivaju se varijable članovice ili atributi.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
