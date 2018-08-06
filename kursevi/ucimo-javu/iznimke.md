---
title: Iznimke (exceptions)
layout: lekcija-java
permalink: /java-iznimke
---

Tradicionalni programski jezici se služe postavljanjem različitih flagova i specifičnim povratnim vrijednostima, npr. `–1` da bi naznačili neki problem koji je nastao tokom izvršavanja programa. Java se služi konceptom izbacivanja iznimki (*exception throwing*). Prednosti ovog pristupa su:

- Prisiljava programera na provjeru pogrešaka (iznimku, za razliku od flaga, nije moguće ignorirati).
- Program je pregledniji jer je kod za obradu pogrešaka jasno odvojen od ostalog koda (tako algoritam nije zagađen mnoštvom `if-else` blokova koji provjeravaju flagove i povratne vrijednosti).
- Algoritam je moguće implementirati efikasnije.

Pogledajmo sljedeći program:

```java
public class HelloThere {

  public static void main(String[] args) {

    System.out.println("Hello " + args[0]);

  }

}
```

Pretpostavimo da ga izvršimo bez argumenata, dakle ne postoji args[0]. Java runtime system bi izbacio iznimku ArrayIndexOutOfBoundsException i završio program.

```
% javac HelloThere.java
% java HelloThere
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException
        at HelloThere.main(HelloThere.java:5)
```

## Razne vrste iznimaka

Iznimke su objekti neke podklase klase [java.lang.Throwable](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html). Mogu biti:
- Provjerene iznimke (*Checked Exceptions*)
- Pogreške (*Errors*)
- Izvršne iznimke (*Runtime Exceptions*)

Provjerene iznimke moraju se obraditi u vrijeme kompiliranja. Izvršne iznimke ne moraju. Pogreške obično ne mogu. Ovdje je dio [hijerarhijskog stabla](https://docs.oracle.com/javase/7/docs/api/java/lang/package-tree.html) klase Throwable:

```
java.lang.Object
   |
   +---java.lang.Throwable
           |
           +---java.lang.Error
           |
           +---java.lang.Exception
                   |
                   +---java.io.IOException
                   |
                   +---java.lang.RuntimeException
                           |
                           +---java.lang.ArithmeticException
                           |
                           +---java.lang.ArrayIndexOutOfBoundsException
                           |
                           +---java.lang.IllegalArgumentException
                           |
                           +---java.lang.NumberFormatException
```

Glavnina koda nalazi se u klasi `java.lang.Throwable`. Većina njenih podklasa samo donosi nove konstruktore koji mijenjaju poruku iznimke.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
