---
title: Objekti u Javi
layout: lekcija-java
permalink: /java-objekti
---

**Objekt je primjerak (instanca) klase.**

## Atributi

Svojstva ili atribuiti kažu što neki objekt jest. Metode kažu što neki objekt radi.

```java
class TwoDPoint {
  double x;
  double y;
}
```

Da biste kompilirali tu klasu, spremite je u datoteku `TwoDPoint.java` i otipkajte:

```
% javac TwoDPoint.java
```

Primijetite da ovo nije kompletan program. Ne možete ga, naime, izvršiti jer mu nedostaje `main()` metoda.

## Pravljenje objekata

Objekte možete kreirati pomoću ključne riječi `new` iza koje slijedi tzv. konstruktor klase. Sljedeći program kreira objekt tipa `TwoDPoint` i ispisuje njegove atribute:

```java
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

Stavite ovu klasu u datoteku `OriginPrinter.java` u istom direktoriju kao `TwoDPoint.java`, kompajlirajte je i izvršite (to je sada kompletan program):

```
% javac OriginPrinter.java
% java OriginPrinter
Ishodiste ima koordinate 0.0, 0.0
```

## Razlikovanje objekata iste klase

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CPT-OOP-objects_and_classes.svg/800px-CPT-OOP-objects_and_classes.svg.png)

Općenito, klase će imati više od jednog objekta. Za razlikovanje objekata unutar iste klase koriste se referentne varijable. Sljedeći program kreira dva različita objekta tipa `TwoDPoint` i ispisuje njihove atribute.

```java
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

Variable `one` i `origin` su dvije različite referentne varijable koje pokazuju na dva različita objekta. Nije dovoljno samo identificirati varijablu kao člana klase, već treba specificirati na koji objekt u toj klasi se ona referira.

## Višestruko referenciranje objekta

Moguće je da dvije referentne varijable pokazuju na isti objekt. Kad na neki objekt ne pokazuje ni jedna referentna varijabla, on će biti označen za uklanjanje (*garbage collection*).

Sljedeći program deklarira dvije referentne varijable tipa `TwoDPoint`, kreira jedan objekt tipa `TwoDPoint` i pridružuje taj objekt objema varijablama. Te se dvije varijable smatraju jednakima.

```java
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

Primijetite da su origin1 i origin2 dvije različite referentne varijable koje referenciraju isti objekt tipa point.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
