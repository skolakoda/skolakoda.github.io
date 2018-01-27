---
title: Sinhronizacija niti
layout: lekcija-java
permalink: /java-sinhronizacija-niti
---

## Sinkronizacija: problem

Do sad smo promatrali threadove koji se izvršavaju nezavisno jedan od drugoga. Ni jedan thread nije morao znati što rade ostali. Ponekad, međutim, threadovi moraju dijeliti podatke. U tom slučaju važn je osigurati da jedan thread ne promijeni podatke u vrijeme dok ih drugi thread koristi. Klasični primjer je pristup datoteci. Ako jedan thread piše u datoteku u vrijeme dok je drugi thread čita, vjerojatno je da će ovaj drugi thread dobiti nekonzistentne podatke. Promotrimo, na primjer, sljedeći problem:

```java
public class Counter {

  int i = 0;

  public void count() {
    int limit = i + 100;
    while (i++ != limit)  System.out.println(i);
  }

}

public class CounterThread extends Thread {

  Counter c;  

  public CounterThread(Counter c) {
    this.c = c;
  }

  public void run() {
    c.count();
  }     

  public static void main(String[] args) {

    Counter c = new Counter();
    CounterThread ct1 = new CounterThread(c);
    CounterThread ct2 = new CounterThread(c);
    ct1.start();
    ct2.start();

  }
}
```

Program će se ponašati posve nedeterministički. Nema pravila po kojemu bismo mogli predvidjeti kakav će biti izlaz.

```
% javac Counter.java
% javac CounterThread.java
% java CounterThread
. . . ? ? ? . . .
```

## Sinkronizacija: nekoliko pokušaja rješenja

Ključni je problem u prethodnom programu što dva threada modificiraju attribute istog objekta. Pri tome, redosljed modificiranja je neodređen.

Postoji više mogućih rješenja ovog problema. Nisu, međutim, sva rješenja dobra u svim situacijama. Na primjer, jedno od najjednostavnijih i najizravnijih je učiniti objekt nepromjenjivim (immutable), dakle ne dozvoliti da se mijenja nakon što je jednom konstruiran. Nepromjenjivost možete postići tako da sve attribute proglasite za private, klasu ne snabdijete nikakvom setter metodom i ne dozvolite ni jednoj metodi iz klase (osim konstruktorima) da mijenjaju vrijednosti atributa. Međutim, takvo rješenje je neprikladno za naš problem jer metoda count() mora mijenjati atribut i.

Sličnu stvar možete učiniti tako da attribute deklarirate kao final. Na taj način oni se ne mogu mijenjati nakon što je objekt konstruiran. No to je također neprikladno.

U našem primjeru bilo bi jednostavno učiniti varijablu i lokalnom umjesto da bude atribut:

```java
public class Counter {

  public void count() {
    int i = 0;
    int limit = 100;
    while (i++ != limit)  System.out.println(i);
  }

}
```

Time što smo i učinili lokalnom varijablom, svaki thread koji poziva metodu `count()` na tom objektu dobit će svoju vlastitu varijablu i. Svaki put kad se metoda pozove, zasebni stack se konstruira za njene varijable i argumente. Različiti pozivi metode ne dijele varijable.
Međutim, semantika programa više nije ista. Sada svaki thread broji od 0 do 100. Ako je to bila namjera, rješenje je dobro, ali ako smo htjeli da prvi thread broji od 0 do 100, a drugi od 101 do 200, rješenje ne valja.

Ponešto općenitije rješenje koje kombinira prethodna dva bilo bi kopirati vrijednost atributa u lokalnu varijablu, a zatim mijenjati samo nju, ostavljajući atribut nepromijenjen unutar metode. Na primjer:

```java
public class Counter {

  int i = 0;

  public void count() {
    int i = this.i;
    int limit = i + 100;
    while (i++ != limit) System.out.println(i);
  }

}
```

Primijetite kako sada lokalna varijabla i prekriva atribut i, na koji se referiramo pomoću ključne riječi this.
Ovaj trik je uglavnom koristan kad ne trebate vratiti promijenjenu vrijednost varijable natrag u atribut nakon što je metoda završila. Sljedeća varijanta sačuvat će stanje, ali je još uvijek podložna nekim, manje očiglednim, sinkronizacijskim problemima:

```java
public class Counter {

  int i = 0;

  public void count() {
    int i = this.i;
    int limit = i + 100;
    while (i++ != limit) System.out.println(i);
    this.i = i;
  }

}
```

Ovo je, u stvari, još gore nego originalni primjer jer će u 99% slučajeva raditi dobro i problem će biti gotovo nemoguće uočiti ako ga se ne primijeti u izvornom kodu.

## Ključna riječ synchronized

Java vam omogućuje da pod određenim uvjetima možete garantirati da neka metoda neće istodobno biti pozvana od više threadova. Ostali threadovi morat će čekati dok prvi thread ne završi. U međuvremenu oni stoje blokirani.

Ovo se postiže primjenom ključne riječi synchronized na promatranu metodu:

```java
public class SychronizedCounter extends Counter {

  public synchronized void count() {
    int limit = i + 100;
    while (i++ != limit) System.out.println(i);
  }

}
```

Međutim, sinkronizacija ima svoje nedostatke. Ona bitno smanjuje preformanse. Općenito, sinkronizirane metode su tri do deset puta sporije od ekvivalentnih nesinkroniziranih. Sinkronizacija također ne otklanja automatski sve pogreške koje proizlaze iz threadovskog načina izvršavanja.

## Sinkroniziranje na objektima

Svakom objektu dodijeljen je tzv. monitor. Kad ključnu riječ synchronized primjenite na neku metodu, dobijete monitor određenog objekta, odnosno zaključavate ga. Dok god jedan thread posjeduje monitor, odnosno lokot nekog objekta, ni jedan drugi thread ne može dobiti taj lokot. (Drugi threadovi će, eventualno moći dobiti lokote drugih objekata iz iste klase).

Kad koristite ključnu riječ synchronized kako biste specificirali da je neka metoda sinkronizirana, zaključavate određeni objekt kojemu ta metoda pripada. (Statičke metode mogu također biti sinkronizirane. U tom slučaju lokot se stavlja na objekt iz klase java.lang.Class koji je pridružen klasi vašeg objekta.) Kako postoji samo jedan lokot za svaki objekt, nije samo sinkronizirana metoda ta koju ne mogu pozvati ostali threadovi istodobno. Također se to odnosi na ostale inkronizirane metode ili blokove koda u tom objektu.

Sinkronizirati možete i na nižim razinama nego što je razina metode. Na primjer, sljedeći program iamo bi problema ako bi drugi thread promijenio vrijednost od i ili this.i u vrijeme dok se obavlja pridruživanje.

```java
public class Counter {

  int i = 0;

  public void count() {
    int i = this.i;
    int limit = i + 100;
    while (i++ != limit)  System.out.println(i);
    this.i = i;
  }

}
```

To se može ispraviti tako da sinkronizirate linije koda koje referenciraju taj atribut:

```java
  public void count() {
    synchronized (this) {
      int i = this.i;
    }
    int limit = i + 100;
    while (i++ != limit) System.out.println(i);
    synchronized (this) {
      this.i = i;
    }
  }
```

U ovom primjeru sinkronizirali smo sam objekt, tj. this. Možete također sinkronizirati i druge objekte. Na primjer, sljedeća statička metoda koristi jednostavni bubble sort za sortiranje polja cijelih brojeva. Sinkronizirat ćemo to polje da bismo bili sigurni da ga drugi threadovi neće dirati dok ga sortiramo.

```java
  public static void bubbleSort(int[] n) {

    boolean sorted = false;
    synchronized(n) {
      while (!sorted) {
        sorted = true;
        for (int i=0; i < n.length - 1; i++) {
          if (n[i] > n[i+1]) {
            int temp = n[i];
            n[i] = n[i+1];
            n[i+1] = temp;
            sorted = false;
          } // end if  
       } // end for
     } // end while
   } // end synchronized

 } // end sort
```

Ovdje se ne brinete o tome da se this objekt možda ne promijeni od strane drugog threada. Na kraju, metoda je statička. Brinete se o tome da drugi threadovi ne promijene polje dok ga sortirate.

Također primijetite da u pravilu ne znate ništa o tome što se događa u programu izvan vaše metode. Možda će biti samo jedan thread koji želi pristup polju, a možda će ih biti mnogo. Da li treba ili ne treba sinkronizirati metodu kao što je ova, ovisi o tome gdje će se ona koristiti. Ako pišete metode i klase opće namjene koje će se koristiti u mnogim različitim programima, morate pretpostaviti da će različiti threadovi pozivati metodu istodobno.

Polja možete sinkronizirati jer su to objekti. Ne možete sinkronizirati primitivne tipove podataka kao što su int, float, ili char.

Stringove možete sinkronizirati jer su objekti, ali je to nepotrebno jer su oni i tako nepromjenjivi. (String ne možete promijeniti, možete samo napraviti novi.)


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
