---
title: Petlje u Javi
layout: lekcija-java
permalink: /java-petlje
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Semanggi_roundabout%2C_Sekilas_Lintas_Kepolisian_Republik_Indonesia%2C_p38.jpg/721px-Semanggi_roundabout%2C_Sekilas_Lintas_Kepolisian_Republik_Indonesia%2C_p38.jpg)

## `while` petlja

```java
class Hello {

  public static void main (String args[]) {

    int i;
    i = 0;                        // Inicijaliziramo brojac
    System.out.print("Hello ");   // Ispis Hello

    while (i < args.length) {     // poredimo i iteriramo
      System.out.print(args[i]);  
      System.out.print(" ");
      i = i + 1;                  // Povecamo brojac za 1
    }
    System.out.println();         // Zavrsimo liniju
  }

}
```

Isprobati u konzoli:

```
% javac Hello.java
% java Hello
% Hello
%
% java Hello prvi drugi treci cetvrti
% Hello prvi drugi treci cetvrti
```

## `for` petlja

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

## Primjer: Fibonaccijevi brojevi

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

Ovaj primjer pokazujue zbrajanje, while petlju, relacije te deklaracije i pridruživanje varijabli.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
