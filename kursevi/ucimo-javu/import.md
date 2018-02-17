---
title: import u Javi
layout: lekcija-java
permalink: /java-import
---

## Uvoz klasa u program

Da bismo koristili klase bez navođenja njihovog punog imena (koje uključuje ime paketa i ime klase, npr. `java.net.URL`), uvozimo ih naredbom `import` na početku programa:

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

## Univerzalni import

Umjesto uvoza pojedinih klasa moguće je uvesti i cijeli paket, zamjenjujući imena klasa zvjezdicom (`*`). Na primjer, u prethodnom programu mogli smo imati:

```java
import java.net.*;
```

To ne bi utjecalo na konačni kompilirani kod, ali bi kompilacija trajala nešto duže. Prednost ovakvog uvoza je sigurnost da su sve potrebne klase dostupne.

Klase iz paketa `java.lang` ne moramo uvoziti.

## Uvoz statičkih članova

Na primer, možemo importovati statički član `PI` iz klase `Math` u naš program:

```java
import static java.lang.Math.PI;
```

Statički član se zatim može koristi prosto navođenjem imena, kao npr:

```java
return 4.0 / 3.0 * PI;
```

Importovanje svih statičkih članova klase `Math`:

```java
import static java.lang.Math.*;
```

Bitno je zapamtiti da `import` statičkih članova klase nije moguć za klase koje se nalaze u podrazumevanom [bezimenom paketu](https://docs.oracle.com/javase/specs/jls/se8/html/jls-7.html#jls-7.4.2). Paket mora imati ime.

## Imenski konflikti

Ako prilikom uvoza dođe do konflikata u imenima uvezenih i vlastitih klasa ili među samim Java klasama, što je također moguće (npr. `java.util.List` i `java.awt.List`), onda ćemo ipak morati koristiti puna imena tih klasa.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
