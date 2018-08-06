---
title: Argumenti komandne linije u Javi
layout: lekcija-java
permalink: /java-argumenti-komandne-linije
---

**Argumenti komandne linije su vrednosti koje prosleđujemo programu putem komandne linije.**

## Primer

Primer klase koja prima, izlistava i štampa argumente komandne linije:

```java
class StampaArgumente {
  public static void main (String args[]) {

    for (int i = 0; i < args.length; i++) {
      System.out.println(args[i]);
    }

  }
}
```

Prilikom pokretanja programa, nakon naziva klase sledi lista argumenata, na primer:

```
java StampaArgumente zdravo svete
```

Argumenti se s komandne linije prenose u program kao niz stringova. 

{:.uokvireno.ideja}
Svi argumenti komandne linije prenose se kao strune, nikad kao brojevi. Ako nam trebaju brojevi, kasnije menjamo tip podatka u broj.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
