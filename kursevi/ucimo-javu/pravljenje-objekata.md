---
title: Pravljenje objekata
layout: lekcija-java
permalink: /java-pravljenje-objekata
---

**Da bismo kreirali objekat klase, moramo koristi ključnu riječ `new` za kojom slijedi poziv konstruktora.**

Sljedeći program kreira objekt tipa `Koordinata` i ispisuje njegove atribute:

{:.ulaz}
```java
class Koordinata {
  double x;
  double y;
}

class Stampac {
  public static void main(String[] args) {
    Koordinata ishodiste;         // ovime smo deklarirali (ne i alocirali) objekt ishodiste
    ishodiste = new Koordinata(); // sada smo uz pomoc konstruktora alocirali (kreirali objekt)
    ishodiste.x = 0.0;            // Inicijaliziramo njegove atribute
    ishodiste.y = 0.0;
    // Ispisujemo podatke o objektu ishodiste
    System.out.println("Ishodiste ima koordinate " + ishodiste.x + ", " + ishodiste.y);
  }
}
```

Točka `.` je tzv. separator pristupa članovima. Poziv konstruktora uz ključnu riječ `new` potreban je za alociranje objekta.

## Više objekata iste klase

Uglavnom, klase će imati više od jedne instance. Sljedeći program kreira dva različita objekta tipa `Koordinata` i ispisuje njihove atribute.

{:.ulaz}
```java
class Koordinata {
  double x;
  double y;
}

class Stampac {
  public static void main(String[] args) {
    Koordinata ishodiste;         // deklariramo objekat ishodiste
    Koordinata jedan;             // deklariramo objekat jedan
    ishodiste = new Koordinata(); // alociramo ishodiste pomocu konstruktora klase
    jedan = new Koordinata();     // alociramo jedan pomocu konstruktora klase
    // postavljamo vrijednosti atributa
    ishodiste.x = 0.0;
    ishodiste.y = 0.0;
    jedan.x = 1.0;
    jedan.y = 0.0;
    // ispisujemo koordinate ovih dviju tocaka
    System.out.println("Ishodiste ima koordinate " + ishodiste.x + ", " + ishodiste.y);
    System.out.println("Tocka jedan ima koordinate " + jedan.x + ", " + jedan.y);
  }
}
```

Obrada:
```
% javac Stampac.java
% java Stampac
Ishodiste ima koordinate 0.0, 0.0
Tocka jedan ima koordinate 1.0, 0.0
```

Variable `jedan` i `ishodiste` su dvije različite referentne varijable koje pokazuju na dva različita objekta.

## Više referenci na isti objekat

Moguće je da dvije varijable pokazuju na isti objekt. Kad na neki objekt ne pokazuje ni jedna referentna varijabla, on će biti označen za uklanjanje (*garbage collection*).

Sljedeći program deklarira dvije varijable tipa `Koordinata`, kreira jedan objekt tipa `Koordinata` i pridružuje taj objekt objema varijablama. Te se dvije varijable smatraju jednakima:

{:.ulaz}
```java
class Koordinata {
  double x;
  double y;
}

class Stampac {
  public static void main(String[] args) {
    Koordinata ishodiste1; // deklariramo objekat ishodiste1
    Koordinata ishodiste2; // deklariramo objekat ishodiste2
    ishodiste1 = new Koordinata(); // alociramo ishodiste1 pomocu konstruktora klase
    ishodiste2 = ishodiste1;       // definiramo referentnu varijablu za ishodiste1
    // Postavljamo vrijednosti atributa (samo za ishodiste1)
    ishodiste1.x = 0.0;
    ishodiste1.y = 0.0;
    // print
    System.out.println("Tocka ishodiste1 ima koordinate " + ishodiste1.x + ", " + ishodiste1.y);
    System.out.println("Tocka ishodiste2 ima koordinate " + ishodiste2.x + ", " + ishodiste2.y);
  }
}
```

Obrada i izlaz:
```
% javac Stampac.java
% java Stampac
Tocka ishodiste1 ima koordinate 0.0, 0.0
Tocka ishodiste2 ima koordinate 0.0, 0.0
```

Primijetite da su `ishodiste1` i `ishodiste2` dvije različite varijable koje referenciraju isti objekt.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin, priredio Damjan Pavlica.
