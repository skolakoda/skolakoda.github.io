---
title: Naredba switch
layout: lekcija-java
permalink: /java-switch
---

`Switch-case` naredba je zapravo kratica za određene vrste `if` naredbi. Pogledajmo sljedeći niz `if` naredbi koje se sve odnose na istu veličinu:

```java
if (x == 0) doSomething0();
else if (x == 1) doSomething1();
else if (x == 2) doSomething2();
else if (x == 3) doSomething3();
else if (x == 4) doSomething4();
else doSomethingElse();
```

Ovaj bi se kod uz pomoć `switch-case` naredbe mogao zapisati ovako:

```java
switch (x) {
  case 0:
    doSomething0();
    break;
  case 1:
    doSomething1();
    break;
  case 2:
    doSomething2();
    break;
  case 3:
    doSomething3();
    break;
  case 4:
    doSomething4();
    break;
  default:
    doSomethingElse();
}
```

U ovom primjeru `x` mora biti varijabla ili izraz koji se izračunava ili pretvara u `int` bez gubitka informacija. To znači da izraz mora vraćati rezultat tipa `int`, `byte`, `short` ili `char`. Izraz `x` uspoređuje se redom s vrijednostima navedenim u svakoj `case` naredbi dok se ne naiđe na podudarnost. U našem primjeru se `x` uspoređuje s literalima, ali to također mogu biti varijable ili izrazi. Ako se ni u jednom slučaju ne pronađe podudarnost izvršava se akcija naznačena sa `default`.

Kad je podudarnost pronađena, izvršava se sve što slijedi do kraja `switch` bloka ili naredbe `break`. Uobičajeno je stavljati `break` naredbu na kraj svakog `case` bloka, kako bi se izbjegli neočekivani efekti.


Izvor: Elliotte Rusty Harold, *[Java Lecture Notes](//www.cafeaulait.org/course/index.html)*, preveo Draško Budin.
