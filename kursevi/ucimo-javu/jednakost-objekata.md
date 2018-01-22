---
title: Ispitivanje jednakosti objekata
layout: lekcija-java
permalink: /java-jednakost-objekata
---

Operatori `<`, `>`, `<=` i `>=` mogu se primijeniti jedino na brojeve i znakove. Ne mogu se koristiti sa Stringovima, booleovskim varijablama, poljima (*arrays*) kao ni s drugim neprimitivnim tipovima za koje nije definiran linearni uređaj.

Za jednakost `==` vrijedi pravilo da je `true` jednako `true` i različito od `false`. Isto tako je “Jack went up the hill” različito od “Jill went up the hill”. Međutim, pokušajte izvršite sljedeći program:

{:.ulaz}
```java
class JackAndJill {

  public static void main(String args[]) {

    String s1 = new String("Jack went up the hill.");
    String s2 = new String("Jack went up the hill.");

    if ( s1 == s2 ) {
      System.out.println("Stringovi su jednaki.");
    }

    else if ( s1 != s2 ) {
      System.out.println("Stringovi nisu jednaki.");
    }
  }
}
```

Vidjet ćete da je rezultat (neočekivano):

```
Stringovi nisu jednaki.
```

To nije ono što očekujemo. Da bismo uspoređivali stringove ili objekte bilo koje druge vrste, koristimo se metodom `equals(Object o)` iz paketa `java.lang.String`. Pogledajmo ispravnu verziju programa koja će raditi onako kako očekujemo:

{:.ulaz}
```java
class JackAndJill {

  public static void main(String args[]) {

    String s1 = new String("Jack went up the hill.");
    String s2 = new String("Jack went up the hill.");

    if ( s1.equals(s2) ) {
      System.out.println("Stringovi su jednaki.");
    }
    else {
      System.out.println("Stringovi nisu jednaki.");
    }
  }
}
```

```
% javac JackAndJill.java
% java JackAndJill
Stringovi su jednaki.
```

Razlozi za ovo sežu prilično duboko u filozofiju Jave i prirodu objekata kakvi su npr. stringovi.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
