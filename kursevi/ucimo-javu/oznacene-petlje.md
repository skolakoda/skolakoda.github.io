---
title: Označene petlje
layout: lekcija-java
permalink: /java-oznacene-petlje
---

U pravilu unutar ugnjiježdenih petlji naredbe `break` i `continue` uzrokuju napuštanje najunutarnjije petlje koja ih obuhvaća. Pogledajte sljedeći primjer dvije ugniježdene petlje:

```java
for (int i=1; i < 10; i++) {
  for (int j=1; j < 4; j++) {
    if (j == 2) break;
    System.out.println(i + ", " + j);
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

jer se unutarnja petlja prekine svaki put kad `j` postane 2, ali se vanjska petlja izvrši do kraja. Ako želimo prekinuti obje petlje, labelirajmo vanjsku petlju i navedimo tu labelu u `break` naredbi:

```java
iloop: for (int i=1; i < 3; i++) {
  for (int j=1; j < 4; j++) {
    if (j == 2) break iloop;
    System.out.println(i + ", " + j);
  }
}
```

Sada bi rezultat izvršavanja bio:

```
1, 1
```

jer je `j` postao 2, a vanjska petlja je prekinuta.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
