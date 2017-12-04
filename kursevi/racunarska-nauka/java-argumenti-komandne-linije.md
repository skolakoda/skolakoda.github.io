---
title: Argumenti komandne linije u Javi
layout: lekcija-uvod
permalink: /java-argumenti-komandne-linije
---

Primer klase koja prima, izlistava i štampa argumente komandne linije:

```java
class printArgs {

  public static void main (String args[]) {
    for (int i = 0; i < args.length; i++) {
      System.out.println(args[i]);
    }
  }

}
```

Prilikom izvršenja, nakon naziva klase sledi lista argumenata. Argumenti se s komandne linije prenose u program kao polje stringova. Početna komponenta svakog polja uvijek je nulta. Npr,

```
% java printArgs Hello There

args[0] je string "Hello".
args[1] je string "There".
args.length je 2.
```

Svi argumenti s komandne linije prenose se kao strune (stringovi), nikad kao brojevi. Kasnije menjamo tip podatka u broj.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
