---
title: Klase omotači
layout: lekcija-java
permalink: /java-klase-omotaci
---

![](https://i0.wp.com/www.javatechblog.com/wp-content/uploads/2016/03/autoboxing-and-unboxing-in-java.png)

**Svi osnovni tipovi podataka imaju odgovarajuće klase omotače (*wrapper classes*), koje sadrže korisne metode za rad sa odgovarajućim tipovima podataka.**

Klase omotači imaju dve svrhe:

1. Sadrže odredeni broj korisnih funkcija za rad sa osnovnim tipovima podataka. Na primer, klasa `Integer` sadrži metode kao što su konverzija `String` tipa u `int`, pretvaranje `int` u `float` i druge. `Integer` klasa omogućava i da definišete minimalne i maksimalne vrednosti odredenog tipa.

2. Neke Java kolekcije ne mogu da skladište vrednosti osnovnih tipova podataka (kao što je `ArrayList`), tako da osnovni tipovi moraju da budu prevedeni u objekte - na primer:

```java
ArrayList mojiBrojevi = new ArrayList();
mojiBrojevi.add(new Integer(6));
mojiBrojevi.add(new Integer(15));
```

## Automatsko pakovanje u objekat (*autoboxing*)

Java ima mogućnost automatskog konvertovanja iz primitivnog tipa u odgovarajući objekat (*autoboxing*), pa se automatski kreira nova instanca za svaki osnovni tip podataka.

Jednostavno, umesto:

```java
mojiBrojevi.add(new Integer(6));
```

možete da napišete:

```java
mojiBrojevi.add(6);
```

i vrednost osnovnog tipa `6` automatski se konvertuje u instancu `Integer` klase.

## Automatsko otpakivanje vrednosti (*unboxing*)

Kompajler će raditi i obrnutu konverziju, iz objekta omotač klase u vrednost koju enkapsulira. Shodno tome, i sledeća linija je validna:

```java
int luckyNumber = myLotteryNumber.get(23);
```

Iako `get(23)` vraća vrednost 24-og elementa (index počinje od nule) kao `Integer` objekat, taj objekat se automatski konvertuje u vrednost osnovnog tipa podataka. To je označeno kao otpakivanje (*unboxing*).


Izvor: Yakov Fain, *Java 8 programiranje* (promo lekcija), Kompjuter biblioteka, Beograd, 2015.
