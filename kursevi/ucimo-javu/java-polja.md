---
title: Polja u Javi
layout: lekcija-java
permalink: /java-polja
image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Las_filas_003.jpg/640px-Las_filas_003.jpg
---

![polje]({{page.image}})

Polje (*array*) je kolekcija varijabli istog tipa. Npr. `args[]` u `main()` metodi je polje objekata tipa String.

Zamislimo klasu koja broji pojavljivanja cifri 0-9. Pretpostavimo da želimo testirati da li je raspodjela brojeva koje generira generator slučajnih brojeva doista uniformna. Ako jest, sve znamenke (cifre) bi trebale imati približno istu frekvenciju nakon duljeg vremena.

Napravit ćemo polje `ndigits` od 10 elemenata. Nulti element će pratiti broj pojavljivanja nula, prvi element broj pojavljivanja jedinica itd. Koristit ćemo klasu `java.util.Random`. Za generiranje slučajnih brojeva koristit ćemo metodu `nextDouble()` iz te klase.

{:.ulaz}
```java
import java.util.Random;
class RandomTest {
  public static void main (String args[]) {
    int[] ndigits = new int[10];
    double x;
    int n;
    Random myRandom = new Random();
    for (int i = 0; i < 10; i++) {      // inicijaliziranje polja
      ndigits[i] = 0;
    }
    for (long i=0; i < 100000; i++) {   // testiranje generatora slucajnih brojeva
      x = myRandom.nextDouble() * 10.0; // novi slucajni broj izmedju 0 i 9
      n = (int) x;                      // pretvaranje u cijeli broj
      ndigits[n]++;                     // biljezimo pojavu dobivenog slucajnog broja
    }
    for (int i = 0; i < 10; i++) {      // ispis rezultata
      System.out.println(i+": " + ndigits[i]);
    }
  }
}
```

Ispis može izgledati otprilike ovako:
```
% javac RandomTest.java
% java RandomTest
0: 9967
1: 9808
2: 10069
3: 10057
4: 9984
5: 9932
6: 10004
7: 10128
8: 9952
9: 10099
```

U programu su tri `for-petlje`: jedna za inicijaliziranje polja, druga za izvođenje odgovarajućih računa i treća za ispis rezultata. To je uobičajeno u programima koji koriste polja.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
