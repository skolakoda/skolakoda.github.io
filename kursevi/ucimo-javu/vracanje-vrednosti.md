---
title: Vraćanje vrednosti iz metoda
layout: lekcija-java
permalink: /java-vracanje-vrednosti
---

Dodajmo klasi `Koordinata` novu metodu za ispis, `getAsString()` koja ima povratni tip (*return type*) i vraća vrijednost tipa `String`.

```java
class Koordinata {
    double x;
    double y;

    String getAsString() {
      return "(" + this.x + "," + this.y + ")";
    }
}
```

Zato sad ovu metodu možemo koristiti na svim mjestima gdje bi inače došla vrijednost tipa `String`, npr:

```java
String s = ishodiste.getAsString();
System.out.println(s);
```

Ili, još bolje:

```java
System.out.println(ishodiste.getAsString());
```

Sada možemo testirati klasu `Koordinata` pomoću klase `Stampac`:

{:.ulaz}
```java
class Koordinata {
    double x;
    double y;

    String getAsString() {
      return "(" + this.x + "," + this.y + ")";
    }
}

class Stampac {
  public static void main(String[] args) {

    Koordinata ishodiste;
    ishodiste = new Koordinata();
    ishodiste.x = 0.0;
    ishodiste.y = 0.0;
    System.out.println(ishodiste.getAsString());

  }
}
```

Pokretanje putem komandne linije:

```
% javac Stampac.java
% java Stampac
(0.0,0.0)
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
