---
title: Rad sa nitima u Javi
layout: lekcija-java
permalink: /java-rad-sa-nitima
---

U Javi postoje dva načina da klasu pretvorimo u nit. Jedan je da je učinimo podklasom klase [Thread](https://docs.oracle.com/javase/7/docs/api/java/lang/Thread.html). Ako je naša klasa već podklasa neke druge klase onda to neće biti moguće, pa ćemo koristiti drugi način, a to je implementiranje sučelja `java.lang.Runnable`.

Klasa `Thread` ima tri glavne metode koje za upravljanje nitima:

```java
public native synchronized void start()
public void run()
public final void stop()
```

Metoda `start()` priprema nit za izvršavanje. Metoda `run()` je ta koja obavlja zadaću namijenjenu niti. Nit se normalno završava kad ona završi. Nit se može zaustaviti i pomoću metode `stop()`, ali se taj način pokazao nesigurnim i zbog toga je ova metoda *deprecated*.

Metoda `run()` se ne poziva eksplicitno. Ona će, nakon što ste pozvali metodu `start()` biti automatski pozvana kad za to dođe vrijeme.

Sučelje `Runnable` omogućuje uporabu koncepta threadova u klasama koje ne mogu biti podklase klase `Thread`. Ono deklarira samo jednu metodu, `run()`:

```java
public abstract void run()
```

Ako za argument konstruktora `Thread()` supstituirate objekt iz klase koja implementira `Runnable`, moći ćete njegovu `run()` metodu koristiti umjesto `run()` metode iz klase `Thread`.

## Jednostavna nit

Kad pišete program koji sadrži niti, možete zamišljati da pišete više različitih programa od kojih svaki ima svoju `run()` metodu. Sljedeći primjer je nit, podklasa `Thread`, koja ispisuje brojeve od -10 do 9:

```java
public class BytePrinter extends Thread {

  public void run() {
    System.out.println("pocinjem!");
    for (int b = -10; b < 10; b++) {
      System.out.println(b);
    }
    System.out.println("gotovo!");
  }

}
```

Thread ćete lansirati tako da ga instancirate, a zatim pozovete njegovu `start()` metodu. Na primjer, da bismo instancirali klasu `BytePrinter`, postupit ćemo ovako:

```java
BytePrinter bp = new BytePrinter();
```

Sad možete pozvati `start()` metodu:

```java
bp.start();
```

Jednom kad je `start()` metoda pozvana, izvršavanje programa se dijeli na dva dijela. Jedan dio CPU vremena koristi se za naredbe koje dolaze iz `bp.start()`, a drugi dio za izvršavanje threada `bp`. Ne može se unaprijed predvidjeti koje će naredbe biti izvršene prve. Najvjerojatnije je da će biti pomiješane. Thread `bp` će se nastaviti izvršavati sve dok ne nastupi jedan od sljedećih sedam uvjeta:

- `run()` metoda je završila.
- `stop()` metoda je pozvana.
- `suspend()` metoda je pozvana.
- `sleep()` metoda je pozvana.
- `yield()` metoda je pozvana.
- `bp` je blokiran jer čeka nedostupni resurs
- `bp` je istisnut (*preempted*) od nekog drugog threada.

Jednom kad programska kontrola dosegne kraj `run()` metode, thread se gasi. Ne možete ga ponovo pokrenuti, ali možete kreirati novu instancu i nju pokrenuti.

## Višestruke niti

Sljedeći program lansira tri niti tipa BytePrinter:

```java
public class ThreadsTest {

  public static void main(String args[]) {

    BytePrinter bp1 = new BytePrinter();
    BytePrinter bp2 = new BytePrinter();
    BytePrinter bp3 = new BytePrinter();
    bp1.start();
    bp2.start();
    bp3.start();

  }

}
```

Redosljed ispisa koje proizvodi ovaj program ovisi o implementaciji i uglavnom je nepredvidljiv. Može izgledati otprilike ovako:

```
% javac BytePrinter.java
% javac ThreadsTest.java
% java ThreadsTest
pocinjem!
-10
. . .
-4
pocinjem!
pocinjem!
-10
-10
-9
. . .
9
gotovo!
3
. . .
9
gotovo!
-3
-2
. . .
9
gotovo!
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
