---
title: Geter i seter metode u Javi
layout: lekcija-java
permalink: /java-geteri-i-seteri
---

**Geter i seter metode se koriste kako ne bismo direktno (neovlašteno) pristupali atributima nekog objekta.**

## Setter metode

Setter metode, poznate i kao mutator metode, postavljaju vrijednosti varijabli (obično privatnih) unutar klase. Ove metode u pravilu primaju argumente, a vraćaju `void`. Setter metode uobičajeno koriste `this` za referenciranje atributa i dodjeljivanje vrijednosti iz istoimenog argumenta. Na primjer:

{:.ulaz}
```java
class Kola {

  String tablica = "";
  double brzina = 0.0;
  double maxBrzina = 120.0;

  // setter (mutator) metode

  void setTablica(String tablica) {
    this.tablica = tablica;
  }

  void setMaxBrzina(double maxBrzina) {
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

/* Primjer upotrebe setera */

class KolaProba {
  public static void main(String args[]) {

    Kola k = new Kola();
    k.setTablica("DYD 666");
    k.setMaxBrzina(123.45);

    k.ubrzaj(10.0);
    System.out.println(k.tablica + " se krece brzinom od " + k.brzina + " kilometara na sat.");
  }
}
```

## Getter metode

**Metode koje samo vraćaju vrijednost nekog atributa nazivaju se *getter* ili *accessor* metode.**

Često je korisno da metoda vraća vrijednost. To se radi pomoću naredbe `return` na završetku metode, te naznakom povratnog tipa na početku. Povratni tip mora odgovarati deklariranom tipu u potpisu.

Na primjer, metoda `getTablica()` vraća vrednost atributa `tablica` onome tko je metodu pozvao. Potpis `String` nam kaže da metoda vraća strunu (tekst) i ne traži nikakve argumente:

{:.ulaz}
```java
class Kola {

  String tablica = "";
  double brzina = 0.0;
  double maxBrzina = 120.0;

  void setTablica(String tablica) {
    this.tablica = tablica;
  }

  void setMaxBrzina(double maxBrzina) {
    if (maxBrzina > 0) this.maxBrzina = maxBrzina;
    else this.maxBrzina = 0.0;
  }

  // getter (pristupne) metode

  String getTablica() {
    return this.tablica;
  }

  double getMaxBrzina() {
    return this.maxBrzina;
  }

  double getBrzina() {
    return this.brzina;
  }

  void ubrzaj(double deltaV) {
    this.brzina = this.brzina + deltaV;
    if (this.brzina > this.maxBrzina) {
      this.brzina = this.maxBrzina;
    }
  }
}

/* Primjer upotrebe getera */

class KolaProba {
  public static void main(String args[]) {

    Kola k = new Kola();
    k.setTablica("DYD 666");
    k.setMaxBrzina(123.45);

    for (int i = 0; i < 15; i++) {
      k.ubrzaj(10.0);     
      System.out.println(k.getTablica() + " se krece brzinom od " + k.getBrzina() + " kilometara na sat.");
    }

  }
}
```

Primijetite da više nema direktnog pristupa atributima!

Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
