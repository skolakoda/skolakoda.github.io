---
title: Konstruktori u Javi
layout: lekcija-java
permalink: /java-konstruktori
---

**Konstruktori su posebne metode koje imaju isto ime kao njihova klasa, i služe instanciranju klase. Pozivaju se automatski kada se kreira objekat, novi primerak klase.**

Konstruktor inicijalizira potrebne varijable i obavlja sve poslove koji su potrebni da bi se klasa pripremila za upotrebu. Konstruktor ima uvijek isto ime kao pripadna klasa. Na primjer:

```java
Kola k = new Kola();
```

Ovdje je `Kola()` konstruktor klase `Kola`. Konstruktor se pravi tako da se napiše metoda koja ima isto ime kao klasa. Konstruktori nemaju povratnog tipa. Oni zapravo implicitno vraćaju instancu svoje klase.

Primarna svrha konstruktora jeste da za objekat koji se kreira izvrši inicijalizaciju atributa. Ukoliko ne definišemo konstruktor, Java osigurava generički, bez argumenata, koji ne radi ništa.

## Konstruktor bez argumenata

Sljedeća metoda je konstruktor koji inicijalizira registarsku tablicu na praznu strunu, brzinu na nulu, a maksimalnu brzinu na 120.0 km/h:

```java
Kola() {
  this.tablica = "";
  this.brzina  = 0.0;
  this.maxBrzina = 120.0;
}
```

## Konstruktori sa argumentima

Još bolje, možemo napisati konstruktor koji prima tri argumenta i koristi ih za inicijaliziranje odgovarajućih varijabli:

```java
Kola(String tablica, double brzina, double maxBrzina) {
  this.tablica = tablica;
  this.brzina  = brzina;

  if (maxBrzina > 0) this.maxBrzina = maxBrzina;
  else this.maxBrzina = 0.0;

  if (brzina > this.maxBrzina) this.brzina = this.maxBrzina;
  if (brzina < 0) this.brzina = 0.0;
  else this.brzina = brzina;
}
```

Ili možda želite da inicijalna brzina uvijek bude jedanaka nuli, a maksimalna brzina i registarska pločica specificirane argumentima:

```java
Kola(String tablica, double maxBrzina) {
  this.tablica = tablica;
  this.brzina  = 0.0;

  if (maxBrzina > 0) this.maxBrzina = maxBrzina;
  else this.maxBrzina = 0.0;
}
```

## Više konstruktora u klasi

**U jednoj klasi može biti više konstruktora istog imena, koji se razlikuju po broju i tipu argumenata** (*overloading*). Svaki konstruktor zadaje po jedan način kreiranja objekata dane klase. 

Preradimo još jednom klasu `Kola`, tako da u nju ugradimo sve ove konstruktore. Nakon toga, program `KolaProba` koristi treći od navedenih konstruktora za inicijalizaciju novih `Kola`.

{:.ulaz}
```java
class Kola {

  String tablica;
  double brzina;
  double maxBrzina;

  Kola() {
    this.tablica = "";
    this.brzina  = 0.0;
    this.maxBrzina = 120.0;
  }

  Kola(String tablica, double brzina, double maxBrzina) {
    this.tablica = tablica;
    this.brzina  = brzina;
    if (maxBrzina > 0) this.maxBrzina = maxBrzina;
    else this.maxBrzina = 0.0;
    if (brzina > this.maxBrzina) this.brzina = this.maxBrzina;
    if (brzina < 0) this.brzina = 0.0;
    else this.brzina = brzina;
  }

  Kola(String tablica, double maxBrzina) {
    this.tablica = tablica;
    this.brzina  = 0.0;
    if (maxBrzina > 0) this.maxBrzina = maxBrzina;
    else this.maxBrzina = 0.0;
  }

  // geter i seter metode

  String getTablica() {
    return this.tablica;
  }

  double getMaxBrzina() {
    return this.maxBrzina;
  }

  double getBrzina() {
    return this.brzina;
  }

  void setTablica(String tablica) {
    this.tablica = tablica;
  }

  void setMaxBrzina(double maxBrzina) {
    if (maxBrzina > 0) this.maxBrzina = maxBrzina;
    else this.maxBrzina = 0.0;
  }

  void doDaske() {
    brzina = maxBrzina;  
  }

  void ubrzaj(double deltaV) { // ubrzanje za zadani deltaV
     this.brzina = this.brzina + deltaV;
     if (this.brzina > this.maxBrzina) {
       this.brzina = this.maxBrzina;
     }
     if (this.brzina <  0.0) {
       this.brzina = 0.0;
     }
  }
}

class KolaProba {
  public static void main(String args[]) {

    Kola k = new Kola("New York A45 636", 123.45);
    System.out.println(k.getTablica() + " se krece brzinom od " + k.getBrzina() + " kilometara na sat.");

    for (int i = 0; i < 15; i++) {
      k.ubrzaj(10.0);
      System.out.println(k.getTablica() + " se krece brzinom od " + k.getBrzina() + " kilometara na sat.");
    }

  }
}
```

Primijetite da atributima `tablica` i `brzina` više ne pristupamo direktno, već preko geter metoda (`getTablica()` i `getBrzina()`).

Postavlja se pitanje jesu li metode `setTablica()` i `setMaxBrzina()` zaista još potrebne kad se atributi `tablica` i `maxBrzina` postavljaju u konstruktorima. Odgovor ovisi o tome želimo li dopustiti njihovo mijenjanje jednom nakon što je objekt već kreiran. Klase koje ne dopuštaju promjenu atributa svojih objekata nakon što su kreirani, nazivaju se nepromjenjivima (*immutable*). `String` je primjer takve klase. Ne možete promijeniti njegove podatke, možete samo kreirati novi objekt tipa `String`.

## Ograničenja opsega vrijednosti

Mogućnost implementiranja ograničenja jedan je od razloga za davanje prednosti korištenju konstruktora i *setter* metoda pred direktnim dohvaćanjem varijabli. 

Na primjer, u klasi `Kola` važno je osigurati da brzina nikad ne bude veća od propisane maksimalne brzine i da ni jedna ne bude manja od nule. Već smo vidjeli da metoda `ubrzaj()` neće dodijeliti automobilu brzinu veću od propisane maksimalne brzine:

```java
void ubrzaj(double deltaV) {
   this.brzina = this.brzina + deltaV;
   if (this.brzina > this.maxBrzina) {
     this.brzina = this.maxBrzina;
   }
   if (this.brzina < 0.0) {
     this.brzina = 0.0;
   }
}
```

Takva se ograničenja mogu ugraditi i u konstruktore. Na primjer, sljedeći konstruktor (treći) klase `Kola` osigurava da maksimalna brzina ne bude manja od nule:

```java
Kola(String tablica, double maxBrzina) {
  this.tablica = tablica;
  this.brzina  = 0.0;
  if (maxBrzina >= 0.0) {
    this.maxBrzina = maxBrzina;
  }
  else {
    maxBrzina = 0.0;
  }
}
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
