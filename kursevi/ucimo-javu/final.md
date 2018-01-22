---
title: Ključna riječ final
layout: lekcija-java
permalink: /java-final
---

**Ključna riječ `final` koristi se u različitim kontekstima označavajući da se ono na što se odnosi ne može naknadno mijenjati.**

## Finalne klase

Primijetit ćete da su neke klase iz Java biblioteke klasa označene kao final, npr:

```
public final class String
```

To znači da klasa ne može imati nikakvih podklasa i time se informira kompajler da može napraviti određene optimizacije koje inače ne bi mogao. To također ima nekih dobrih strana u odnosu na sigurnost i tzv. threadove (konkurentne programske tokove).

## Finalne metode

Metode također mogu biti deklarirane kao `final`. Finalna metoda ne može biti prekrivena (*overriden*) u podklasi. Npr.

```
public final String convertCurrency()
```

## Finalni atributi

Atributi mogu biti `final`. Finalni atributi su zapravo konstante i oni se kad su jednom postavljeni (npr. u konstruktoru), ne mogu više mijenjati.

Atributi koji su istovremeno javni, finalni i statički su prave konstante i u Javi se tako i zovu. Npr. u nekom fizikalnom programu definirali bismo tako brzinu svjetlosti:

```java
public class Physics {

  public static final double c = 2.998E8;

}
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
