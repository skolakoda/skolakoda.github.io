---
title: Tipovi podataka u Javi
layout: lekcija-java
permalink: /java-tipovi-podataka
image: /images/koncepti/podaci/java-tipovi-podataka.png
---

![java tipovi podataka]({{page.image}})

**Postoji osam osnovnih tipova podataka u Javi: četiri za celobrojne vrednosti, dva za vrednosti sa decimalnim zarezom, jedan za smeštanje pojedinačnih karaktera i jedan za logičke (bulove) podatke, koji mogu imati vrednost `true` ili `false`.**

## Primitivni tipovi

U Javi postoji 8 primitivnih tipova podataka:

* boolean
* byte
* short
* int
* long
* float
* double
* char

## Literali

Međutim postoji samo 7 vrsta literala, a jedan među njima (`String`) nije primitivni tip podataka:

* boolean: true ili false
* int: 89, -945, 37865
* long: 89L, -945L, 5123567876L
* float: 89.5f, -32.5f,
* double: 89.5, -32.5, 87.6E45
* char: 'c', '9', 't'
* String: "Ovo je string literal"

Ne postoje literali tipa `short` ili `byte`.

`String` je referentni ili objektni tip, ne primitivni. Međutim, Java kompajler ima posebnu podršku za Stringove, pa može izgledati kao da je to primitivni tip.

{:.ulaz}
```java
class Variables {

  public static void main (String args[]) {

    boolean b = true;
    int low = 1;
    long high = 76L;
    long middle = 74;
    float pi = 3.1415292f;
    double e = 2.71828;
    String s = "Hello World!";

    System.out.println(pi);
  }

}
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
