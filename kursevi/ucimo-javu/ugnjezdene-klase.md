---
title: Unutarnje klase u Javi
layout: lekcija-java
permalink: /ugnjezdene-klase
---

![](https://docs.oracle.com/javase/tutorial/figures/java/classes-inner.gif)

**U Javi možete definirati unutarnju klasu (*inner class*). To je klasa čije je tijelo definirano unutar druge klase koju tada zovemo glavnom klasom (*top-level class*).**

Unutarnje klase mogu imati svoje metode. Međutim, ne mogu imati statičke članove. Unutarnje klase koje se nalaze unutar dosega glavne klase mogu biti `public`, `private`, `protected`, `final`, `abstract`.

Unutarnje klase mogu biti unutar metoda, petlji i ostalih blokova koda zatvorenih unutar vitičastih zagrada (`{}`). Takve klase nisu članovi pa ne mogu biti deklarirane kao `public`, `private`, `protected`, ili `static`.

Unutarnja klasa ima pristup svim metodama i atributima svoje gornje klase, čak i privatnim.

## Primjer

Pogledajmo na primjeru kako funkcionira naša klasa `Queue`:

```java
public class Queue {

  class Element {

    Object data = null;
    Element next = null;

  }

  Element back = null;

  public void add(Object o) {

    Element e = new Element();
    e.data = o;
    e.next = back;
    back = e;

  }

  public Object remove() {

    if (back == null) return null;
    Element e = back;
    while (e.next != null) e = e.next;   
    Object o = e.data;
    Element f = back;
    while (f.next != e) f = f.next;   
    f.next = null;
    return o;

  }

  public boolean isEmpty() {
    return back == null;
  }

}
```

```java
class QueueTest {
  public static void main(String args[]) {
    Object o;
    Queue myQueue = new Queue();
    Car c = new Car("New York B45 636", 120.0, "Ford", "Taurus", 1997, 4, 4);
    Motorcycle m = new Motorcycle("New York B46 636", 120.0, "Kawasaki", "Ninja", 1997, 4);

    myQueue.add(c);
    System.out.println("Dodan objekt " + c.toString());

    myQueue.add(m);
    System.out.println("Dodan objekt " + m.toString());

    o = myQueue.remove();
    System.out.println("Uklonjen objekt " + o.toString());
  }
}
```

Obrada i izlaz:

```
%javac Queue.java
%javac QueueTest.java
%java QueueTest
Dodan objekt [Automobil: oznaka=New York B45 636 brzina=0.0Max. brzina=120.0]
Dodan objekt Motorcycle@77d134
Uklonjen objekt [Automobil: oznaka=New York B45 636 brzina=0.0Max. brzina=120.0]
```

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
