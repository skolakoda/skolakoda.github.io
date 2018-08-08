---
title: Atributi u Javi
layout: lekcija-java
permalink: /java-atributi
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/CPT-OOP-objects_and_classes_-_attmeth.svg/302px-CPT-OOP-objects_and_classes_-_attmeth.svg.png)

**Atributi ili svojstva opisuju što klasa jest.**

## Atributi vs. lokalne varijable

```java
class Kola {

  String tablica = "Neregistrovan";   // varijabla članica
  double brzina = 0.0;                // varijabla članica
  double maxBrzina = 120.0;           // varijabla članica

  boolean jelPrebrzo() {
    double razlika;                    // lokalna varijabla
    razlika = this.maxBrzina - this.brzina;
    if (razlika < 0) return true;
    else return false;
  }
}
```

Kada u metodi imamo lokalne varijable, kao `razlika`, one ne mogu biti korištene izvan metode. S druge strane, varijable `tablica`, `brzina` i `maxBrzina` pripadaju klasi `Kola`. Definirane su izvan bilo koje metode, ali unutar klase i nazivaju se varijable članice ili atributi.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
