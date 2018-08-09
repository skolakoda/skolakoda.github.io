---
title: "<code>toString()</code> metoda u Javi"
layout: lekcija-java
permalink: /java-to-string-metoda
---

**Prilikom debagovanja često je potrebno ispisati relevantne informacije o objektu.** Direktan ispis atributa nije prikladan, a često ni moguć, npr. za attribute koji su private.

## Ugrađena `toString()` metoda za ispis objekta

Svaki se objekt može ispisati pomoću metode `System.out.println()`. Međutim, za objekte koji nisu tekstovi ni brojevi taj će ispis biti uglavnom neupotrebljiv. Na primjer:

{:.ulaz}
```java
class Kola {
  String tablica = "Neregistrovan";
  double brzina = 0.0;
  double maxBrzina = 120.0;

  Kola(String tablica, double maxBrzina) {
    this.tablica = tablica;
    this.brzina  = 0.0;
    if (maxBrzina > 0) this.maxBrzina = maxBrzina;
    else this.maxBrzina = 0.0;
  }

  void ubrzaj(double deltaV) {
    this.brzina = this.brzina + deltaV;
    if (this.brzina > this.maxBrzina) {
      this.brzina = this.maxBrzina;
    }
  }
}

class KolaProba {
  public static void main(String args[]) {

    Kola k = new Kola("DYD 666", 123.45);
    System.out.println(k);

    for (int i = 0; i < 15; i++) {
      k.ubrzaj(10.0);
      System.out.println(k);
    }

  }
}
```

Ispis u konzoli izgleda otprilike ovako:
```
% javac Kola.java
% javac KolaProba.java
% java KolaProba
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
Kola@111f71
```

## Sopstvena `toString()` metoda

Umjesto takvog nerazumljivog ispisa poželjno je da klasa ponudi svoju verziju ispisa sebe same. To se radi tako da se prekrije default verzija metode `toString()` koju svaka klasa nasljeđuje od klase Object. U našem slučaju, metoda `toString()` bi mogla izgledati ovako:

{:.ulaz}
```java
class Kola {
  String tablica = "Neregistrovan";
  double brzina = 0.0;
  double maxBrzina = 120.0;

  Kola(String tablica, double maxBrzina) {
    this.tablica = tablica;
    this.brzina  = 0.0;
    if (maxBrzina > 0) this.maxBrzina = maxBrzina;
    else this.maxBrzina = 0.0;
  }

  void ubrzaj(double deltaV) {
    this.brzina = this.brzina + deltaV;
    if (this.brzina > this.maxBrzina) {
      this.brzina = this.maxBrzina;
    }
  }

  public String toString() { // ispis podataka o automobilu
    return ("[Automobil: oznaka=" + this.tablica + " brzina=" + this.brzina +  "Max. brzina=" + this.maxBrzina +"]");
  }
}

class KolaProba {
  public static void main(String args[]) {

    Kola k = new Kola("DYD 666", 123.45);
    System.out.println(k);

    for (int i = 0; i < 15; i++) {
      k.ubrzaj(10.0);
      System.out.println(k.toString());
    }

  }
}
```

Ispis sada izgleda ovako:

```
% javac Kola.java
% javac KolaProba.java
% java KolaProba
[Automobil: oznaka=DYD 666 brzina=0.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=10.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=20.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=30.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=40.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=50.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=60.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=70.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=80.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=90.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=100.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=110.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=120.0Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=123.45Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=123.45Max. brzina=123.45]
[Automobil: oznaka=DYD 666 brzina=123.45Max. brzina=123.45]
```

Prilikom pisanje `toString()` metoda dobro je držati se sljedećih pravila:
- toString() metode su namijenjene prvenstveno za debagovanje. Poželjno je da budu brze, što znači da ne bi trebale obavljati previše operacija.
- toString() metode trebaju vraćati jednu liniju teksta koja ne sadrži `carriage return` ni `linefeed`.
- toString() metode bi trebale ispisati ime klase te imena i vrijednosti atributa koji odlikuju stanje objekta.

Ovakva uporaba `toString()` metoda je primjer [polimorfizma](/polimorfizam).

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
