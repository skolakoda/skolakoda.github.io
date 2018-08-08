---
title: Unutrašnje klase u Javi
layout: lekcija-java
permalink: /ugnjezdene-klase
---

![](https://docs.oracle.com/javase/tutorial/figures/java/classes-inner.gif)

**U Javi možete definirati unutarnju klasu (*inner class*). To je klasa definirana unutar druge klase koju zovemo glavnom klasom (*top-level class*).**

Unutrašnje klase mogu imati svoje metode. Međutim, ne mogu imati statičke članove. Unutarnje klase koje se nalaze unutar dosega glavne klase mogu biti `public`, `private`, `protected`, `final`, `abstract`.

Unutarnje klase mogu biti unutar metoda, petlji i ostalih blokova koda zatvorenih unutar vitičastih zagrada (`{}`). Takve klase nisu članovi pa ne mogu biti deklarirane kao `public`, `private`, `protected`, ili `static`.

Unutarnja klasa ima pristup svim metodama i atributima gornje klase, čak i privatnim.

## Primjer

Pogledajmo na primjeru kako radi unutrašnja klasa:

{:.ulaz}
```java
class Outer {
   int num;
   
   class Inner {
      void print() {
         System.out.println("Pozdrav iz unutarnje klase.");
      }
   }
   
   void innerPrint() {
      Inner inner = new Inner();
      inner.print();
   }
}
   
public class Proba {
   public static void main(String args[]) {

      Outer outer = new Outer();
      outer.innerPrint();

   }
}
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
