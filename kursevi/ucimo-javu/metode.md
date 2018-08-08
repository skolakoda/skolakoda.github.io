---
title: Metode u Javi
layout: lekcija-java
permalink: /java-metode
---

![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/CPT-OOP-objects_and_classes_-_attmeth.svg/302px-CPT-OOP-objects_and_classes_-_attmeth.svg.png)

**Metode kažu što neki objekt radi.** Podaci ne znače mnogo ako ne možete s njima ništa napraviti. Zbog toga postoje metode. Dok atributi kazjuju što klasa jest, metode kazuju što ona čini. Atribute i metode zajednički nazivamo članovima klase.

Klase mogu imati mnogo metoda. Na primjer, klasu `Kola` možemo snabdjeti metodom koja će simulirati vožnju maksimalnom brzinom:

```java
class Kola {

  String tablica = "";
  double brzina = 0.0;
  double maxBrzina = 120.0;

  void doDaske() {
    this.brzina = this.maxBrzina; // ubrzanje do maksimalne brzine
  }
}
```

Metoda koju smo nazvali `doDaske()` počinje ključnom riječi `void` što je povratni tip te metode. Svaka metoda mora imati povratni tip, koji može biti `void` ili neki tip podataka kao `int`, `byte`, `float`, `String`, ili klasa koju ste sami definirali. Povratni tip pokazuje vrstu vrijednosti koja će biti vraćena nakon što se pozvana metoda izvrši. Ako je povratni tip na primjer `int`, onda tu metodu možete koristiti svagdje gdje biste inače koristili varijablu tipa `int`. Ako je povratni tip `void`, metoda ne vraća nikakvu vrijednost.

Ime ove metode je `doDaske`, a iza njega slijede prazne zagrade. Kad bi ova metoda imala argumente, oni bi se naveli unutar tih zagrada. Tijelo metode nalazi se unutar vitičastih zagrada:

```java
this.brzina = this.maxBrzina;
```

Primijetite da smo ispred imena varijabli članica koristili ključnu riječ `this`, kako bismo naznačili da su to varijable trenutno aktivnog objekta.

## Pozivanje metoda

Izvan klase `Kola`, metodu `doDaske()` pozvat ćete navodeći ime objekta i separator `.`, kao što pokazuje sljedeći primjer:

{:.ulaz}
```java
class Kola {

  String tablica = "";
  double brzina = 0.0;
  double maxBrzina = 120.0;

  void doDaske() {
    this.brzina = this.maxBrzina;  
  }
}

class ProbaKola {
  public static void main(String args[]) {

    Kola c = new Kola();

    c.tablica = "DYD 666";
    c.maxBrzina = 123.45;

    System.out.println(c.tablica + " se krece brzinom od " + c.brzina + " kilometara na sat.");

    c.doDaske();

    System.out.println(c.tablica + " se krece brzinom od " + c.brzina + " kilometara na sat.");

  }
}
```

Izlaz:

```
DYD 666 se krece brzinom od 0.0 kilometara na sat.
DYD 666 se krece brzinom od 123.45 kilometara na sat.
```

Svaka metoda u Java programu mora, za razliku od C++ programa, pripadati nekoj klasi.

## Implicitni `this`

Unutar klase nije nužno dodavati atributima prefiks `this.` jer se on podrazumijeva, pa metodu `doDaske` možemo napisati i bez toga:

```java
class Kola {

  String tablica = "";
  double brzina = 0.0;
  double maxBrzina = 120.0;

  void doDaske() {
    brzina = maxBrzina;  
  }
}
```

U početku, zbog jasnoće, preporučljivo je eksplicitno koristiti prefiks `this`, ali kasnije se od toga može i odustati.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
