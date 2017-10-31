---
title: Zdravo Java
layout: lekcija-uvod
permalink: /zdravo-java
redirect_from:
  - /java-upoznavanje
---

***Java je objektno-orijentisani programski jezik, koji je razvila kompanija Sun Microsystems početkom 1990-ih godina. Koristi se u razvoju softvera za najrazličitija platformska okruženja. Podrazumevani je jezik u izradi mobilnih aplikacija za Android uređaje.***

## Program Hello World

Napravite fajl `HelloWorld.java`:

{:.ulaz}
```java
class HelloWorld {
  public static void main (String args[]) {
    System.out.println("Hello World!");
  }
}
```

## Prevođenje i izvršavanje programa

Tri su koraka u stvaranju programa:

1. pisanje koda
2. kompilacija izvornog koda
3. izvršavanje kompilirnog koda

Kompilacija i izvršavanje izgleda ovako:

```
$ javac HelloWorld.java
$ java HelloWorld
Hello World
```

Primijetite uporabu `.java` ekstenzije kod kompiliranja, ali ne i `.class` ekstenzije kod izvršavanja.

## Naredbe za ispis

{:.ulaz}
```java
class Print {
  public static void main (String args[]) {
    System.out.println("Zdravo svete!");
  }
}
```

Metoda `System.out.println()` ispisuje sadržaj iza kojeg slijedi line-separator. Ako koristite `print()` umjesto `println()` onda nakon ispisa nema znaka za novi redak. Npr,

```java
System.out.print("Zdravo ");
System.out.print("zdravo ");
System.out.print("svete!");
System.out.println();
```

`System.out.println()` prekida liniju i pokreće ispis. U pravilu se ništa neće ispisati na ekranu dok god se ne pojavi znak za prijelom linije.

Možete konkatenirati argumente za `println()` pomoću znaka `+`, npr.

```java
System.out.println("Ucitano je " + args.length + "argumenata s komandne linije");
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](http://www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
