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
class ImenovanStampac extends Thread {

  public ImenovanStampac(String name) {
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
class ImenovaniStampaciProba {

  public static void main(String[] args) {

    ImenovanStampac stampac1 = new ImenovanStampac("Frank");
    ImenovanStampac stampac2 = new ImenovanStampac("Mary");
    ImenovanStampac stampac3 = new ImenovanStampac("Chris");
    stampac1.start();
    stampac2.start();
    stampac3.start();

  }

}
```

## Primer

Celokupni program u jednom fajlu bi izgledao ovako:

{:.ulaz}
```java
class ImenovanStampac extends Thread {

  public ImenovanStampac(String name) {
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


class ImenovaniStampaciProba {

  public static void main(String[] args) {

    ImenovanStampac stampac1 = new ImenovanStampac("Frank");
    ImenovanStampac stampac2 = new ImenovanStampac("Mary");
    ImenovanStampac stampac3 = new ImenovanStampac("Chris");
    stampac1.start();
    stampac2.start();
    stampac3.start();

  }

}
```

Ovako se pokrece iz zasebnih fajlova:

```
% javac ImenovanStampac.java
% javac ImenovaniStampaciProba.java
% java ImenovaniStampaciProba
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
