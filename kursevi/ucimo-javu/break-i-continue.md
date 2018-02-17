---
title: "<code>break</code> i <code>continue</code> u Javi"
layout: lekcija-java
permalink: /java-break-i-continue
---

**Nekad je potrebno da izađete iz petlje, nekad da preskočite krug. U ove svrhe se koriste naredbe `break` i `continue`.**

## Naredba `break`

**Naredba `break` uzrokuje izlazak iz petlje, prije nego što uvjet za ulazak u sljedeću iteraciju postane lažan.**

Na primjer, u sljedećoj varijanti programa `CountWheat`, petlja se prekida čim nastane *overflow* pa promenljiva `grains` postane negativna:

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

Pogledajmo obradu i izlaz:

```
% javac CountWheat.java
% java CountWheat
2            6           14              30
62           126         254             510
1022         2046        4094            8190
16382        32766       65534           131070
262142       524286      1048574         2097150
4194302      8388606     16777214        33554430
67108862     134217726   268435454       536870910
1073741822   2147483646      Overflow: grains = -2147483648
Gotovo!
```

Naredba `break` najčešće se koristi unutar naredbe `switch`.

## Naredba `continue`

Naredba `continue` nastavlja na sljedeću iteraciju, ne izvršavajući pri tom ostatak naredbi u tijelu petlje. Ako je to `for` petlja, brojač se inkrementira.

Sljedeći primjer pokazuje kako se može preskočiti obrada parnih elemenata u polju:

```java
for (int i = 0; i < m.length; i++) {

  if (m[i] % 2 == 0) continue;
  // obrada neparnih elemenata...

}
```

U praksi se naredba `continue` rjeđe koristi, jer se u većini slučajeva problem može riješiti i bez nje. Prethodni primjer mogao je izgledati i ovako:

```java
for (int i = 0; i < m.length; i++) {

  if (m[i] % 2 != 0) {
    // obrada neparnih elemenata...

  }

}
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
