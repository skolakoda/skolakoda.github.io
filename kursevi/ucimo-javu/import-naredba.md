---
title: Uvoz klasa i paketa
layout: lekcija-java
permalink: /java-import-naredba
---

Da bismo izbjegli pisanje potpunih imena kao npr. `java.net.URL`, možemo se poslužiti importiranjem potrebnih klasa tako da na početak programa dodamo odgovarajući broj `import` naredbi.

```java
import java.net.URL;
import java.net.MalformedURLException;

public class URLSplitter {

  public static void main(String[] args) {

    for (int i = 0; i < args.length; i++) {
      try {
        URL u = new URL(args[i]);
        System.out.println("Protocol: " + u.getProtocol());
        System.out.println("Host: " + u.getHost());
        System.out.println("Port: " + u.getPort());
        System.out.println("File: " + u.getFile());
        System.out.println("Ref: " + u.getRef());
      }
      catch (MalformedURLException e) {
        System.err.println(args[i] + " nije valjani URL ");
      }
    }

  }
}
```

Ako prilikom uvoza dođe do konflikata u imenima uvezenih i vlastitih klasa ili, što je također moguće, među samim Java klasama, npr. `java.util.List` i `java.awt.List`, onda ćemo ipak morati koristiti puna imena tih klasa.

Umjesto uvoza pojedinih klasa moguće je importirati i cijeli paket, zamjenjujući imena klasa zvjezdicom (`*`). Na primjer, u prethodnom programu mogli smo imati:

```java
import java.net.*;
```

To ne bi utjecalo na konačni kompilirani kod, ali bi kompilacija trajala nešto duže. Prednost ovakvog uvoza je sigurnost da su sve potrebne klase dostupne.

Klase iz paketa `java.lang` ne moramo importirati.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
