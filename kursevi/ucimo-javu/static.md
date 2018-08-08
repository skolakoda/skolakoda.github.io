---
title: "Ključna reč <code>static</code> u Javi"
layout: lekcija-java
permalink: /java-static
---

**Atribut ili metoda u Java programu može biti deklarirana kao statična (`static`). To znači da pripada klasi, a ne pojedinačnom objektu.**

Kad neki objekt iz klase promijeni vrijednost statičke varijable, onda se ta vrijednost promijenila za sve objekte u klasi. Na primjer, pretpostavite da klasa `Kola` class sadrži atribut `ogranicenjeBrzine` koji je postavljen na 120 kph. To će vrijediti za sve automobile. Ako se to promijeni za jedan automobil, promijenit će se za sve. To je tipična statička varijabla.

Metode su najčešće statičke ako ne modificiraju ni jednu nestatičku varijablu (varijablu instance) i ne pozivaju nestatičke metode. To je uobičajeno u računskim metodama, kao što je računanje kvadratnog korijena koja samo računa korijen iz svojih argumenata i vraća vrijednost. Jedan od načina prepoznavanja da metoda treba biti statička je ako ne koristi ključnu riječ `this`.

## Statičke varijable

Statička varijabla je varijabla koja pripada samoj klasi, a ne nekom objektu (instanci klase). Statičke varijable se mogu koristiti bez instanciranja novog objekta.

{:.ulaz}
```java
class Koordinata {
    static double x = 0.0;
    static double y = 0.0;
}

class Stampac {
  public static void main (String [] args) {
    System.out.println("Koordinata je (" + Koordinata.x + ", " + Koordinata.y + ")");
  }
}
```

Pokretanje:
```
% javac Koordinata.java
% javac Stampac.java
% java Stampac
Koordinata je (0.0, 0.0)
```

Primijetite da za ispis statičkih varijabli nije potrebno kreirati konkretni objekt. Varijablama klase pristupa se pomoću imena klase.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
