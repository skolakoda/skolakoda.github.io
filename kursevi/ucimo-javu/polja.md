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

## Deklariracija polja

Polja moraju imati određeni tip, npr. `byte`, `int`, `String` ili `double`. Samo varijable odgovarajućeg tipa mogu biti spremljene u isto polje. Jedno polje ne može istodobno sadržavati recimo brojeve i stringove. Polja moraju kao i ostale varijable biti deklarirana. Deklariraju se dodavanjem uglatih zagrada `[]` kao sufiks tipu varijable. Na primjer:

```java
int[] k;
float[] yt;
String[] names;
```

Ovo znači da je `k` polje int-ova, `yt` polje float-a, a `names` polje String-ova. Uglate zagrade možete po vlastitom izboru dodati i varijabli umjesto tipu:

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

## Kreiranje polja

Deklarirajući polje samo smo rekli koje vrste vrijednosti će polje sadržavati. Time ga još nismo kreirali. Polja se kao i ostali objekti u Javi kreiraju pomoću ključne riječi `new`. Varijable koje smo maloprije deklarirali možemo kreirati ovako:

```java
k = new int[3];
yt = new float[7];
names = new String[50];
```

Brojevi u uglatim zagradama specificiraju duljinu polja, tj. koliko ima komponenata koje će sadržati vrijednosti. Polje `k` može imati 3 broja tipa int, polje `yt` može sadržati 7 brojeva tipa float, a polje `names` može sadržati 50 String-ova. Ovaj se korak ponekad naziva alociranjem polja jer se njime izdvaja potrebna memorija za polje.

## Inicijalizacija polja

Pojedinačne komponente polja referenciraju se imenom polja i cijelim brojem koji predstavlja poziciju komponente unutar polja. Ovi se brojevi nazivaju indeksima. Indeksi su cijeli brojevi počevši od 0 (nula). Dakle gore deklarirano polje `k` ima komponente `k[0]`, `k[1]` i `k[2]`. Budući da se počinje od nule, ne postoji `k[3]`. Pokušaj referenciranja nepostojeće komponente rezultirat će odbacivanjem iznimke [`ArrayIndexOutOfBoundsException`](https://docs.oracle.com/javase/7/docs/api/java/lang/ArrayIndexOutOfBoundsException.html). Komponente polja mogu se upotrebljavati kao i druge varijable:

```java
k[0] = 2;
k[1] = 5;
k[2] = -2;
yt[17] = 7.5f;
names[4] = "Fred";
```

Ovaj se korak naziva inicijaliziranjem komponenata polja. Pod inicijaliziranjem polja obično se podrazumijeva inicijaliziranje svih komponenata polja. Naravno da za iole veća polja nećemo inicijalizirati jednu po jednu komponentu, nego ćemo se poslužiti petljom kao u sljedećem primjeru:

```java
float[] squares;
squares = new float[101];

for (int i=0; i <= 100; i++) {
   squares[i] = i*i;
}
```

Primijetimo da će brojevi tipa `int` kad budu spremljeni u ovo polje postati `float` jer je polje tako deklarirano.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
