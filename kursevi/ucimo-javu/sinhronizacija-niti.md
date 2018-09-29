---
title: Sinhronizacija niti
layout: lekcija-java
permalink: /java-sinhronizacija-niti
---

## Problem

Do sad smo promatrali threadove koji se izvršavaju nezavisno jedan od drugoga. Ni jedan thread nije morao znati što rade ostali. Ponekad, međutim, threadovi moraju dijeliti podatke. U tom slučaju važno je osigurati da jedan thread ne promijeni podatke u vrijeme dok ih drugi thread koristi.

Klasični primjer je pristup datoteci. Ako jedan thread piše u datoteku u vrijeme dok je drugi thread čita, vjerojatno je da će ovaj drugi thread dobiti nekonzistentne podatke. Promotrimo, na primjer, sljedeći problem:

{:.ulaz}
```java
class Counter {

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

## Nekoliko pokušaja rješenja

Ključni je problem u prethodnom programu što dva threada modificiraju attribute istog objekta. Pri tome, redosljed modificiranja je neodređen.

Postoji više mogućih rješenja ovog problema. Nisu, međutim, sva rješenja dobra u svim situacijama. Na primjer, jedno od najjednostavnijih i najizravnijih je učiniti objekt nepromjenjivim (*immutable*), dakle ne dozvoliti da se mijenja nakon što je jednom konstruiran. Nepromjenjivost možete postići tako da sve attribute proglasite za private, klasu ne snabdijete nikakvom *setter* metodom i ne dozvolite ni jednoj metodi iz klase (osim konstruktorima) da mijenjaju vrijednosti atributa. Međutim, takvo rješenje je neprikladno za naš problem jer metoda `count()` mora mijenjati atribut `i`.

Sličnu stvar možete učiniti tako da atribute deklarirate kao `final`. Na taj način oni se ne mogu mijenjati nakon što je objekt konstruiran. No to je također neprikladno.

U našem primjeru bilo bi jednostavno učiniti varijablu `i` lokalnom umjesto da bude atribut:

```java
public class Counter {

  public void count() {
    int i = 0;
    int limit = 100;
    while (i++ != limit)  System.out.println(i);
  }

}
```

Time što smo i učinili lokalnom varijablom, svaki thread koji poziva metodu `count()` na tom objektu dobit će svoju vlastitu varijablu `i`. Svaki put kad se metoda pozove, zasebni stack se konstruira za njene varijable i argumente. Različiti pozivi metode ne dijele varijable.

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

Primijetite kako sada lokalna varijabla `i` prekriva atribut `i`, na koji se referiramo pomoću ključne riječi `this`. Ovaj trik je uglavnom koristan kad ne trebate vratiti promijenjenu vrijednost varijable natrag u atribut nakon što je metoda završila. Sljedeća varijanta sačuvat će stanje, ali je još uvijek podložna nekim, manje očiglednim, sinkronizacijskim problemima:

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

## Ključna riječ `synchronized`

Java vam omogućuje da pod određenim uvjetima možete garantirati da neka metoda neće istodobno biti pozvana od više threadova. Ostali threadovi morat će čekati dok prvi thread ne završi. U međuvremenu oni stoje blokirani. Ovo se postiže primjenom ključne riječi `synchronized` na promatranu metodu:

{:.ulaz}
```java
class SychronizedCounter {

  int i = 0;

  public synchronized void count() {
    int limit = i + 100;
    while (i++ != limit) System.out.println(i);
  }

}


public class CounterThread extends Thread {

  SychronizedCounter c;  

  public CounterThread(SychronizedCounter c) {
    this.c = c;
  }

  public void run() {
    c.count();
  }     

  public static void main(String[] args) {

    SychronizedCounter c = new SychronizedCounter();
    CounterThread ct1 = new CounterThread(c);
    CounterThread ct2 = new CounterThread(c);
    ct1.start();
    ct2.start();

  }

}
```

Međutim, sinkronizacija ima svoje nedostatke. Ona bitno smanjuje preformanse. Općenito, sinkronizirane metode su tri do deset puta sporije od ekvivalentnih nesinkroniziranih. Sinkronizacija također ne otklanja automatski sve pogreške koje proizlaze iz threadovskog načina izvršavanja.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
