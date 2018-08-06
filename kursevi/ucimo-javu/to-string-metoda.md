---
title: toString() metoda za ispis objekta
layout: lekcija-java
permalink: /java-to-string-metoda
---

**Prilikom debagovanja često je potrebno ispisati relevantne informacije o objektu.** Direktan ispis atributa nije prikladan, a često ni moguć, npr. za attribute koji su private.

## Ugrađena `toString()` metoda

Svaki se objekt može ispisati pomoću metode `System.out.println()`. Međutim, za objekte koji nisu tekstovi ni brojevi taj će ispis biti uglavnom neupotrebljiv. Na primjer:

```java
class CarTest5 {

  public static void main(String args[]) {

    Car c = new Car("New York A45 636", 123.45);
    System.out.println(c);

    for (int i = 0; i < 15; i++) {
      c.accelerate(10.0);
      System.out.println(c);
    }

  }

}
```

u konzoli:
```
% javac Car.java
% javac CarTest5.java
% java CarTest5
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
Car@111f71
%
```

## Sopstvena `toString()` metoda

Umjesto takvog nerazumljivog ispisa poželjno je da klasa ponudi svoju verziju ispisa sebe same. To se radi tako da se prekrije default verzija metode `toString()` koju svaka klasa nasljeđuje od klase Object. U našem slučaju, metoda `toString()` bi mogla izgledati ovako:

```java
public String toString() { // ispis podataka o automobilu
  return ("[Automobil: oznaka=" + this.licensePlate
   + " brzina=" + this.speed +  "Max. brzina=" + this.maxSpeed +"]");
}
```

Dodamo li tu metodu klasi `Car`, možemo u programu `CarTest5` sada imati:

```java
class CarTest5 {

  public static void main(String args[]) {

    Car c = new Car("New York A45 636", 123.45);
    System.out.println(c);

    for (int i = 0; i < 15; i++) {
      c.accelerate(10.0);
      System.out.println(c.toString());
    }

  }

}
```

Ispis sada izgleda ovako:

```
% javac Car.java
% javac CarTest5.java
% java CarTest5
[Automobil: oznaka=New York A45 636 brzina=0.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=10.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=20.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=30.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=40.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=50.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=60.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=70.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=80.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=90.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=100.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=110.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=120.0Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=123.45Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=123.45Max. brzina=123.45]
[Automobil: oznaka=New York A45 636 brzina=123.45Max. brzina=123.45]
%
```

Prilikom pisanje `toString()` metoda dobro je držati se sljedećih pravila:
- toString() metode su namijenjene prvenstveno za *debugging*. Poželjno je da budu brze, što znači da ne bi trebale obavljati previše operacija.
- toString() metode trebaju vraćati jednu liniju teksta koja ne sadrži koja ne sadrži `carriage return` ni `linefeed`.
- toString() metode bi trebale ispisati ime klase te imena i vrijednosti atributa koji karakteriziraju stanje objekta.

Ovakva uporaba `toString()` metoda je primjer [polimorfizma](/polimorfizam).

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
