---
title: Ispitivanje jednakosti objekata
layout: lekcija-java
permalink: /java-jednakost-objekata
---

**Operatori `<`, `>`, `<=` i `>=` mogu se primijeniti jedino na brojeve i znakove. Ne mogu se koristiti sa drugim tipovima.**

## Poređenje po referenci

Ako pokušate da poredite dva identična teksta pomoću jednakosti `==`, rezultat neće biti ono što očekujete:


{:.ulaz}
```java
class JaCitam {

  public static void main(String args[]) {

    String s1 = new String("Ja čitam.");
    String s2 = new String("Ja čitam.");

    if (s1 == s2) {
      System.out.println("Strune su jednake.");
    }
    else if (s1 != s2) {
      System.out.println("Strune nisu jednake.");
    }
  }
}
```

Vidjet ćete da je rezultat:

```
Strune nisu jednake.
```

## Poređenje po vrijednosti

Da bismo uspoređivali strune ili objekte bilo koje druge vrste, koristimo se metodom `equals` iz paketa `java.lang.String`. Pogledajmo ispravnu verziju programa koja će raditi onako kako očekujemo:

{:.ulaz}
```java
class JaCitam {

  public static void main(String args[]) {

    String s1 = new String("Ja čitam.");
    String s2 = new String("Ja čitam.");

    if (s1.equals(s2)) {
      System.out.println("Strune su jednake.");
    }
    else {
      System.out.println("Strune nisu jednake.");
    }
  }
}
```

U konzoli:

```
% javac JaCitam.java
% java JaCitam
Strune su jednake.
```

Razlozi za ovo sežu prilično duboko u filozofiju Jave i prirodu objekata, ali ukratko, u pitanju su dve različite fizičke kopije, koje imaju isti sadržaj. Prvi način ispituje jel isti primerak objekta u pitanju, a drugi jel isti sadržaj.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
