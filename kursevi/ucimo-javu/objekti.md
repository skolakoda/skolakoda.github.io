---
title: Pravljenje objekata
layout: lekcija-java
permalink: /java-objekti
---

***Objekt je primjerak (instanca) klase. Svojstva ili atribuiti kažu što neki objekt jest. Metode kažu što neki objekt radi.***

Objekte možete kreirati pomoću ključne riječi `new` iza koje slijedi tzv. konstruktor klase. Sljedeći program kreira objekt tipa `TwoDPoint` i ispisuje njegove atribute:

{:.ulaz}
```java
class TwoDPoint {
  double x;
  double y;
}

class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;         // ovime smo deklarirali (ne i alocirali) objekt origin
    origin = new TwoDPoint(); // sada smo uz pomoc konstruktora alocirali (kreirali objekt)
    origin.x = 0.0;           // Inicijaliziramo njegove atribute
    origin.y = 0.0;
    // Ispisujemo podatke o objektu origin
    System.out.println("Ishodiste ima koordinate " + origin.x + ", " + origin.y);
  }
}
```

Tocka `.` je tzv. separator pristupa članovima. Poziv konstruktora uz ključnu riječ `new` potreban je za alociranje objekta.

## Razlikovanje objekata iste klase

Općenito, klase će imati više od jedne instance. Sljedeći program kreira dva različita objekta tipa `TwoDPoint` i ispisuje njihove atribute.

{:.ulaz}
```java
class TwoDPoint {
  double x;
  double y;
}

class TwoPointPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;         // deklariramo tocku origin
    TwoDPoint one;            // deklariramo tocku one
    origin = new TwoDPoint(); // alociramo origin pomocu konstruktora klase
    one = new TwoDPoint();    // alociramo one pomocu konstruktora klase
    // postavljamo vrijednosti atributa
    origin.x = 0.0;
    origin.y = 0.0;
    one.x = 1.0;
    one.y = 0.0;
    // ispisujemo koordinate ovih dviju tocaka
    System.out.println("Ishodiste ima koordinate " + origin.x + ", " + origin.y);
    System.out.println("Tocka one ima koordinate " + one.x + ", " + one.y);
  }
}
```

Obrada:
```
% javac TwoPointPrinter.java
% java TwoPointPrinter
Ishodiste ima koordinate 0.0, 0.0
Tocka one ima koordinate 1.0, 0.0
```

Variable `one` i `origin` su dvije različite referentne varijable koje pokazuju na dva različita objekta.

## Višestruko referenciranje objekta

Moguće je da dvije varijable pokazuju na isti objekt. Kad na neki objekt ne pokazuje ni jedna referentna varijabla, on će biti označen za uklanjanje (*garbage collection*).

Sljedeći program deklarira dvije varijable tipa `TwoDPoint`, kreira jedan objekt tipa `TwoDPoint` i pridružuje taj objekt objema varijablama. Te se dvije varijable smatraju jednakima:

{:.ulaz}
```java
class TwoDPoint {
  double x;
  double y;
}

class EqualPointPrinter {
  public static void main(String[] args) {
    TwoDPoint origin1; // deklariramo tocku origin1
    TwoDPoint origin2; // deklariramo tocku origin2
    origin1 = new TwoDPoint(); // alociramo origin1 pomocu konstruktora klase
    origin2 = origin1;         // definiramo jos jednu referentnu varijablu za origin1
    // Postavljamo vrijednosti atributa (samo za origin1)
    origin1.x = 0.0;
    origin1.y = 0.0;
    // print
    System.out.println("Tocka origin1 ima koordinate " + origin1.x + ", " + origin1.y);
    System.out.println("Tocka origin2 ima koordinate " + origin2.x + ", " + origin2.y);
  }  // kraj main() metode
} // kraj EqualPointPrinter programa (klase)
```

Obrada i izlaz:
```
% javac EqualPointPrinter.java
% java EqualPointPrinter
Tocka origin1 ima koordinate 0.0, 0.0
Tocka origin2 ima koordinate 0.0, 0.0
```

Primijetite da su origin1 i origin2 dvije različite varijable koje referenciraju isti objekt.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
