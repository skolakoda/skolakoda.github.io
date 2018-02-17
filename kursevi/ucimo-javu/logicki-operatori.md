---
title: Logički operatori
layout: lekcija-java
permalink: /java-logicki-operatori
---

![](http://www.javascripttutorial.net/wp-content/uploads/2016/11/JavaScript-Logical-Operator.png)

Do sada uvedeni relacijski operatori (`<`, `<=`, `>`, `>=`, `!=`) dovoljni su za testiranje pojedinačnog uvjeta. Za ispitivanje višestrukih uvjeta, morali bismo koristiti više `if` naredbi:

```java
if (x == 2) {
  if (y != 2) {
     System.out.println("Oba uvjeta su true.");
   }
}
```

To, međutim, može biti nepregledno, a taj nedostatak rješava se uporabom logičkih operatora.

## Konjukcija

Operator `&&` je logički *i* koji za dvije booleovske vrijednosti i vraća true ako i samo ako su oba operanda true. Npr.

```java
boolean b;
b = 3 > 2 && 5 < 7; // b je true
b = 2 > 3 && 5 < 7; // b je sada false
```

## Disjunkcija

Operator `||` je logički *ili* koji za dvije booleovske vrijednosti vraća true ako je bar jedan operand true. Npr.

```java
boolean b;
b = 3 > 2 || 5 < 7; // b je true
b = 2 > 3 || 5 < 7; // b je i dalje true
b = 2 > 3 || 5 > 7; // now b je false
```

## Negacija

Operator `!` je logička negacija koja za booleovsku vrijednost vraća true ako je operand false i obrunuto. Npr.

```java
boolean b;
b = !(3 > 2); // b je false
b = !(2 > 3); // b je true
```

Ovi operatori omogućuju jednostavnje ispitivanje višestrukih uvjeta. Naš prvi primjer može se sada zapisati mnogo preglednije:

```java
if (x == 2 && y != 2) {
  System.out.println("Oba uvjeta su true.");
}
```

## Prioritet izvršavanja

Prilikom izvršavanja logičkih operatora, prvo se izračunava izraz na lijevoj strani operatora. Pogledajmo sljedeći primjer:

```java
boolean b, c, d;
b = !(3 > 2); // b je false
c = !(2 > 3); // c je true
d = b && c;   // d je false
```

Kad se izračunava izraz `d = b && c;`, prvo se provjerava da li je `b` `true`. Ovdje je `b` `false`, pa onda također `b && c` mora biti `false` bez obzira na `c`. Zato se vrijednost varijable `c` u ovom izrazu uopće ne provjerava.

Na isti način, kad Java naiđe na operator `||`, pokušat će skratiti izračunavanje čim ustanovi da je lijevi operand `true`, jer onda i cijeli rezultat mora biti `true`.

```java
boolean b = (n == 0) || (m/n > 2);

boolean b = (n != 0) && (m/n > 0);
```

Čak ako je `n` jednako nuli, neće se dogoditi dijeljenje s nulom jer se lijeva strana prva izračunava, a ako je istinita, onda se desna neće ni računati. No svejedno, moguće je eksplicitno specificirati računanje oba operanda, tj. izbjeći skraćivanje.

Ako želite izračunavati vrijednosti booleovskih izraza bez obzira na istinosnu vrijednost možete se koristiti bitovskim operatorima `&` i `|` umjesto `&&` i `||`. Međutim, pazite da operandi budu zaista booleovski jer ovi operatori imaju svoj smisao i za numeričke tipove, a značenje im je posve drugačije.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
