---
title: Implementacija interfejsa
layout: lekcija-java
permalink: /implementacija-interfejsa
---

Proširit ćemo klasu `Kola` tako da ona implementira sučelje `Uvoz`. Moramo joj dakle dodati metodu `izracunajCarinu()`. Također ćemo joj dodati atribut `cena` i odgovarajuće getter i setter metode.

```java
public class Kola implements Uvoz {

  protected double cena;

  public double izracunajCarinu() {
    return this.cena * 0.1;
  }

  public double getCena(){
    return this.cena;
  }

  public void setCena(double cena){
    this.cena = cena;
  }

}
```

Jedna od prednosti uporabe sučelja sastoji se u tome da pojedina klasa može implementirati više od jednog sučelja (dok, s druge strane, ne može biti podklasa više od jedne klase). Na primjer, klasa `Kola` može osim sučelja `Uvoz` implementirati i sučelja [Serializable](https://docs.oracle.com/javase/7/docs/api/java/io/Serializable.html) i [Cloneable](https://docs.oracle.com/javase/7/docs/api/java/lang/Cloneable.html). Ova dva sučelja iz biblioteke klasa dodaju samo "tip", ali ne traže implementiranje dodatnih metoda:

```java
import java.io.*;

public class Kola extends Vozilo implements Uvoz, Serializable, Cloneable {

  // telo klase

}
```

## Implementiranje sučelja Clonable

Klasa [java.lang.Object](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html) sadrži metodu [clone()](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#clone()) koja vraća kopiju (bit po bit) promatranog objekta. Nije sve objekte moguće klonirati. To je moguće učiniti samo s onima koji implementiraju sučelje Cloneable. Pokušamo li klonirati neki drugi objekt, dobit ćemo iznimku [CloneNotSupportedException](https://docs.oracle.com/javase/7/docs/api/java/lang/CloneNotSupportedException.html).

Na primjer, da bismo klasu `Kola` učinili klonabilnom, deklariramo da ona implementira sučelje `Cloneable`, a kako je ono samo deklarativno (tzv. *marker interface*) nije potrebno dodavati nikakve posebne metode.

```java
public class Kola extends Vozilo implements Cloneable {

  // ...

}
```

Tada bismo mogli pisati:

```java
Kola c1 = new Kola("New York A12 345", 150.0);
Kola c2 = c1.clone();
```

Većina klasa iz biblioteke klasa ne implementira `Cloneable` pa njihove instance ne možemo klonirati.

Klonovi su uglavnom takozvane plitke kopije (*shallow copies*). To znači da ako klonirani objekt sadrži referencu na neki drugi objekt `A`, onda njegov klon također sadrži referencu na `A`, ne na klona od `A`. Ako to nije ono što biste htjeli, onda morate sami prekriti metodu `clone()`.

Možete prekriti metodu `clone()` i tako da onemogućite kloniranje u podklasi neke klonabilne klase. U tom slučaju uporabit ćete metodu `clone()` koja izbacuje iznimku `CloneNotSupportedException`. Na primjer,

```java
public Object clone() throws CloneNotSupportedException {
  throw new CloneNotSupportedException("nije dozvoljeno kloniranje u klasi SlowCar");
  // ovaj dio koda se nikad nece izvrsiti
  return this;
}
```

Metodu `clone()` možete prekriti i tako da je učinite `public` umjesto `protected`. U tom slučaju možete jednostavno iskoristiti implementaciju iz nadklase. Na primjer,

```java
public Object clone() throws CloneNotSupportedException {
  return super.clone();
}
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
