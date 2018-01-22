---
title: Pretvaranje strune u broj
layout: lekcija-java
permalink: /java-pretvaranje-strune-u-broj
---

Prilikom obrade korisničkog inputa često je potrebno neki `String` pretvoriti u `int`. To se radi uz pomoć statičke metode `Integer.valueOf(String s)` u kombinaciji s (nestatičkom) metodom `intValue()` koje pripadaju klasi `java.lang.Integer`. Npr. strunu "22" pretvorili bismo u int 22 na sljedeći način:

```java
int i = Integer.valueOf("22").intValue();
```

S tipovima `double`, `float` i `long` postupamo slično, koristeći statičke metode `Double.valueOf(String s)`, `Float.valueOf(String s)` i `Long.valueOf(String s)` u kombinaciji s odgovarajućim metodama `doubleValue()`, `floatValue()` i `longValue()` koje pripadaju, respektivno, klasama `java.lang.Double`, `java.lang.Float` i `java.lang.Long`. Strunu "22" pretvorili bismo u `long` 22 ovako:

```java
long l = Long.valueOf("22").longValue();
```

String "22.5" pretvorili bismo u `float` ili `double` ovako:

```java
double x = Double.valueOf("22.5").doubleValue();
float y = Float.valueOf("22.5").floatValue();
```

Različite `valueOf()` metode relativno su inteligentne i mogu prepoznati znakove plus i minus, eksponente i ostale uobičajene brojčane formate. Međutim, ako kao argument dobiju nešto potpuno ne-numeričko, npr. "Hello World",  vjerojatno će izbaciti `NumberFormatException`. Za sad još niste učili kako baratati s iznimakama pa u svojim programima izbjegavajte takve situacije.

Preradit ćemo sada program E = mc2 tako da o masi u kilogramima bude prihvaćen kao korisnički input sa komandne linije. Ovaj postupak tipičan je za mnoge programe.

```java
class mc2 {
  public static void main (String args[]) {

    double mass;
    double c = 2.998E8;  // meters/second
    double E;

    mass = Double.valueOf(args[0]).doubleValue();
    E = mass * c * c;
    System.out.println(E + " Joules");
  }
}
```

Obrada i rezultati:

```
% javac mc2.java
% java mc2 0.0456
4.098529824E15 Joules
```

Primijetite da ne bi bilo dovoljno staviti

```
Mass = Double.valueOf(args[0]); // izostavljena je metoda doubleValue()
```

Statička metoda `Double.valueOf(args[0])` vratit će vrijednost tipa `Double`, a tek će metoda `doubleValue()` pretvoriti tu vrijednost u vrijednost tipa `double`. Zato bi navedena linija izazvala grešku u kompajliranju:

```
% javac mc2.java
mc2.java:8: incompatible types
found   : java.lang.Double
required: double
    mass = Double.valueOf(args[0]);
                         ^
1 error
```


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
