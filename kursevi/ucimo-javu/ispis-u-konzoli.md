---
title: Ispis u konzoli
layout: lekcija-java
permalink: /java-ispis-u-konzoli
---

{:.ulaz}
```java
class Print {
  public static void main (String args[]) {
    System.out.println("Zdravo svete!");
  }
}
```

Metoda `System.out.println()` ispisuje sadržaj iza kojeg slijedi line-separator. Ako koristite `print()` umjesto `println()` onda nakon ispisa nema znaka za novi redak. Npr,

{:.ulaz}
```java
class Print {
  public static void main (String args[]) {
    System.out.print("Zdravo ");
    System.out.print("zdravo ");
    System.out.print("svete!");
    System.out.println();
  }
}
```

`System.out.println()` prekida liniju i pokreće ispis. U pravilu se ništa neće ispisati na ekranu dok god se ne pojavi znak za prijelom linije.

Možete konkatenirati argumente za `println()` pomoću znaka `+`, npr.

```java
System.out.println("Ucitano je " + args.length + "argumenata s komandne linije");
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
