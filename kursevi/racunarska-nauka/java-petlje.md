---
title: Petlje u Javi
layout: lekcija-uvod
permalink: /java-petlje
---

## For petlja

{:.ulaz}
```java
class Count {
  public static void main (String args[]) {
    int i;
    for (i = 0; i < 50; i = i+1) {
      System.out.println(i);
    }
  }
}
```

Deklaracija varijabli unutar petlje je kraći kod ali skuplja operacija:

{:.ulaz}
```java
class Count {
  public static void main (String args[]) {
    for (int i = 0; i < 50; i = i+1) {
      System.out.println(i);
    }
  }
}
```

Java ima operatore za inkrement (`++`) i dekrement (`--`) kao C. Inkrementiranje:

{:.ulaz}
```java
class Count {
  public static void main (String args[]) {
    for (int i = 0; i < 50; i++) {
      System.out.println(i);
    }
  }
}
```

Dekrementiranje:

{:.ulaz}
```java
class Count {
  public static void main (String args[]) {
    for (int i = 50; i > 0; i--) {
      System.out.println(i);
    }
  }
}
```

## Fibonaccijevi brojevi

{:.ulaz}
```java
class Fibonacci {

  public static void main (String args[]) {

    int low = 0;
    int high = 1;

    System.out.println(low);
    while (high < 50) {
      System.out.println(high);
      int temp = high;
      high = high + low;
      low = temp;
    }
  }
}
```

Primjer pokazujue zbrajanje, while-petlju, relacije te deklaracije i pridruživanje varijabli.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
