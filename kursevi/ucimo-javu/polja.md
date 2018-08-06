---
title: Nizovi u Javi
layout: lekcija-java
permalink: /java-nizovi
image: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Las_filas_003.jpg/640px-Las_filas_003.jpg
---

![polje]({{page.image}})

**Niz ili polje  (*array*) je kolekcija varijabli istog tipa.** Npr. `args[]` u `main()` metodi je niz objekata tipa `String`.

## Primjer: `RandomTest`

Zamislimo klasu koja broji pojavljivanja cifri 0-9. Pretpostavimo da želimo testirati da li je raspodjela brojeva koje generira generator slučajnih brojeva doista uniformna. Ako jest, sve cifre bi trebale imati približno istu frekvenciju nakon duljeg vremena.

Napravit ćemo niz `ndigits` od 10 elemenata. Nulti element će pratiti broj pojavljivanja nula, prvi element broj pojavljivanja jedinica itd. Koristit ćemo klasu `java.util.Random`. Za generiranje slučajnih brojeva koristit ćemo metodu `nextDouble()` iz te klase.

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

U programu su tri `for-petlje`: jedna za inicijaliziranje niza, druga za izvođenje odgovarajućih računa i treća za ispis rezultata. To je uobičajeno u programima koji koriste nizove.

## Deklariracija

Nizovi moraju imati određeni tip, npr. `byte`, `int`, `String` ili `double`. Samo varijable odgovarajućeg tipa mogu biti spremljene u isti niz. Jedno polje ne može istodobno sadržavati recimo brojeve i strune. Polja moraju, kao i ostale varijable, biti deklarirana. Deklariraju se dodavanjem uglatih zagrada `[]` kao sufiks tipu varijable. Na primjer:

```java
int[] k;
float[] yt;
String[] names;
```

Ovo znači da je `k` niz int-ova, `yt` niz float-ova, a `names` niz String-ova. Uglaste zagrade možete po vlastitom izboru dodati i varijabli umjesto tipu:

```java
int k[];
float yt[];
String names[];
```

ili čak jednom i drugom:

```java
int[] k[];
float[] yt[];
String[] names[];
```

## Kreiranje

Deklarirajući niz samo smo rekli koje tipove vrijednosti će sadržavati. Time ga još nismo kreirali. Nizovi se kao i ostali objekti u Javi kreiraju pomoću ključne riječi `new`. Varijable koje smo prethodno proglasili možemo kreirati ovako:

```java
k = new int[3];
yt = new float[7];
names = new String[50];
```

Brojevi u uglatim zagradama određuju duljinu niza, tj. koliko ima članova koji će sadržati vrijednosti. Niz `k` može imati 3 broja tipa int, niz `yt` može sadržati 7 brojeva tipa float, a niz `names` može sadržati 50 String-ova. Ovaj se korak ponekad naziva **alociranjem** jer se njime izdvaja potrebna memorija za niz.

## Inicijalizacija

Članovi niza referenciraju se imenom niza i cijelim brojem koji predstavlja poziciju člana. Ovi se brojevi nazivaju indeksima. Indeksi su cijeli brojevi počevši od 0 (nula). Dakle, gore deklarirano polje `k` ima komponente `k[0]`, `k[1]` i `k[2]`. Budući da se počinje od nule, ne postoji `k[3]`. Pokušaj referenciranja nepostojeće komponente rezultirat će odbacivanjem iznimke [`ArrayIndexOutOfBoundsException`](https://docs.oracle.com/javase/7/docs/api/java/lang/ArrayIndexOutOfBoundsException.html). Članovi niza mogu se upotrebljavati kao i druge varijable:

```java
k[0] = 2;
k[1] = 5;
k[2] = -2;
yt[17] = 7.5f;
names[4] = "Fred";
```

Ovaj se korak naziva inicijalizacijom članova niza. Pod inicijalizacijom niza obično se podrazumijeva dodela vrednosti svim članovima. Naravno, za iole veći niz nećemo inicijalizirati jedan po jedan član, nego se poslužiti petljom kao u sljedećem primjeru:

```java
float[] squares;
squares = new float[101];

for (int i=0; i <= 100; i++) {
   squares[i] = i*i;
}
```

Primijetimo da će brojevi tipa `int` kad budu spremljeni u polje postati `float`, jer je polje tako deklarirano.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
