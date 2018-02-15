---
title: Klase omotači
layout: lekcija-java
permalink: /java-klase-omotaci
---

**Svi osnovni tipovi podataka imaju odgovarajuće klase omotače (eng. *wrapper classes*), koje sadrže korisne metode za rad sa odgovarajućim tipovima podataka.**

Ove klase imaju dve svrhe:

1. Sadrže odredeni broj korisnih funkcija za rad sa osnovnim tipovima podataka. Na primer, klasa `Integer` sadrži korisne metode, kao što su konverzija `String` tipa u `int` vrednost, pretvaranje `int` vrednosti u `float` i druge. `Integer` klasa omogućava i da definišete minimalne i maksimalne vrednosti odredenog tipa.

2. Neke Java kolekcije ne mogu da skladište vrednosti osnovnih tipova podataka (kao što je `ArrayList`), tako da osnovni tipovi moraju da budu prevedeni u objekte - na primer:

```java
ArrayList myLotteryNumbers = new ArrayList();
myLotteryNumbers.add(new Integer(6));
myLotteryNumbers.add(new Integer(15));
```

## Automatsko konvertovanje u objekte

Java jezik ima mogućnost automatskog konvertovanja u objekte (eng. *autoboxing*), pa se automatski kreira nova instanca za svaki osnovni tip podataka. Jednostavno, umesto:

```java
myLotteryNumbers.add(new Integer(6));
```

možete da napišete:

```java
myLotteryNumbers.add(6);
```

i vrednost osnovnog tipa 6 automatski se konvertuje u instancu `Integer` klase.

## Automatsko konvertovanje u osnovne tipove

Shodno tome, i sledeća linija je validna:

```java
int luckyNumber = myLotteryNumber.get(23);
```

Iako `get(23)` vraća vrednost 24-og elementa (brojanje u Java kolekcijama počinje od nule) kao `Integer` objekat, taj objekat se automatski konvertuje u vrednost osnovnog tipa podataka. To je označeno kao otpakivanje (eng. *unboxing*).


Izvor: Yakov Fain, *Java 8 programiranje* (promo lekcija), Kompjuter biblioteka, Beograd, 2015.
