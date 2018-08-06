---
title: Finalni blok u Javi
layout: lekcija-java
permalink: /java-finalni-blok
---

Nakon `try` bloka može slijediti polji mnogo `catch` blokova. Nakon njih može doći blok `finally`.

{:.ulaz}
```java
public class HelloThere {

  public static void main(String[] args) {

    try {
      System.out.println("Hello " + args[0]);
    }
    catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("Hello Whoever you are.");
    }
    finally {
      System.out.println("How are you?");  
    }


  }

}
```

U slučaju da svi `catch` blokovi sadrže mnogo zajedničkih naredbi moguće je uštediti na linijama koda tako da se zajednički dijelovi stave u finalni blok.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
