---
title: Preopterećenje metoda u Javi
layout: lekcija-java
permalink: /preopterecenje-metoda
redirect_from:
  - /ista-imena-varijabli-i-metoda
---

**Ako klasa ima više metoda istog imena ali različitih parametara, to je poznato kao preopterećenje (*overloading*) metoda.**

Java čak dozvoljava da varijable i metode imaju ista imena, sve dok se razlikuju po listi argumenata i povratnom tipu. Npr. klasi `Koordinata`, koja sadrži attribute `x` i `y`, možemo dodati i istoimene pristupne metode bez opasnosti od dvoznačnosti.

Sada možemo umjesto standardnog setera `setX(value)` koristiti `x(value)`, a umjesto getera `getX()` samo `x()`:

{:.ulaz}
```java
class Koordinata {

    double x;
    double y;

    void x(double value) {
      this.x = value;
    }

    void y(double value) {
      this.y = value;
    }

    double x() {
      return this.x;
    }

    double y() {
      return this.y;
    }
}

class Stampac {
  public static void main(String[] args) {
    Koordinata ishodiste;
    ishodiste = new Koordinata();
    ishodiste.x(0.0);
    ishodiste.y(0.0);
    System.out.println("(" + ishodiste.x() + "," + ishodiste.y() + ")");
  }
}
```

Da isprobate kod sebe, sačuvajte klase u zasebnim fajlovima i u konzoli ukucajte:

```
% javac Koordinata.java
% javac Stampac.java
% java Stampac
(0.0,0.0)
```

## Što je preopterećenje (*overloading*)?

Izraz *overloading* označava situaciju kad se ista metoda ili operator koristi na više različitih tipova podataka. Na primjer, znakom `+` se označava zbrajanje cijelih brojeva, kao i konkatenacija struna, pri čemu se on na različitim tipovima podataka ponaša različito. Zato kažemo da je znak `+` preopterećen (*overloaded*).

Metode također mogu biti preopterećene. Na primjer, `System.out.println()` može ispisivati podatke tipa `double`, `float`, `int`, `long`, `String` i tako dalje, a koristimo je na potpuno isti način na svim tim tipovima podataka.

Normalno jedan identifikator referencira jednu metodu. Međutim kad jedan identifikator označava više od jedne metode, to je *overloading*.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
