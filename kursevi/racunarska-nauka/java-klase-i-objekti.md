---
title: Klase i objekti u Javi
layout: lekcija-racunarstvo
permalink: /java-klase-i-objekti
image: /images/koncepti/oop/klasa-i-objekti.jpg
---

![]({{page.image}})

*Klase, atributi i metode • objekti • razlikovanje objekata iste klase • višestruko referenciranje objekta • statičke varijable • metode •prenošenje argumenta u metodu • vraćanje vrijednosti iz metoda • setter metode • getter metode • ista imena varijabli i metoda • konstruktori • skrivanje imena varijabli i ključna riječ this*

## Klase, atributi i metode

Klasa je obrazac ili prototip koji definira varijable i metode zajedničke svim objektima neke vrste. Svojstva ili atribuiti kažu što neki objekt jest. Metode kažu što neki objekt radi.

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

## Objekti

Objekt je primjerak (instanca) klase.
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

## Statičke varijable

Statička varijabla je varijabla klase, ona pripada klasi (samoj klasi), a ne nekom objektu (instanci klase).

{:.ulaz}
```java
class Point {
    double x;
    double y;
    static double xorigin = 0.0;
    static double yorigin = 0.0;
}
class PointPrinter {
  public static void main (String [] args) {
    System.out.println("Ishodiste je u tocki (" +
      Point.xorigin + ", " + Point.yorigin + ")");
  }
}
```

Obrada:
```
% javac Point.java
% javac PointPrinter.java
% java PointPrinter
Ishodiste je u tocki (0.0, 0.0)
```

Primijetite da za ispis statičkih varijabli nije bilo potrebno kreirati konkretni objekt. Varijablama klase pristupa se pomoću imena klase, a ne pomoću imena referentne varijable.

## Metode

Metode kažu što neki objekt radi.

```java
class TwoDPoint {
    double x;
    double y;
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
}
```

Primijetite da se ključna riječ `this` koristi kako bi se iznutra referencirala varijabla koja pripada istoj klasi. Sada možemo preraditi program `OriginPrinter` ovako:

```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.x = 0.0;
    origin.y = 0.0;
    origin.print();
  }
}
```

Obrada:
```
% javac OriginPrinter.java
% java OriginPrinter
(0.0, 0.0)
```

## Prenošenje argumenata u metodu

Dodat ćemo klasi `TwoDPoint` još jednu metodu za ispis.

```java
class TwoDPoint {
    double x;
    double y;
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
    void print(int n) {
      for (int i = 0; i < n; i++) {
        System.out.println("(" + this.x + "," + this.y + ")");
      }
    }
}
```

Primijetite da su tu dvije različite `print()` metode. Jedna prihvaća argument, druga ne. To je dozvoljeno dok god lista argumenata razrješuje ovu dvosmislenost. To se naziva *overloading*. Metoda `System.out.println()` također je primjer overloaded metode. Metoda `main(String[] args)` je *non-overloaded* metoda koja ima polje Stringova kao argumente.

```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.x = 0.0;
    origin.y = 0.0;
    origin.print();
    origin.print(5);
  }
}
```

Izlaz:

```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
(0.0,0.0)
(0.0,0.0)
(0.0,0.0)
(0.0,0.0)
(0.0,0.0)
```

## Vraćanje vrijednosti iz metoda

Još jednom ćemo klasi `TwoDPoint` dodati novu metodu za ispis, `getAsString()` koja za razliku od prethodne dvije ima povratni tip (*return type*) i vraća vrijednost tipa String.

```java
class TwoDPoint {
    double x;
    double y;
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
    void print(int n) {
      for (int i = 0; i < n; i++) {
        System.out.println("(" + this.x + "," + this.y + ")");
      }
    }
    String getAsString() {
      return "(" + this.x + "," + this.y + ")";
    }
}
```

Zato sad ovu metodu možemo koristiti na svim mjestima gdje bi inače došla vrijednost tipa String, npr:

```java
String s = origin.getAsString();
System.out.println(s);
```

Ili, još bolje:

```java
System.out.println(origin.getAsString());
```

Sada možemo još jednom preraditi klasu `OriginPrinter`:

```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.x = 0.0;
    origin.y = 0.0;
    System.out.println(origin.getAsString());
  }
}
```

Imamo:

```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
```

## Setter metode

Također poznate i kao “mutator” metode, ove metode samo postavljaju vrijednosti varijabli (obično privatnih) unutar klase.

{:.ulaz}
```java
class TwoDPoint {
    double x;
    double y;
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
    void print(int n) {
      for (int i = 0; i < n; i++) {
        System.out.println("(" + this.x + "," + this.y + ")");
      }
    }
    String getAsString() {
      return "(" + this.x + "," + this.y + ")";
    }
    void setX(double value) {
      this.x = value;
    }
    void setY(double value) {
      this.y = value;
    }
}
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.setX(0.0);
    origin.setY(0.0);
    System.out.println(origin.getAsString());
  }
}
```

Imamo opet:
```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
```

## Getter metode

Također poznate i kao *accessor* metode, ove metode samo vraćaju vrijednosti varijebli unutar klase.

{:.ulaz}
```java
class TwoDPoint {
    double x;
    double y;
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
    void print(int n) {
      for (int i = 0; i < n; i++) {
        System.out.println("(" + this.x + "," + this.y + ")");
      }
    }
    String getAsString() {
      return "(" + this.x + "," + this.y + ")";
    }
    void setX(double value) {
      this.x = value;
    }
    void setY(double value) {
      this.y = value;
    }
    double getX() {
      return this.x;
    }
    double getY() {
      return this.y;
    }
}
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.setX(0.0);
    origin.setY(0.0);
        System.out.println("(" + origin.getX() + "," + origin.getY() + ")");
  }
}
```

Još jednom:
```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
```

## Ista imena varijabli i metoda

Java čak dozvoljava da varijable i metode imaju ista imena tako dugo dok se razlikuju po listi argumenata i povratnom tipu. Npr. klasi `TwoDPoint`, koja sadrži attribute `x` i `y`, možemo dodati i istoimene *accessor* metode bez opasnosti od dvoznačnosti:

```java
class TwoDPoint {
    double x;
    double y;
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
    void print(int n) {
      for (int i = 0; i < n; i++) {
        System.out.println("(" + this.x + "," + this.y + ")");
      }
    }
    String getAsString() {
      return "(" + this.x + "," + this.y + ")";
    }
    void setX(double value) {
      this.x = value;
    }
    void x(double value) {
      this.x = value;
    }
    void setY(double value) {
      this.y = value;
    }
    void y(double value) {
      this.y = value;
    }
    double getX() {
      return this.x;
    }
    double x() {
      return this.x;
    }
    double getY() {
      return this.y;
    }
    double y() {
      return this.y;
    }
}
```

Sada možemo umjesto `setX(value)` koristiti `x(value)`, a umjesto `getX()` staviti `x()` i analogno za `y`. tako da `OriginPrinter` može izgledati i ovako:

```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint();
    origin.x(0.0);
    origin.y(0.0);
        System.out.println("(" + origin.x() + "," + origin.y() + ")");
  }
}
```

Još jednom:
```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
```

## Konstruktori

Konstruktori služe za instanciranje klasa, dakle kreiranje objekata koji su instance neke klase. To su posebne metode koje imaju isto ime kao njihova klasa i ne vraćaju nikakvu vrijednost. Npr.:

```java
class TwoDPoint {
    double x;
    double y;
    TwoDPoint(double xvalue, double yvalue) { // konstruktor sa dva argumenta
      this.x = xvalue;
      this.y = yvalue;    
    }
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
    void print(int n) {
      for (int i = 0; i < n; i++) {
        System.out.println("(" + this.x + "," + this.y + ")");
      }
    }
    String getAsString() {
      return "(" + this.x + "," + this.y + ")";
    }
    void setX(double value) {
      this.x = value;
    }
    void x(double value) {
      this.x = value;
    }
    void setY(double value) {
      this.y = value;
    }
    void y(double value) {
      this.y = value;
    }
    double getX() {
      return this.x;
    }
    double x() {
      return this.x;
    }
    double getY() {
      return this.y;
    }
    double y() {
      return this.y;
    }
}
```

U jednoj klasi može biti i više konstruktora. Svaki konstruktor zadaje po jedan način kreiranja objekata dane klase.
```java
class OriginPrinter {
  public static void main(String[] args) {
    TwoDPoint origin;
    origin = new TwoDPoint(0.0, 0.0);
        System.out.println("(" + origin.x() + "," + origin.y() + ")");
  }
}
```

Izlaz:
```
% javac TwoDPoint.java
% javac OriginPrinter.java
% java OriginPrinter
(0.0,0.0)
```

## Skrivanje imena varijabli i ključna riječ this

Pomoću ključne riječi `this` moguće je čak i argumentima konstruktora (ili bilo koje druge metode) davati ista imena kao varijablama. Npr.;

```java
  TwoDPoint(double x, double y) {
    this.x = x;
    this.y = y;    
  }
  void setX(double x) {
    this.x = x;
  }
```

Klasu `TwoDPoint` možemo, dakle preraditi ovako:

```java
class TwoDPoint {
    double x;
    double y;
    TwoDPoint(double x, double y) { // konstruktor sa dva argumenta
      this.x = x;
      this.y = y;    
    }
    void print() {
      System.out.println("(" + this.x + "," + this.y + ")");
    }
    void print(int n) {
      for (int i = 0; i < n; i++) {
        System.out.println("(" + this.x + "," + this.y + ")");
      }
    }
    String getAsString() {
      return "(" + this.x + "," + this.y + ")";
    }
    void setX(double x) {
      this.x = x;
    }
    void x(double x) {
      this.x = x;
    }
    void setY(double y) {
      this.y = y;
    }
    void y(double y) {
      this.y = y;
    }
    double getX() {
      return this.x;
    }
    double x() {
      return this.x;
    }
    double getY() {
      return this.y;
    }
    double y() {
      return this.y;
    }
}
```

Kažemo da unutar metode, deklaracija lokalne varijable ili argumenta sa istim imenom kao neka *member* varijabla skriva ili zasjenjuje (*hides*) tu varijablu. Ona se može referencirati dodavanjem prefiksa `this`.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
