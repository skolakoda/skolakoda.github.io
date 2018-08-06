---
title: "Označene petlje (<i>labeled loops</i>)"
layout: lekcija-java
permalink: /java-oznacene-petlje
---

Unutar ugnjiježdenih petlji, naredbe `break` i `continue` uzrokuju napuštanje najunutarnjije petlje koja ih obuhvaća. Pogledajte sljedeći primjer dvije ugniježdene petlje:

{:.ulaz}
```java
class Primer {
  public static void main (String args[]) {

    for (int i=1; i < 10; i++) {
      for (int j=1; j < 4; j++) {
        if (j == 2) break;
        System.out.println(i + ", " + j);
      }
    }

  }
}
```

Rezultat izvršavanja bio bi

```
1, 1
2, 1
3, 1
4, 1
5, 1
6, 1
7, 1
8, 1
9, 1
```

jer se unutarnja petlja prekine svaki put kad `j` postane 2, ali se vanjska petlja izvrši do kraja. Ako želimo prekinuti obje petlje, označimo (labelirajmo) vanjsku petlju i navedimo tu labelu u `break` naredbi:

{:.ulaz}
```java
class Primer {
  public static void main (String args[]) {

    iloop: for (int i=1; i < 3; i++) {
      for (int j=1; j < 4; j++) {
        if (j == 2) break iloop;
        System.out.println(i + ", " + j);
      }
    }

  }
}
```

Sada bi rezultat izvršavanja bio:

```
1, 1
```

jer je `j` postao 2, a vanjska petlja je prekinuta.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
