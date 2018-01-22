---
title: Hvatanje izuzetaka
layout: lekcija-java
permalink: /hvatanje-izuzetaka
---


## `try-catch` blok

Pri odbacivanju iznimke ne dolazi do pucanja programa. Odbacivanje iznimke je upozorenje na problem za koji se treba pobrinuti. Možemo to učiniti tako da naredbu koja odbacuje iznimku zatvorimo unutar `try-catch` bloka.

{:.ulaz}
```java
public class HelloThere {

  public static void main(String[] args) {

    try {
      System.out.println("Hello " + args[0]);
    }
    catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("Hello Whoever you are.");
    }

  }

}
```

Sada bismo imali:

```
% javac HelloThere.java
% java HelloThere
Hello Whoever you are.
```

## Rukovanje iznimkama

Što možemo učiniti s uhvaćenom iznimkom?

- Riješiti problem i pokušati ponovo.
- Izvesti neki drugi blok koda.
- Izaći iz aplikacije pomoću metode `System.exit()`
- Ponovno izbaciti iznimku.
- Izbaciti novu (različitu iznimku).
- Vratiti default vrijednost (ako metoda nije `void`).
- Ne učiniti ništa i završiti metodu (ako je metoda `void`).
- Ne učiniti ništa i nastaviti s metodom (ovo je rizično i rijetko kad opravdano; ima smisla samo ako možete garantirati da promatrani blok neće odbaciti iznimku ili da nekorektno izvršavanje naredbi unutar `try` bloka neće narušiti daljni kod).

Napomenimo da samo ispisivanje poruke o pogreški općenito nije prihvatljiv odgovor na pojavu iznimke.

## Hvatanje višestrukih iznimaka

{:.ulaz}
```java
public class HelloThere {

  public static void main(String[] args) {

    int repeat;

    try {
      repeat = Integer.parseInt(args[0]);
    }
    catch (ArrayIndexOutOfBoundsException e) {
      //odabiremo default vrijednost
      repeat = 1;
    }
    catch (NumberFormatException e) {
      // ispisujemo poruku o pogreski
      System.err.println("Pozivanje: java HelloThere broj_ponavljanja" );
      System.err.println("npr. java HelloThere 5" );
      return;
    }

    for (int i = 0; i < repeat; i++) {
      System.out.println("Hello");
    }

  }

}
```

Ako se pojavi iznimka čiji je tip naveden u nekom od catch blokova, ona će biti uhvaćena. Ako više catch blokova prepozna tip iznimke, obradit će ga prvi po redu.

{:.ulaz}
```java
public class HelloThere {

  public static void main(String[] args) {

    int repeat;

    try {
      // mogucnost pojave NumberFormatException i ArrayIndexOutOfBoundsException
      repeat = Integer.parseInt(args[0]);

      // mogucnost pojave ArithmeticException
      int n = 2/repeat;

      // mogucnost pojave StringIndexOutOfBoundsException
      String s = args[0].substring(5);
    }
    catch (ArrayIndexOutOfBoundsException e) {
      //odabiremo default vrijednost
      repeat = 1;
    }
    catch (NumberFormatException e) {
      // ispisujemo poruku o pogreski
      System.err.println("Pozivanje: java HelloThere broj_ponavljanja" );
      System.err.println("npr. java HelloThere 5" );
      return;
    }
    catch (Exception e) {
      // ispisujemo poruku o pogreski i izlazimo
      System.err.println("Neocekivana iznimka");
      e.printStackTrace();
      return;
    }

    for (int i = 0; i < repeat; i++) {
      System.out.println("Hello");
    }

  }

}
```

Rijetko se pokušava uhvatiti generički `Error` ili `Throwable` jer za takvom općenitom iznimkom zaista je teško počistiti nered.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
