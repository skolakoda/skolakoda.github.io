---
title: "Naredbe <code>break</code> i <code>continue</code> u Javi"
layout: lekcija-java
permalink: /java-break-i-continue
---

**Nekad je potrebno da izađete iz petlje, nekad da preskočite krug. U te svrhe se koriste naredbe `break` i `continue`.**

## Naredba `break`

**Naredba `break` uzrokuje trenutni izlazak iz petlje, prije nego što se iteracija završi.**

Na primjer, u programu `CountWheat` (vidi [Problem sa pšenicom i šahovskom tablom](https://sr.wikipedia.org/sr-el/%D0%9F%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC_%D1%81%D0%B0_%D0%BF%D1%88%D0%B5%D0%BD%D0%B8%D1%86%D0%BE%D0%BC_%D0%B8_%D1%88%D0%B0%D1%85%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%BC_%D1%82%D0%B0%D0%B1%D0%BB%D0%BE%D0%BC)), petlja se prekida čim nastane *overflow* pa promenljiva `grains` postane negativna:

{:.ulaz}
```java
class CountWheat  {

  public static void main (String args[]) {

    int total = 0;
    int grains = 1;

    for (int square=1; square <= 64; square++) {
      grains *= 2;
      if (grains <= 0) {
        System.out.println("Overflow: grains = " + grains);
        break;
      }
      total += grains;
      System.out.print(total + "\t  ");
      if (square % 4 == 0) System.out.println();
    }
    System.out.println("Gotovo!");

  }

}
```

## Naredba `continue`

Naredba `continue` preskače na sljedeću iteraciju, ne izvršavajući ostatak naredbi u tijelu petlje. Ako je to `for` petlja, brojač se inkrementira.

Sljedeći primjer pokazuje kako se može preskočiti obrada parnih elemenata u nizu:

```java
for (int i = 0; i < m.length; i++) {
  if (m[i] % 2 == 0) continue;
  // obrada neparnih elemenata...
}
```

U praksi se naredba `continue` rjeđe koristi, jer se u većini slučajeva problem može riješiti bez nje. Prethodni primjer mogao je izgledati i ovako:

```java
for (int i = 0; i < m.length; i++) {
  if (m[i] % 2 != 0) {
    // obrada neparnih elemenata...
  }
}
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
