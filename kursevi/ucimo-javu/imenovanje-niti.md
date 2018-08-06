---
title: Imenovanje niti
layout: lekcija-java
permalink: /java-imenovanje-niti
---

Često je korisno dati različitim nitima iste klase imena po kojima ih možete razlikovati. Sljedeći konstruktor klase `Thread` to omogućuje:

```java
public Thread(String name)
```

Uobičajeno ga je pozvati iz konstruktora podklase s kojom radimo, kao u sljedećem primjeru:

```java
public class NamedBytePrinter extends Thread {

  public NamedBytePrinter(String name) {
    super(name);
  }

  public void run() {
    System.out.println(this.getName() + ": pocinjem!");
    for (int b = -10; b < 10; b++) {
      System.out.println(this.getName() + ": " + b);
    }
    System.out.println(this.getName() + ": gotovo!");
  }

}
```

Metoda `getName()` iz klase `Thread` vratit će ime niti. Sljedeći program omogućuje razlikovanje ispisa prema threadovima koji su ih proizveli:

```java
public class NamedThreadsTest {

  public static void main(String[] args) {

    NamedBytePrinter frank = new NamedBytePrinter("Frank");
    NamedBytePrinter mary = new NamedBytePrinter("Mary");
    NamedBytePrinter chris = new NamedBytePrinter("Chris");
    frank.start();
    mary.start();
    chris.start();

  }

}
```

```
% javac NamedBytePrinter.java
% javac NamedThreadsTest.java
% java NamedThreadsTest
Frank: pocinjem!
Frank: -10
. . .
Frank: -4
Mary: pocinjem!
Chris: pocinjem!
Mary: -10
. . .
Mary: 9
Mary: gotovo!
Chris: 3
. . .
Chris: gotovo!
Frank: -3
. . .
Frank: 9
Frank: gotovo!
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
